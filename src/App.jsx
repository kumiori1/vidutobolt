import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link, useNavigate } from 'react-router-dom';
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
      <Link to="/" className="flex items-center gap-2">
        <img 
          src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68b4aa46f5d6326ab93c3ed0/17cb8e7bc_vidutonobg.png" 
          alt="Viduto Logo" 
          className="w-8 h-8" 
        />
        <span className="text-2xl font-light text-gray-900 tracking-tight hover:text-gray-700 transition-colors">
          Viduto
        </span>
      </Link>
      
      <nav className="hidden md:flex items-center gap-4">
        <Link to="/features" className="text-gray-700 hover:text-black transition-colors font-normal">Features</Link>
        <a href="https://discord.gg/MdBr54xe" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-colors font-normal">Community</a>
        <Link to="/pricing" className="text-gray-700 hover:text-black transition-colors font-normal">Pricing</Link>
        <Link to="/blog" className="text-gray-700 hover:text-black transition-colors font-normal">Blog</Link>
        <Link to="/enterprise" className="text-gray-700 hover:text-black transition-colors font-normal">Enterprise</Link>
      </nav>

      <div className="flex items-center gap-2">
        {user ? (
          <Button asChild className="px-3 py-1.5 bg-orange-500 text-white font-normal text-sm rounded-full hover:bg-orange-500/90 transform hover:scale-[1.02] transition-all duration-200">
            <Link to="/dashboard">Dashboard</Link>
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
            <li><Link to="/features" className="hover:text-white">Features</Link></li>
            <li><Link to="/pricing" className="hover:text-white">Pricing</Link></li>
            <li><Link to="/blog" className="hover:text-white">Blog</Link></li>
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
            <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
            <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
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
          <Link to="/features" onClick={onClose} className="block text-gray-700 hover:text-black transition-colors font-normal">Features</Link>
          <a href="https://discord.gg/MdBr54xe" target="_blank" rel="noopener noreferrer" className="block text-gray-700 hover:text-black transition-colors font-normal">Community</a>
          <Link to="/pricing" onClick={onClose} className="block text-gray-700 hover:text-black transition-colors font-normal">Pricing</Link>
          <Link to="/blog" onClick={onClose} className="block text-gray-700 hover:text-black transition-colors font-normal">Blog</Link>
          <Link to="/enterprise" onClick={onClose} className="block text-gray-700 hover:text-black transition-colors font-normal">Enterprise</Link>
        </nav>
        
        <div className="mt-8">
          {user ? (
            <Button asChild className="w-full">
              <Link to="/dashboard">Dashboard</Link>
            </Button>
          ) : (
            <Button onClick={() => { onAuthRequired(); onClose(); }} className="w-full">Get Started</Button>
          )}
        </div>
      </div>
    </div>
  );
};

// Page Layout Component
const PageLayout = ({ children, user, onAuthRequired }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header 
        user={user} 
        onAuthRequired={onAuthRequired}
        showMobileMenu={showMobileMenu}
        setShowMobileMenu={setShowMobileMenu}
      />
      {children}
      <Footer />
      <MobileMenu 
        isOpen={showMobileMenu} 
        onClose={() => setShowMobileMenu(false)} 
        user={user}
        onAuthRequired={onAuthRequired}
      />
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
    { id: 6, quote: "It's like Lovable but for marketing videos. The AI understands exactly what I need every time.", name: "Alex P.", role: "e-Commerce marketer", avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" }
  ];

  const row1Testimonials = [...testimonials.slice(0, 3), ...testimonials.slice(0, 3)];
  const row2Testimonials = [...testimonials.slice(3, 6), ...testimonials.slice(3, 6)];

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

// HOME PAGE
const HomePage = ({ user, onAuthRequired }) => {
  const [prompt, setPrompt] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  return (
    <PageLayout user={user} onAuthRequired={onAuthRequired}>
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
              onClick={onAuthRequired}
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

      <TestimonialsSection onAuthRequired={onAuthRequired} />

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
                  <Button onClick={onAuthRequired} className="w-full">
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
                  <Button onClick={onAuthRequired} className="w-full bg-white text-gray-900 hover:bg-gray-100">
                    Start Free Trial
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

// FEATURES PAGE
const FeaturesPage = ({ user, onAuthRequired }) => {
  const features = [
    {
      icon: <Camera className="w-8 h-8 text-orange-500" />,
      title: "Use Your Own Product",
      description: "Upload your actual product images and watch them come to life in professional video scenes. No generic stock footage—every frame shows your real product."
    },
    {
      icon: <Clock className="w-8 h-8 text-orange-500" />,
      title: "Lightning Fast Creation",
      description: "From concept to completed 30-second video in about 10 minutes. Our advanced AI handles everything end-to-end."
    },
    {
      icon: <Wand2 className="w-8 h-8 text-orange-500" />,
      title: "Fully Customizable",
      description: "Ask for changes in plain English—adjust scenes, pacing, mood, voiceover, and more."
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-orange-500" />,
      title: "Text-Based Creation",
      description: "Describe your vision and our AI handles scripting, scene generation, voiceover, and music selection. No editing software required."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-500" />,
      title: "Viral-Ready Content",
      description: "Optimized for engagement using insights from millions of social posts—built to capture attention and convert."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-orange-500" />,
      title: "Pay As You Go",
      description: "Flexible, credit-based pricing. Each revision costs 3 credits so you can refine without breaking the bank."
    }
  ];

  return (
    <PageLayout user={user} onAuthRequired={onAuthRequired}>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-100 via-purple-100 to-orange-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight">
            Top Features
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 font-light">
            Explore all the powerful features that make Viduto the ultimate AI video creation platform for your business.
          </p>
          <Button
            onClick={onAuthRequired}
            size="lg"
            className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full font-normal hover:bg-orange-500/90 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Start creating
            <ArrowRight size={20} />
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-normal text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed font-light">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

// PRICING PAGE
const PricingPage = ({ user, onAuthRequired }) => {
  const tiers = [
    {
      name: "Starter",
      price: "$20",
      period: "/month",
      credits: 60,
      features: [
        "60 video credits monthly",
        "Professional 30-second videos",
        "Product image upload",
        "AI-powered generation",
        "Email support",
        "Standard processing speed"
      ]
    },
    {
      name: "Creator",
      price: "$50",
      period: "/month", 
      credits: 150,
      features: [
        "150 video credits monthly",
        "All Starter features",
        "Priority email support",
        "Advanced customization",
        "Standard processing speed"
      ]
    },
    {
      name: "Pro",
      price: "$100",
      period: "/month",
      credits: 300,
      popular: true,
      features: [
        "300 video credits monthly",
        "All Creator features", 
        "Priority processing queue",
        "Beta features access",
        "Priority email support",
        "Analytics dashboard"
      ]
    },
    {
      name: "Elite",
      price: "$200",
      period: "/month",
      credits: 750,
      features: [
        "750 video credits monthly",
        "All Pro features",
        "Dedicated support", 
        "Priority processing queue",
        "Beta features access",
        "White-label options",
        "Custom integrations"
      ]
    }
  ];

  return (
    <PageLayout user={user} onAuthRequired={onAuthRequired}>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-100 via-purple-100 to-orange-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight">
            Plans from first idea to full scale
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 font-light">
            Start for free. Upgrade when you're ready.
          </p>
          <Button
            onClick={onAuthRequired}
            size="lg"
            className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full font-normal hover:bg-orange-500/90 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Start creating
            <ArrowRight size={20} />
          </Button>
        </div>
      </section>

      {/* Pricing Tiers */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tiers.map((tier, index) => (
              <div key={index} className={`relative bg-white border-2 rounded-2xl p-6 ${tier.popular ? 'border-orange-500' : 'border-gray-200'}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                  </div>
                )}
                
                <div className="text-center">
                  <h3 className="text-xl font-medium text-gray-900 mb-2">{tier.name}</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-light text-gray-900">{tier.price}</span>
                    <span className="text-gray-500">{tier.period}</span>
                  </div>
                  <p className="text-gray-600 mb-6">{tier.credits} credits per month</p>
                  
                  <ul className="space-y-3 mb-8 text-left">
                    {tier.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    onClick={onAuthRequired}
                    className={`w-full ${tier.popular ? 'bg-orange-500 text-white hover:bg-orange-600' : 'border border-gray-200 text-gray-900 hover:bg-gray-50'}`}
                    variant={tier.popular ? 'default' : 'outline'}
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

// BLOG PAGE
const BlogPage = ({ user, onAuthRequired }) => {
  const posts = [
    {
      id: 1,
      title: "How to Create Viral Product Videos with AI",
      excerpt: "Learn the secrets of creating engaging product videos that convert viewers into customers.",
      image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400",
      date: "2024-01-15",
      author: "Viduto Team"
    },
    {
      id: 2,
      title: "The Future of Video Marketing in 2024",
      excerpt: "Discover the latest trends and technologies shaping the video marketing landscape.",
      image: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=400",
      date: "2024-01-10",
      author: "Viduto Team"
    },
    {
      id: 3,
      title: "5 Tips for Better Product Photography",
      excerpt: "Improve your product photos to create even better AI-generated videos.",
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400",
      date: "2024-01-05",
      author: "Viduto Team"
    }
  ];

  return (
    <PageLayout user={user} onAuthRequired={onAuthRequired}>
      {/* Hero Section */}
      <section className="pt-32 pb-36 bg-gradient-to-br from-blue-100 via-purple-100 to-orange-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight">
            Our Blog
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 font-light">
            News, guides, and insights on AI-powered video creation for product marketing.
          </p>
          <Button 
            onClick={onAuthRequired} 
            size="lg" 
            className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full font-normal hover:bg-orange-500/90 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Start creating
            <ArrowRight size={20} />
          </Button>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="pt-14 pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article key={post.id} className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow">
                <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h2 className="text-xl font-medium text-gray-900 mb-3 line-clamp-2">{post.title}</h2>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{post.author}</span>
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

// ENTERPRISE PAGE
const EnterprisePage = ({ user, onAuthRequired }) => {
  const handleContactSales = () => {
    window.location.href = 'mailto:sales@viduto.com?subject=Enterprise Inquiry';
  };

  return (
    <PageLayout user={user} onAuthRequired={onAuthRequired}>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-orange-500/20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <div className="mb-4">
            <span className="bg-gray-100 text-gray-700 text-sm font-normal px-4 py-2 rounded-full">
              ENTERPRISE SOLUTIONS
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight">
            Ideas shouldn't wait for production.
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-8 font-light">
            Viduto empowers large teams and agencies to rapidly create, manage, and scale professional video content for all your marketing needs.
          </p>
          <Button
            onClick={handleContactSales}
            size="lg"
            className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full font-normal hover:bg-orange-500/90 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Contact Sales
            <ArrowRight size={20} />
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
              Built for enterprise scale
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Shield className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-normal text-gray-900 mb-4 text-center">
                Brand Safety
              </h3>
              <p className="text-gray-600 leading-relaxed font-light text-center">
                Ensure consistent brand compliance across all video content with advanced governance controls.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Users className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-normal text-gray-900 mb-4 text-center">
                Team Management
              </h3>
              <p className="text-gray-600 leading-relaxed font-light text-center">
                Manage unlimited team members with role-based permissions and collaborative workflows.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
              <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Building className="w-6 h-6 text-orange-500" />
              </div>
              <h3 className="text-xl font-normal text-gray-900 mb-4 text-center">
                API Integration
              </h3>
              <p className="text-gray-600 leading-relaxed font-light text-center">
                Integrate Viduto into your existing workflows with our comprehensive REST API and webhooks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
            Ready to transform your video workflow?
          </h2>
          <p className="text-xl text-gray-300 mb-8 font-light">
            Contact our enterprise team to discuss your specific needs.
          </p>
          <Button
            onClick={handleContactSales}
            size="lg"
            className="bg-orange-500 text-white px-8 py-4 rounded-full font-normal hover:bg-orange-500/90 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Contact Sales
          </Button>
        </div>
      </section>
    </PageLayout>
  );
};

// DASHBOARD (Simple placeholder - you already have this)
const Dashboard = ({ user }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-3xl font-light text-gray-900 mb-4">Dashboard</h1>
        <p className="text-gray-600">Welcome, {user?.full_name || 'User'}!</p>
        <p className="text-sm text-gray-500 mt-2">Dashboard functionality will be implemented here.</p>
      </div>
    </div>
  );
};

// MAIN APP COMPONENT
export default function App() {
  const [user, setUser] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkUser = async () => {
      try {
        const currentUser = await mockApi.User.me();
        setUser(currentUser);
      } catch (e) {
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    checkUser();
  }, []);

  const handleAuthRequired = () => {
    if (!user) {
      setShowAuthModal(true);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-orange-500" />
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage user={user} onAuthRequired={handleAuthRequired} />} />
        <Route path="/features" element={<FeaturesPage user={user} onAuthRequired={handleAuthRequired} />} />
        <Route path="/pricing" element={<PricingPage user={user} onAuthRequired={handleAuthRequired} />} />
        <Route path="/blog" element={<BlogPage user={user} onAuthRequired={handleAuthRequired} />} />
        <Route path="/enterprise" element={<EnterprisePage user={user} onAuthRequired={handleAuthRequired} />} />
        <Route 
          path="/dashboard" 
          element={
            user ? (
              <Dashboard user={user} />
            ) : (
              <Navigate to="/" replace />
            )
          } 
        />
        {/* Redirect any unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </Router>
  );
}