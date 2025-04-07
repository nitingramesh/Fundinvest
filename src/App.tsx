import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { AppProvider } from './context/AppContext';
import theme from './styles/theme';

// Import pages
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import StartupDashboard from './pages/startup/StartupDashboard';
import DashboardLayout from './pages/DashboardLayout';

// Placeholder components for now
const InvestorDashboard = () => <div>Investor Dashboard</div>;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppProvider>
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            
            {/* Startup Routes */}
            <Route path="/startup" element={<DashboardLayout userRole="startup" />}>
              <Route path="dashboard" element={<StartupDashboard />} />
              <Route path="investor-matches" element={<div>Investor Matches</div>} />
              <Route path="communications" element={<div>Communications</div>} />
              <Route path="funding" element={<div>Funding & Deals</div>} />
              <Route path="analytics" element={<div>Analytics</div>} />
              <Route path="documents" element={<div>Documents</div>} />
              <Route path="startup-profile" element={<div>Startup Profile</div>} />
              <Route path="settings" element={<div>Settings</div>} />
              <Route index element={<Navigate to="/startup/dashboard" replace />} />
            </Route>
            
            {/* Investor Routes */}
            <Route path="/investor" element={<DashboardLayout userRole="investor" />}>
              <Route path="dashboard" element={<InvestorDashboard />} />
              <Route path="startup-matches" element={<div>Startup Matches</div>} />
              <Route path="communications" element={<div>Communications</div>} />
              <Route path="funding" element={<div>Funding & Deals</div>} />
              <Route path="analytics" element={<div>Analytics</div>} />
              <Route path="documents" element={<div>Documents</div>} />
              <Route path="investor-profile" element={<div>Investor Profile</div>} />
              <Route path="settings" element={<div>Settings</div>} />
              <Route index element={<Navigate to="/investor/dashboard" replace />} />
            </Route>
            
            {/* Default redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </Router>
      </AppProvider>
    </ThemeProvider>
  );
}

export default App;
