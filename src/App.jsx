import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Loader2 } from 'lucide-react';
import { mockApi } from './utils/mockApi';
import { AuthModal } from './components/AuthModal';
import { HomePage } from './pages/HomePage';
import { FeaturesPage } from './pages/FeaturesPage';
import { PricingPage } from './pages/PricingPage';
import { BlogPage } from './pages/BlogPage';
import { EnterprisePage } from './pages/EnterprisePage';
import { TermsPage } from './pages/TermsPage';
import { PrivacyPage } from './pages/PrivacyPage';
import { Dashboard } from './pages/Dashboard';

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

export default App;