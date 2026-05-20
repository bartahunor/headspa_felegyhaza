import { Routes, Route } from 'react-router-dom'
import NavBar from './components/layout/NavBar.jsx'
import HomePage from './pages/HomePage.jsx'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* Később ide jönnek az újabb oldalak: */}
        {/* <Route path="/rolunk" element={<AboutPage />} /> */}
        {/* <Route path="/szolgaltatasok" element={<ServicesPage />} /> */}
      </Routes>
    </>
  )
}

export default App