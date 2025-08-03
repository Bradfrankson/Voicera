# 🎙️ Voicera AI - AI-Powered Voice Agents That Convert Leads

**Transform your business with intelligent voice agents that handle calls, qualify leads, and book appointments 24/7.**

A modern static frontend showcasing AI voice agent capabilities with seamless integration options for GoHighLevel and other CRM platforms.

## ✨ Features

- **🤖 AI Voice Agents** - Natural, human-like conversations powered by Vapi.ai
- **📞 Interactive Demo** - Try the voice AI directly on the website
- **📊 Lead Qualification** - Showcase smart lead qualification capabilities
- **📅 Appointment Booking** - Demo calendar integration features
- **🔗 All-in-One CRM** - Built-in CRM system powered by GoHighLevel
- **📱 Responsive Design** - Mobile-first approach with Tailwind CSS
- **⚡ Fast Performance** - Static site optimized for speed

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **Styling**: Tailwind CSS
- **Voice AI**: Vapi.ai integration
- **Icons**: Lucide React
- **Deployment**: Vercel
- **Build Tool**: Vite for fast development

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Bradfrankson/voicera.git
   cd voicera
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup (Optional)**
   ```bash
   cp .env.example .env
   ```

   Configure optional integrations:
   ```env
   VITE_VAPI_PUBLIC_KEY=your_vapi_public_key
   GHL_WEBHOOK_URL=your_ghl_webhook_url
   ```
4. **Start Development Server**
   ```bash
   npm run dev
   ```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🚀 Deployment

### Vercel Deployment

1. **Connect to Vercel**
   - Import project from GitHub: `https://github.com/Bradfrankson/voicera.git`
   - Framework: Vite
   - Build Command: `npm run build`
   - Output Directory: `dist`

2. **Environment Variables (Optional)**
   Set these in Vercel dashboard if using integrations:
   ```
   VITE_VAPI_PUBLIC_KEY
   GHL_WEBHOOK_URL
   ```

3. **Deploy**
   - Vercel will automatically deploy on push to main branch

## 📱 Voice AI Integration

- **Vapi.ai**: Interactive voice AI demo on the homepage
- **Demo Ready**: Visitors can test the voice agent directly
- **CRM Integration**: Ready for GoHighLevel webhook integration

## 🎯 Key Components

- **Hero Section**: Interactive voice AI demo with Vapi.ai
- **Features Showcase**: Comprehensive feature demonstrations
- **Social Proof**: Customer testimonials and success stories
- **CRM Integration**: GoHighLevel and other platform integrations
- **Responsive Design**: Mobile-optimized user experience

## 🔗 Integration Options

### GoHighLevel Setup
1. Create a webhook in your GHL account
2. Add the webhook URL to your environment variables
3. Forms will automatically submit to GHL for lead capture

### Vapi.ai Setup
1. Sign up for a Vapi.ai account
2. Create your voice agent
3. Add your agent ID to the environment variables

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

For support and questions:
- Email: brad@voicera.ai
- GitHub Issues: [Create an issue](https://github.com/Bradfrankson/voicera/issues)

---

Built with ❤️ by Brad Frankson
# voicera
