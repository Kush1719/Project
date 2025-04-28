import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
import SummaryMetrics from './pages/SummaryMetrics';
import BadgeAnalytics from './pages/BadgeAnalytics';
import CompletionSummary from './pages/CompletionSummary';
import UserLog from './pages/UserLog';
import Header from './components/Header';
import Footer from './components/Footer';
// import ProtectedRoute from './components/ProtectedRoute';
const App = () => {
  return (
    <Router>
      <div>
        <Header/>
        <div>
          <Sidebar/>
          <div>
            <Routes>
              <Route path="/dashboard" element={<Dashboard/>}/>
              <Route path="/summary-metrics" element={<SummaryMetrics/>}/>
              <Route path="/badge-analytics" element={<BadgeAnalytics/>}/>
              <Route path="/completion-summary" element={<CompletionSummary/>}/>
              <Route path="/user-log" element={<UserLog/>}/>
            </Routes>
          </div>
        </div>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
