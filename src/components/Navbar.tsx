import React from "react";
import "./Navbar.scss";

interface NavbarProps {
  logoSrc: string;
  navImages: string[];
  rightImage: string;
}

const Navbar: React.FC<NavbarProps> = ({ logoSrc, navImages, rightImage }) => {
  return (
    <nav className="navbar">
      <img src={logoSrc} alt="Logo" className="navbar__logo" />
      <div className="navbar__nav-images">
        {navImages.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Nav item ${index + 1}`}
            className="navbar__nav-image"
          />
        ))}
      </div>
      <img src={rightImage} alt="Right item" className="navbar__right-image" />
    </nav>
  );
};

export default Navbar;
