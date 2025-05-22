import { useState } from "react";
import { spotify, safari, email } from "./images/app_icons";
import "./App.css";
import "./index.css";
import MenuBar from "./components/MenuBar";
import Dock from "./components/Dock";
import Icon from "./components/Icon";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MenuBar />
      <div>
        <p>Portfolio here</p>
      </div>
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-full flex justify-center">
        <Dock />
      </div>
      <div>
        <Icon iconURL={spotify} label="Spotify" />
        <Icon iconURL={safari} />
        <Icon iconURL={email} label="Email" />
      </div>
    </>
  );
}

export default App;
