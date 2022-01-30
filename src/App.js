import './App.css';
import Home from './components/Home';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route
            path="*"
            element={<Navigate to="/home" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;