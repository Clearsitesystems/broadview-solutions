import { useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { useCrmAuth } from '@/hooks/useCrmAuth';
import DashboardLayout from './components/DashboardLayout';
import DashboardLogin from './login/page';
import DashboardOverview from './page';
import LeadsPage from './leads/page';
import ClientsPage from './clients/page';
import JobsPage from './jobs/page';
import BlogAdminPage from './blog/page';
import BlogEditorPage from './blog/editor/page';

function ProtectedRoute({ children, user }: { children: React.ReactNode; user: ReturnType<typeof useCrmAuth>['currentUser'] }) {
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) navigate('/dashboard/login', { replace: true });
  }, [user, navigate]);
  if (!user) return null;
  return <>{children}</>;
}

export default function DashboardShell() {
  const { currentUser, authLoading, login, logout } = useCrmAuth();

  if (authLoading) {
    return (
      <div className="min-h-screen bg-[#0F1A1A] flex items-center justify-center">
        <i className="ri-loader-4-line animate-spin text-3xl text-[#2D5016]"></i>
      </div>
    );
  }

  return (
    <Routes>
      <Route path="login" element={
        currentUser
          ? <Navigate to="/dashboard" replace />
          : <DashboardLogin onLogin={() => {}} />
      } />
      <Route path="*" element={
        <ProtectedRoute user={currentUser}>
          <DashboardLayout user={currentUser!} onLogout={logout}>
            <Routes>
              <Route index element={<DashboardOverview user={currentUser!} />} />
              <Route path="leads" element={<LeadsPage user={currentUser!} />} />
              <Route path="clients" element={<ClientsPage user={currentUser!} />} />
              <Route path="jobs" element={<JobsPage user={currentUser!} />} />
              <Route path="blog" element={<BlogAdminPage />} />
              <Route path="blog/editor" element={<BlogEditorPage />} />
              <Route path="blog/editor/:id" element={<BlogEditorPage />} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </DashboardLayout>
        </ProtectedRoute>
      } />
    </Routes>
  );
}
