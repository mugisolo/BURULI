import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import HistorySection from './components/HistorySection';
import ClansSection from './components/ClansSection';
import TourismSection from './components/TourismSection';
import DevelopmentSection from './components/DevelopmentSection';
import Partnerships from './components/Partnerships';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-buruli-cream selection:bg-buruli-gold selection:text-buruli-blue flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/history" element={<HistorySection />} />
            <Route path="/clans" element={<ClansSection />} />
            <Route path="/tourism" element={<TourismSection />} />
            <Route path="/development" element={<DevelopmentSection />} />
            <Route path="/partnerships" element={<Partnerships />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;