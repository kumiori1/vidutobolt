import React, { useState, useEffect, useCallback, useRef } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Menu, X, User as UserIcon, CreditCard, LogOut, Plus, MessageSquare, HelpCircle, Sun, Moon, Gift, Zap, Settings, Send, Upload, Play, Download, AlertCircle, Loader2, ArrowRight, Clock, Sparkles, TrendingUp, DollarSign, FileText, Star, Check, Building, Shield, Users, GitBranch, Share2, CheckCircle, Video, Calendar, Home } from 'lucide-react';
import { cn } from './lib/utils';

// Enhanced Home Page Component with more content
const HomePage = ({ user, onAuthRequired }) => {
  const [prompt, setPrompt] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  // Calculate videos created today based on time
  const getVideosCreatedToday = () => {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const baseCount = 127;
    const hourlyIncrease = hours * 15;
    const minuteVariation = Math.floor(minutes / 10) * 2;
    return baseCount + hourlyIncrease + minuteVariation;
  };

  return (
    <div className="min-h-screen bg-white">
      <Header user={user} onAuthRequired={onAuthRequired} currentPath="/" />
      
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
            
            {/* Social Proof */}
            <div className="flex items-center justify-center gap-4 mb-8 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>{getVideosCreatedToday()} videos created today</span>
              </div>
            </div>
          </div>

          {/* Demo Upload Section */}
          <div className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/40">
            <div className="mb-6">
              <label htmlFor="file-upload" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors">
                {selectedFile ? (
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="w-8 h-8 text-green-600" />
                    </div>
                    <p className="text-lg font-medium text-gray-900">{selectedFile.name}</p>
                    <p className="text-gray-600">Ready to create your video</p>
                  </div>
                ) : (
                  <div className="text-center">
                    <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-lg font-medium text-gray-900">Upload your product image</p>
                    <p className="text-gray-600">PNG, JPG up to 10MB</p>
                  </div>
                )}
              </label>
              <input
                id="file-upload"
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleFileUpload}
              />
            </div>
            
            <div className="mb-6">
              <Textarea
                placeholder="Describe your ideal video... (e.g., 'energetic product showcase for social media')"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                className="w-full h-24 text-lg"
              />
            </div>
            
            <Button
              onClick={onAuthRequired}
              size="lg"
              className="w-full bg-orange-500 text-white text-lg py-4 rounded-full hover:bg-orange-600 transform hover:scale-[1.02] transition-all duration-200 shadow-lg"
            >
              Create Video
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 leading-tight">
              How it works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              From product image to viral video in three simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Upload & Describe",
                description: "Upload your product image and describe your vision in plain English",
                icon: <Upload className="w-8 h-8 text-orange-500" />
              },
              {
                step: "02", 
                title: "AI Creates",
                description: "Our AI generates a professional 30-second video with scenes, voiceover, and music",
                icon: <Sparkles className="w-8 h-8 text-orange-500" />
              },
              {
                step: "03",
                title: "Download & Share",
                description: "Review, refine if needed, then download your viral-ready video",
                icon: <Download className="w-8 h-8 text-orange-500" />
              }
            ].map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  {step.icon}
                </div>
                <div className="text-sm font-medium text-orange-500 mb-2">{step.step}</div>
                <h3 className="text-xl font-normal text-gray-900 mb-4">{step.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Showcase Examples */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 leading-tight">
              See it in action
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Real examples from our customers
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Fashion Brand",
                description: "30% increase in conversion rates",
                image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop"
              },
              {
                title: "Electronics Store", 
                description: "50% more engagement on social media",
                image: "https://images.unsplash.com/photo-1468495244123-6c6c332eeece?w=400&h=300&fit=crop"
              },
              {
                title: "Beauty Products",
                description: "200% increase in video views",
                image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=300&fit=crop"
              }
            ].map((example, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="relative">
                  <img
                    src={example.image}
                    alt={example.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                    <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors">
                      <Play className="w-6 h-6 text-gray-900 ml-1" />
                    </button>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-normal text-gray-900 mb-2">{example.title}</h3>
                  <p className="text-gray-600 font-light">{example.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 leading-tight">
              Why choose Viduto?
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Clock className="w-8 h-8 text-orange-500" />,
                title: "10-Minute Turnaround",
                description: "Professional videos in about 10 minutes. No editing software required."
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
              },
              {
                icon: <Sparkles className="w-8 h-8 text-orange-500" />,
                title: "AI-Powered",
                description: "Advanced AI that understands your product and creates engaging narratives automatically."
              },
              {
                icon: <Video className="w-8 h-8 text-orange-500" />,
                title: "Professional Quality",
                description: "Studio-quality videos with professional voiceover, music, and transitions."
              },
              {
                icon: <Settings className="w-8 h-8 text-orange-500" />,
                title: "Easy Revisions",
                description: "Don't like something? Just tell us what to change in plain English and we'll fix it."
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-normal text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed font-light">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "10,000+", label: "Videos Created" },
              { number: "95%", label: "Customer Satisfaction" },
              { number: "30 sec", label: "Average Video Length" },
              { number: "10 min", label: "Creation Time" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-4xl md:text-5xl font-light text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TestimonialsSection onAuthRequired={onAuthRequired} />
      
      {/* Final CTA Section */}
      <section className="py-20 bg-orange-500">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6 leading-tight">
            Ready to create your first video?
          </h2>
          <p className="text-xl text-orange-100 mb-8 font-light">
            Join thousands of businesses already creating viral content with Viduto
          </p>
          <Button
            onClick={onAuthRequired}
            size="lg"
            className="bg-white text-orange-500 px-8 py-4 rounded-full font-normal hover:bg-gray-50 transform hover:scale-105 transition-all duration-200 shadow-lg"
          >
            Get Started Free
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

// Mock API functions
const mockApi = {
  User: {
    me: async () => ({ id: 1, full_name: 'Demo User', email: 'demo@viduto.com', credits: 150 })
  },
  Chat: {
    list: async () => [
      { id: 1, title: 'Product Showcase Video', created_at: new Date().toISOString(), workflow_state: 'draft' },
      { id: 2, title: 'Social Media Ad', created_at: new Date().toISOString(), workflow_state: 'completed' }
    ],
    create: async (data) => ({ id: Date.now(), ...data, created_at: new Date().toISOString() }),
    update: async (id, data) => ({ id, ...data })
  },
  Message: {
    list: async (chatId) => [
      { 
        id: 1, 
        chat_id: chatId, 
        message_type: 'user', 
        content: 'Create a product showcase video for my new sneakers',
        created_at: new Date().toISOString()
      },
      { 
        id: 2, 
        chat_id: chatId, 
        message_type: 'assistant', 
        content: '## 📝 Video Plan\n\nI\'ll create an engaging 30-second video for your sneakers with 5 dynamic scenes:\n\n**SCENE 1: HOOK** ⏱️ *[0:00-0:06]*\nOpening shot of sneakers in action\n\n**SCENE 2: INTRIGUE** ⏱️ *[0:06-0:12]*\nClose-up details and craftsmanship\n\n**SCENE 3: REVEAL** ⏱️ *[0:12-0:18]*\nFull product showcase from multiple angles\n\n**SCENE 4: BENEFIT** ⏱️ *[0:18-0:24]*\nComfort and performance demonstration\n\n**SCENE 5: PAYOFF** ⏱️ *[0:24-0:30]*\nFinal branded moment with call-to-action',
        created_at: new Date().toISOString(),
        metadata: { is_brief: true }
      }
    ],
    create: async (data) => ({ id: Date.now(), ...data, created_at: new Date().toISOString() })
  }
};

// Production Progress Component
const ProductionProgress = ({ progress, status, darkMode }) => {
  const getStatusColor = () => {
    switch (status) {
      case 'processing': return 'text-blue-500';
      case 'completed': return 'text-green-500';
      case 'error': return 'text-red-500';
      default: return darkMode ? 'text-gray-300' : 'text-gray-600';
    }
  };

  const getStatusText = () => {
    switch (status) {
      case 'processing': return 'Creating your video...';
      case 'completed': return 'Video completed!';
      case 'error': return 'Error occurred';
      default: return 'Preparing...';
    }
  };

  return (
    <div className={`p-4 rounded-lg border ${
      darkMode ? 'bg-gray-800 border-gray-700' : 'bg-gray-50 border-gray-200'
    }`}>
      <div className="flex items-center gap-3 mb-3">
        <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
          {status === 'processing' ? (
            <Loader2 className="w-4 h-4 text-orange-500 animate-spin" />
          ) : status === 'completed' ? (
            <Check className="w-4 h-4 text-green-500" />
          ) : (
            <AlertCircle className="w-4 h-4 text-red-500" />
          )}
        </div>
        <div className="flex-1">
          <p className={`font-medium ${getStatusColor()}`}>{getStatusText()}</p>
          <div className={`w-full bg-gray-200 rounded-full h-2 mt-1 ${darkMode ? 'bg-gray-700' : ''}`}>
            <div 
              className="bg-orange-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
        <span className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          {progress}%
        </span>
      </div>
      
      {status === 'processing' && (
        <p className={`text-xs ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
          This usually takes 1-2 minutes. Please don't close this window.
        </p>
      )}
    </div>
  );
};

// Enhanced Header Component with Mobile Menu
const Header = ({ user, onAuthRequired, currentPath }) => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="max-w-5xl mx-2 md:mx-auto p-2 px-4 mt-2 bg-white/70 backdrop-blur-md rounded-xl flex items-center justify-between shadow-sm">
          <Link to="/" className="flex items-center gap-2">
            <Logo size={32} />
            <span className="text-2xl font-light text-gray-900 tracking-tight hover:text-gray-700 transition-colors">
              Viduto
            </span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-4">
            <Link to="/features" className={`transition-colors font-normal ${currentPath === '/features' ? 'text-orange-500' : 'text-gray-700 hover:text-black'}`}>Features</Link>
            <a href="https://discord.gg/MdBr54xe" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-black transition-colors font-normal">Community</a>
            <Link to="/pricing" className={`transition-colors font-normal ${currentPath === '/pricing' ? 'text-orange-500' : 'text-gray-700 hover:text-black'}`}>Pricing</Link>
            <Link to="/blog" className={`transition-colors font-normal ${currentPath === '/blog' ? 'text-orange-500' : 'text-gray-700 hover:text-black'}`}>Blog</Link>
            <Link to="/enterprise" className={`transition-colors font-normal ${currentPath === '/enterprise' ? 'text-orange-500' : 'text-gray-700 hover:text-black'}`}>Enterprise</Link>
          </nav>

          <div className="flex items-center gap-2">
            {user ? (
              <Button asChild className="hidden md:inline-flex px-3 py-1.5 bg-orange-500 text-white font-normal text-sm rounded-full hover:bg-orange-500/90 transform hover:scale-[1.02] transition-all duration-200">
                <Link to="/dashboard">Dashboard</Link>
              </Button>
            ) : (
              <Button
                onClick={onAuthRequired}
                className="hidden md:inline-flex px-3 py-1.5 bg-orange-500 text-white font-normal text-sm rounded-full hover:bg-orange-500/90 transform hover:scale-[1.02] transition-all duration-200"
              >
                Get Started
              </Button>
            )}
            
            <button
              onClick={() => setShowMobileMenu(true)}
              className="md:hidden p-2 text-gray-700"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={showMobileMenu} onClose={() => setShowMobileMenu(false)} />
    </>
  );
};

// UI Components
const Button = ({ children, className = '', variant = 'default', size = 'default', ...props }) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
  
  const variants = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground",
    ghost: "hover:bg-accent hover:text-accent-foreground"
  };
  
  const sizes = {
    default: "h-10 py-2 px-4",
    sm: "h-9 px-3 rounded-md",
    lg: "h-11 px-8 rounded-md"
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};

const Input = ({ className = '', ...props }) => (
  <input
    className={`flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
);

const Textarea = ({ className = '', ...props }) => (
  <textarea
    className={`flex min-h-[80px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none ${className}`}
    {...props}
  />
);

// Logo Component
const Logo = ({ size = 32, className = '' }) => (
  <img 
    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a552913_vidutonobg.png"
    alt="Viduto Logo"
    className={`w-${size/4} h-${size/4} ${className}`}
    style={{ width: `${size}px`, height: `${size}px` }}
  />
);

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
    { id: 8, quote: "The quality is incredible and the speed is unmatched. Complete game changer for my business.", name: "James H.", role: "e-Commerce entrepreneur", avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" }
  ];

  return (
    <section className="bg-gradient-to-br from-blue-100 via-purple-100 to-orange-100 py-20 relative overflow-hidden">
      <style jsx>{`
        @keyframes scroll-infinite {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .animate-scroll-infinite {
          animation: scroll-infinite 40s linear infinite;
        }
        .scrolling-wrapper:hover .animate-scroll-infinite {
          animation-play-state: paused;
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 leading-tight">
            "Viduto just killed every video generation tool"
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            They call us the only video tool your product-based business needs.
          </p>
        </div>

        {/* Scrolling testimonials */}
        <div className="scrolling-wrapper overflow-hidden">
          <div className="flex animate-scroll-infinite" style={{ width: '200%' }}>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={index} className="flex-shrink-0 w-80 mx-4">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/40 h-full">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-800 mb-4 font-light italic">
                    "{testimonial.quote.length > 120 ? testimonial.quote.substring(0, 120) + '...' : testimonial.quote}"
                  </p>
                  <div className="flex items-center gap-3">
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
              </div>
            ))}
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

// Footer Component
const Footer = () => (
  <footer className="bg-gray-900 text-white py-20">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-4 gap-8">
        <div className="col-span-1">
          <div className="flex items-center gap-2 mb-4">
            <Logo size={32} />
            <span className="text-2xl font-light">Viduto</span>
          </div>
          <p className="text-gray-400 font-light">
            Create viral videos with your product images using AI. Professional 30-second videos in about 10 minutes.
          </p>
        </div>
        
        <div>
          <h4 className="font-normal text-lg mb-4">Product</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/features" className="hover:text-white transition-colors">Features</Link></li>
            <li><Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link></li>
            <li><Link to="/enterprise" className="hover:text-white transition-colors">Enterprise</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-normal text-lg mb-4">Resources</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/blog" className="hover:text-white transition-colors">Blog</Link></li>
            <li><a href="https://discord.gg/MdBr54xe" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Community</a></li>
          </ul>
        </div>
        
        <div>
          <h4 className="font-normal text-lg mb-4">Legal</h4>
          <ul className="space-y-2 text-gray-400">
            <li><Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-gray-800 mt-16 pt-8 text-center text-gray-400">
        <p>&copy; 2025 Viduto. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

// Auth Modal (Simplified)
const AuthModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Get Started</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X size={20} />
          </button>
        </div>
        <p className="text-gray-600 mb-4">Sign up to start creating amazing videos with Viduto.</p>
        <div className="space-y-4">
          <Input placeholder="Email address" type="email" />
          <Button className="w-full bg-orange-500 hover:bg-orange-600">Continue</Button>
        </div>
        <p className="text-xs text-gray-500 mt-4 text-center">
          By continuing, you agree to our Terms of Service and Privacy Policy.
        </p>
      </div>
    </div>
  );
};

// Chat Interface Component
const ChatInterface = ({ chatId, onChatUpdate, onCreditsRefreshed, onNewChat, darkMode }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (chatId) {
      loadMessages();
    }
  }, [chatId]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const loadMessages = async () => {
    try {
      const chatMessages = await mockApi.Message.list(chatId);
      setMessages(chatMessages);
    } catch (error) {
      console.error('Error loading messages:', error);
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() && !selectedFile) return;

    const userMessage = {
      message_type: 'user',
      content: input,
      created_at: new Date().toISOString()
    };

    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setInput('');

    // Simulate AI response
    setTimeout(async () => {
      const aiResponse = {
        message_type: 'assistant',
        content: `I'll help you create a professional video for "${input}". Here's what I'll include:\n\n• 30-second duration with 5 dynamic scenes\n• Professional voiceover and background music\n• Optimized for social media (9:16 format)\n• High-quality transitions and effects\n\nWould you like me to start production? This will cost 10 credits.`,
        created_at: new Date().toISOString()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      setSelectedFile(file);
    }
  };

  const renderMessage = (message, index) => {
    const isUser = message.message_type === 'user';
    
    return (
      <div key={message.id || index} className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
        <div className={`max-w-[85%] rounded-2xl p-4 shadow-sm ${
          isUser
            ? 'bg-orange-500 text-white'
            : darkMode ? 'bg-gray-800 text-gray-100' : 'bg-white text-gray-900 border'
        }`}>
          <div className="whitespace-pre-wrap">{message.content}</div>
          <div className={`text-xs mt-2 opacity-70 ${isUser ? 'text-orange-100' : darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
            {new Date(message.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </div>
        </div>
      </div>
    );
  };

  if (!chatId) {
    return (
      <div className={`flex flex-col h-full ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center max-w-2xl mx-auto px-6">
            <div className={`w-20 h-20 rounded-full mx-auto mb-6 flex items-center justify-center ${
              darkMode ? 'bg-orange-500/20' : 'bg-orange-100'
            }`}>
              <Logo size={40} />
            </div>
            
            <h2 className={`text-3xl font-light mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Ready to create amazing videos?
            </h2>
            <p className={`text-lg font-light mb-8 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
              Upload a product image or describe your vision to get started
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                "Product showcase video",
                "Social media ad",
                "Unboxing video",
                "Brand story video"
              ].map((prompt, index) => (
                <button
                  key={index}
                  onClick={() => setInput(prompt)}
                  className={`p-4 text-center rounded-xl border transition-all duration-200 ${
                    darkMode 
                      ? 'border-gray-600 bg-gray-800/50 text-gray-300 hover:border-orange-500/50 hover:bg-gray-700/50'
                      : 'border-gray-200 bg-white text-gray-700 hover:border-orange-500/50 hover:bg-orange-50'
                  }`}
                >
                  <div className="text-sm font-light">{prompt}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Input area for new chat */}
        <div className={`border-t p-6 ${darkMode ? 'border-gray-700 bg-gray-800/50' : 'border-gray-200 bg-white'}`}>
          <form onSubmit={handleSendMessage} className="max-w-4xl mx-auto">
            <div className="relative">
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Let's start creating your video..."
                className={`min-h-[60px] max-h-48 resize-none text-base pr-16 ${
                  darkMode 
                    ? 'bg-gray-700/50 border-gray-600 text-white placeholder-gray-400'
                    : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-500'
                }`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSendMessage(e);
                  }
                }}
              />

              <div className="absolute bottom-3 right-3 flex gap-2">
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="hidden"
                />
                
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => fileInputRef.current?.click()}
                  className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'}
                >
                  <Upload className="w-4 h-4" />
                </Button>
                
                <Button
                  type="submit"
                  size="sm"
                  disabled={!input.trim() && !selectedFile}
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                >
                  {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
                </Button>
              </div>
            </div>

            {selectedFile && (
              <div className={`flex items-center gap-2 mt-3 p-3 rounded-lg ${
                darkMode ? 'bg-gray-700/50' : 'bg-gray-100'
              }`}>
                <span className={`text-sm flex-1 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                  🖼️ {selectedFile.name}
                </span>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSelectedFile(null);
                    if (fileInputRef.current) {
                      fileInputRef.current.value = '';
                    }
                  }}
                  className={darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'}
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>
            )}
          </form>
        </div>
      </div>
    );
  }

  // Show existing chat interface
  return (
    <div className={`flex flex-col h-full ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages && messages.length > 0 ? (
          messages.map((message, index) => renderMessage(message, index))
        ) : (
          <div className="flex items-center justify-center h-full">
            <div className="text-center">
              <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
                darkMode ? 'bg-orange-500/20' : 'bg-orange-100'
              }`}>
                <Logo size={32} />
              </div>
              <h3 className={`text-xl font-light mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Start the conversation
              </h3>
              <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Upload an image or describe your video idea
              </p>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
      <div className={`border-t p-4 ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`}>
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <div className="flex-1">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              className={darkMode ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400' : ''}
            />
          </div>
          
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
          
          <Button
            type="button"
            variant="outline"
            onClick={() => fileInputRef.current?.click()}
            className={darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : ''}
          >
            <Upload className="w-4 h-4" />
          </Button>
          
          <Button
            type="submit"
            disabled={!input.trim() && !selectedFile}
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
          </Button>
        </form>
      </div>
    </div>
  );
};

// Mobile Menu Component
const MobileMenu = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      <div className="fixed inset-0 bg-black/50" onClick={onClose} />
      <div className="fixed right-0 top-0 h-full w-80 bg-white shadow-xl">
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex items-center gap-2">
            <Logo size={24} />
            <span className="text-xl font-light">Viduto</span>
          </div>
          <button onClick={onClose} className="p-2 text-gray-500">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <nav className="p-6 space-y-4">
          <Link to="/features" className="block py-2 text-gray-700 hover:text-black transition-colors">Features</Link>
          <a href="https://discord.gg/MdBr54xe" target="_blank" rel="noopener noreferrer" className="block py-2 text-gray-700 hover:text-black transition-colors">Community</a>
          <Link to="/pricing" className="block py-2 text-gray-700 hover:text-black transition-colors">Pricing</Link>
          <Link to="/blog" className="block py-2 text-gray-700 hover:text-black transition-colors">Blog</Link>
          <Link to="/enterprise" className="block py-2 text-gray-700 hover:text-black transition-colors">Enterprise</Link>
        </nav>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [user, setUser] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);

  const handleAuthRequired = () => {
    setShowAuthModal(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage user={user} onAuthRequired={handleAuthRequired} />} />
      </Routes>
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </Router>
  );
};

export default App;