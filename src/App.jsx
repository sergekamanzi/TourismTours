import './App.css';
import Navbar from './components/Navbar/navbar';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home'; // Adjust path if needed

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
