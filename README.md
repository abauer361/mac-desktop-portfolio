# Mac Desktop Portfolio

A macOS-style desktop interface built with React that serves as my personal portfolio website. Think of it as a virtual Mac desktop where each app represents a different aspect of who I am and what I create.

## The Story

I stumbled across [Vivek's amazing portfolio](https://github.com/vivek9patel/vivek9patel.github.io) and was completely blown away. As someone who had never touched web development before, I thought "I want to build something like that!"

So I dove in headfirst, using Cursor for guidance but trying my best to actually understand what I was building rather than just copying code. This project became my way of pushing my software engineering skills while creating something genuinely cool.

## Quick Start

Want to make this your own? Here's how to get started:

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn
- A code editor (I used Cursor, but VS Code works great too)

### Installation

```bash
# Clone the repo
git clone https://github.com/yourusername/mac-desktop-portfolio.git
cd mac-desktop-portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) and you'll see your very own Mac desktop!

## Tech Stack

- **React 18** - The foundation
- **Vite** - Fast development and building
- **Tailwind CSS** - Styling (because who has time for CSS)
- **Google Maps API** - For the travel map
- **EmailJS** - Contact form functionality
- **Bland AI** - Voice narration feature (optional)

## Adding Your Own Apps

The coolest part? You can easily add your own "apps" to the desktop. Here's how:

### 1. Add an Icon

Drop your app icon (PNG, JPG, or SVG) into `src/images/app_icons/`

### 2. Register the Icon

Add your icon to `src/images/app_icons/index.js`:

```javascript
import myApp from "./my-app-icon.png";
export { myApp };
```

### 3. Add to Desktop/Dock

In `src/constants/index.js`, add your app to either `desktopApps` or `dockerApps`:

```javascript
{
  photo: myApp,
  label: "My Cool App",
  externalLink: "https://example.com" // optional
}
```

### 4. Build Your App Component

Create a new file in `src/components/apps/MyApp.jsx`:

```javascript
import React from "react";

const MyApp = () => {
  return (
    <div className="h-full w-full">
      <h1>My Awesome App!</h1>
      {/* Your app content here */}
    </div>
  );
};

export default MyApp;
```

### 5. Wire Everything Up

- Add your component to `src/components/apps/index.js`
- Add it to `src/components/Screen.jsx` in the switch statement

That's it! Your app will now appear on the desktop and be fully functional.

## Adding Locations to the Map

Want to show off your travels? Add locations to the interactive map:

1. Open `src/components/apps/mapMarkers.js`
2. Add a new marker object:

```javascript
{
  position: { lat: 37.7749, lng: -122.4194 },
  title: "San Francisco",
  description: "Amazing city with great food and tech scene",
  date: "2023"
}
```

The map will automatically update with your new location!

## Environment Variables

You'll need to set up a few environment variables for full functionality:

Create a `.env` file in the root directory:

```env
# Google Maps (for the travel map)
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key
VITE_GOOGLE_MAPS_MAP_ID=your_map_id

# EmailJS (for the contact form)
VITE_EMAIL_PUBLIC_KEY=your_emailjs_public_key
VITE_EMAIL_SERVICE_ID=your_emailjs_service_id
VITE_EMAIL_TEMPLATE_ID=your_emailjs_template_id

# Bland AI (optional - for voice calls)
BLAND_API_KEY=your_bland_api_key
```

### Setting Up EmailJS

1. Create an account at [EmailJS.com](https://www.emailjs.com/)
2. Add your email service (Gmail, Outlook, etc.) in the Email Services tab
3. Create an email template in the Email Templates tab
4. Get your credentials from the Account tab:
   - Public Key
   - Service ID (from your email service)
   - Template ID (from your email template)

### Setting Up Google Maps API

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select an existing one
3. Enable the Maps JavaScript API and Places API
4. Create credentials (API Key) in the Credentials section
5. Get your Map ID from the Map Management section (optional but recommended for styling)

Pro tip: Set up billing in Google Cloud Console - you get $200 free credit monthly, which is more than enough for a portfolio site!

## Contributing

Found a bug? Want to add a feature? Feel free to open an issue or submit a pull request! This is a learning project, so I'm always open to improvements.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Vivek Patel: For the incredible inspiration and original concept
- Cursor: For being an amazing coding companion
- The React community: For making web development actually enjoyable

---

Built with ❤️ and a lot of trial and error. If you build something cool with this, I'd love to see it! Email me through my website and I'll check out the link!
