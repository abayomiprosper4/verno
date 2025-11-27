# Verno - Minimalist Work Collection Website

A polished single-page style website with sophisticated animations, built with React, Framer Motion, and Tailwind CSS. Features horizontal 3D page transitions, animated navbar underline, and a carefully choreographed load sequence.

## Features

- **Single Viewport Design**: No vertical scrolling - everything fits within one viewport
- **3D Page Transitions**: Horizontal rotation animations when navigating between pages
- **Animated Navbar**: Sliding underline that smoothly moves between active navigation items
- **Load Sequence**: Choreographed initial animation with staggered element appearances
- **Micro-interactions**: Hover effects, button animations, and focus states
- **Accessibility**: Semantic HTML, ARIA labels, and keyboard navigation support
- **Reduced Motion**: Respects user's prefers-reduced-motion settings

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:8080`

## Project Structure

```
src/
├── assets/
│   └── hero-image.jpeg          # Main hero image
├── components/
│   ├── Navbar.tsx               # Navigation with animated underline
│   ├── SidePanel.tsx            # Left metadata panel
│   ├── BottomStrip.tsx          # Bottom events/news strip
│   └── PageWrapper.tsx          # Page transition wrapper
├── pages/
│   ├── Home.tsx                 # Main landing page
│   ├── Products.tsx             # Products page
│   ├── About.tsx                # About page
│   ├── Locations.tsx            # Locations page
│   └── Cart.tsx                 # Shopping cart page
├── lib/
│   └── animations.ts            # Animation constants and variants
├── App.tsx                      # Main app with routing logic
└── index.css                    # Design system tokens
```

## Animation Configuration

All animation timings and easings are defined in `src/lib/animations.ts`:

```typescript
export const ANIMATION_CONFIG = {
  LOAD_DELAY_START: 350,           // Initial delay before animations start
  IMAGE_FADE_DURATION: 800,        // Hero image fade duration
  ELEMENT_STAGGER: 120,            // Stagger between elements
  ELEMENT_FADE_DURATION: 600,      // Individual element fade duration
  UNDERLINE_DURATION: 450,         // Navbar underline animation
  PAGE_TRANSITION_DURATION: 650,   // Page transition duration
  PAGE_ROTATION_DEG: 12,           // 3D rotation angle
  PAGE_TRANSLATE_X: 40,            // Horizontal translation distance
  // ... more constants
};
```

You can easily adjust these values to fine-tune the animations.

## Design System

The design system is defined in `src/index.css` using HSL color values:

- `--background`: Main dark background
- `--foreground`: Primary text color
- `--primary`: Accent color (gold/amber)
- `--text-secondary`: Secondary text
- `--text-muted`: Muted text

All components use these semantic tokens for consistent theming.

## Replacing Assets

### Hero Image

To replace the hero image:

1. Place your new image in `src/assets/`
2. Update the import in `src/pages/Home.tsx`:

```typescript
import heroImage from "@/assets/your-new-image.jpeg";
```

The image should ideally be:
- High resolution (at least 1920px wide)
- Portrait or square aspect ratio
- Dark or dramatic lighting to match the aesthetic

## Technologies Used

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Framer Motion** - Animation library
- **Tailwind CSS** - Utility-first styling
- **Vite** - Build tool
- **Lucide React** - Icon library

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Accessibility

The website includes:
- Semantic HTML elements (`<nav>`, `<main>`, `<aside>`)
- ARIA labels and attributes
- Keyboard navigation support
- Focus-visible states
- Reduced motion support

## License

This project is part of the Lovable platform.

## Support

For questions or issues, visit [Lovable Documentation](https://docs.lovable.dev/)
