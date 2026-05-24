import { Routes, Route } from 'react-router-dom'
import NavBar from './components/layout/NavBar.jsx'
import Footer from './components/layout/Footer.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rolunk" element={<AboutPage />} />
        {/* Később ide jönnek az újabb oldalak: */}
        {/* <Route path="/szolgaltatasok" element={<ServicesPage />} /> */}
      </Routes>
      <Footer />
    </>
  )
}

export default App