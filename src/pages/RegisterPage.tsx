import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { CheckCircle } from 'lucide-react';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (password !== confirmPassword) {
      setError('Passwords do not match.');
      return;
    }
    
    if (!agreeTerms) {
      setError('You must agree to the terms and conditions.');
      return;
    }
    
    setIsLoading(true);
    
    try {
      await register(email, password, name);
      navigate('/dashboard');
    } catch (err) {
      setError('Failed to create an account. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-8 animate-fadeIn">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card p-8">
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-primary-600">Create Your Account</h1>
            <p className="text-neutral-600 mt-2">Join our community of homeopathic practitioners</p>
          </div>
          
          {error && (
            <div className="bg-error-50 text-error-700 p-4 rounded-md mb-6">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="name" className="label">Full Name</label>
              <input
                id="name"
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            
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
              <label htmlFor="password" className="label">Password</label>
              <input
                id="password"
                type="password"
                className="input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                minLength={6}
                required
              />
              <p className="text-xs text-neutral-500 mt-1">
                Password must be at least 6 characters long.
              </p>
            </div>
            
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="label">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                className="input"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                minLength={6}
                required
              />
            </div>
            
            <div className="mb-6">
              <div className="flex items-start">
                <input
                  id="terms"
                  type="checkbox"
                  className="mt-1 mr-2"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  required
                />
                <label htmlFor="terms" className="text-sm text-neutral-600">
                  I agree to the <Link to="/terms" className="text-primary-600 hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-primary-600 hover:underline">Privacy Policy</Link>
                </label>
              </div>
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
                  'Create Account'
                )}
              </button>
            </div>
          </form>
          
          <div className="text-center">
            <p className="text-neutral-600">
              Already have an account? <Link to="/login" className="text-primary-600 hover:text-primary-700 font-medium">Sign In</Link>
            </p>
          </div>
        </div>
        
        <div className="hidden md:block">
          <div className="sticky top-24">
            <div className="bg-primary-50 rounded-lg p-8">
              <h2 className="text-2xl font-semibold text-primary-700 mb-6">Benefits of Joining</h2>
              
              <ul className="space-y-4">
                <li className="flex">
                  <CheckCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-primary-800">Showcase Your Success Stories</h3>
                    <p className="text-neutral-600">Document and share patient treatment outcomes with before and after comparisons.</p>
                  </div>
                </li>
                <li className="flex">
                  <CheckCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-primary-800">Professional Online Presence</h3>
                    <p className="text-neutral-600">Create a comprehensive profile highlighting your credentials, specialization, and expertise.</p>
                  </div>
                </li>
                <li className="flex">
                  <CheckCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-primary-800">Efficient Patient Management</h3>
                    <p className="text-neutral-600">Keep track of patient histories, treatments, and appointments in one secure location.</p>
                  </div>
                </li>
                <li className="flex">
                  <CheckCircle className="w-6 h-6 text-primary-600 mr-3 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-primary-800">Community Recognition</h3>
                    <p className="text-neutral-600">Gain visibility in our growing network of homeopathic practitioners and patients.</p>
                  </div>
                </li>
              </ul>
              
              <div className="mt-8 p-4 bg-white rounded-md border border-primary-100">
                <p className="text-sm text-neutral-700 italic">
                  "Joining CareAndCure was one of the best decisions for my practice. The platform helped me organize my cases and attract new patients who could see my treatment success stories."
                </p>
                <div className="flex items-center mt-4">
                  <img 
                    src="https://images.pexels.com/photos/5214961/pexels-photo-5214961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                    alt="Dr. Emma Wilson" 
                    className="w-10 h-10 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h4 className="font-medium text-sm">Dr. Emma Wilson</h4>
                    <p className="text-xs text-neutral-500">Member since 2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;