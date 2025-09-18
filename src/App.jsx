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
    <div className="max-w-5xl mx-2 md:mx-auto p-2 px-4 mt-2 bg-white/70 backdrop-blur-md rounded-xl flex items-center justify-between shadow-sm">
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
            className="px-3 py-1.5 bg-orange-500 text-white font-normal text-sm rounded-full hover:bg-orange-500/90 transform hover:scale-[1.02] transition-all duration-200"
          >
            Dashboard
          </Button>
        ) : (
          <Button 
            onClick={onAuthRequired}
            className="px-3 py-1.5 bg-orange-500 text-white font-normal text-sm rounded-full hover:bg-orange-500/90 transform hover:scale-[1.02] transition-all duration-200"
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

// Testimonials Component
const TestimonialsSection = ({ onAuthRequired }) => {
  const testimonials = [
    { id: 1, quote: "This is no doubt the only video tool a product-based business need. Amazing results every time!", name: "Sarah M.", role: "e-Commerce entrepreneur", avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" },
    { id: 2, quote: "I just canceled 6 subscriptions thanks to Viduto.com. This tool replaced everything I was using before.", name: "David K.", role: "Agency owner", avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" },
    { id: 3, quote: "I can't believe I paid thousands for agencies and waited 6 weeks for ads. Viduto delivers in minutes!", name: "Emma R.", role: "e-Commerce marketer", avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" },
    { id: 4, quote: "My e-com campaigns just took off thanks to Viduto. So easy to A/B test creatives now!", name: "Michael T.", role: "e-Commerce entrepreneur", avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" },
    { id: 5, quote: "Finally a video tool that uses my actual product and not generic AI stock footage. Game changer!", name: "Jessica L.", role: "Video editor", avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" },
    { id: 6, quote: "It's like Lovable but for marketing videos. The AI understands exactly what I need every time.", name: "Alex P.", role: "e-Commerce marketer", avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" },
    { id: 7, quote: "Viduto saved me thousands on video production while delivering better results than agencies.", name: "Rachel W.", role: "Agency owner", avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" },
    { id: 8, quote: "The quality is incredible and the speed is unmatched. Complete game changer for my business.", name: "James H.", role: "e-Commerce entrepreneur", avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" },
  ];

  const row1Testimonials = [...testimonials.slice(0, 4), ...testimonials.slice(0, 4)];
  const row2Testimonials = [...testimonials.slice(4, 8), ...testimonials.slice(4, 8)];

  return (
    <section className="bg-gradient-to-br from-blue-100 via-purple-100 to-orange-100 py-20 relative overflow-hidden">
      <style jsx>{`
        @keyframes scroll-infinite {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes scroll-infinite-reverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .animate-scroll-infinite {
          animation: scroll-infinite 40s linear infinite;
        }
        .animate-scroll-infinite-reverse {
          animation: scroll-infinite-reverse 35s linear infinite;
        }
        .scrolling-wrapper:hover .animate-scroll-infinite,
        .scrolling-wrapper:hover .animate-scroll-infinite-reverse {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 leading-tight">
            "Viduto just killed every video generation tool"
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            They call us the only video tool your product-based business need.
          </p>
        </div>

        <div className="space-y-6 scrolling-wrapper">
          <div className="overflow-hidden">
            <div className="flex gap-6 animate-scroll-infinite min-w-max">
              {row1Testimonials.map((testimonial, index) => (
                <div
                  key={`row1-${testimonial.id}-${index}`}
                  className="bg-white/90 backdrop-blur-sm border border-white/40 rounded-2xl p-6 shadow-xl w-80 h-52 flex-shrink-0 flex flex-col"
                >
                  <blockquote className="text-gray-800 text-sm mb-4 leading-relaxed font-light flex-1 overflow-hidden">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-3 mt-auto">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                    />
                    <div>
                      <p className="font-normal text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600 font-light">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="flex gap-6 animate-scroll-infinite-reverse min-w-max">
              {row2Testimonials.map((testimonial, index) => (
                <div
                  key={`row2-${testimonial.id}-${index}`}
                  className="bg-white/90 backdrop-blur-sm border border-white/40 rounded-2xl p-6 shadow-xl w-80 h-52 flex-shrink-0 flex flex-col"
                >
                  <blockquote className="text-gray-800 text-sm mb-4 leading-relaxed font-light flex-1 overflow-hidden">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-3 mt-auto">
                    <img
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-md"
                    />
                    <div>
                      <p className="font-normal text-gray-900">{testimonial.name}</p>
                      <p className="text-sm text-gray-600 font-light">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button 
            onClick={onAuthRequired}
            className="bg-black text-white px-8 py-4 rounded-full font-normal hover:bg-gray-800 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Join thousands of happy customers
          </Button>
        </div>
      </div>
    </section>
  );
};

// Home Page Component
const HomePage = () => {
  const [user, setUser] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const currentUser = await mockApi.User.me();
        setUser(currentUser);
      } catch (e) {
        setUser(null);
      }
    };
    checkUser();
  }, []);

  const handleAuthRequired = () => {
    if (!user) {
      setShowAuthModal(true);
    } else {
      // Navigate to dashboard logic
      window.location.href = '/dashboard';
    }
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Header 
        user={user} 
        onAuthRequired={handleAuthRequired}
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
      />

      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-100 via-purple-100 to-orange-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight">
              Create viral videos with your product
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 font-light">
              Transform your product images into professional 30-second videos in about 10 minutes. Simply chat with AI.
            </p>
          </div>

          {/* Demo Upload Section */}
          <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/40">
            <div className="mb-6">
              <label htmlFor="file-upload" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                {selectedFile ? (
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <img 
                      src={URL.createObjectURL(selectedFile)} 
                      alt="Preview" 
                      className="h-32 w-32 object-cover rounded-lg mb-4"
                    />
                    <p className="text-sm text-gray-500">{selectedFile.name}</p>
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <Upload className="w-8 h-8 mb-4 text-gray-500" />
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> your product image
                    </p>
                    <p className="text-xs text-gray-500">PNG, JPG or JPEG</p>
                  </div>
                )}
                <input 
                  id="file-upload" 
                  type="file" 
                  className="hidden" 
                  accept="image/*"
                  onChange={handleFileUpload}
                />
              </label>
            </div>

            <div className="mb-6">
              <Textarea
                placeholder="Describe your video idea... (e.g., 'Create an energetic ad showing my headphones with upbeat music for fitness enthusiasts')"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="min-h-[100px] resize-none"
              />
            </div>

            <Button 
              onClick={handleAuthRequired}
              className="w-full bg-gradient-to-r from-orange-500 to-pink-500 text-white px-8 py-4 rounded-full font-normal hover:from-orange-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-200 shadow-lg"
              size="lg"
            >
              <Play className="w-5 h-5 mr-2" />
              Create Video
            </Button>
          </div>

          {/* Stats */}
          <div className="mt-12 flex justify-center items-center gap-8 text-gray-600">
            <div className="flex flex-col items-center gap-1 px-2">
              <span className="font-semibold text-gray-900 text-xl">~10min</span>
              <span className="text-gray-600 font-light text-base">Generation</span>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="flex flex-col items-center gap-1 px-2">
              <span className="font-semibold text-gray-900 text-xl">30sec</span>
              <span className="text-gray-600 font-light text-base">Perfect length</span>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="flex flex-col items-center gap-1 px-2">
              <span className="font-semibold text-gray-900 text-xl">∞</span>
              <span className="text-gray-600 font-light text-base">Easier</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 leading-tight">
              Professional videos in minutes, not weeks
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Everything you need to create viral-ready content that converts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Camera className="w-6 h-6 text-orange-500" />
              </div>
              <h4 className="text-lg font-medium mb-2 text-gray-900">Use Your Own Product</h4>
              <p className="text-gray-600 font-light">Upload your actual product images and watch them come to life in professional video scenes.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-6 h-6 text-orange-500" />
              </div>
              <h4 className="text-lg font-medium mb-2 text-gray-900">Lightning Fast Creation</h4>
              <p className="text-gray-600 font-light">From concept to completed 30-second video in about 10 minutes.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Wand2 className="w-6 h-6 text-orange-500" />
              </div>
              <h4 className="text-lg font-medium mb-2 text-gray-900">Fully Customizable</h4>
              <p className="text-gray-600 font-light">Ask for changes in plain English—adjust scenes, pacing, mood, and more.</p>
            </div>
          </div>
        </div>
      </section>

      <TestimonialsSection onAuthRequired={handleAuthRequired} />

      {/* Pricing Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-12">
            <div className="lg:w-1/2">
              <h2 className="text-4xl md:text-5xl font-light text-white mb-4 leading-tight">
                Pricing plans for{' '}
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">every need</span>
              </h2>
              <p className="text-xl text-gray-400 font-light mb-8">Scale as you go with plans designed to match your growth.</p>
            </div>
            <div className="lg:w-1/2 grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-1">
                <div className="bg-white rounded-2xl p-8 flex flex-col h-full">
                  <h3 className="text-2xl font-light text-gray-900 mb-6">Start for free.</h3>
                  <div className="mb-8 flex-grow">
                    <ul className="space-y-3">
                      {["20 free credits", "HD quality output", "Commercial usage rights", "Email support"].map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <Check size={16} className="text-green-500 flex-shrink-0" />
                          <span className="text-gray-700 font-light">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button onClick={handleAuthRequired} className="w-full">
                    Get Started
                  </Button>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-1">
                <div className="bg-gray-900 rounded-2xl p-8 flex flex-col h-full text-white">
                  <div className="mb-4">
                    <span className="bg-orange-500 text-white text-xs font-normal px-3 py-1 rounded-full">
                      MOST POPULAR
                    </span>
                  </div>
                  <h3 className="text-2xl font-light mb-2">Pro</h3>
                  <div className="mb-6">
                    <span className="text-4xl font-light">$100</span>
                    <span className="text-gray-400 font-light">/month</span>
                  </div>
                  <div className="mb-8 flex-grow">
                    <ul className="space-y-3">
                      {["300 video credits monthly", "All Creator features", "Priority processing queue", "Beta features access", "Analytics dashboard"].map((item) => (
                        <li key={item} className="flex items-center gap-3">
                          <Check size={16} className="text-green-500 flex-shrink-0" />
                          <span className="text-gray-300 font-light">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button onClick={handleAuthRequired} className="w-full bg-white text-gray-900 hover:bg-gray-100">
                    Start Free Trial
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
      <MobileMenu 
        isOpen={showMobileMenu} 
        onClose={() => setShowMobileMenu(false)} 
        user={user}
        onAuthRequired={handleAuthRequired}
      />
    </div>
  );
};

// Dashboard Component
const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [chats, setChats] = useState([]);
  const [currentChatId, setCurrentChatId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [userCredits, setUserCredits] = useState(150);

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        const currentUser = await mockApi.User.me();
        setUser(currentUser);
        const chatList = await mockApi.Chat.list();
        setChats(chatList);
        if (chatList.length > 0) {
          setCurrentChatId(chatList[0].id);
        }
      } catch (error) {
        window.location.href = '/';
      } finally {
        setLoading(false);
      }
    };
    loadDashboard();
  }, []);

  const createNewChat = async () => {
    const newChat = await mockApi.Chat.create('New Video Project');
    setChats([newChat, ...chats]);
    setCurrentChatId(newChat.id);
  };

  const handleSignOut = async () => {
    await mockApi.User.signOut();
    window.location.href = '/';
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-orange-500" />
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:static inset-y-0 left-0 z-50 w-80 ${darkMode ? 'bg-gray-800' : 'bg-white'} border-r ${darkMode ? 'border-gray-700' : 'border-gray-200'} transition-transform duration-300 flex flex-col`}>
        
        {/* Sidebar Header */}
        <div className={`p-4 md:p-6 border-b flex items-center justify-between ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex items-center gap-3">
            <img 
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b4aa46f5d6326ab93c3ed0/17cb8e7bc_vidutonobg.png" 
              alt="Viduto" 
              className="w-8 h-8"
            />
            <span className={`text-xl font-light ${darkMode ? 'text-white' : 'text-gray-900'}`}>Viduto</span>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDarkMode(!darkMode)}
              className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? <Sun size={16} /> : <Moon size={16} />}
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(false)}
            className="md:hidden"
          >
            <X size={20} />
          </Button>
        </div>

        {/* User Info */}
        <div className={`p-4 md:p-6 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex items-center gap-3 mb-3">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
              <UserIcon size={16} className="text-white md:w-5 md:h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <p className={`text-sm md:text-base font-normal truncate ${darkMode ? 'text-white' : 'text-gray-900'}`}>{user?.full_name || 'User'}</p>
              <p className={`text-xs md:text-sm font-light truncate ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>{user?.email}</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <span className={`text-xs md:text-sm font-light ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Credits</span>
              <div className="flex items-center gap-2">
                <Zap size={16} className="text-orange-500" />
                <span className="text-sm md:text-base text-orange-500 font-bold">{userCredits}</span>
              </div>
            </div>
            <Button
              size="sm"
              variant="outline"
              className={darkMode ? 'border-gray-600 text-gray-200 hover:bg-gray-700' : 'border-gray-200 text-gray-700 hover:bg-gray-100'}
            >
              Buy More
            </Button>
          </div>
        </div>

        {/* New Project Button */}
        <div className="p-3 md:p-4">
          <Button
            onClick={createNewChat}
            className="w-full flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-3 bg-orange-500 text-white font-normal text-sm md:text-base rounded-full hover:bg-orange-500/90 transform hover:scale-[1.02] transition-all duration-200 shadow-lg"
          >
            <Plus size={16} />
            New Project
          </Button>
        </div>

        {/* Chat List */}
        <div className="flex-1 overflow-y-auto p-3 md:p-4">
          <h4 className={`text-xs md:text-sm font-normal mb-2 md:mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Recent Projects</h4>
          <div className="space-y-2">
            {chats.length === 0 ? (
              <div className={`text-center py-6 md:py-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <p className="text-sm md:text-base font-light">No projects yet</p>
                <p className="text-xs md:text-sm mt-1 font-light">Create your first video!</p>
              </div>
            ) : (
              chats.map((chat) => (
                <button
                  key={chat.id}
                  onClick={() => {
                    setCurrentChatId(chat.id);
                    setSidebarOpen(false);
                  }}
                  className={`w-full text-left p-2 md:p-3 rounded-lg transition-colors ${
                    currentChatId === chat.id
                      ? 'bg-orange-500/10 text-orange-500 font-normal border border-orange-500/30'
                      : darkMode 
                        ? 'text-gray-300 hover:bg-gray-700 font-light'
                        : 'text-gray-700 hover:bg-gray-100 font-light'
                  }`}
                >
                  <p className="text-sm md:text-base font-normal truncate">{chat.title || 'New Video Project'}</p>
                  <p className={`text-xs md:text-sm mt-1 font-light ${darkMode ? 'text-gray-500' : 'text-gray-600'}`}>
                    {new Date(chat.updated_date).toLocaleDateString()}
                  </p>
                </button>
              ))
            )}
          </div>
        </div>

        {/* Bottom Actions */}
        <div className={`border-t p-3 md:p-4 space-y-2 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <button
            className={`w-full flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 rounded-lg transition-colors font-normal text-sm md:text-base mb-2 bg-gradient-to-r from-orange-500 to-pink-500 text-white hover:from-orange-600 hover:to-pink-600`}
          >
            <Gift size={16} />
            Win FREE Credits!
          </button>
          
          <button
            className={`w-full flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 rounded-lg transition-colors font-normal text-sm md:text-base ${
              darkMode ? 'text-gray-300 hover:text-gray-100 hover:bg-gray-700' : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'
            }`}
          >
            <CreditCard size={16} />
            My Subscription
          </button>

          <button
            onClick={handleSignOut}
            className={`w-full flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 rounded-lg transition-colors font-normal text-sm md:text-base ${
              darkMode 
                ? 'text-gray-300 hover:text-red-400 hover:bg-red-900/20' 
                : 'text-gray-700 hover:text-red-600 hover:bg-red-50'
            }`}
          >
            <LogOut size={16} />
            Log Out
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Mobile Header */}
        <div className={`md:hidden p-4 flex items-center justify-between ${darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'} border-b`}>
          <button
            onClick={() => setSidebarOpen(true)}
            className={`p-2 rounded-lg transition-colors ${
              darkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-100'
            }`}
          >
            <Menu size={20} className={darkMode ? 'text-gray-300' : 'text-gray-700'} />
          </button>
          <span className={`font-medium ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            {chats.find(c => c.id === currentChatId)?.title || 'Dashboard'}
          </span>
          <div className="w-8"></div>
        </div>

        {/* Chat Interface */}
        <div className="flex-1 flex flex-col">
          {currentChatId ? (
            <ChatInterface chatId={currentChatId} darkMode={darkMode} />
          ) : (
            <div className={`flex-1 flex items-center justify-center ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plus className="w-8 h-8 text-orange-500" />
                </div>
                <h3 className={`text-xl font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                  Ready to create your first video?
                </h3>
                <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'} mb-6`}>
                  Upload your product image and describe your vision
                </p>
                <Button onClick={createNewChat}>
                  <Plus className="w-4 h-4 mr-2" />
                  New Project
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Backdrop for mobile sidebar */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 md:hidden" 
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

// Chat Interface Component
const ChatInterface = ({ chatId, darkMode }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() && !selectedFile) return;
    
    setIsLoading(true);
    
    // Add user message
    const userMessage = {
      id: Date.now(),
      type: 'user',
      content: input,
      file: selectedFile
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setSelectedFile(null);
    
    // Simulate AI response
    setTimeout(() => {
      const aiMessage = {
        id: Date.now() + 1,
        type: 'assistant',
        content: "I'll help you create an amazing video! Let me start working on your project. This will take about 10 minutes to complete.",
        isGenerating: true
      };
      setMessages(prev => [...prev, aiMessage]);
      setIsLoading(false);
      
      // Simulate video generation completion
      setTimeout(() => {
        setMessages(prev => prev.map(msg => 
          msg.id === aiMessage.id 
            ? { ...msg, content: "Your video is ready! Here's your professional 30-second product video.", isGenerating: false, hasVideo: true }
            : msg
        ));
      }, 5000);
    }, 1000);
  };

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <div className={`flex-1 flex flex-col ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-8 h-8 text-orange-500" />
            </div>
            <h3 className={`text-xl font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Let's create something amazing!
            </h3>
            <p className={`${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Upload your product image and tell me what kind of video you want to create.
            </p>
          </div>
        )}

        {messages.map((message) => (
          <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-3xl rounded-lg p-4 ${
              message.type === 'user' 
                ? 'bg-orange-500 text-white' 
                : darkMode 
                  ? 'bg-gray-800 text-gray-100' 
                  : 'bg-gray-100 text-gray-900'
            }`}>
              {message.file && (
                <img 
                  src={URL.createObjectURL(message.file)} 
                  alt="Uploaded" 
                  className="w-32 h-32 object-cover rounded-lg mb-2"
                />
              )}
              <p>{message.content}</p>
              {message.isGenerating && (
                <div className="flex items-center gap-2 mt-2">
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span className="text-sm">Generating video...</span>
                </div>
              )}
              {message.hasVideo && (
                <div className="mt-4 space-y-2">
                  <div className="bg-gray-800 rounded-lg p-4 text-center">
                    <Play className="w-12 h-12 text-white mx-auto mb-2" />
                    <p className="text-white text-sm">Video Preview</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" className="flex-1">
                      <Download className="w-4 h-4 mr-1" />
                      Download
                    </Button>
                    <Button size="sm" variant="outline" className="flex-1">
                      <Wand2 className="w-4 h-4 mr-1" />
                      Request Changes
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className={`border-t p-4 ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`}>
        <form onSubmit={handleSubmit} className="flex gap-2">
          {selectedFile && (
            <div className="flex items-center gap-2 bg-orange-100 rounded-lg p-2">
              <img src={URL.createObjectURL(selectedFile)} alt="Preview" className="w-8 h-8 object-cover rounded" />
              <span className="text-xs text-orange-800 truncate max-w-20">{selectedFile.name}</span>
              <button type="button" onClick={() => setSelectedFile(null)}>
                <X className="w-4 h-4 text-orange-600" />
              </button>
            </div>
          )}
          
          <div className="flex-1 flex gap-2">
            <input
              type="file"
              id="file-upload"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => document.getElementById('file-upload')?.click()}
            >
              <Upload className="w-4 h-4" />
            </Button>
            
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Describe your video idea..."
              className="flex-1"
            />
            
            <Button type="submit" disabled={isLoading || (!input.trim() && !selectedFile)}>
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Main App Component
export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };
    
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  return (
    <div>
      {currentPath === '/dashboard' ? <Dashboard /> : <HomePage />}
    </div>
  );
}