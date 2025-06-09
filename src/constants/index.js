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
  poker,
  linkedin,
  bland,
} from "../images/app_icons";

export const dockerApps = [
  {
    photo: finder,
    label: "About Andrew",
  },
  {
    photo: safari,
    label: "Safari",
  },
  {
    photo: email,
    label: "Contact Me",
  },
  {
    photo: map,
    label: "Maps",
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
    photo: finder,
    label: "About Andrew",
  },
  {
    photo: email,
    label: "Contact Me",
  },
  {
    photo: linkedin,
    label: "LinkedIn",
    externalLink: "https://www.linkedin.com/in/andrew-m-bauer/",
  },
  {
    photo: github,
    label: "My Github",
    externalLink: "https://github.com/abauer361",
  },
  {
    photo: chess,
    label: "Chess",
  },
  {
    photo: poker,
    label: "Poker",
  },
  {
    photo: nike,
    label: "Nike",
  },
  {
    photo: bland,
    label: "Bland",
  },
];
