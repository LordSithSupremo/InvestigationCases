// import React is not necessary in React 17+
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';

const root = createRoot(document.getElementById("root")); // Certifique-se de que o ID "root" existe no HTML
root.render(<App />);
