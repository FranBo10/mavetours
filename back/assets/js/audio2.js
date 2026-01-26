document.addEventListener("DOMContentLoaded", function () {
    const audioPlayers = new Map();
    let currentAudio = null; // Para manejar solo un audio a la vez

    document.querySelectorAll(".play-audio").forEach((button) => {
      button.addEventListener("click", async function (e) {
        e.preventDefault();
        const text = this.dataset.text;
        const voice = "alloy"; // Puedes hacerlo configurable si necesitas
        const icon = this.querySelector("i");

        // Si hay un audio reproduciéndose, detenerlo primero
        if (currentAudio) {
          currentAudio.pause();
          const prevIcon = document.querySelector(".bi-pause-circle");
          if (prevIcon) {
            prevIcon.classList.replace("bi-pause-circle", "bi-play-circle");
          }
        }

        // Cambiar ícono a "cargando"
        icon.classList.replace("bi-play-circle", "bi-hourglass");

        try {
          const response = await fetch("{{ path('text_to_speech') }}", {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              Accept: "audio/wav",
            },
            body: new URLSearchParams({
              text: text,
              voice: voice,
            }),
          });

          if (!response.ok) {
            const errorData = await response.json().catch(() => null);
            throw new Error(errorData?.error || response.statusText);
          }

          const audioBlob = await response.blob();
          const audioUrl = URL.createObjectURL(audioBlob);
          const audio = new Audio(audioUrl);

          audio.addEventListener("play", () => {
            icon.classList.replace("bi-hourglass", "bi-pause-circle");
            currentAudio = audio;
          });

          audio.addEventListener("pause", () => {
            icon.classList.replace("bi-pause-circle", "bi-play-circle");
            currentAudio = null;
          });

          audio.addEventListener("ended", () => {
            icon.classList.replace("bi-pause-circle", "bi-play-circle");
            URL.revokeObjectURL(audioUrl);
            currentAudio = null;
          });

          audio.addEventListener("error", () => {
            icon.classList.replace("bi-hourglass", "bi-play-circle");
            showError("Error al reproducir el audio");
          });

          audio.play();
        } catch (error) {
          console.error("Error:", error);
          icon.classList.replace("bi-hourglass", "bi-play-circle");
          showError(error.message || "Error al generar el audio");
        }
      });
    });

    function showError(message) {
      const toastEl = document.getElementById("errorToast");
      const toastMessage = document.getElementById("toastMessage");

      if (toastEl && toastMessage) {
        toastMessage.textContent = message;
        const toast = new bootstrap.Toast(toastEl);
        toast.show();
      }
    }
  });