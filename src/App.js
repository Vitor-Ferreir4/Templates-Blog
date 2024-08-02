import './App.css';
import Navbar from './JS/Navbar';
import Footera from './JS/Footer'
import SEU_GP from './JS/SEU-GP'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
        <div className="App">
          <Navbar />
          <Routes>
            <Route exact path="/" element={<SEU_GP/>} />
          </Routes>
          <Footera />
        </div>
    </Router>
  );
}

export default App;
