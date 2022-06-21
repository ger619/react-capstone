import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Coin from './components/Coin';
import CoinDetails from './components/CoinDetails';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/coin" element={<Coin />} />
          <Route path="/coinDetails/:coinId" element={<CoinDetails />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
