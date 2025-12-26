function showError(message) {
    const toastEl = document.getElementById("errorToast");
    const toastMessage = document.getElementById("toastMessage");

    if (toastEl && toastMessage) {
      toastMessage.textContent = message;
      const toast = new bootstrap.Toast(toastEl);
      toast.show();
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    // Variables de estado global
    let currentAudio = null;
    let currentPlayingButton = null;
    let currentAudioUrl = null;
    let isPaused = false;
    let pausePosition = 0;
    const errorToast = new bootstrap.Toast(document.getElementById('errorToast'));

    // Función para mostrar errores
    const showError = (message) => {
        const toastMessage = document.getElementById('toastMessage');
        if (toastMessage) {
            toastMessage.textContent = message;
            errorToast.show();
        }
    };

    // Función para resetear el ícono de un botón
    const resetButtonIcon = (button) => {
        if (button) {
            const icon = button.querySelector('i');
            if (icon) {
                icon.classList.remove('bi-pause-circle', 'bi-hourglass');
                icon.classList.add('bi-play-circle');
            }
        }
    };

    // Función para detener completamente el audio
    const stopCurrentAudio = () => {
        if (currentAudio) {
            currentAudio.pause();
            currentAudio.currentTime = 0;
            if (currentAudioUrl) {
                URL.revokeObjectURL(currentAudioUrl);
                currentAudioUrl = null;
            }
            currentAudio = null;
        }
        if (currentPlayingButton) {
            resetButtonIcon(currentPlayingButton);
            currentPlayingButton = null;
        }
        isPaused = false;
        pausePosition = 0;
    };

    // Función para pausar el audio actual
    const pauseCurrentAudio = () => {
        if (currentAudio && !currentAudio.paused) {
            pausePosition = currentAudio.currentTime;
            currentAudio.pause();
            isPaused = true;
            return true;
        }
        return false;
    };

    // Función para reanudar el audio desde la posición de pausa
    const resumeCurrentAudio = () => {
        if (currentAudio && isPaused) {
            currentAudio.currentTime = pausePosition;
            currentAudio.play()
                .then(() => {
                    isPaused = false;
                    pausePosition = 0;
                })
                .catch(e => {
                    showError("Error al reanudar: " + e.message);
                });
            return true;
        }
        return false;
    };

    // Manejador de eventos para los botones de audio
    document.querySelectorAll('.play-audio').forEach((button) => {
        button.addEventListener('click', async function (e) {
            e.preventDefault();
            
            const icon = this.querySelector('i');
            const text = this.dataset.text;
            const id = this.dataset.id;
            const locale = document.documentElement.lang || 'en';

            // Si es el mismo botón que está reproduciendo
            if (currentPlayingButton === this && currentAudio) {
                // Si está reproduciendo, pausar
                if (!currentAudio.paused) {
                    if (pauseCurrentAudio()) {
                        return;
                    }
                } 
                // Si está pausado, reanudar
                else if (isPaused) {
                    if (resumeCurrentAudio()) {
                        if (icon) {
                            icon.classList.replace('bi-play-circle', 'bi-pause-circle');
                        }
                        return;
                    }
                }
            }

            // Si hay otro audio reproduciéndose, detenerlo primero
            if (currentPlayingButton && currentPlayingButton !== this) {
                stopCurrentAudio();
            }

            // Cambiar ícono a "cargando"
            if (icon) {
                icon.classList.replace('bi-play-circle', 'bi-hourglass');
            }
            currentPlayingButton = this;

            try {
                // Si ya tenemos audio cargado (pausado) y es el mismo texto
                if (isPaused && currentAudio && currentAudio.dataset.id === id) {
                    if (resumeCurrentAudio()) {
                        if (icon) {
                            icon.classList.replace('bi-hourglass', 'bi-pause-circle');
                        }
                        return;
                    }
                }

                // Generar nuevo audio
                const response = await fetch("{{ path('text_to_speech') }}", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'audio/wav',
                    },
                    body: JSON.stringify({
                        id: id,
                        text: text,
                    }),
                });

                if (!response.ok) {
                    const error = await response.json().catch(() => null);
                    throw new Error(error?.error || error?.details || 'Error en la solicitud');
                }

                const audioBlob = await response.blob();
                currentAudioUrl = URL.createObjectURL(audioBlob);
                currentAudio = new Audio(currentAudioUrl);
                
                // Almacenar metadata en el elemento audio
                currentAudio.dataset.id = id;
                currentAudio.dataset.text = text;

                // Event listeners para el audio
                currentAudio.addEventListener('play', () => {
                    if (icon) {
                        icon.classList.replace('bi-hourglass', 'bi-pause-circle');
                    }
                    isPaused = false;
                });

                currentAudio.addEventListener('pause', () => {
                    if (!isPaused) { // Solo cambiar ícono si no es una pausa intencional
                        resetButtonIcon(currentPlayingButton);
                    }
                });

                currentAudio.addEventListener('ended', () => {
                    resetButtonIcon(currentPlayingButton);
                    URL.revokeObjectURL(currentAudioUrl);
                    currentAudio = null;
                    currentAudioUrl = null;
                    currentPlayingButton = null;
                    isPaused = false;
                    pausePosition = 0;
                });

                currentAudio.addEventListener('error', () => {
                    showError('Error al reproducir el audio');
                    resetButtonIcon(currentPlayingButton);
                    if (currentAudioUrl) {
                        URL.revokeObjectURL(currentAudioUrl);
                        currentAudioUrl = null;
                    }
                    currentAudio = null;
                    currentPlayingButton = null;
                    isPaused = false;
                    pausePosition = 0;
                });

                await currentAudio.play().catch(e => {
                    showError('No se pudo reproducir el audio: ' + e.message);
                    resetButtonIcon(currentPlayingButton);
                    if (currentAudioUrl) {
                        URL.revokeObjectURL(currentAudioUrl);
                        currentAudioUrl = null;
                    }
                    currentAudio = null;
                    currentPlayingButton = null;
                });

            } catch (error) {
                console.error('Error:', error);
                resetButtonIcon(currentPlayingButton);
                currentPlayingButton = null;
                showError(error.message || 'Error al generar el audio');
            }
        });
    });

    // Limpiar al salir de la página
    window.addEventListener('beforeunload', () => {
        if (currentAudioUrl) {
            URL.revokeObjectURL(currentAudioUrl);
        }
    });
});