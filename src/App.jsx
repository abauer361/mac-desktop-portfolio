import "./App.css";
import "./index.css";
import MenuBar from "./components/MenuBar";
import Dock from "./components/Dock";
import Desktop from "./components/Desktop";
import MobileWarning from "./components/MobileWarning.jsx";
import { useIsMobile } from "./hooks/useIsMobile";

function App() {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <MobileWarning />;
  }

  return (
    <>
      <MenuBar />
      <main className="fixed h-[calc(100%-30px)] mt-7 w-full">
        <Desktop />
      </main>
      <section className="fixed bottom-4 left-1/2 -translate-x-1/2 w-full flex justify-center z-0">
        <Dock />
      </section>
    </>
  );
}

export default App;
