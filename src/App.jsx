import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { UserProvider } from "./context/UserContext";
import CareerQuiz from "./components/CareerQuiz";
import LearningRoadmap from "./components/LearningRoadmap";
import ProgressDashboard from "./components/ProgressDashboard";
import ForumDiscussion from "./components/ForumDiscussion";
import CvGenerator from "./components/CvGenerator";

export default function App() {
  return (
    <UserProvider>
      <Router>
        <nav className="bg-blue-600 p-4 text-white flex gap-4">
          <Link to="/">Home</Link>
          <Link to="/quiz">Career Quiz</Link>
          <Link to="/roadmap">Learning Roadmap</Link>
          <Link to="/dashboard">Progress Dashboard</Link>
          <Link to="/forum">Forum Discussion</Link>
          <Link to="/cv">CV Generator</Link>
        </nav>
        <main className="container mx-auto p-4">
          <Routes>
            <Route path="/" element={<h1>Welcome to Educourse Career</h1>} />
            <Route path="/quiz" element={<CareerQuiz />} />
            <Route path="/roadmap" element={<LearningRoadmap />} />
            <Route path="/dashboard" element={<ProgressDashboard />} />
            <Route path="/forum" element={<ForumDiscussion />} />
            <Route path="/cv" element={<CvGenerator />} />
          </Routes>
        </main>
      </Router>
    </UserProvider>
  );
}
