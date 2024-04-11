// import { useState } from 'react';
// import axios from 'axios';

// const Chat = () => {
//   const [chatLog, setChatLog] = useState([]);
//   const [userInput, setUserInput] = useState('');

//   const sendMessage = async () => {
//     if (userInput.trim() === '') return;

//     const newChatLog = [...chatLog, { sender: 'You', message: userInput }];
//     setChatLog(newChatLog);
//     setUserInput('');

//     try {
//       const response = await axios.post('http://127.0.0.1:5000/api/chat', { message: userInput });
//       const { message } = response.data;
//       setChatLog([...newChatLog, { sender: 'Chatbot', message }]);
//     } catch (error) {
//       console.error('Error:', error);
//     }
//   };

//   const handleInputChange = (e) => {
//     setUserInput(e.target.value);
//   };

//   return (
//       <div className='cp_container'>
//         <div className="chat-log">
//         {chatLog.map((log, index) => (
//           <div key={index}><strong>{log.sender}: </strong>{log.message}</div>
//         ))}
//          <input type="text" value={userInput} onChange={handleInputChange} placeholder="Type your message..." />
//       <button onClick={sendMessage}>Send</button>
        
//       </div>
//      </div>
//   );
// };

// export default Chat;
// chat.jsx
import { useState } from 'react';
import axios from 'axios';

const Chat = () => {
  const [chatLog, setChatLog] = useState([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false); // New state variable

  const sendMessage = async () => {
    if (userInput.trim() === '') return;

    const newChatLog = [...chatLog, { sender: 'You', message: userInput }];
    setChatLog(newChatLog);
    setUserInput('');
    setIsLoading(true); // Set loading state to true when sending a message

    try {
      const response = await axios.post('http://127.0.0.1:5000/api/chat', { message: userInput });
      const { message } = response.data;
      setChatLog([...newChatLog, { sender: 'Chatbot', message }]);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false); // Set loading state to false after receiving a response
    }
  };

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  return (
    <div className="cp_container">
      <div className="chat-log">
        {chatLog.map((log, index) => (
          <div key={index}>
            <strong>{log.sender}: </strong>
            {log.message}
          </div>
        ))}
        {isLoading && (
  <div>
    <span className="typing-indicator"></span>
    <span className="typing-indicator"></span>
    <span className="typing-indicator"></span>
  </div>
)}{/* Add the loading spinner here */}
      </div>
      <input
        type="text"
        value={userInput}
        onChange={handleInputChange}
        placeholder="Type your message..."
        style={{ margin: '10px 0', padding: '5px' }}
      />
      <button
        onClick={sendMessage}
        style={{ padding: '5px', marginLeft: '5px', cursor: 'pointer' }}
      >
        Send
      </button>
    </div>
  );
};

export default Chat;
