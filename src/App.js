import 'font-awesome/css/font-awesome.min.css';
import './assets/css/app.css';
import DashboardPage from './pages/DashboardPage';
import TypographyPage from './pages/TypographyPage';
import LoginPage from './pages/auth/LoginPage';
import ResetPassword from './pages/auth/ResetPassword';
import ProfilePage from './pages/profile/ProfilePage';
import ChangePasswordPage from './pages/profile/ChangePasswordPage';
import UserPreferencesPage from './pages/profile/UserPreferencesPage';
import AdminBlankPage from './pages/AdminBlankPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

function App() {
  const { user, isAuthenticated } = useAuth0();
  console.log(isAuthenticated);
  return (
    <Router>
      <Routes>
        {!isAuthenticated ? (
          <Route exact path="/" element={<LoginPage />} />
        ) : (
          <Route exact path="/" element={<DashboardPage />} />
        )}

        <Route exact path="/reset-password" element={<ResetPassword />} />
        <Route exact path="/profile" element={<ProfilePage />} />
        <Route exact path="/change-password" element={<ChangePasswordPage />} />
        <Route exact path="/preferences" element={<UserPreferencesPage />} />
        <Route exact path="/typography" element={<TypographyPage />} />
        <Route exact path="/blank-page" element={<AdminBlankPage />} />
      </Routes>
    </Router>
  );
}

export default App;
