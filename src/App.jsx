import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, Menu, X, Play, Upload, Send, Camera, Clock, Wand2, 
  MessageSquare, TrendingUp, DollarSign, FileText, CreditCard, 
  Shield, Users, GitBranch, Share2, CheckCircle, Building, Video,
  User as UserIcon, LogOut, Plus, HelpCircle, Sun, Moon, Gift, Zap,
  Settings, Loader2, Download, AlertCircle, Check, Minus
} from 'lucide-react';
import { cn } from './lib/utils';

// Mock API functions (replace with actual API calls)
const mockApi = {
  User: {
    me: async () => {
      const user = JSON.parse(localStorage.getItem('mockUser') || 'null');
      if (!user) throw new Error('Not authenticated');
      return user;
    },
    signUp: async (email, password, fullName) => {
      const user = { 
        id: '1', 
        email, 
        full_name: fullName, 
        subscription_status: 'active',
        credits: 150 
      };
      localStorage.setItem('mockUser', JSON.stringify(user));
      return user;
    },
    signIn: async (email, password) => {
      const user = { 
        id: '1', 
        email, 
        full_name: 'Demo User', 
        subscription_status: 'active',
        credits: 150 
      };
      localStorage.setItem('mockUser', JSON.stringify(user));
      return user;
    },
    signOut: async () => {
      localStorage.removeItem('mockUser');
    }
  },
  Chat: {
    list: async () => [
      { id: '1', title: 'Product Video Demo', updated_date: new Date().toISOString() },
      { id: '2', title: 'Social Media Ad', updated_date: new Date().toISOString() }
    ],
    create: async (title) => ({ 
      id: Date.now().toString(), 
      title, 
      updated_date: new Date().toISOString() 
    })
  }
};

// UI Components
const Button = ({ children, onClick, className = '', variant = 'default', size = 'default', asChild, disabled, ...props }) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 disabled:pointer-events-none disabled:opacity-50';
  const variants = {
    default: 'bg-orange-500 text-white hover:bg-orange-600',
    outline: 'border border-gray-200 bg-white hover:bg-gray-50 text-gray-900',
    ghost: 'hover:bg-gray-100 text-gray-700',
    destructive: 'bg-red-500 text-white hover:bg-red-600'
  };
  const sizes = {
    default: 'h-10 px-4 py-2',
    sm: 'h-9 rounded-md px-3',
    lg: 'h-11 rounded-md px-8',
    icon: 'h-10 w-10'
  };
  
  const styles = cn(baseStyles, variants[variant], sizes[size], className);
  
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, { className: styles, onClick, ...props });
  }
  
  return (
    <button className={styles} onClick={onClick} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

const Input = ({ className = '', ...props }) => (
  <input
    className={cn(
      'flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 disabled:cursor-not-allowed disabled:opacity-50',
      className
    )}
    {...props}
  />
);

const Textarea = ({ className = '', ...props }) => (
  <textarea
    className={cn(
      'flex min-h-[80px] w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 disabled:cursor-not-allowed disabled:opacity-50',
      className
    )}
    {...props}
  />
);

// Header Component
const Header = ({ user, onAuthRequired, showMobileMenu, setShowMobileMenu }) => (
  <header className="fixed top-0 inset-x-0 z-50">
    <div className="max-w-5xl mx-2 md:mx-auto p-2 px-4 mt-2 glass-morphism rounded-xl flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.location.pathname !== '/' && (window.location.href = '/')}>
        <img 
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b4aa46f5d6326ab93c3ed0/17cb8e7bc_vidutonobg.png" 
          alt="Viduto Logo" 
          className="w-8 h-8" 
        />
        <span className="text-2xl font-light text-gray-900 tracking-tight hover:text-gray-700 transition-colors">
          Viduto
        </span>
      </div>
      
      <nav className="hidden md:flex items-center gap-4">
        <button className="text-gray-700 hover:text-black transition-colors font-normal">Features</button>
        <a href="https://discord.gg/MdBr54xe" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-colors font-normal">Community</a>
        <button className="text-gray-700 hover:text-black transition-colors font-normal">Pricing</button>
        <button className="text-gray-700 hover:text-black transition-colors font-normal">Blog</button>
      </nav>

      <div className="flex items-center gap-2">
        {user ? (
          <Button 
            onClick={() => window.location.href = '/dashboard'}
            className="px-3 py-1.5 bg-orange-500 text-white font-normal text-sm rounded-full hover:bg-orange-500/90 btn-hover-scale transition-all duration-200"
          >
            Dashboard
          </Button>
        ) : (
          <Button 
            onClick={onAuthRequired}
            className="px-3 py-1.5 bg-orange-500 text-white font-normal text-sm rounded-full hover:bg-orange-500/90 btn-hover-scale transition-all duration-200"
          >
            Get Started
          </Button>
        )}
        
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setShowMobileMenu(true)}
          className="md:hidden"
        >
          <Menu className="h-6 w-6 text-gray-700" />
        </Button>
      </div>
    </div>
  </header>
);

// Footer Component
const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 py-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b4aa46f5d6326ab93c3ed0/17cb8e7bc_vidutonobg.png" 
              alt="Viduto Logo" 
              className="w-6 h-6" 
            />
            <h3 className="font-normal text-white">Viduto</h3>
          </div>
          <p className="text-sm font-light">Transform your product images into viral video ads with AI-powered creation tools</p>
        </div>
        <div>
          <h3 className="font-normal text-white mb-4">Product</h3>
          <ul className="space-y-2 text-sm font-light">
            <li><button className="hover:text-white">Features</button></li>
            <li><button className="hover:text-white">Pricing</button></li>
            <li><button className="hover:text-white">Blog</button></li>
          </ul>
        </div>
        <div>
          <h3 className="font-normal text-white mb-4">Support</h3>
          <ul className="space-y-2 text-sm font-light">
            <li><a href="mailto:support@viduto.com" className="hover:text-white">support@viduto.com</a></li>
          </ul>
        </div>
        <div>
          <h3 className="font-normal text-white mb-4">Legal</h3>
          <ul className="space-y-2 text-sm font-light">
            <li><button className="hover:text-white">Terms of Service</button></li>
            <li><button className="hover:text-white">Privacy Policy</button></li>
          </ul>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm">
        <p className="font-light">&copy; {new Date().getFullYear()} Viduto. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// Auth Modal Component
const AuthModal = ({ isOpen, onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isLogin) {
        await mockApi.User.signIn(email, password);
      } else {
        await mockApi.User.signUp(email, password, fullName);
      }
      onClose();
      window.location.reload();
    } catch (error) {
      console.error('Auth error:', error);
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-light">{isLogin ? 'Sign In' : 'Sign Up'}</h2>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <Input
                type="text"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>
          )}
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Loading...
              </>
            ) : (
              isLogin ? 'Sign In' : 'Sign Up'
            )}
          </Button>
        </form>
        
        <div className="mt-4 text-center">
          <button 
            onClick={() => setIsLogin(!isLogin)}
            className="text-orange-500 hover:text-orange-600 text-sm"
          >
            {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
          </button>
        </div>
      </div>
    </div>
  );
};

// Mobile Menu Component
const MobileMenu = ({ isOpen, onClose, user, onAuthRequired }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/50 md:hidden">
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white p-6">
        <div className="flex justify-between items-center mb-6">
          <span className="text-xl font-light">Menu</span>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
        
        <nav className="space-y-4">
          <button className="block w-full text-left text-gray-700 hover:text-black transition-colors font-normal">Features</button>
          <a href="https://discord.gg/MdBr54xe" target="_blank" rel="noopener noreferrer" className="block text-gray-700 hover:text-black transition-colors font-normal">Community</a>
          <button className="block w-full text-left text-gray-700 hover:text-black transition-colors font-normal">Pricing</button>
          <button className="block w-full text-left text-gray-700 hover:text-black transition-colors font-normal">Blog</button>
        </nav>
        
        <div className="mt-8">
          {user ? (
            <Button 
              onClick={() => window.location.href = '/dashboard'}
              className="w-full"
            >
              Dashboard
            </Button>
          ) : (
            <Button onClick={onAuthRequired} className="w-full">Get Started</Button>
          )}
        </div>
      </div>
    </div>
  );
};

// Rest of the components remain the same as in the previous artifact...
// (TestimonialsSection, HomePage, Dashboard, ChatInterface, App)

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // For now, we'll just show the main application component from the previous artifact
  // In a real app, you'd have proper routing here
  return (
    <div>
      {/* Import the complete app from the main artifact */}
      {currentPath === '/dashboard' ? <div>Dashboard placeholder - use the main artifact</div> : <div>Home page placeholder - use the main artifact</div>}
    </div>
  );
}