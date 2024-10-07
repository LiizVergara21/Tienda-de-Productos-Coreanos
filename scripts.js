function sendMessage() {
    const input = document.getElementById('chat-input').value;
    const chatBox = document.getElementById('chat-box');

    if(input.trim() !== "") {
        const userMessage = document.createElement('p');
        userMessage.textContent = `Usuario: ${input}`;
        chatBox.appendChild(userMessage);

        const botMessage = document.createElement('p');
        botMessage.textContent = "Bot: ¡Gracias por tu mensaje! Nos pondremos en contacto pronto.";
        chatBox.appendChild(botMessage);

        document.getElementById('chat-input').value = ""; // Limpiar el campo de texto
    }
}

function showAlert() {
    alert("¡Este es un proyecto ficticio! No es posible realizar compras reales, pero puedes explorar los productos.");
}
