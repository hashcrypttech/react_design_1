import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Notes from './Pages/Notes';
import Home from './Pages/Home';
import Edit from './Pages/Edit';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
