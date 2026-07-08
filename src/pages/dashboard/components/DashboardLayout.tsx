import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { CrmUser } from '@/hooks/useCrmAuth';

interface Props {
  user: CrmUser;
  onLogout: () => void;
  children: React.ReactNode;
}

const navItems = [
  { path: '/dashboard', label: 'Overview', icon: 'ri-dashboard-line', exact: true },
  { path: '/dashboard/leads', label: 'Leads', icon: 'ri-user-received-2-line' },
  { path: '/dashboard/clients', label: 'Clients', icon: 'ri-group-line' },
  { path: '/dashboard/jobs', label: 'Jobs & Pricing', icon: 'ri-money-dollar-circle-line' },
  { path: '/dashboard/blog', label: 'Blog', icon: 'ri-article-line' },
];

export default function DashboardLayout({ user, onLogout, children }: Props) {
  const location = useLocation();
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isActive = (path: string, exact = false) =>
    exact ? location.pathname === path : location.pathname.startsWith(path);

  const handleLogout = () => {
    onLogout();
    navigate('/dashboard/login');
  };

  return (
    <div className="min-h-screen bg-[#0F1A1A] flex">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-0 left-0 z-40 w-64 bg-[#1A2424] border-r border-[#8A9BA8]/15 flex flex-col transition-transform duration-300 ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:translate-x-0`}
      >
        {/* Logo area */}
        <div className="h-16 flex items-center px-5 border-b border-[#8A9BA8]/15">
          <img
            src="https://static.readdy.ai/image/af8ae33b67f17c82a3c09cb93c97754b/2887571b48c57ebbe859c1035b163ed5.png"
            alt="Broadview Solutions"
            className="h-10 w-auto object-contain"
          />
          <span className="ml-3 text-xs font-semibold text-[#8A9BA8] uppercase tracking-widest">CRM</span>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-6 px-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setSidebarOpen(false)}
              className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                isActive(item.path, item.exact)
                  ? 'bg-[#2D5016] text-white'
                  : 'text-[#8A9BA8] hover:text-white hover:bg-[#1C2B2B]'
              }`}
            >
              <div className="w-5 h-5 flex items-center justify-center">
                <i className={`${item.icon} text-base`}></i>
              </div>
              <span>{item.label}</span>
            </Link>
          ))}

          {user.role === 'admin' && (
            <div className="pt-4 mt-4 border-t border-[#8A9BA8]/15">
              <p className="px-3 text-xs font-semibold text-[#8A9BA8]/60 uppercase tracking-widest mb-2">Admin</p>
              <Link
                to="/dashboard/team"
                onClick={() => setSidebarOpen(false)}
                className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all cursor-pointer ${
                  isActive('/dashboard/team')
                    ? 'bg-[#2D5016] text-white'
                    : 'text-[#8A9BA8] hover:text-white hover:bg-[#1C2B2B]'
                }`}
              >
                <div className="w-5 h-5 flex items-center justify-center">
                  <i className="ri-shield-user-line text-base"></i>
                </div>
                <span>Team Access</span>
              </Link>
            </div>
          )}
        </nav>

        {/* User info */}
        <div className="p-4 border-t border-[#8A9BA8]/15">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-9 h-9 flex items-center justify-center bg-[#2D5016] rounded-full flex-shrink-0">
              <i className="ri-user-line text-white text-sm"></i>
            </div>
            <div className="min-w-0">
              <p className="text-sm font-semibold text-white truncate">{user.name}</p>
              <p className="text-xs text-[#8A9BA8] capitalize">{user.role}</p>
            </div>
          </div>
          <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-2 px-3 py-2 rounded-lg text-sm text-[#8A9BA8] hover:text-white hover:bg-[#1C2B2B] transition-colors cursor-pointer"
          >
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-logout-box-line text-sm"></i>
            </div>
            <span>Sign Out</span>
          </button>
          <a
            href="/"
            className="mt-1 w-full flex items-center space-x-2 px-3 py-2 rounded-lg text-sm text-[#8A9BA8] hover:text-white hover:bg-[#1C2B2B] transition-colors cursor-pointer"
          >
            <div className="w-4 h-4 flex items-center justify-center">
              <i className="ri-home-line text-sm"></i>
            </div>
            <span>View Website</span>
          </a>
        </div>
      </aside>

      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/60 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        ></div>
      )}

      {/* Main content */}
      <div className="flex-1 flex flex-col lg:ml-64 min-h-screen">
        {/* Top bar */}
        <header className="h-16 bg-[#1A2424] border-b border-[#8A9BA8]/15 flex items-center justify-between px-4 lg:px-6 flex-shrink-0">
          <button
            className="lg:hidden p-2 rounded-lg text-[#8A9BA8] hover:text-white transition-colors cursor-pointer"
            onClick={() => setSidebarOpen(true)}
          >
            <i className="ri-menu-line text-xl"></i>
          </button>
          <div className="hidden lg:flex items-center">
            <span className="text-sm text-[#8A9BA8]">
              {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
            </span>
          </div>
          <div className="flex items-center space-x-3 ml-auto">
            <div className="hidden sm:flex items-center space-x-2 bg-[#2D5016]/20 border border-[#2D5016]/30 rounded-full px-3 py-1">
              <div className="w-2 h-2 rounded-full bg-[#2D5016]"></div>
              <span className="text-xs font-medium text-[#C0C8CC]">{user.name}</span>
            </div>
            {user.role === 'admin' && (
              <span className="hidden sm:inline-block px-2 py-0.5 bg-[#B8A882]/20 border border-[#B8A882]/30 rounded-full text-xs font-semibold text-[#B8A882] uppercase tracking-wide">
                Admin
              </span>
            )}
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-4 lg:p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
