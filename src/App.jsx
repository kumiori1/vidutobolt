// Home Page Component
const HomePage = ({ user, onAuthRequired }) => {
  return (
    <PageLayout user={user} onAuthRequired={onAuthRequired}>
      <section className="pt-32 pb-36 bg-gradient-to-br from-blue-100 via-purple-100 to-orange-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight">
            Create viral videos with your product
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 font-light">
            Upload your product image and chat with AI to generate professional 30-second videos optimized for social media in about 10 minutes.
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

      <section className="py-20 bg-white">
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
                image// Subscription Page Component
const SubscriptionPage = ({ user, darkMode, onManageBilling }) => {
  const [loading, setLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);

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

  const handleSelectPlan = async (tier) => {
    setLoading(true);
    setSelectedPlan(tier.name);
    setTimeout(() => {
      console.log(`Selected plan: ${tier.name}`);
      toast.success(`${tier.name} plan selected!`);
      setLoading(false);
      setSelectedPlan(null);
    }, 2000);
  };

  return (
    <div className={`min-h-full ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="max-w-7xl mx-auto p-6">
        <div className="text-center mb-8">
          <h1 className={`text-3xl font-light mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Choose Your Plan
          </h1>
          <p className={`text-lg font-light ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            Flexible, credit-based pricing. Scale up or down anytime.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {tiers.map((tier, index) => (
            <div key={index} className={`relative rounded-2xl p-6 ${
              tier.popular 
                ? 'border-2 border-orange-500' 
                : darkMode ? 'border border-gray-700 bg-gray-800' : 'border border-gray-200 bg-white'
            }`}>
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { 
  Menu, X, User as UserIcon, CreditCard, LogOut, Plus, MessageSquare, HelpCircle, 
  Sun, Moon, Gift, Zap, Settings, Send, Upload, Play, Download, AlertCircle, 
  Loader2, ArrowRight, Clock, Sparkles, TrendingUp, DollarSign, FileText, 
  Star, Check, Building, Shield, Users, GitBranch, Share2, CheckCircle, 
  Video, Calendar, Home, Camera, Wand2, Edit, Minus 
} from 'lucide-react';

// Utility Functions
const cn = (...classes) => classes.filter(Boolean).join(' ');

const toast = {
  success: (message) => console.log('✅ SUCCESS:', message),
  error: (message) => console.log('❌ ERROR:', message),
  info: (message) => console.log('ℹ️ INFO:', message)
};

// Mock API System
const mockApi = {
  User: {
    me: async () => {
      const user = JSON.parse(localStorage.getItem('mockUser') || 'null');
      if (!user) throw new Error('Not authenticated');
      return user;
    },
    logout: async () => {
      localStorage.removeItem('mockUser');
      localStorage.removeItem('mockChats');
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
    }
  },
  Chat: {
    filter: async (filters, sort) => {
      const chats = JSON.parse(localStorage.getItem('mockChats') || '[]');
      return chats;
    },
    create: async (data) => {
      const newChat = { 
        id: Date.now().toString(), 
        ...data, 
        created_at: new Date().toISOString(),
        updated_date: new Date().toISOString()
      };
      const chats = JSON.parse(localStorage.getItem('mockChats') || '[]');
      chats.unshift(newChat);
      localStorage.setItem('mockChats', JSON.stringify(chats));
      return newChat;
    },
    update: async (id, data) => ({ id, ...data })
  },
  Message: {
    filter: async (chatId) => {
      if (!chatId) return [];
      return [
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
          content: `## 🎬 Video Plan

I'll create an engaging 30-second video for your sneakers with 5 dynamic scenes:

**SCENE 1: HOOK** ⏱️ *[0:00-0:06]*
Opening shot of sneakers in action

**SCENE 2: INTRIGUE** ⏱️ *[0:06-0:12]*
Close-up details and craftsmanship

**SCENE 3: REVEAL** ⏱️ *[0:12-0:18]*
Full product showcase from multiple angles

**SCENE 4: BENEFIT** ⏱️ *[0:18-0:24]*
Comfort and performance demonstration

**SCENE 5: PAYOFF** ⏱️ *[0:24-0:30]*
Final branded moment with call-to-action

Ready to start production? This will cost 10 credits.`,
          created_at: new Date().toISOString(),
          metadata: { is_brief: true, is_approval_section: true }
        }
      ];
    },
    create: async (data) => ({ id: Date.now(), ...data, created_at: new Date().toISOString() })
  }
};

// UI Components
const Button = ({ children, className = '', variant = 'default', size = 'default', asChild, disabled, onClick, ...props }) => {
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
      'flex min-h-[80px] w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500 disabled:cursor-not-allowed disabled:opacity-50 resize-none',
      className
    )}
    {...props}
  />
);

// Logo Component
const Logo = ({ size = 32, className = '' }) => (
  <img 
    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69a552913_vidutonobg.png"
    alt="Viduto Logo"
    className={className}
    style={{ width: `${size}px`, height: `${size}px` }}
  />
);

// Blog Posts Data
const postsData = [
  {
    id: "p12",
    slug: "complete-guide-to-text-based-video-creation",
    title: "Complete Guide to Text-Based Video Creation [No Skills Needed]",
    meta_description: "Master text-based video creation without any technical skills. Create professional videos just by typing. Examples and templates included.",
    excerpt: "If you can write an email, you can create professional videos. Type what you want, get a polished video in minutes.",
    cover_image_url: "https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=1600&auto=format&fit=crop",
    author: "Viduto Team",
    tags: ["Guides", "Text-to-Video", "AI"],
    reading_time: "7 min",
    published_at: "2024-01-20T12:00:00Z",
    content: `## The Skill Making Editing Obsolete
If you can type, you can create professional videos—no courses, no tutorials.

### What is Text-Based Video Creation?
Describe your video in plain English. AI creates it professionally.
- You write: "Show my product with energetic music and modern transitions."
- You get: A polished 30-second video ready for Reels, TikTok, Shorts.

### The Process
1. Write your core description (what to show, how it should feel, who it's for).
2. Add specifics (features to highlight, lifestyle context, CTA).
3. Upload assets (logos, product images).
4. Let AI work (~10 minutes).
5. Refine with simple instructions ("Make the opening more dramatic").

### Templates
- Product Launch: "Create exciting product reveal with anticipation and powerful ending."
- Social: "Trendy, fast-paced lifestyle edit of [product] for IG Reels."
- Business Intro: "Professional overview with trustworthy tone and modern style."

### Why Text Wins
- Cost: $20/month vs. thousands in agency fees.
- Speed: 10 minutes vs. 30 hours of production.
- Accessibility: Anyone can do it.

### Real-World Wins
- E-commerce: "Show product from 3 angles with upbeat music" → ready for product page.
- Social: "Trendy lifestyle edit with viral transitions" → publish same day.

Typing is the new editing.`
  },
  {
    id: "p11",
    slug: "ten-minute-video-creation",
    title: "10-Minute Video Creation: Faster Than Agencies Reply to Emails",
    meta_description: "Create professional videos in 10 minutes while agencies take weeks. The exact process and comparisons. Start from $20/month.",
    excerpt: "Create a professional 30-second video in 10 minutes—while agencies are still reading your brief.",
    cover_image_url: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1600&auto=format&fit=crop",
    author: "Viduto Team",
    tags: ["Speed", "Agencies", "Efficiency"],
    reading_time: "5 min",
    published_at: "2024-01-15T12:00:00Z",
    content: `## Speed That Changes Everything
While agencies take 3-6 weeks, you can have professional videos in 10 minutes.

### The 10-Minute Breakdown
- **Minute 1-2**: Upload product image and write brief
- **Minute 3**: AI analyzes and creates video plan
- **Minute 4-9**: Video generation and processing
- **Minute 10**: Download and publish

### Agency vs. Viduto
**Traditional Agency:**
- Initial call: 1 week wait
- Brief discussion: Another week
- First draft: 2-3 weeks
- Revisions: 1-2 weeks each
- Final delivery: 6-8 weeks total
- Cost: $3,000-$15,000

**Viduto:**
- Upload and describe: 2 minutes
- AI creates video: 8 minutes
- Revisions: 3 minutes each
- Total time: 10 minutes
- Cost: $20/month

### Why Speed Matters
- Launch products faster
- Test multiple concepts same day
- React to trends immediately
- Reduce time-to-market by months

The future belongs to the fast.`
  },
  {
    id: "p10",
    slug: "product-videos-that-convert",
    title: "Product Videos That Convert: Data From 10,000+ Videos",
    meta_description: "Analysis of 10,000+ product videos reveals what makes viewers buy. Hook strategies, optimal length, and conversion patterns.",
    excerpt: "We analyzed 10,000+ product videos to find what makes people buy. Here's what converts.",
    cover_image_url: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1600&auto=format&fit=crop",
    author: "Viduto Team",
    tags: ["Conversion", "Data", "Strategy"],
    reading_time: "8 min",
    published_at: "2024-01-10T12:00:00Z",
    content: `## What 10,000+ Videos Taught Us About Conversion

After analyzing thousands of product videos, clear patterns emerge.

### The Hook That Works
**First 3 seconds determine everything:**
- 73% of viewers decide to keep watching in first 3 seconds
- Problem-solution hooks convert 2.3x better than feature lists
- Movement or transformation gets 67% more engagement

### Optimal Video Structure
**30-Second Formula (Based on Data):**
- 0-3s: Hook with problem or transformation
- 3-12s: Show product solving the problem
- 12-24s: Social proof or lifestyle context
- 24-30s: Clear call-to-action

### Length vs. Conversion
- 15-30 seconds: Highest conversion rates
- 30-60 seconds: Best for complex products
- 60+ seconds: Significant drop-off

### Visual Patterns That Convert
1. **Multiple angles**: +45% conversion
2. **Lifestyle context**: +38% engagement
3. **Before/after**: +52% for problem-solving products
4. **Text overlays**: +23% retention

### Platform Differences
**Instagram Reels**: Trendy, fast-paced
**TikTok**: Authentic, relatable
**YouTube Shorts**: Educational angle
**Facebook**: Emotional connection

The data doesn't lie: structure beats creativity for conversion.`
  }
];

// Post Card Component
const PostCard = ({ post }) => (
  <article className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300 group">
    <div className="relative overflow-hidden">
      <img
        src={post.cover_image_url}
        alt={post.title}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute top-4 left-4">
        <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">
          {post.tags[0]}
        </span>
      </div>
    </div>
    <div className="p-6">
      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
        <span>{post.reading_time} read</span>
        <span>{new Date(post.published_at).toLocaleDateString()}</span>
      </div>
      <h3 className="text-xl font-normal text-gray-900 mb-3 leading-tight group-hover:text-orange-600 transition-colors">
        {post.title}
      </h3>
      <p className="text-gray-600 leading-relaxed font-light mb-4">
        {post.excerpt}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-500">{post.author}</span>
        <Button variant="ghost" size="sm" className="text-orange-600 hover:text-orange-700">
          Read More →
        </Button>
      </div>
    </div>
  </article>
);

// Production Progress Component
const ProductionProgress = ({ videoId, startedAt, darkMode = false, onCancel, isCancelling = false }) => {
  const [elapsedSeconds, setElapsedSeconds] = useState(0);
  const [isOverTime, setIsOverTime] = useState(false);

  const isRevision = videoId && videoId.startsWith('revision_');
  const estimatedTotalTimeMinutes = isRevision ? 5 : 12;
  const estimatedTotalSeconds = estimatedTotalTimeMinutes * 60;

  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const elapsed = Math.floor((now - startedAt) / 1000);
      setElapsedSeconds(elapsed);
      setIsOverTime(elapsed > estimatedTotalSeconds);
    }, 1000);

    return () => clearInterval(interval);
  }, [startedAt, estimatedTotalSeconds]);

  const progress = Math.min((elapsedSeconds / estimatedTotalSeconds) * 100, 100);
  const remainingSeconds = Math.max(estimatedTotalSeconds - elapsedSeconds, 0);
  const remainingMinutes = Math.floor(remainingSeconds / 60);
  const remainingSecondsDisplay = remainingSeconds % 60;

  return (
    <div className={`rounded-2xl p-6 border ${
      darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
    }`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
            darkMode ? 'bg-orange-500/20' : 'bg-orange-100'
          }`}>
            <Loader2 className="w-6 h-6 text-orange-500 animate-spin" />
          </div>
          <div>
            <h3 className={`font-normal ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              {isRevision ? 'Creating Revision' : 'Creating Your Video'}
            </h3>
            <p className={`text-sm font-light ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Estimated: {estimatedTotalTimeMinutes} minutes
            </p>
          </div>
        </div>
        
        <Button
          onClick={onCancel}
          disabled={isCancelling}
          variant="outline"
          size="sm"
          className={darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : ''}
        >
          {isCancelling ? <Loader2 className="w-4 h-4 animate-spin" /> : 'Cancel'}
        </Button>
      </div>

      <div className={`w-full rounded-full h-3 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'}`}>
        <div
          className={`h-3 rounded-full transition-all duration-300 ${
            isOverTime ? 'bg-yellow-500' : 'bg-orange-500'
          }`}
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="flex justify-between items-center mt-3 text-sm">
        <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
          {Math.floor(elapsedSeconds / 60)}:{(elapsedSeconds % 60).toString().padStart(2, '0')} elapsed
        </span>
        <span className={darkMode ? 'text-gray-400' : 'text-gray-600'}>
          {isOverTime ? 'Processing...' : `${remainingMinutes}:${remainingSecondsDisplay.toString().padStart(2, '0')} remaining`}
        </span>
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
  const [user, setUser] = useState(null);
  const messagesEndRef = useRef(null);
  const fileInputRef = useRef(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        const currentUser = await mockApi.User.me();
        setUser(currentUser);
      } catch (error) {
        console.error('Error loading user:', error);
      }
    };
    loadUser();
  }, []);

  useEffect(() => {
    if (chatId) {
      loadMessages();
    } else {
      setMessages([]);
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
      const chatMessages = await mockApi.Message.filter(chatId);
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
    const currentInput = input;
    setInput('');

    if (!chatId) {
      const newChat = await mockApi.Chat.create({
        title: currentInput.trim().length > 30 ? `${currentInput.trim().substring(0, 27)}...` : currentInput.trim() || 'New Video Project',
        workflow_state: 'draft',
        created_by: user?.email || 'demo@viduto.com'
      });
      onChatUpdate?.(newChat.id);
      return;
    }

    setTimeout(async () => {
      const aiResponse = {
        message_type: 'assistant',
        content: `I'll help you create a professional video for "${currentInput}". Here's what I'll include:

• 30-second duration with 5 dynamic scenes
• Professional voiceover and background music
• Optimized for social media (9:16 format)
• High-quality transitions and effects

Would you like me to start production? This will cost 10 credits.`,
        created_at: new Date().toISOString()
      };
      setMessages(prev => [...prev, aiResponse]);
      setIsLoading(false);
    }, 1500);
  };

  const handleStartProduction = () => {
    toast.success('Starting video production! This will take about 10 minutes.');
    const productionMessage = {
      message_type: 'assistant',
      content: 'Starting video production...',
      created_at: new Date().toISOString(),
      metadata: { production_started: true, started_at: Date.now() }
    };
    setMessages(prev => [...prev, productionMessage]);
  };

  const renderMessage = (message, index) => {
    const isUser = message.message_type === 'user';
    
    return (
      <div key={index} className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-4`}>
        <div className={`max-w-[85%] rounded-2xl p-4 shadow-sm ${
          isUser
            ? 'bg-orange-500 text-white'
            : darkMode ? 'bg-gray-700 border border-gray-600' : 'bg-white border border-gray-200'
        }`}>
          {message.metadata?.image_url && (
            <img
              src={message.metadata.image_url}
              alt="Uploaded"
              className="max-w-full h-auto rounded-lg mb-3"
            />
          )}

          <ReactMarkdown className={`prose prose-sm max-w-none [&>*:first-child]:mt-0 [&>*:last-child]:mb-0 ${
            darkMode && !isUser ? 'prose-invert' : ''
          }`}>
            {message.content}
          </ReactMarkdown>

          {message.metadata?.is_approval_section && (
            <div className="flex gap-2 mt-4">
              <Button
                onClick={handleStartProduction}
                disabled={isLoading || (user?.credits || 0) < 10}
                className="bg-orange-500 hover:bg-orange-600 text-white"
              >
                Start Production (10 credits)
              </Button>
            </div>
          )}

          {message.metadata?.production_started && (
            <div className="mt-4">
              <ProductionProgress
                videoId="new_video"
                startedAt={message.metadata.started_at}
                darkMode={darkMode}
                onCancel={() => toast.info('Production cancelled')}
              />
            </div>
          )}
        </div>
      </div>
    );
  };

  if (!chatId) {
    return (
      <div className={`flex flex-col h-full ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center max-w-md mx-auto px-6">
            <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
              darkMode ? 'bg-orange-500/20' : 'bg-orange-100'
            }`}>
              <Logo size={32} />
            </div>
            <h3 className={`text-xl font-light mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Start your first project
            </h3>
            <p className={`text-sm mb-6 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Upload your product image and describe the video you want to create
            </p>
          </div>
        </div>

        <div className={`border-t p-4 ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`}>
          <form onSubmit={handleSendMessage} className="flex gap-3">
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={(e) => setSelectedFile(e.target.files[0])}
              className="hidden"
            />
            
            <Button
              type="button"
              variant="outline"
              size="icon"
              onClick={() => fileInputRef.current?.click()}
              className={darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : ''}
            >
              <Upload className="w-4 h-4" />
            </Button>

            <div className="flex-1">
              <Textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Describe your video idea... (e.g., 'Create a trendy product showcase for my sneakers')"
                className={`resize-none ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : ''}`}
                rows={1}
              />
            </div>

            <Button
              type="submit"
              disabled={!input.trim() && !selectedFile}
              className="bg-orange-500 hover:bg-orange-600 text-white"
            >
              {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
            </Button>
          </form>

          {selectedFile && (
            <div className="flex items-center gap-2 mt-3 p-3 rounded-lg bg-orange-50">
              <span className="text-sm flex-1 text-orange-800">
              📷 {selectedFile.name}
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
              className="text-orange-600 hover:text-orange-700"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

// Modal Components
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
      toast.error('Authentication failed');
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

const HelpModal = ({ isOpen, onClose, darkMode }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className={`p-8 rounded-2xl max-w-md w-full relative shadow-2xl border ${
        darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      }`}>
        <button
          onClick={onClose}
          className={`absolute top-3 right-3 rounded-full p-2 ${
            darkMode ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-700' : 'text-gray-400 hover:text-gray-700 hover:bg-gray-100'
          }`}
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="text-center mb-6">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
            darkMode ? 'bg-blue-500/20' : 'bg-blue-100'
          }`}>
            <HelpCircle className="w-8 h-8 text-blue-500" />
          </div>
          <h2 className={`text-2xl font-light mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Need Help?
          </h2>
          <p className={`font-light ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            We're here to help you get started with Viduto
          </p>
        </div>

        <div className="space-y-4">
          <a
            href="mailto:support@viduto.com"
            className={`block p-4 rounded-lg border text-center hover:shadow-md transition-all ${
              darkMode ? 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600' : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
            }`}
          >
            📧 Email Support
          </a>
          
          <a
            href="https://discord.gg/MdBr54xe"
            target="_blank"
            rel="noopener noreferrer"
            className={`block p-4 rounded-lg border text-center hover:shadow-md transition-all ${
              darkMode ? 'bg-gray-700 border-gray-600 text-gray-300 hover:bg-gray-600' : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-gray-100'
            }`}
          >
            💬 Join Discord Community
          </a>
        </div>
      </div>
    </div>
  );
};

const WinCreditsModal = ({ isOpen, onClose, darkMode }) => {
  if (!isOpen) return null;

  const handleShareAction = (platform) => {
    setTimeout(() => {
      toast.success('5 credits added to your account!');
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className={`p-8 rounded-2xl max-w-md w-full relative shadow-2xl border ${
        darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      }`}>
        <button
          onClick={onClose}
          className={`absolute top-3 right-3 rounded-full p-2 ${
            darkMode ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-700' : 'text-gray-400 hover:text-gray-700 hover:bg-gray-100'
          }`}
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="text-center mb-6">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
            darkMode ? 'bg-orange-500/20' : 'bg-orange-100'
          }`}>
            <Gift className="w-8 h-8 text-orange-500" />
          </div>
          <h2 className={`text-2xl font-light mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Win Free Credits!
          </h2>
          <p className={`font-light ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Share Viduto and earn 5 free credits
          </p>
        </div>

        <div className="space-y-3">
          <button
            onClick={() => handleShareAction('instagram')}
            className="w-full p-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-3"
          >
            📷 Share on Instagram
            <span className="text-sm">+5 credits</span>
          </button>
          
          <button
            onClick={() => handleShareAction('facebook')}
            className="w-full p-4 bg-blue-600 text-white rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-3"
          >
            📘 Share on Facebook
            <span className="text-sm">+5 credits</span>
          </button>
          
          <button
            onClick={() => handleShareAction('linkedin')}
            className="w-full p-4 bg-blue-700 text-white rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-3"
          >
            💼 Share on LinkedIn
            <span className="text-sm">+5 credits</span>
          </button>
        </div>

        <p className={`text-xs text-center mt-4 ${darkMode ? 'text-gray-500' : 'text-gray-500'}`}>
          Credits will be added to your account after sharing
        </p>
      </div>
    </div>
  );
};

const CreditsModal = ({ isOpen, onClose, darkMode }) => {
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handlePurchaseCredits = async () => {
    setLoading(true);
    setTimeout(() => {
      toast.success('Credits purchased successfully!');
      onClose();
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className={`p-8 rounded-2xl max-w-md w-full relative shadow-2xl border ${
        darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      }`}>
        <button
          onClick={onClose}
          className={`absolute top-3 right-3 rounded-full p-2 ${
            darkMode ? 'text-gray-400 hover:text-gray-200 hover:bg-gray-700' : 'text-gray-400 hover:text-gray-700 hover:bg-gray-100'
          }`}
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="text-center mb-6">
          <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
            darkMode ? 'bg-orange-500/20' : 'bg-orange-100'
          }`}>
            <Zap className="w-8 h-8 text-orange-500" />
          </div>
          <h2 className={`text-2xl font-light mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Buy More Credits
          </h2>
          <p className={`font-light ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Add more credits to continue creating amazing videos
          </p>
        </div>

        <div className="space-y-4">
          <div className={`border rounded-lg p-4 text-center ${
            darkMode ? 'bg-orange-900/20 border-orange-700' : 'bg-orange-50 border-orange-200'
          }`}>
            <h3 className={`font-normal mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Credit Pack</h3>
            <p className={`text-2xl font-light mb-1 ${darkMode ? 'text-white' : 'text-gray-900'}`}>$10</p>
            <p className={`text-sm mb-3 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>10 credits</p>
            <Button
              onClick={handlePurchaseCredits}
              disabled={loading}
              className="w-full bg-orange-500 text-white font-normal rounded-lg hover:bg-orange-600 transition-colors"
            >
              {loading ? 'Processing...' : 'Purchase Now'}
            </Button>
          </div>

          <div className="text-center">
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              Credits will be added to your account immediately after purchase
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

// Mobile Menu Component
const MobileMenu = ({ isOpen, onClose, user, handleAuthRequired }) => {
  if (!isOpen) return null;

  return (
    <>
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
        onClick={onClose}
      />
      
      <div className="fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-50 transform transition-transform duration-300">
        <div className="flex items-center justify-between p-6 border-b">
          <span className="text-xl font-light">Menu</span>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-gray-900 hover:bg-gray-800 flex items-center justify-center text-white"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <nav className="p-6 space-y-4">
          <Link 
            to="/features" 
            onClick={onClose} 
            className="block text-gray-700 hover:text-black transition-colors font-normal text-lg"
          >
            Features
          </Link>
          <a 
            href="https://discord.gg/MdBr54xe" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block text-gray-700 hover:text-black transition-colors font-normal text-lg"
          >
            Community
          </a>
          <Link 
            to="/pricing" 
            onClick={onClose} 
            className="block text-gray-700 hover:text-black transition-colors font-normal text-lg"
          >
            Pricing
          </Link>
          <Link 
            to="/blog" 
            onClick={onClose} 
            className="block text-gray-700 hover:text-black transition-colors font-normal text-lg"
          >
            Blog
          </Link>
          <Link 
            to="/enterprise" 
            onClick={onClose} 
            className="block text-gray-700 hover:text-black transition-colors font-normal text-lg"
          >
            Enterprise
          </Link>
        </nav>

        <div className="p-6">
          {user ? (
            <Button asChild className="w-full bg-orange-500 text-white hover:bg-orange-600">
              <Link to="/dashboard" onClick={onClose}>Dashboard</Link>
            </Button>
          ) : (
            <Button onClick={() => { handleAuthRequired(); onClose(); }} className="w-full bg-orange-500 text-white hover:bg-orange-600">
              Get Started
            </Button>
          )}
        </div>
      </div>
    </>
  );
};

// Footer Component
const Footer = () => (
  <footer className="bg-gray-900 text-gray-400 py-12">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Logo size={24} />
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
            <li><a href="https://discord.gg/MdBr54xe" target="_blank" rel="noopener noreferrer" className="hover:text-white">Discord Community</a></li>
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

// Testimonials Data
const testimonialsData = [
  { id: 1, quote: "This is no doubt the only video tool a product-based business needs. Amazing results every time!", name: "Sarah M.", role: "e-Commerce entrepreneur", avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" },
  { id: 2, quote: "I just canceled 6 subscriptions thanks to Viduto.com. This tool replaced everything I was using before.", name: "David K.", role: "Agency owner", avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" },
  { id: 3, quote: "I can't believe I paid thousands for agencies and waited 6 weeks for ads. Viduto delivers in minutes!", name: "Emma R.", role: "e-Commerce marketer", avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" },
  { id: 4, quote: "My e-com campaigns just took off thanks to Viduto. So easy to A/B test creatives now!", name: "Michael T.", role: "e-Commerce entrepreneur", avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" },
  { id: 5, quote: "Finally a video tool that uses my actual product and not generic AI stock footage. Game changer!", name: "Jessica L.", role: "Video editor", avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" },
  { id: 6, quote: "It's like Lovable but for marketing videos. The AI understands exactly what I need every time.", name: "Alex P.", role: "e-Commerce marketer", avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop" }
];

// Testimonials Section Component
const TestimonialsSection = ({ onAuthRequired }) => {
  const duplicatedTestimonials = [...testimonialsData, ...testimonialsData];

  return (
    <section className="bg-gradient-to-br from-blue-100 via-purple-100 to-orange-100 py-20 relative overflow-hidden">
      <style>{`
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

        <div className="scrolling-wrapper overflow-hidden">
          <div className="flex animate-scroll-infinite" style={{ width: '200%' }}>
            {duplicatedTestimonials.map((testimonial, index) => (
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

// CTA Section Component
const CtaSection = ({ onAuthRequired }) => (
  <section className="bg-gradient-to-br from-purple-600 to-blue-600 text-white py-20">
    <div className="max-w-4xl mx-auto px-6 text-center">
      <h2 className="text-4xl font-normal mb-4">Ready to create amazing videos?</h2>
      <p className="text-xl mb-8 opacity-90 font-light">
        Join thousands of creators and start turning your product images into viral ads today.
      </p>
      <Button
        size="lg"
        onClick={onAuthRequired}
        className="bg-white text-blue-600 hover:bg-gray-100 font-normal text-lg px-8 py-4"
      >
        Get Started For Free
      </Button>
    </div>
  </section>
);

// FAQ Section Component
const FaqsSection = () => {
  const faqs = [
    {
      question: "How long does it take to create a video?",
      answer: "Most videos are ready in about 10 minutes from start to finish."
    },
    {
      question: "Can I make changes to my video?",
      answer: "Yes! You can request revisions using plain English. Each revision costs 3 credits."
    },
    {
      question: "What formats do you support?",
      answer: "We create videos optimized for social media platforms (9:16 vertical format) and other standard formats."
    },
    {
      question: "Do I need any video editing experience?",
      answer: "No! Just describe what you want and upload your product image. Our AI handles everything else."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-gray-900 mb-4">Frequently Asked Questions</h2>
        </div>
        <div className="space-y-8">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-medium text-gray-900 mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
                📷 {selectedFile.name}
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
                className="text-orange-600 hover:text-orange-700"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className={`flex flex-col h-full ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => renderMessage(message, index))}
        <div ref={messagesEndRef} />
      </div>

      <div className={`border-t p-4 ${darkMode ? 'border-gray-700 bg-gray-800' : 'border-gray-200 bg-white'}`}>
        <form onSubmit={handleSendMessage} className="flex gap-3">
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={(e) => setSelectedFile(e.target.files[0])}
            className="hidden"
          />
          
          <Button
            type="button"
            variant="outline"
            size="icon"
            onClick={() => fileInputRef.current?.click()}
            className={darkMode ? 'border-gray-600 text-gray-300 hover:bg-gray-700' : ''}
          >
            <Upload className="w-4 h-4" />
          </Button>

          <div className="flex-1">
            <Textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask for changes or describe a new video..."
              className={`resize-none ${darkMode ? 'bg-gray-700 border-gray-600 text-white' : ''}`}
              rows={1}
            />
          </div>

          <Button
            type="submit"
            disabled={!input.trim() && !selectedFile}
            className="bg-orange-500 hover:bg-orange-600 text-white"
          >
            {isLoading ? <Loader2 className="w-4 h-4 animate-spin" /> : <Send className="w-4 h-4" />}
          </Button>
        </form>

        {selectedFile && (
          <div className="flex items-center gap-2 mt-3 p-3 rounded-lg bg-orange-50">
            <span className="text-sm flex-1 text-orange-800">