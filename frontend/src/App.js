import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import { Toaster } from "./components/ui/toaster";

// Import pages
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import MinistriesPage from "./pages/MinistriesPage";
import EventsPage from "./pages/EventsPage";
import ConnectPage from "./pages/ConnectPage";
import VisitPage from "./pages/VisitPage";
import GivePage from "./pages/GivePage";

function App() {
  return (
    <div className="App min-h-screen flex flex-col">
      <BrowserRouter>
        <Navigation />
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/ministries" element={<MinistriesPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/connect" element={<ConnectPage />} />
            <Route path="/visit" element={<VisitPage />} />
            <Route path="/give" element={<GivePage />} />
          </Routes>
        </main>
        <Footer />
        <Toaster />
      </BrowserRouter>
    </div>
  );
}

export default App;