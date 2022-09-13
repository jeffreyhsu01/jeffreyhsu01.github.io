import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { 
  BrowserRouter, 
  Route, 
  Routes 
} from 'react-router-dom';
import About from './components/About/About';
import Blog from './components/Blog/Blog'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
    </BrowserRouter>
);
