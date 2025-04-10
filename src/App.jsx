import './App.css';
import Navbar from './components/Navbar/navbar';
import Contact from './components/Contact/contact';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import About from './pages/About/about';
import Destinations from './pages/Destinations/destination';
import Blog from './pages/Blog/blog';
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/destinations" element={<Destinations />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <Contact />
    </>
  );
}

export default App;
