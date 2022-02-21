import './App.css';
import Title from './components/Title/Title';
import Dashboard from './components/Dashboard/Dashboard';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
