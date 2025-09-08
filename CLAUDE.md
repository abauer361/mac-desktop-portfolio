# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production  
npm run build

# Lint code
npm run lint

# Preview production build
npm run preview
```

## Project Architecture

This is a React-based macOS desktop portfolio simulator built with Vite and Tailwind CSS. The application recreates a Mac desktop interface where each "app" represents different portfolio content.

### Core Structure

- **App.jsx**: Main application component that renders MenuBar, Desktop, and Dock
- **Desktop**: Contains draggable app windows and desktop icons
- **Dock**: Bottom navigation bar with app shortcuts
- **MenuBar**: Top macOS-style menu bar with system controls

### App System Architecture

The portfolio uses a modular app system where each portfolio section is a separate "macOS app":

1. **App Registration**: Apps are defined in `src/constants/index.js`
   - `dockerApps`: Apps that appear in the dock
   - `desktopApps`: Apps that appear as desktop icons
   - Each app has: photo (icon), label, and optional externalLink

2. **App Components**: Individual app components in `src/components/apps/`
   - Each app is a React component that renders the app content
   - Organized by feature (e.g., "About Andrew/" for profile content)

3. **App Routing**: `src/components/Screen.jsx` contains the switch statement that maps app labels to components

4. **Icon Management**: All app icons are centralized in `src/images/app_icons/index.js`

### Key Components

- **MenuBar.jsx**: System menu bar with time, wifi, notifications
- **Dock.jsx**: Bottom app launcher with hover effects
- **Desktop.jsx**: Main workspace with draggable windows and desktop icons
- **Screen.jsx**: App content router based on app label
- **RightClick.jsx**: Desktop context menu functionality

### Adding New Apps

To add a new portfolio app:

1. Add icon to `src/images/app_icons/` and export in `index.js`
2. Import icon in `src/constants/index.js` and add to `dockerApps` or `desktopApps`
3. Create component in `src/components/apps/`
4. Export component in `src/components/apps/index.js`
5. Add case to switch statement in `src/components/Screen.jsx`

### Environment Variables

Required for full functionality:

```env
# Google Maps API (for Maps app)
VITE_GOOGLE_MAPS_API_KEY=your_api_key
VITE_GOOGLE_MAPS_MAP_ID=your_map_id

# EmailJS (for Contact app)
VITE_EMAIL_PUBLIC_KEY=your_emailjs_public_key
VITE_EMAIL_SERVICE_ID=your_emailjs_service_id
VITE_EMAIL_TEMPLATE_ID=your_emailjs_template_id

# Bland AI (optional - for voice features)
BLAND_API_KEY=your_bland_api_key
```

### Technology Stack

- **React 18**: Core framework with hooks
- **Vite**: Build tool and dev server
- **Tailwind CSS**: Utility-first styling
- **@vis.gl/react-google-maps**: Google Maps integration
- **@emailjs/browser**: Contact form functionality
- **@radix-ui/react-dropdown-menu**: Menu components

### Mobile Handling

The app displays a mobile warning component (`MobileWarning.jsx`) on mobile devices using the `useIsMobile` hook, as the desktop interface is not optimized for mobile viewing.

### File Organization

- `src/components/apps/`: Individual app components
- `src/images/app_icons/`: App launcher icons
- `src/images/photos_app_photos/`: Photo gallery images
- `src/images/wallpapers/`: Desktop backgrounds
- `src/constants/`: App definitions and configuration
- `src/hooks/`: Custom React hooks
- `src/lib/`: Utility functions