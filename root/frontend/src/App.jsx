import { Routes, Route } from 'react-router-dom';
import { localBusinessSchema } from "./seo/schema";
import { useJsonLd } from "./seo/useJsonLd";
import NavBar from './components/layout/NavBar.jsx';
import Footer from './components/layout/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import FaqPage from './pages/FaqPage.jsx';

function App() {
  useJsonLd(localBusinessSchema);
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/rolunk" element={<AboutPage />} />
        <Route path="/gyik" element={<FaqPage />} />
        {/* Később ide jönnek az újabb oldalak: */}
        {/* <Route path="/szolgaltatasok" element={<ServicesPage />} /> */}
      </Routes>
      <Footer />
    </>
  )
}

export default App