import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import TerminalLogin from './pages/terminalLogin'
import CalculatorChallenge from './pages/CalculatorChallenge'
import ReverseEngineeringChallenge from './pages/ReverseEngineeringChallenge'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TerminalLogin />} />
        <Route path="/t1" element={<CalculatorChallenge />}/>
        <Route path="/t2" element={<ReverseEngineeringChallenge />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
