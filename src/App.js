import 'tailwindcss/tailwind.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import CreatePizza from './pages/CreatePizza'
import EditPizza from './pages/EditPizza'
import Nav from './components/Nav';
import './index.css';
import './tailwind.css';

function App() {
  return (
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/CreatePizza" element={<CreatePizza />} />
        <Route path="/EditPizza/:id" element={<EditPizza />} />
      </Routes>
    </Router>
  );
}

export default App;
