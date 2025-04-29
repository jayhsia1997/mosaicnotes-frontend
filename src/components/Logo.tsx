import React from "react";

const Logo: React.FC<{ className?: string }> = ({ className = "h-10" }) => (
  <img src="/vite.svg" alt="MosaicNotes Logo" className={className} />
);

export default Logo;
