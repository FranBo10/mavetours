import { EmojiButton } from '@joeattardi/emoji-button';

document.addEventListener('DOMContentLoaded', function () {
    const input = document.getElementById('chat-input');
    const btnSend = document.getElementById('btn-send');
    const messagesContainer = document.getElementById('chat-messages');
    const emojiTrigger = document.getElementById('emoji-trigger');

    // Inicializar Emoji Picker
    const picker = new EmojiButton({
        position: 'top-start',
        theme: 'auto',
        autoHide: false
    });

    picker.on('emoji', selection => {
        // Insertar emoji en la posición del cursor o al final
        const start = input.selectionStart;
        const end = input.selectionEnd;
        const text = input.value;
        const before = text.substring(0, start);
        const after = text.substring(end, text.length);

        input.value = before + selection.emoji + after;

        // Mover cursor después del emoji
        input.selectionStart = input.selectionEnd = start + selection.emoji.length;
        input.focus();
    });

    emojiTrigger.addEventListener('click', () => {
        picker.togglePicker(emojiTrigger);
    });

    // Función para agregar mensaje
    function addMessage(text, isUser = true) {
        const msgWrapper = document.createElement('div');
        msgWrapper.className = `d-flex mb-3 ${isUser ? 'justify-content-end' : 'justify-content-start'}`;

        const msgBubble = document.createElement('div');
        msgBubble.className = `p-3 rounded-3 fs-5 ${isUser ? 'bg-primary text-white' : 'bg-secondary text-white'}`;
        msgBubble.style.maxWidth = '75%';
        msgBubble.textContent = text;

        msgWrapper.appendChild(msgBubble);
        messagesContainer.appendChild(msgWrapper);

        // Auto-scroll al final
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }

    function handleSend() {
        const text = input.value.trim();
        if (text) {
            addMessage(text, true);
            input.value = '';
            input.focus();
        }
    }

    btnSend.addEventListener('click', handleSend);

    input.addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            handleSend();
        }
    });
});
