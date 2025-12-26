# GoldSky Technologies

![GoldSky Technologies](https://img.shields.io/badge/GoldSky-Technologies-orange?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyIDJMMTUuMDkgOC4yNkwyMiA5LjI3TDE3IDEzLjE0TDE4LjE4IDIxTDEyIDE3LjI3TDUuODIgMjFMNyAxMy4xNEwyIDkuMjdMOC45MSA4LjI2TDEyIDJaIiBmaWxsPSIjRkFCMzA4Ii8+Cjwvc3ZnPgo=)
![Next.js](https://img.shields.io/badge/Next.js-15.1.6-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19.0.0-blue?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.3-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4.0.3-38B2AC?style=flat-square&logo=tailwind-css)

**Building the unified technology platform for Smart Factory, Smart Retail, and Community Services.**

GoldSky Technologies is a global technology company with offices in Ottawa (Canada), Beijing (China), and Harbin (China). This repository contains our corporate website, showcasing our innovative solutions in manufacturing intelligence, retail automation, and community services.

## 🌟 Features

- **8 Comprehensive Pages**: Home, About, Platform, Solutions, Products, Industries, Technology, Contact
- **Signature Gold-Orange Brand Identity**: Beautiful gradients (#EAB308 → #F97316)
- **Refined UI/UX**: Sophisticated backgrounds with animated decorative elements
- **Global Presence**: Three office locations across North America and Asia
- **Responsive Design**: Optimized for all devices and screen sizes
- **Modern Tech Stack**: Next.js 15 + React 19 + TypeScript + Tailwind CSS v4
- **Performance Optimized**: Static export for fast loading times
- **SEO Ready**: Comprehensive metadata and semantic HTML

## 🏢 Global Offices

- 🇨🇦 **Ottawa, Canada** - Innovation Centre, Kanata North
- 🇨🇳 **Beijing, China** - Technology Hub, Haidian District
- 🇨🇳 **Harbin, China** - Tech Park, Nangang District

## 🎨 Brand Identity

Our website features a distinctive **gold-to-orange gradient** color scheme that reflects innovation and excellence:

- **Primary Gradient**: `from-yellow-500 to-orange-500` (#EAB308 → #F97316)
- **Accent Colors**: Gold (#F59E0B), Orange (#FB923C)
- **Background**: White with subtle grid patterns and floating geometric shapes
- **Typography**: Inter (body) + Nacelle (headings)

## 📋 Prerequisites

- **Node.js**: 20.x or higher
- **npm**: 10.x or higher (or pnpm 9.x)
- **Git**: For version control

## 🚀 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/Hanzg20/GS-open-react.git
cd GS-open-react

# Install dependencies
npm install
# or
pnpm install
```

### Development

```bash
# Start development server with Turbopack
npm run dev

# Open http://localhost:3000
```

### Build

```bash
# Create production build
npm run build

# Preview production build locally
npm run start
```

## 📁 Project Structure

```
GS-open-react/
├── app/                          # Next.js App Router
│   ├── layout.tsx                # Root layout
│   ├── (default)/                # Default layout group
│   │   ├── layout.tsx            # Default layout wrapper
│   │   ├── page.tsx              # Home page
│   │   ├── about/                # About page
│   │   ├── platform/             # Platform page
│   │   ├── solutions/            # Solutions page
│   │   ├── products/             # Products page
│   │   ├── industries/           # Industries page
│   │   ├── technology/           # Technology page
│   │   └── contact/              # Contact page
│   ├── css/                      # Global styles
│   │   └── style.css             # Custom CSS with animations
│   └── api/                      # API routes
├── components/                   # React components
│   ├── ui/                       # UI components
│   │   ├── header-goldsky.tsx    # Main header
│   │   ├── footer-goldsky.tsx    # Main footer
│   │   └── logo-goldsky.tsx      # Logo component
│   └── goldsky/                  # GoldSky-specific components
│       ├── hero-section.tsx      # Hero section with backgrounds
│       ├── cta-section.tsx       # Call-to-action section
│       └── ...                   # Other sections
├── public/                       # Static assets
│   ├── fonts/                    # Custom fonts (Nacelle)
│   └── images/                   # Images
├── utils/                        # Utility functions
├── next.config.js                # Next.js configuration
├── tailwind.config.ts            # Tailwind CSS configuration
├── tsconfig.json                 # TypeScript configuration
└── package.json                  # Dependencies
```

## 🛠️ Technology Stack

### Core Framework
- **Next.js 15.1.6** - React framework with App Router
- **React 19.0.0** - UI library
- **TypeScript 5.7.3** - Type safety

### Styling
- **Tailwind CSS v4.0.3** - Utility-first CSS framework
- **@tailwindcss/forms** - Form styling
- **PostCSS** - CSS processing

### UI Components
- **@headlessui/react 2.2.0** - Unstyled accessible components
- **AOS 3.0.0-beta.6** - Animate on scroll library

### Development Tools
- **Turbopack** - Fast bundler for development
- **ESLint** - Code linting

## 📦 Build Output

Production build generates **12 static pages**:

| Route | Size | First Load JS |
|-------|------|---------------|
| `/` (Home) | 23.5 kB | 121 kB |
| `/about` | 12.3 kB | 119 kB |
| `/platform` | 8.2 kB | 116 kB |
| `/solutions` | 10.1 kB | 117 kB |
| `/products` | 9.8 kB | 117 kB |
| `/industries` | 11.2 kB | 118 kB |
| `/technology` | 9.5 kB | 117 kB |
| `/contact` | 7.8 kB | 115 kB |

## 🌐 Deployment

### Cloudflare Pages (Recommended)

This project is optimized for **Cloudflare Pages** deployment with static export.

#### Configuration

```yaml
Framework preset: Next.js (Static Export)
Build command: npm install && npm run build
Build output directory: out
Root directory: /
Node version: 20
```

#### Steps

1. Push code to GitHub
2. Log in to [Cloudflare Dashboard](https://dash.cloudflare.com)
3. Navigate to **Pages** → **Create a project**
4. Connect your GitHub repository
5. Use the configuration above
6. Deploy!

See [DEPLOY_CLOUDFLARE.md](./DEPLOY_CLOUDFLARE.md) for detailed instructions.

### Alternative Platforms

- **Vercel**: Full Next.js support with automatic optimization
- **Netlify**: Static hosting with continuous deployment
- **Self-hosted**: Deploy to your own server

## 🎯 Key Features Breakdown

### Home Page
- Animated hero section with gradient orbs
- Floating geometric shapes with CSS animations
- Grid pattern background
- Feature showcase
- CTA sections

### About Page
- Company mission and vision
- Team introduction
- Global office locations
- Company values

### Platform Page
- Unified technology platform overview
- Architecture diagrams
- Integration capabilities
- Scalability features

### Solutions Page
- Smart Factory solutions
- Smart Retail solutions
- Community Services solutions
- Use case examples

### Products Page
- Product portfolio
- Feature comparisons
- Pricing information
- Demo requests

### Industries Page
- Manufacturing sector
- Retail sector
- Service sector
- Success stories

### Technology Page
- Technology stack
- Innovation approach
- R&D capabilities
- Technical partnerships

### Contact Page
- Three global offices
- Contact forms
- Interactive map
- Social media links

## 🔧 Configuration

### Next.js Configuration

```javascript
// next.config.js
const nextConfig = {
  output: 'export',  // Static export for Cloudflare Pages
  images: {
    unoptimized: true  // Required for static export
  },
  trailingSlash: true  // SEO-friendly URLs
}
```

### Custom Animations

```css
/* style.css */
@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(10deg); }
}

@keyframes float-delay {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-30px) rotate(-10deg); }
}
```

## 📝 Development Notes

### Color Usage Guidelines

- Use `from-yellow-500 to-orange-500` for primary gradients
- Use `text-yellow-600` for links and highlights
- Use `bg-yellow-50` for subtle backgrounds
- Use `border-yellow-200` for borders

### Component Patterns

All pages follow a consistent structure:
1. Header (HeaderGoldsky)
2. Hero Section (with gradient background)
3. Content Sections
4. CTA Section (with gold-orange gradient)
5. Footer (FooterGoldsky)

## 🔗 Links

- **Website**: [Coming Soon]
- **LinkedIn**: [GoldSky Technologies](https://www.linkedin.com/company/108494899)
- **GitHub**: [Hanzg20/GS-open-react](https://github.com/Hanzg20/GS-open-react)

## 📄 License

This project is based on the [Open React Template](https://github.com/cruip/open-react-template) by Cruip.

- **Original Template**: Released under GPL
- **Original Copyright**: 2024 [Cruip.com](https://cruip.com)
- **Customization**: 2024 GoldSky Technologies

## 🙏 Credits

### Original Template
- **Created by**: [Cruip.com](https://cruip.com)
- **Design**: Available on [Figma Community](https://bit.ly/401KSUS)
- **Icons**: [Nucleo](https://nucleoapp.com/)

### GoldSky Customization
- Complete rebranding with gold-orange color scheme
- Custom hero backgrounds with animated elements
- Extended to 8 comprehensive pages
- Optimized for Cloudflare Pages deployment
- Added global office locations and contact information

## 📊 Project Status

- ✅ All pages completed and styled
- ✅ Responsive design implemented
- ✅ Production build successful (12 static pages)
- ✅ Deployment documentation ready
- ✅ Git repository configured
- 🚀 Ready for production deployment

## 🤝 Support

For questions or support regarding GoldSky Technologies:
- **Email**: Contact through our [Contact Page](./app/contact/page.tsx)
- **LinkedIn**: [Company Page](https://www.linkedin.com/company/108494899)

For technical issues with the original template:
- **Template FAQ**: [Cruip FAQs](https://cruip.com/faq/)
- **Next.js Documentation**: [Next.js Docs](https://nextjs.org/docs)

---

**Built with ❤️ by GoldSky Technologies**

*Unifying Smart Factory, Smart Retail, and Community Services through innovative technology.*
