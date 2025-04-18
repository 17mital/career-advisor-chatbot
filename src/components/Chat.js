import React, { useEffect, useRef, useState } from 'react';
import Sidebar from './Sidebar';

const API_KEY = 'AIzaSyCXfvtaPrSpLRWU-wlOoQCnDloTWbTOJV4';
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent';

function Chat({ currentUser }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem(`chat_history_${currentUser}`);
    if (saved) setMessages(JSON.parse(saved));
  }, [currentUser]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    localStorage.setItem(`chat_history_${currentUser}`, JSON.stringify(messages));
  }, [messages]);

  const addMessage = (text, isUser) => {
    setMessages(prev => [...prev, { text, isUser }]);
  };

  const generateResponse = async (prompt) => {
    const res = await fetch(`${API_URL}?key=${API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] }),
    });
    const data = await res.json();
    return data.candidates[0].content.parts[0].text;
  };

  const handleSend = async () => {
    if (!input.trim()) return;
    const userText = input.trim();
    addMessage(userText, true);
    setInput('');

    try {
      const reply = await generateResponse(userText);
      addMessage(reply, false);
    } catch {
      addMessage("❌ Something went wrong. Try again.", false);
    }
  };

  const handleClear = () => {
    setMessages([]);
    localStorage.removeItem(`chat_history_${currentUser}`);
  };

  return (
    <div className="chat-container">
      <div className="hamburger" onClick={() => {
        const sidebar = document.getElementById('sidebar');
        sidebar.style.left = sidebar.style.left === '0px' ? '-250px' : '0px';
      }}>
        ☰
      </div>
      <Sidebar />
      <div className="chat-header">
        <h1>🎓 Career Advisor</h1>
        <button onClick={handleClear}>🧹 Clear</button>
      </div>
      <div className="chat-messages">
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.isUser ? 'user-message' : 'bot-message'}`}>
            <div className="message-content">{msg.text}</div>
          </div>
        ))}
        <div ref={chatEndRef} />
      </div>
      

      <div className="suggestions">
        {["Best career for science students", "How to prepare for NEET/JEE?", "Scholarships after 12th?"].map((text, idx) => (
          <button key={idx} onClick={() => { setInput(text); handleSend(); }}>{text}</button>
        ))}
      </div>

      <div className="chat-input-container">
        <button onClick={() => {
          const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
          recognition.lang = 'en-IN';
          recognition.start();
          recognition.onresult = (event) => {
            const transcript = event.results[0][0].transcript;
            setInput(transcript);
            handleSend();
          };
        }}>🎤</button>
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type your question..."
          onKeyDown={e => e.key === 'Enter' && handleSend()}
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}

export default Chat;
