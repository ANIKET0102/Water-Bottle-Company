import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import FirstHeroSection from "./components/FirstHeroSection/FirstHeroSection";
import SecHeroSection from "./components/SecHeroSection/SecHeroSection";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <Router basename="/Water-Bottle-Company">
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FirstHeroSection />
                  <SecHeroSection />
                </>
              }
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
