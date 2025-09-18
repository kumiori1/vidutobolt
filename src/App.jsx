);
};

// Page Layout Component
const PageLayout = ({ children, user, onAuthRequired, currentPath }) => {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleAuthRequired = () => {
    if (!user) {
      setShowAuthModal(true);
    } else {
      onAuthRequired();
    }
  };

  return (
    <>
      {/* Header */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="max-w-5xl mx-2 md:mx-auto p-2 px-4 mt-2 bg-white/70 backdrop-blur-md rounded-xl flex items-center justify-between shadow-sm">
          <Link to="/home" className="flex items-center gap-2">
            </button>
          </div>
        </div>
      </header>

      {children}
      
      <Footer />
      
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
      <MobileMenu 
        isOpen={isMobileMenuOpen} 
        onClose={() => setIsMobileMenuOpen(false)} 
        user={user}
        handleAuthRequired={handleAuthRequired}
      />
    </>
  );
};

// Home Page Component
const HomePage = ({ user, onAuthRequired }) => {
  return (
    <PageLayout user={user} onAuthRequired={onAuthRequired}>
      {/* Hero Section */}
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

      {/* Product Showcase */}
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

      <TestimonialsSection onAuthRequired={onAuthRequired} />
      <FaqsSection />
      <CtaSection onAuthRequired={onAuthRequired} />
    </PageLayout>
  );
};

// Features Page Component  
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
    },
    {
      icon: <FileText className="w-8 h-8 text-orange-500" />,
      title: "Brand Guidelines",
      description: "Maintain consistent brand identity—upload brand assets, colors, and style preferences to match your aesthetic.",
      badge: "Coming Soon"
    },
    {
      icon: <CreditCard className="w-8 h-8 text-orange-500" />,
      title: "Pricing & Credits",
      description: "Start from $20/mo. Videos generate in about 10 minutes. Revisions are just 3 credits."
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
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 relative">
                {feature.badge && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">{feature.badge}</span>
                  </div>
                )}
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

// Pricing Page Component
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

// Blog Page Component
const BlogPage = ({ user, onAuthRequired }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Tutorial", "Analysis", "How-To", "Pricing", "Strategy"];
  const filteredPosts = selectedCategory === "All" 
    ? postsData 
    : postsData.filter(post => post.tags.includes(selectedCategory));

  return (
    <PageLayout user={user} onAuthRequired={onAuthRequired}>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-100 via-purple-100 to-orange-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 leading-tight">
            Viduto Blog
          </h1>
          <p className="text-xl text-gray-600 font-light mb-8">
            Insights on AI video creation, product marketing, and business growth strategies.
          </p>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-normal transition-all ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white'
                    : 'bg-white/80 text-gray-700 hover:bg-white'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

// Enterprise Page Component
const EnterprisePage = ({ user, onAuthRequired }) => {
  const handleContactSales = () => {
    window.location.href = 'mailto:sales@viduto.com?subject=Enterprise Inquiry';
  };

  const features = [
    {
      icon: <Shield className="w-8 h-8 text-orange-500" />,
      title: "Brand Safety & Governance",
      description: "Ensure all video content aligns with your brand guidelines and company policies with built-in approval workflows."
    },
    {
      icon: <Users className="w-8 h-8 text-orange-500" />,
      title: "Team Collaboration",
      description: "Seamlessly collaborate across teams with shared workspaces, role-based permissions, and centralized asset management."
    },
    {
      icon: <GitBranch className="w-8 h-8 text-orange-500" />,
      title: "Advanced Integrations",
      description: "Connect with your existing tools and workflows through our robust API and pre-built integrations with major platforms."
    },
    {
      icon: <Share2 className="w-8 h-8 text-orange-500" />,
      title: "Multi-Channel Publishing",
      description: "Distribute your videos across all major social platforms with optimized formats and scheduling capabilities."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-orange-500" />,
      title: "Priority Support",
      description: "Get dedicated account management, priority support, and custom training for your team."
    },
    {
      icon: <Building className="w-8 h-8 text-orange-500" />,
      title: "White-Label Solutions",
      description: "Customize the platform with your branding and deploy it as part of your own product offering."
    }
  ];

  return (
    <PageLayout user={user} onAuthRequired={onAuthRequired}>
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-100 via-purple-100 to-orange-100 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 leading-tight">
            Viduto for Enterprise
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 font-light">
            Scale video creation across your organization with enterprise-grade security, governance, and collaboration tools.
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

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4 leading-tight">
              Enterprise Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
              Everything you need to scale video creation across your organization
            </p>
          </div>
          
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

// Terms Page Component
const TermsPage = ({ user, onAuthRequired }) => {
  return (
    <PageLayout user={user} onAuthRequired={onAuthRequired}>
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-light text-gray-900 mb-8">Terms of Service</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <h2 className="text-2xl font-normal text-gray-900 mt-8 mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              By accessing and using Viduto's services, you accept and agree to be bound by the terms and provision of this agreement.
            </p>

            <h2 className="text-2xl font-normal text-gray-900 mt-8 mb-4">2. Use License</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Permission is granted to temporarily use Viduto's services for personal and commercial use. This is the grant of a license, not a transfer of title.
            </p>

            <h2 className="text-2xl font-normal text-gray-900 mt-8 mb-4">3. Disclaimer</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              The materials on Viduto's platform are provided on an 'as is' basis. Viduto makes no warranties, expressed or implied, and hereby disclaims all other warranties.
            </p>

            <h2 className="text-2xl font-normal text-gray-900 mt-8 mb-4">4. Limitations</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              In no event shall Viduto or its suppliers be liable for any damages arising out of the use or inability to use the materials on Viduto's platform.
            </p>

            <h2 className="text-2xl font-normal text-gray-900 mt-8 mb-4">5. Contact Information</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              If you have any questions about these Terms of Service, please contact us at legal@viduto.com.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

// Privacy Page Component
const PrivacyPage = ({ user, onAuthRequired }) => {
  return (
    <PageLayout user={user} onAuthRequired={onAuthRequired}>
      <section className="pt-32 pb-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-light text-gray-900 mb-8">Privacy Policy</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 leading-relaxed">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            
            <h2 className="text-2xl font-normal text-gray-900 mt-8 mb-4">Information We Collect</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support.
            </p>

            <h2 className="text-2xl font-normal text-gray-900 mt-8 mb-4">How We Use Your Information</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We use the information we collect to provide, maintain, and improve our services, process transactions, and communicate with you.
            </p>

            <h2 className="text-2xl font-normal text-gray-900 mt-8 mb-4">Information Sharing</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.
            </p>

            <h2 className="text-2xl font-normal text-gray-900 mt-8 mb-4">Data Security</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>

            <h2 className="text-2xl font-normal text-gray-900 mt-8 mb-4">Contact Us</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              If you have any questions about this Privacy Policy, please contact us at privacy@viduto.com.
            </p>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

// Main App Component
const App = () => {
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
        <Route path="/home" element={<HomePage user={user} onAuthRequired={handleAuthRequired} />} />
        <Route path="/features" element={<FeaturesPage user={user} onAuthRequired={handleAuthRequired} />} />
        <Route path="/pricing" element={<PricingPage user={user} onAuthRequired={handleAuthRequired} />} />
        <Route path="/blog" element={<BlogPage user={user} onAuthRequired={handleAuthRequired} />} />
        <Route path="/enterprise" element={<EnterprisePage user={user} onAuthRequired={handleAuthRequired} />} />
        <Route path="/terms" element={<TermsPage user={user} onAuthRequired={handleAuthRequired} />} />
        <Route path="/privacy" element={<PrivacyPage user={user} onAuthRequired={handleAuthRequired} />} />
        <Route 
          path="/dashboard" 
          element={
            user ? <Dashboard /> : <HomePage user={user} onAuthRequired={handleAuthRequired} />
          } 
        />
      </Routes>
      
      <AuthModal isOpen={showAuthModal} onClose={() => setShowAuthModal(false)} />
    </Router>
  );
};

export default App;<Logo size={20} className="w-6 h-6 md:w-8 md:h-8" />
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

          <div className="hidden md:flex items-center gap-2">
            {user ? (
              <Button asChild className="px-3 py-1.5 bg-orange-500 text-white font-normal text-sm rounded-full hover:bg-orange-500/90 transform hover:scale-[1.02] transition-all duration-200">
                <Link to="/dashboard">Dashboard</Link>
              </Button>
            ) : (
              <Button onClick={handleAuthRequired} className="px-3 py-1.5 bg-orange-500 text-white font-normal text-sm rounded-full hover:bg-orange-500/90 transform hover:scale-[1.02] transition-all duration-200">
                Get Started
              </Button>
            )}
          </div>

          <div className="flex items-center gap-2 md:hidden">
            {user ? (
              <Button asChild className="px-3 py-1.5 bg-orange-500 text-white font-normal text-sm rounded-full hover:bg-orange-500/90 transform hover:scale-[1.02] transition-all duration-200">
                <Link to="/dashboard">Dashboard</Link>
              </Button>
            ) : (
              <Button onClick={handleAuthRequired} className="px-3 py-1.5 bg-orange-500 text-white font-normal text-sm rounded-full hover:bg-orange-500/90 transform hover:scale-[1.02] transition-all duration-200">
                Get Started
              </Button>
            )}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="ml-2 text-gray-600 hover:text-gray-900"
            >
              <Menu size={20} />
            import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
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

// Mock API System (Complete Base44 Replica)
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
                  <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
                </div>
              )}
              
              <div className="text-center">
                <h3 className={`text-xl font-medium mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>{tier.name}</h3>
                <div className="mb-4">
                  <span className={`text-3xl font-light ${darkMode ? 'text-white' : 'text-gray-900'}`}>{tier.price}</span>
                  <span className={darkMode ? 'text-gray-400' : 'text-gray-500'}>{tier.period}</span>
                </div>
                <p className={`mb-6 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{tier.credits} credits per month</p>
                
                <ul className="space-y-3 mb-8 text-left">
                  {tier.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  onClick={() => handleSelectPlan(tier)}
                  disabled={loading && selectedPlan === tier.name}
                  className={`w-full ${
                    tier.popular 
                      ? 'bg-orange-500 text-white hover:bg-orange-600' 
                      : darkMode 
                        ? 'border border-gray-600 text-gray-300 hover:bg-gray-700' 
                        : 'border border-gray-200 text-gray-900 hover:bg-gray-50'
                  }`}
                  variant={tier.popular ? 'default' : 'outline'}
                >
                  {loading && selectedPlan === tier.name ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    `Choose ${tier.name}`
                  )}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className={`rounded-2xl p-8 ${
          darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
        }`}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h2 className={`text-2xl font-normal mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>Manage Subscription</h2>
              <p className={`font-light ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>View billing history, update payment methods, or cancel your subscription.</p>
            </div>
            <Button
              onClick={onManageBilling}
              className="bg-gray-800 text-white font-normal rounded-full hover:bg-black transform hover:scale-[1.02] transition-all duration-200 shadow-lg px-6 py-3"
            >
              Manage Billing
            </Button>
          </div>
        </div>

        {/* Credits Explanation */}
        <div className={`rounded-2xl p-8 mt-12 ${
          darkMode ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-200'
        }`}>
          <h3 className={`text-2xl font-normal mb-6 text-center ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            How Credits Work
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
                darkMode ? 'bg-orange-500/20' : 'bg-orange-100'
              }`}>
                <Zap className="w-8 h-8 text-orange-500" />
              </div>
              <h4 className={`text-lg font-normal mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                10 Credits
              </h4>
              <p className={`font-light text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Create a new 30-second professional video from your product image
              </p>
            </div>
            
            <div className="text-center">
              <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
                darkMode ? 'bg-blue-500/20' : 'bg-blue-100'
              }`}>
                <HelpCircle className="w-8 h-8 text-blue-500" />
              </div>
              <h4 className={`text-lg font-normal mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                3 Credits
              </h4>
              <p className={`font-light text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Request revisions or modifications to your existing videos
              </p>
            </div>
            
            <div className="text-center">
              <div className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center ${
                darkMode ? 'bg-green-500/20' : 'bg-green-100'
              }`}>
                <Calendar className="w-8 h-8 text-green-500" />
              </div>
              <h4 className={`text-lg font-normal mb-2 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
                Monthly Reset
              </h4>
              <p className={`font-light text-sm ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Credits refresh every month on your billing date. Unused credits roll over for 3 months
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Dashboard Component
const Dashboard = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [chats, setChats] = useState([]);
  const [currentChatId, setCurrentChatId] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeDashboardView, setActiveDashboardView] = useState('chat');
  const [authError, setAuthError] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showWinCreditsModal, setShowWinCreditsModal] = useState(false);
  const [userCredits, setUserCredits] = useState(0);
  const [showCreditsModal, setShowCreditsModal] = useState(false);

  // Dark Mode Management
  useEffect(() => {
    const savedMode = localStorage.getItem('viduto-dark-mode');
    if (savedMode) {
      setDarkMode(savedMode === 'true');
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('viduto-dark-mode', darkMode.toString());
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const refreshUserCredits = useCallback(async () => {
    try {
      const currentUser = await mockApi.User.me();
      if (currentUser) {
        setUser(currentUser);
        setUserCredits(currentUser.credits || 0);
      }
    } catch (error) {
      console.error('Error refreshing user credits:', error);
    }
  }, []);

  // Initialize Dashboard
  useEffect(() => {
    const initialize = async () => {
      setLoading(true);
      try {
        if (!localStorage.getItem('mockUser')) {
          const mockUser = {
            id: '1',
            email: 'demo@viduto.com',
            full_name: 'Demo User',
            subscription_status: 'active',
            credits: 150
          };
          localStorage.setItem('mockUser', JSON.stringify(mockUser));
        }
        
        const currentUser = await mockApi.User.me();
        setUser(currentUser);
        setUserCredits(currentUser.credits || 0);
        setAuthError(false);

        await handleChatUpdate();
      } catch (error) {
        console.error('Error initializing dashboard:', error);
        setAuthError(true);
      } finally {
        setLoading(false);
      }
    };

    initialize();
  }, []);

  const createNewChat = async () => {
    try {
      setCurrentChatId(null);
      setSidebarOpen(false);
      setActiveDashboardView('chat');
    } catch (error) {
      console.error('Error preparing new chat:', error);
    }
  };

  const handleSignOut = async () => {
    try {
      await mockApi.User.logout();
      navigate('/home');
    } catch (error) {
      console.error('Error during logout:', error);
      navigate('/home');
    }
  };
  
  const handleChatUpdate = useCallback(async (newChatId = null) => {
    try {
      const currentUser = await mockApi.User.me();
      const userChats = await mockApi.Chat.filter({ created_by: currentUser.email }, '-updated_date');
      setChats(userChats || []);
      if (newChatId && currentChatId === null) {
        setCurrentChatId(newChatId);
      } else if (!currentChatId && userChats.length > 0) {
        setCurrentChatId(userChats[0].id);
      }
    } catch(e) {
      console.error("Failed to update chats", e);
    }
  }, [currentChatId]);

  const handleManageBilling = async () => {
    try {
      window.open('https://billing.stripe.com/p/login/test_123', '_blank');
    } catch (error) {
      console.error('Error opening billing portal:', error);
      toast.error('Failed to open billing portal');
    }
  };

  if (loading) {
    return (
      <div className="h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">
            {authError ? 'Redirecting to login...' : 'Loading...'}
          </p>
        </div>
      </div>
    );
  }

  if (!user || authError) {
    return (
      <div className="h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Redirecting to login...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`h-screen flex overflow-hidden ${darkMode ? 'bg-gray-900' : 'bg-white'}`}>
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed top-0 left-0 z-30 w-80 h-full backdrop-blur-md border-r transform transition-transform duration-300 overflow-hidden flex flex-col
        md:relative md:translate-x-0
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        ${darkMode ? 'bg-gray-800/95 border-gray-700' : 'bg-white/95 border-gray-200'}
      `}>
        {/* Sidebar Header */}
        <div className={`flex items-center justify-between p-4 border-b flex-shrink-0 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex items-center gap-3 flex-1">
            <Link to="/dashboard" className="flex items-center gap-2">
              <Logo size={20} className="w-6 h-6" />
              <span className={`text-xl font-normal transition-colors ${darkMode ? 'text-white hover:text-gray-300' : 'text-gray-900 hover:text-gray-700'}`}>Viduto</span>
            </Link>
            
            <button
              onClick={toggleDarkMode}
              className={`ml-2 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:scale-105 ${
                darkMode ? 'bg-gray-700 hover:bg-gray-600 text-yellow-400' : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
              }`}
              title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {darkMode ? <Sun size={14} /> : <Moon size={14} />}
            </button>
          </div>

          <button
            onClick={() => setSidebarOpen(false)}
            className={`transition-colors md:hidden ${darkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-900'}`}
          >
            <X size={18} />
          </button>
        </div>

        {/* User Info Section */}
        <div className={`p-4 border-b flex-shrink-0 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <div className="flex items-center gap-3 mb-4">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
              <UserIcon size={16} className={`${darkMode ? 'text-gray-300' : 'text-gray-600'}`} />
            </div>
            <div className="flex-1 min-w-0">
              <p className={`font-medium text-base truncate ${darkMode ? 'text-white' : 'text-gray-900'}`}>{user.full_name}</p>
              <p className={`text-sm truncate ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>{user.email}</p>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className={`text-sm font-light ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>Credits</div>
            <div className="flex items-center gap-2">
              <Zap size={16} className="text-orange-500" />
              <span className="text-base text-orange-500 font-bold">{userCredits}</span>
            </div>
          </div>
          {(user?.subscription_status === 'active') && (
            <Button
              size="sm"
              variant="outline"
              onClick={() => setShowCreditsModal(true)}
              className={`mt-2 text-xs ${darkMode ? 'border-gray-600 text-gray-200 hover:bg-gray-700' : 'border-gray-200 text-gray-700 hover:bg-gray-100'}`}
            >
              Buy More
            </Button>
          )}
        </div>

        {/* New Project Button */}
        <div className="p-4 flex-shrink-0">
          <Button
            onClick={createNewChat}
            className="w-full flex items-center gap-3 px-4 py-3 bg-orange-500 text-white font-normal text-base rounded-full hover:bg-orange-500/90 transform hover:scale-[1.02] transition-all duration-200 shadow-lg"
          >
            <Plus size={16} />
            New Project
          </Button>
        </div>

        {/* Navigation Menu */}
        <div className="p-4 flex-shrink-0">
          <div className="space-y-2">
            <button
              onClick={() => setActiveDashboardView('chat')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors text-base ${
                activeDashboardView === 'chat'
                  ? darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'
                  : darkMode ? 'text-gray-400 hover:text-white hover:bg-gray-700/50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <MessageSquare size={16} />
              <span>Chat</span>
            </button>

            <button
              onClick={() => setActiveDashboardView('subscription')}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors text-base ${
                activeDashboardView === 'subscription'
                  ? darkMode ? 'bg-gray-700 text-white' : 'bg-gray-100 text-gray-900'
                  : darkMode ? 'text-gray-400 hover:text-white hover:bg-gray-700/50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <CreditCard size={16} />
              <span>Subscription</span>
            </button>

            <button
              onClick={() => setShowWinCreditsModal(true)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors text-base ${
                darkMode ? 'text-gray-400 hover:text-white hover:bg-gray-700/50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <Gift size={16} />
              <span>Win Credits</span>
            </button>

            <button
              onClick={() => setShowHelpModal(true)}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors text-base ${
                darkMode ? 'text-gray-400 hover:text-white hover:bg-gray-700/50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <HelpCircle size={16} />
              <span>Help</span>
            </button>

            <button
              onClick={handleSignOut}
              className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-colors text-base ${
                darkMode ? 'text-gray-400 hover:text-white hover:bg-gray-700/50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
              }`}
            >
              <LogOut size={16} />
              <span>Logout</span>
            </button>
          </div>
        </div>

        {/* Chat History */}
        <div className="flex-1 overflow-y-auto p-4 min-h-0">
          <h4 className={`text-sm font-normal mb-3 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`}>Recent Projects</h4>
          <div className="space-y-2">
            {chats.length === 0 ? (
              <div className={`text-center py-8 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                <p className="text-base font-light">No projects yet</p>
                <p className="text-sm mt-1 font-light">Create your first video!</p>
              </div>
            ) : (
              chats.map((chat) => (
                <button
                  key={chat.id}
                  onClick={() => {
                    setCurrentChatId(chat.id);
                    setSidebarOpen(false);
                    setActiveDashboardView('chat');
                  }}
                  className={`w-full text-left p-3 rounded-lg transition-colors ${
                    currentChatId === chat.id
                      ? 'bg-orange-500/10 text-orange-500 font-normal border border-orange-500/30'
                      : darkMode 
                        ? 'text-gray-300 hover:bg-gray-700 font-light'
                        : 'text-gray-700 hover:bg-gray-100 font-light'
                  }`}
                >
                  <p className="text-base font-normal truncate">{chat.title || 'New Video Project'}</p>
                  <p className={`text-sm mt-1 font-light ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
                    {new Date(chat.updated_date).toLocaleDateString()}
                  </p>
                </button>
              ))
            )}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Top Header for mobile */}
        <div className={`md:hidden border-b p-4 flex items-center justify-between ${
          darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
        }`}>
          <button
            onClick={() => setSidebarOpen(true)}
            className={`p-2 rounded-lg transition-colors ${
              darkMode
                ? 'bg-gray-700 text-gray-400 hover:text-gray-200'
                : 'bg-gray-100 text-gray-600 hover:text-gray-900'
            }`}
          >
            <Menu size={20} />
          </button>
          <div className="flex items-center gap-2">
            <Zap size={16} className="text-orange-500" />
            <span className={`font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>{userCredits}</span>
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 overflow-hidden">
          {activeDashboardView === 'chat' ? (
            <div className="h-full overflow-hidden">
              <ChatInterface
                chatId={currentChatId}
                onChatUpdate={handleChatUpdate}
                onCreditsRefreshed={refreshUserCredits}
                onNewChat={createNewChat}
                darkMode={darkMode}
              />
            </div>
          ) : (
            <div className="h-full overflow-y-auto">
              <SubscriptionPage 
                user={user} 
                darkMode={darkMode} 
                onManageBilling={handleManageBilling}
              />
            </div>
          )}
        </div>
      </div>

      {/* Modals */}
      <HelpModal 
        isOpen={showHelpModal}
        onClose={() => setShowHelpModal(false)}
        darkMode={darkMode}
      />

      <WinCreditsModal 
        isOpen={showWinCreditsModal}
        onClose={() => setShowWinCreditsModal(false)}
        darkMode={darkMode}
      />

      <CreditsModal
        isOpen={showCreditsModal}
        onClose={() => setShowCreditsModal(false)}
        darkMode={darkMode}
      />
    </div>
  );: 150 
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

// Subscription Page Component
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
      credits

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
  }

  return (
    <div className={`flex flex-col h-full ${darkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => renderMessage(message, index))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input area */}
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