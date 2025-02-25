import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import TerminalLogin from './pages/terminalLogin'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TerminalLogin />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
