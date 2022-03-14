import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LandingPage from './pages/LandingPage';
import ProfitDashboard from './pages/ProfitDashboard';

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <LandingPage /> */}
        <ProfitDashboard />
        <Routes>
          <Route path="/" />
          <Route path="/reports" />
          <Route path="/about" />
          <Route path="/dashboard" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
