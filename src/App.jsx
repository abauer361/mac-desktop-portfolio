import { useState } from "react";
import { spotify, safari, email } from "./images/app_icons";
import "./App.css";
import "./index.css";
import MenuBar from "./components/MenuBar";
import Dock from "./components/Dock";
import Desktop from "./components/Desktop";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <MenuBar />
      <main className="flex h-[calc(100vh-7px-70px)] mt-7 w-full justify-end">
        <Desktop />
      </main>
      <section className="fixed bottom-4 left-1/2 -translate-x-1/2 w-full flex justify-center">
        <Dock />
      </section>
    </>
  );
}

export default App;
