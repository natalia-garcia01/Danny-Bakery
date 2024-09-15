// Chatbot funcionalidad básica
const chatWindow = document.getElementById('chat-window');
const chatInput = document.getElementById('chatInput');
const sendBtn = document.getElementById('sendBtn');

sendBtn.addEventListener('click', () => {
  const userMessage = chatInput.value;
  if (userMessage.trim() === "") return;
  
  const userBubble = document.createElement('div');
  userBubble.className = 'user-msg';
  userBubble.textContent = userMessage;
  chatWindow.appendChild(userBubble);
  
  setTimeout(() => {
    const botBubble = document.createElement('div');
    botBubble.className = 'bot-msg';
    botBubble.textContent = 'Hola, ¿cómo puedo ayudarte con nuestros pasteles?';
    chatWindow.appendChild(botBubble);
    chatWindow.scrollTop = chatWindow.scrollHeight;
  }, 1000);
  
  chatInput.value = "";
});

// Generar código QR para Facebook e Instagram
function generateQRCode(id, url) {
  const qrDiv = document.getElementById(id);
  const qrCode = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${url}`;
  const img = document.createElement('img');
  img.src = qrCode;
  qrDiv.appendChild(img);
}

generateQRCode('qrFacebook', 'https://www.facebook.com/profile.php?id=61558626279273');
generateQRCode('qrInstagram', 'https://www.instagram.com/dannybakerys/');
