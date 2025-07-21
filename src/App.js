import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import CoursePage from './pages/CoursePage';
import ProfilePage from './pages/ProfilePage';
import Chatroom from './pages/Chatroom';
import ChartCompetition from './pages/ChartCompetition';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/courses" element={<CoursePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/chatroom" element={<Chatroom />} />
          <Route path="/competition" element={<ChartCompetition />} />
          <Route path="/charts" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
