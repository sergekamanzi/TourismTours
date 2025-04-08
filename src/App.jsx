import './App.css';
import Navbar from './components/Navbar/navbar';
import Contact from './components/Contact/contact';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Contact />
    </>
  );
}

export default App;
