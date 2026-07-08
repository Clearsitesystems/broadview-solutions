import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCrmAuth } from '@/hooks/useCrmAuth';

interface Props {
  onLogin: () => void;
}

export default function DashboardLogin({ onLogin }: Props) {
  const { login } = useCrmAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    setTimeout(() => {
      const result = login(email, password);
      setLoading(false);
      if (result.success) {
        onLogin();
        navigate('/dashboard');
      } else {
        setError(result.error || 'Login failed.');
      }
    }, 400);
  };

  return (
    <div className="min-h-screen bg-[#0F1A1A] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-10">
          <img
            src="https://static.readdy.ai/image/af8ae33b67f17c82a3c09cb93c97754b/2887571b48c57ebbe859c1035b163ed5.png"
            alt="Broadview Solutions"
            className="h-20 w-auto mx-auto mb-4 object-contain"
          />
          <h1 className="text-2xl font-bold text-white">CRM Dashboard</h1>
          <p className="text-[#8A9BA8] text-sm mt-1">Broadview Solutions — Internal Portal</p>
        </div>

        <div className="bg-[#1A2424] border border-[#8A9BA8]/20 rounded-2xl p-8">
          <h2 className="text-lg font-semibold text-white mb-6">Sign In</h2>

          {error && (
            <div className="mb-5 bg-red-900/20 border border-red-500/40 text-red-400 px-4 py-3 rounded-lg text-sm flex items-center space-x-2">
              <i className="ri-error-warning-line text-lg"></i>
              <span>{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-[#C0C8CC] mb-2">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-[#1C2B2B] border border-[#8A9BA8]/30 text-white rounded-lg focus:ring-2 focus:ring-[#2D5016] focus:border-[#2D5016] outline-none text-sm placeholder-[#8A9BA8]"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-[#C0C8CC] mb-2">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  placeholder="••••••••"
                  className="w-full px-4 py-3 pr-12 bg-[#1C2B2B] border border-[#8A9BA8]/30 text-white rounded-lg focus:ring-2 focus:ring-[#2D5016] focus:border-[#2D5016] outline-none text-sm placeholder-[#8A9BA8]"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-[#8A9BA8] hover:text-white transition-colors cursor-pointer"
                >
                  <i className={showPassword ? 'ri-eye-off-line' : 'ri-eye-line'}></i>
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#2D5016] text-white py-3 rounded-lg font-semibold hover:bg-[#1E3A0F] transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap cursor-pointer"
            >
              {loading ? (
                <span className="flex items-center justify-center space-x-2">
                  <i className="ri-loader-4-line animate-spin"></i>
                  <span>Signing in...</span>
                </span>
              ) : 'Sign In'}
            </button>
          </form>

          <div className="mt-6 pt-6 border-t border-[#8A9BA8]/20">
            <p className="text-xs text-[#8A9BA8] text-center">
              This is a private portal for Broadview Solutions staff only.
            </p>
          </div>
        </div>

        <div className="mt-6 text-center">
          <a href="/" className="text-sm text-[#8A9BA8] hover:text-[#C0C8CC] transition-colors cursor-pointer">
            <i className="ri-arrow-left-line mr-1"></i>
            Back to website
          </a>
        </div>
      </div>
    </div>
  );
}
