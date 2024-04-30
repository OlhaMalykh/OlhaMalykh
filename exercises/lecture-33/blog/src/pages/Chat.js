import React, { useState, useEffect } from 'react';

const Chat = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const sendMessage = async () => {
    try {
      const response = await fetch('https://api.openai.com/v1/engines/davinci/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer YOUR_OPENAI_API_KEY',
        },
        body: JSON.stringify({
          prompt: message,
          max_tokens: 50,
        }),
      });
      const data = await response.json();
      setResponse(data.choices[0].text);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div className="chat-page">
      <h1>Chat with AI</h1>
      <div className="chat-container">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      <div className="response-container">
        <p>{response}</p>
      </div>
    </div>
  );
};

export default Chat;



