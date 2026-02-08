
import './App.css'
import { Dashboard } from './Pages/Dashboard'
import {Navigate, BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import MainLayout from './Components/Layout/MainLayout'


function App() {
  

  return (
  <Router>
    <Routes>
       {/* Default redirect */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
      <Route path='/dashboard' element={<MainLayout><Dashboard /></MainLayout>}/>
    </Routes>
  </Router>
  )
}

export default App
