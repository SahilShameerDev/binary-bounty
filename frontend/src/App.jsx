import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import './App.css'
import TerminalLogin from './pages/terminalLogin'
import ConsoleDecode from './pages/ConsoleDecode'
import { useState } from 'react';
import PdfDecode from './pages/PdfDecode';
import CalculatorChallenge from './pages/CalculatorChallenge'
import WordScramble from './pages/imageFinder/WordScramble';
import PasswordCrack from './pages/PasswordCrack/PasswordCrack';



function App() {
  const [isAuthorized, setIsAuthorized] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TerminalLogin setIsAuthorized={setIsAuthorized} />} />
        <Route path="/consoledecode" element={<ProtectedRoute isAuthorized={isAuthorized} />} />
        <Route path="/t4" element={<PdfDecode/>}/>
        <Route path="/t1" element={<CalculatorChallenge />}/>
        <Route path="/t2" element={<WordScramble/>}/>
        
        <Route path="/t3" element={<PasswordCrack/>}/>
      </Routes>
    </BrowserRouter>
  );
}

function ProtectedRoute({ isAuthorized }) {
  const location = useLocation();
  return isAuthorized ? <ConsoleDecode /> : <Navigate to="/" state={{ from: location }} replace />;
}

export default App;