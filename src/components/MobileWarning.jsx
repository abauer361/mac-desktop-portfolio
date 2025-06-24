import { appleLogo } from "../images/menu_items";

const MobileWarning = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-neutral-50 p-4">
      <div className="text-center max-w-md">
        <h1 className="text-2xl font-mac-bold mb-4">
          Desktop Experience Required
        </h1>
        <p className="text-gray-600 font-mac mb-6">
          This portfolio is designed to showcase a macOS-desktop experience and
          is best viewed on a desktop computer.
        </p>
        <div className="flex items-center justify-center space-x-2">
          <img src={appleLogo} alt="Apple Logo" className="h-6 w-6" />
          <span className="font-mac">
            Please visit on a desktop device like a laptop or your computer.
          </span>
        </div>
      </div>
    </div>
  );
};

export default MobileWarning;
