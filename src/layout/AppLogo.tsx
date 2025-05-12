import React from "react";

const AppLogo: React.FC<{ className?: string }> = ({ className = "h-10" }) => (
  <img src="/vite.svg" alt="MosaicNotes AppLogo" className={className} />
);

export default AppLogo;
