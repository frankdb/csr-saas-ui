import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Register from "./pages/Register";
import Login from "./pages/Login";
import JobSearch from "./pages/JobSearch";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/jobs" element={<JobSearch />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
