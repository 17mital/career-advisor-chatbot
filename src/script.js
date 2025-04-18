const API_KEY = 'AIzaSyCXfvtaPrSpLRWU-wlOoQCnDloTWbTOJV4'; 
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';

const chatContainer = document.getElementById('chat-container');
const authContainer = document.getElementById('auth-container');
const loginBtn = document.getElementById('login-btn');
const usernameInput = document.getElementById('auth-username');

const chatMessages = document.getElementById('chat-messages');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-button');
const clearBtn = document.getElementById('clear-history-btn');
const voiceBtn = document.getElementById('voice-btn');
const suggestions = document.getElementById('suggestions');

let currentUser = null;

loginBtn.addEventListener('click', () => {
  const username = usernameInput.value.trim();
  if (username) {
    currentUser = username;
    authContainer.style.display = 'none';
    chatContainer.style.display = 'flex';
    loadChatHistory();
  }
});

function saveChatHistory() {
  localStorage.setItem(`chat_history_${currentUser}`, chatMessages.innerHTML);
}

function loadChatHistory() {
  const saved = localStorage.getItem(`chat_history_${currentUser}`);
  if (saved) chatMessages.innerHTML = saved;
}

clearBtn.addEventListener('click', () => {
  chatMessages.innerHTML = '';
  localStorage.removeItem(`chat_history_${currentUser}`);
});

function addMessage(message, isUser) {
  const msg = document.createElement('div');
  msg.classList.add('message', isUser ? 'user-message' : 'bot-message');

  const bubble = document.createElement('div');
  bubble.classList.add('message-content');
  bubble.textContent = message;

  msg.appendChild(bubble);
  chatMessages.appendChild(msg);
  chatMessages.scrollTop = chatMessages.scrollHeight;
  saveChatHistory();
}

async function generateResponse(prompt) {
  const res = await fetch(`${API_URL}?key=${API_KEY}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      contents: [{ parts: [{ text: prompt }] }]
    })
  });

  const data = await res.json();
  return data.candidates[0].content.parts[0].text;
}

async function handleUserInput() {
  const input = userInput.value.trim();
  if (!input) return;

  addMessage(input, true);
  userInput.value = '';
  sendBtn.disabled = true;

  try {
    const reply = await generateResponse(input);
    addMessage(reply, false);
  } catch {
    addMessage('❌ Something went wrong. Try again.', false);
  } finally {
    sendBtn.disabled = false;
    userInput.focus();
  }
}

sendBtn.addEventListener('click', handleUserInput);
userInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    e.preventDefault();
    handleUserInput();
  }
});

suggestions.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    userInput.value = e.target.textContent;
    handleUserInput();
  }
});

// 🎤 Voice Recognition
const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.lang = 'en-IN';

voiceBtn.addEventListener('click', () => {
  recognition.start();
});

recognition.onresult = (event) => {
  const transcript = event.results[0][0].transcript;
  userInput.value = transcript;
  handleUserInput();
};



function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (sidebar.style.left === "0px") {
    sidebar.style.left = "-250px"; 
  } else {
    sidebar.style.left = "0px"; 
  }
}

document.addEventListener("click", function (e) {
  const sidebar = document.getElementById("sidebar");
  const hamburger = document.querySelector(".hamburger");
  if (!sidebar.contains(e.target) && !hamburger.contains(e.target)) {
    sidebar.style.left = "-250px";
  }
});

