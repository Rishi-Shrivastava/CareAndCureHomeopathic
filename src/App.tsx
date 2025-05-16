import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import DoctorProfilePage from './pages/DoctorProfilePage';
import PatientDetailPage from './pages/PatientDetailPage';
import CaseGalleryPage from './pages/CaseGalleryPage';
import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          
          {/* Protected routes */}
          <Route element={<ProtectedRoute />}>
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="doctor-profile" element={<DoctorProfilePage />} />
            <Route path="patients/:patientId" element={<PatientDetailPage />} />
            <Route path="case-gallery" element={<CaseGalleryPage />} />
          </Route>
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;