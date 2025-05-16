import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useAuth } from '../../context/AuthContext';
import Sidebar from './Sidebar';

const Layout = () => {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-neutral-50 flex flex-col">
      <Header />
      <div className="flex flex-grow">
        {isAuthenticated && (
          <div className="hidden md:block">
            <Sidebar />
          </div>
        )}
        <main className={`flex-grow ${isAuthenticated ? 'md:ml-64' : ''}`}>
          <div className="container mx-auto px-4 py-6">
            <Outlet />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;