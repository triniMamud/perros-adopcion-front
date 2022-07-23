import './App.css';
import SidebarMenuEffects from './components/Home';

import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<SidebarMenuEffects />} />
        <Route
            path="*"
            element={<Navigate to="/home" />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;