import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react";
import LandingPage from './pages/LandingPage';
import ContactPage from './pages/ContactPage';

function App() {

  return (
    <Router>
      <Routes>
        {/* Redirige automáticamente a la ruta "/page" */}
        <Route path="/" element={<Navigate to="/page" replace />} />

        {/* Renderiza el componente LandingPage cuando se accede a "/page" */}
        <Route path="page" element={<LandingPage />} />
        <Route path="contactForm" element={<ContactPage />} />

      </Routes>
    </Router>
  );
}

export default App;
