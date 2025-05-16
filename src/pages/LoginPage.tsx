import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);
    
    try {
      await login(email, password);
      navigate('/dashboard');
    } catch (err) {
      setError('Failed to login. Please check your credentials.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto animate-fadeIn">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-primary-600">Welcome Back</h1>
        <p className="text-neutral-600 mt-2">Sign in to access your CareAndCure account</p>
      </div>
      
      <div className="card p-8">
        {error && (
          <div className="bg-error-50 text-error-700 p-4 rounded-md mb-6">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="label">Email Address</label>
            <input
              id="email"
              type="email"
              className="input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-6">
            <div className="flex justify-between mb-1">
              <label htmlFor="password" className="label">Password</label>
              <Link to="/forgot-password" className="text-sm text-primary-600 hover:text-primary-700">
                Forgot Password?
              </Link>
            </div>
            <input
              id="password"
              type="password"
              className="input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-6">
            <button 
              type="submit" 
              className="btn btn-primary w-full flex justify-center items-center"
              disabled={isLoading}
            >
              {isLoading ? (
                <div className="w-6 h-6 border-t-2 border-b-2 border-white rounded-full animate-spin"></div>
              ) : (
                'Sign In'
              )}
            </button>
          </div>
        </form>
        
        <div className="text-center">
          <p className="text-neutral-600">
            Don't have an account? <Link to="/register" className="text-primary-600 hover:text-primary-700 font-medium">Register Now</Link>
          </p>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-sm text-neutral-500">
          For demonstration purposes, any valid email and password will work.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;