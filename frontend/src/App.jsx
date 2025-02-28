import { BrowserRouter, Routes, Route, Navigate, useLocation, useNavigate } from 'react-router-dom'
import './App.css'
import TerminalLogin from './pages/terminalLogin'
import ConsoleDecode from './pages/ConsoleDecode'
import PdfDecode from './pages/PdfDecode';
import CalculatorChallenge from './pages/CalculatorChallenge'
import WordScramble from './pages/imageFinder/WordScramble';
import PasswordCrack from './pages/PasswordCrack/PasswordCrack';
import { useEffect } from 'react';
import ReverseEngineeringChallenge from './pages/ReverseEngineering/ReverseEngineeringChallenge';
import FinalChallenge from './pages/FinalChallenge';
import MiddleStory from './pages/MiddleStory';
import Complition from './pages/completion/Complition';




function App() {
  const ExternalRedirect = () => {
    const navigate = useNavigate();
  
    useEffect(() => {
      window.location.href = "https://binarybountychallenge.vercel.app/";
    }, [navigate]);
  
    return null;
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TerminalLogin />} />
        <Route path="/word-sample-t1" element={<WordScramble/>}/>
        <Route path="/password-crack-t2" element={<PasswordCrack/>}/>
        <Route path="/calculator-t3" element={<CalculatorChallenge />}/>
        <Route path="/reverse-challenge-t4" element={<ReverseEngineeringChallenge/>}/>
        <Route path="/middle-story" element={<MiddleStory/>}/>
        <Route path="/console-decode-t5" element={<ConsoleDecode/>}/>
        <Route path="/pdf-decode-t6" element={<PdfDecode/>}/>
        <Route path="/morse-t7" element={<ExternalRedirect />} />
        <Route path="/final-challenge-f1" element={<FinalChallenge/>} />
        <Route path='/completed-bin-bounty-2k25-winner' element={<Complition/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;