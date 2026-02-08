# Portfolio React App

A modern, responsive portfolio website built with React featuring a beautiful Deep Purple color scheme.

## Features

### 🎨 Design
- **Deep Purple Color Palette**: Professional and modern purple gradient theme
- **Responsive Design**: Works perfectly on all devices (desktop, tablet, mobile)
- **Dark/Light Theme Toggle**: Switch between themes with smooth transitions
- **Modern Typography**: Clean Inter font for excellent readability

### ⚛️ React Features
- **Component-Based Architecture**: Modular, reusable React components
- **Hooks**: useState, useEffect for state management and side effects
- **Smooth Scrolling**: React-controlled navigation
- **Intersection Observer**: Scroll-triggered animations
- **Form Handling**: React-controlled form with validation
- **Local Storage**: Theme persistence

### 🚀 Functionality
- **Interactive Elements**: Hover effects, animations, and micro-interactions
- **Skill Animations**: Progress bars that animate on scroll
- **Mobile Menu**: Hamburger menu for mobile devices
- **Back to Top Button**: Quick navigation to top of page
- **Contact Form**: With validation and notifications

## Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser**:
   Navigate to `http://localhost:3000`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
portfolio/
├── public/                 # Static assets
│   ├── assets/            # Images and icons
│   └── index.html         # HTML template
├── src/
│   ├── components/        # React components
│   │   ├── About.jsx
│   │   ├── BackToTop.jsx
│   │   ├── Contact.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx
│   │   └── ThemeToggle.jsx
│   ├── styles/            # CSS files
│   │   ├── global.css     # Main styles
│   │   └── responsive.css # Mobile styles
│   ├── App.jsx            # Main app component
│   └── main.jsx           # Entry point
├── package.json
├── vite.config.js         # Vite configuration
└── README.md
```

## Components

### Core Components

- **App.jsx**: Main application component with routing
- **Navbar.jsx**: Navigation with active section detection
- **Hero.jsx**: Landing section with typing animation
- **About.jsx**: Personal information and highlights
- **Skills.jsx**: Technical skills with animated progress bars
- **Projects.jsx**: Portfolio showcase
- **Experience.jsx**: Work history timeline
- **Contact.jsx**: Contact form with validation
- **Footer.jsx**: Site footer

### Utility Components

- **ThemeToggle.jsx**: Dark/light theme switcher
- **BackToTop.jsx**: Scroll to top button

## Technologies Used

### Frontend
- **React 19**: Modern React with hooks
- **Vite**: Fast build tool and dev server
- **CSS3**: Modern CSS with custom properties
- **Font Awesome**: Icon library

### Development
- **React Hooks**: useState, useEffect for state management
- **Intersection Observer**: Scroll-triggered animations
- **Local Storage**: Theme persistence

## Customization

### Personal Information

Edit the following components with your information:

1. **Navbar.jsx** - Update nav logo
2. **Hero.jsx** - Update name, title, description, and social links
3. **About.jsx** - Update personal description
4. **Skills.jsx** - Update skill levels
5. **Projects.jsx** - Update project information
6. **Experience.jsx** - Update work history
7. **Contact.jsx** - Update contact information

### Colors

Edit CSS variables in `src/styles/global.css`:

```css
:root {
    --primary-color: #6A0DAD;    /* Change your main color */
    --primary-dark: #5B2C6F;      /* Darker shade */
    --primary-light: #9B59B6;     /* Lighter shade */
    /* ... other variables */
}
```

### Adding Projects

Update the projects array in `src/components/Projects.jsx`:

```jsx
const projects = [
  {
    title: 'Your Project',
    description: 'Project description',
    image: 'project-image.jpg',
    tech: ['React', 'Node.js'],
    demoUrl: 'https://demo-url.com',
    githubUrl: 'https://github.com/username/repo'
  }
]
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Browser Support

- **Modern Browsers**: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- **Mobile Browsers**: iOS Safari 14+, Chrome Mobile 90+

## Performance Features

- **Optimized Bundle**: Vite's optimized build process
- **Lazy Loading**: Images load as needed
- **Code Splitting**: Automatic code splitting
- **Tree Shaking**: Remove unused code
- **Asset Optimization**: Compressed images and assets

## Future Enhancements

- [ ] Blog section
- [ ] Project filtering system
- [ ] Testimonials section
- [ ] Newsletter signup
- [ ] Advanced animations
- [ ] CMS integration
- [ ] Progressive Web App (PWA)

## Deployment

### Netlify

1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Vercel

1. Connect your repository to Vercel
2. Vercel will automatically detect and configure the build

### Other Hosting

Any static hosting service that supports single-page applications.

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ and React using the Deep Purple theme!