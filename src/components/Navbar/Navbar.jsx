import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.svg";
import menuOpen from "../../assets/menu_open.svg";
import menuClose from "../../assets/menu_close.svg";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Update active menu based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section, div[id]");
      let currentSection = "home";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100; // Adjust for navbar height
        if (window.scrollY >= sectionTop) {
          currentSection = section.id;
        }
      });

      setActiveMenu(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle menu clicks
  const handleMenuClick = (id) => {
    const targetSection = document.getElementById(id);
    if (targetSection) {
      const offset = 70; // Adjust offset for navbar height
      const sectionTop = targetSection.offsetTop - offset;
      window.scrollTo({
        top: sectionTop,
        behavior: "smooth",
      });
      setActiveMenu(id);
      setIsMobileMenuOpen(false); // Close mobile menu on selection
    }
  };

  const menuItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "services", label: "Certifications" },
    { id: "MyWork", label: "Projects" },
    { id: "contact", label: "Contact" }
  ];

  return (
    <div className="navbar">
      <img
        src={logo}
        alt="Logo"
        className="logo"
        onClick={() => handleMenuClick("home")}
      />
      <img
        src={menuOpen}
        alt="Menu Open"
        className="nav-mob-open"
        onClick={() => setIsMobileMenuOpen(true)}
      />

      <ul className={`nav-menu ${isMobileMenuOpen ? "open" : ""}`}>
        <img
          src={menuClose}
          alt="Menu Close"
          className="nav-mob-close"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {menuItems.map((item) => (
          <li key={item.id} onClick={() => handleMenuClick(item.id)}>
            <p className={`menu-item ${activeMenu === item.id ? "active" : ""}`}>
              {item.label}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
