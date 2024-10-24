import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Register from "./pages/Register";
import Login from "./pages/Login";
import JobSearch from "./pages/JobSearch";
import Dashboard from "./pages/Dashboard";
import DashboardHome from "./components/dashboard/DashboardHome";
// import DashboardJobs from "./components/dashboard/DashboardJobs";
// import DashboardProfile from "./components/dashboard/DashboardProfile";
// import DashboardSettings from "./components/dashboard/DashboardSettings";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow w-full">
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/jobs" element={<JobSearch />} />
            <Route path="/dashboard" element={<Dashboard />}>
              <Route index element={<DashboardHome />} />
              {/* <Route path="jobs" element={<DashboardJobs />} /> */}
              {/* <Route path="profile" element={<DashboardProfile />} /> */}
              {/* <Route path="settings" element={<DashboardSettings />} /> */}
            </Route>
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
