// This is where we add new apps, they will automatically
// be exported to the dock and desktop depending on where you add them
// Make sure to add an icon within app_icons

import {
  contacts,
  email,
  finder,
  github,
  map,
  notes,
  photos,
  safari,
  spotify,
  vsc,
} from "../images/app_icons";

export const dockerApps = [
  {
    photo: finder,
    label: "Finder",
  },
  {
    photo: safari,
    label: "Safari",
  },
  {
    photo: email,
    label: "Email",
  },
  {
    photo: map,
    label: "Map",
  },
  {
    photo: photos,
    label: "Photos",
  },
  {
    photo: contacts,
    label: "Contacts",
  },
  {
    photo: notes,
    label: "Notes",
  },
  {
    photo: spotify,
    label: "Spotify",
  },
  {
    photo: vsc,
    label: "VS Code",
  },
];

export const desktopApps = [
  {
    photo: safari,
    label: "Safari",
  },
  {
    photo: finder,
    label: "About Andrew",
  },
  {
    photo: email,
    label: "Contact Me",
  },
  {
    photo: github,
    label: "My Github",
  },
  {
    photo: spotify,
    label: "Spotify",
  },
];
