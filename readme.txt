# Viduto - AI Video Creation Platform

Transform your product images into professional viral video ads in minutes with AI-powered creation tools.

## 🚀 Features

- **AI-Powered Video Creation**: Upload product images and describe your vision to create professional videos
- **30-Second Professional Videos**: Perfect length for social media and maximum engagement
- **Text-Based Interface**: No video editing skills needed - just chat with AI
- **Real Product Integration**: Use your actual product images, not generic stock footage
- **Fast Generation**: Videos ready in about 10 minutes
- **Customizable**: Request changes and revisions until perfect
- **Credit-Based System**: Flexible pricing that scales with your needs

## 🛠️ Tech Stack

- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Package Manager**: npm/yarn

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd viduto-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Build for production**
   ```bash
   npm run build
   # or
   yarn build
   ```

## 🏗️ Project Structure

```
src/
├── components/          # Reusable UI components
├── lib/                # Utility functions and helpers
├── App.jsx            # Main application component
├── main.jsx           # Application entry point
└── index.css          # Global styles and Tailwind imports

public/
├── index.html         # HTML template
└── assets/           # Static assets

config/
├── tailwind.config.js # Tailwind CSS configuration
├── vite.config.js    # Vite build configuration
├── postcss.config.js # PostCSS configuration
└── eslint.config.js  # ESLint configuration
```

## 🎨 Design System

### Colors
- **Primary**: Orange (#f97316)
- **Secondary**: Blue to Purple gradients
- **Background**: White/Gray-50
- **Text**: Gray-900/700/600

### Typography
- **Font Family**: Inter (Google Fonts)
- **Font Weights**: 300 (light), 400 (normal), 500 (medium), 600 (semibold)

### Components
- **Buttons**: Rounded corners, hover effects, multiple variants
- **Cards**: Glass morphism effects, subtle shadows
- **Forms**: Clean inputs with focus states
- **Navigation**: Fixed header with backdrop blur

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Environment Setup

1. **Node.js**: Requires Node.js 16+ 
2. **Package Manager**: npm or yarn
3. **Browser**: Modern browser with ES6+ support

### Code Style

- **ESLint**: Configured for React and modern JavaScript
- **Prettier**: Recommended for code formatting
- **Tailwind**: Utility-first CSS approach

## 📱 Features Overview

### Home Page
- Hero section with product upload demo
- Feature highlights
- Customer testimonials
- Pricing overview

### Dashboard
- Project management
- Chat-based video creation interface
- Credit system
- User profile and settings

### Authentication
- Sign up / Sign in modal
- User session management
- Demo mode for testing

## 🎯 Key Components

### Header
- Fixed navigation with glass morphism effect
- User authentication state
- Mobile-responsive menu

### Footer
- Company information
- Support links
- Legal pages

### Chat Interface
- File upload for product images
- Text input for video descriptions
- Message history
- Video preview and download

### Testimonials
- Infinite scroll animations
- Customer feedback
- Social proof

## 🚀 Deployment

### Bolt.new Deployment

This project is optimized for deployment on Bolt.new:

1. **Create new project** on Bolt.new
2. **Copy all files** to your Bolt.new project
3. **Install dependencies** automatically handled
4. **Deploy** with one click

### Manual Deployment

For other platforms:

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your hosting service

### Environment Variables

Currently uses localStorage for demo purposes. For production:

- Set up actual API endpoints
- Configure authentication service
- Add environment variables for API URLs

## 🔐 API Integration

The current implementation uses mock APIs stored in localStorage. To connect to real APIs:

1. **Replace mockApi functions** in `App.jsx`
2. **Add API base URL** to environment variables
3. **Implement proper error handling**
4. **Add loading states**

### Expected API Endpoints

```javascript
// Authentication
POST /auth/signup
POST /auth/signin
DELETE /auth/signout
GET /auth/me

// Chat/Projects
GET /chats
POST /chats
GET /chats/:id/messages
POST /chats/:id/messages

// Video Generation
POST /videos/generate
GET /videos/:id/status
```

## 🎨 Customization

### Theming
- Modify `tailwind.config.js` for color schemes
- Update CSS variables in `index.css`
- Customize component styles

### Branding
- Replace logo images in header and footer
- Update meta tags in `index.html`
- Modify company information

### Features
- Add new pages by creating components
- Extend API integration
- Customize video generation flow

## 📄 License

This project is proprietary software for Viduto LLC.

## 🤝 Support

For support and questions:
- Email: support@viduto.com
- Discord: https://discord.gg/MdBr54xe

## 🔄 Migration from Base44

This project has been migrated from Base44 to a standalone React application:

1. **Removed Base44 dependencies**
2. **Replaced with standard React patterns**
3. **Maintained all original functionality**
4. **Optimized for Bolt.new deployment**

All original features and designs have been preserved while making the codebase more maintainable and deployable.