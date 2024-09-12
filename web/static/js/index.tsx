import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../css/style.css';

function App() {
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetch('/api/message/')
            .then(response => response.json())
            .then(data => {
                setMessage(data.message);
            })
            .catch(error => console.error('Error fetching message:', error));
    }, []);

    return (
        <div>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>
            <p>{message}</p>
        </div>
    );
}

const rootElement = document.getElementById('root');
if (rootElement) {
    ReactDOM.createRoot(rootElement).render(<App/>);
}
