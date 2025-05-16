import { Link, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  Image, 
  FileText, 
  BarChart 
} from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const menuItems = [
    { path: '/dashboard', icon: <LayoutDashboard size={20} />, label: 'Dashboard' },
    { path: '/patients', icon: <Users size={20} />, label: 'Patients' },
    { path: '/appointments', icon: <Calendar size={20} />, label: 'Appointments' },
    { path: '/case-gallery', icon: <Image size={20} />, label: 'Case Gallery' },
    { path: '/records', icon: <FileText size={20} />, label: 'Medical Records' },
    { path: '/analytics', icon: <BarChart size={20} />, label: 'Analytics' },
  ];

  return (
    <aside className="w-64 bg-white shadow-sm h-screen fixed">
      <div className="h-full flex flex-col">
        <div className="py-6 px-4 border-b border-neutral-200">
          <h2 className="text-lg font-semibold text-primary-600">Doctor Portal</h2>
          <p className="text-sm text-neutral-500">Manage your practice</p>
        </div>
        <nav className="py-4 flex-grow">
          <ul className="space-y-1 px-2">
            {menuItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center px-4 py-3 rounded-md transition-colors duration-200 ${
                    isActive(item.path)
                      ? 'bg-primary-50 text-primary-600'
                      : 'text-neutral-700 hover:bg-primary-50 hover:text-primary-600'
                  }`}
                >
                  <span className="mr-3">{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t border-neutral-200">
          <div className="bg-primary-50 p-4 rounded-lg">
            <h3 className="font-medium text-primary-700 mb-2">Need Help?</h3>
            <p className="text-sm text-neutral-600 mb-3">Access our support resources or contact our team.</p>
            <Link to="/support" className="text-sm text-primary-600 font-medium hover:underline">Get Support →</Link>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;