import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Experience from './components/Experience';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/experience">Experience</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
