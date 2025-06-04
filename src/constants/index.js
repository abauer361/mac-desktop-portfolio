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
  nike,
  chess,
  terminal,
  trashcan,
  poker,
  linkedin,
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
    photo: vsc,
    label: "VS Code",
  },
  {
    photo: github,
    label: "My Github",
    externalLink: "https://github.com/abauer361",
  },
  {
    photo: spotify,
    label: "Spotify",
  },
  {
    photo: map,
    label: "Maps",
  },
  {
    photo: nike,
    label: "Nike",
  },
  {
    photo: chess,
    label: "Chess",
  },
  {
    photo: terminal,
    label: "Terminal",
  },
  {
    photo: trashcan,
    label: "Trash",
  },
  {
    photo: poker,
    label: "Poker",
  },
  {
    photo: linkedin,
    label: "LinkedIn",
    externalLink: "https://www.linkedin.com/in/andrew-m-bauer/",
  },
  {
    photo: notes,
    label: "Notes",
  },
];
