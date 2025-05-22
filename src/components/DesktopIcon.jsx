import { cn } from "@/lib/utils";
import PropTypes from "prop-types";

const DesktopIcon = ({ name, icon, onClick, className }) => {
  return (
    <div className={cn("macos-desktop-icon", className)} onClick={onClick}>
      <div className="macos-desktop-icon-img">{icon}</div>
      <div className="macos-desktop-icon-label">{name}</div>
    </div>
  );
};

DesktopIcon.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
};

export default DesktopIcon;
