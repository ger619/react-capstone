import {
  BrowserRouter as Router, Routes, Route,
} from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import CryptoDetails from './components/CryptoDetails';
import AllCrypto from './components/AllCrypto';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/allCrypto" element={<AllCrypto />} />
          <Route exact path="/crypto/:coinId/" element={<CryptoDetails />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
