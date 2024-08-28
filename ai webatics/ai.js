const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');

function sendMessage() {
    const message = userInput.value.trim();
    if (message !== '') {
        addMessage('user', message);
        const response = generateResponse(message);
        setTimeout(() => addMessage('bot', response), 500);
        userInput.value = '';
    }
}

function addMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message', `${sender}-message`);
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function generateResponse(message) {
    const lowerMessage = message.toLowerCase();
    if (lowerMessage.includes('hello') || lowerMessage.includes('hi')) {
        return "Hello! How can I help you today?";
    } else if (lowerMessage.includes('how are you')) {
        return "I'm doing well, thank you for asking! How about you?";
    } else if (lowerMessage.includes('bye') || lowerMessage.includes('goodbye')) {
        return "Goodbye! Have a great day!";
    } else if (lowerMessage.includes('name')) {
        return "My name is Ai Assistant. Nice to meet you!";
    } else if (lowerMessage.includes('help')) {
        return "I'm here to help! What do you need assistance with?";
    } else {
        return "I'm sorry, I don't understand. Could you please rephrase your question?";
    }
}

userInput.addEventListener('keypress', function(send) {
    if (event.key === 'send') {
        sendMessage();
    }
});


