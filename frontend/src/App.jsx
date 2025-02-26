import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import './App.css'
import TerminalLogin from './pages/terminalLogin'
import ConsoleDecode from './pages/ConsoleDecode'
import { useState } from 'react';
import CalculatorChallenge from './pages/CalculatorChallenge'


function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TerminalLogin setIsAuthorized={setIsAuthorized} />} />
        <Route path="/consoledecode" element={<ProtectedRoute isAuthorized={isAuthorized} />} />
        <Route path="/t1" element={<CalculatorChallenge />}/>

      </Routes>
    </BrowserRouter>
  );
}

function ProtectedRoute({ isAuthorized }) {
  const location = useLocation();
  return isAuthorized ? <ConsoleDecode /> : <Navigate to="/" state={{ from: location }} replace />;
}

export default App;