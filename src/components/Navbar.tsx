import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const TCSmartLogo = () => (
  <svg width="210" height="48" viewBox="0 0 210 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="datchik-logo-svg">
    <text x="0" y="36" fontFamily="Montserrat, Arial, sans-serif" fontWeight="bold" fontSize="38" fill="#2dc1f8">TC</text>
    <text x="55" y="36" fontFamily="Montserrat, Arial, sans-serif" fontWeight="bold" fontSize="38" fill="#ff9800">SMART</text>
  </svg>
);

interface MenuItem {
  title: string;
  items: {
    title: string;
    links: {
      text: string;
      path: string;
    }[];
  }[];
}

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const menuItems: MenuItem[] = [
    {
      title: 'Products',
      items: [
        {
          title: 'Datchik IOT Product',
          links: [
            { text: 'Customized Gas Detector', path: '/products/customized-gas-detector-series' }
          ]
        },
        {
          title: 'Datchik Smart Solution',
          links: [
            { text: 'Smart Watch', path: '/products/smart-watch-power-bank' },
            { text: 'Datchik Game', path: '/products/datchik-game' }
          ]
        },
        {
          title: 'Datchik Biomedical Product',
          links: [
            { text: 'Orthopaedic Heat Pad Kit', path: '/products/orthopaedic-heat-pad-kit' },
            { text: 'Electric Body Massager', path: '/products/electric-body-massager' }
          ]
        },
        {
          title: 'Datchik Lighting Product',
          links: [
            { text: 'LED Light', path: '/products/led-cfl' },
            { text: 'Concealed Light', path: '/products/ceiling-mounted-concealed-light' },
            { text: 'Tube Light', path: '/products/tube-light' },
            { text: 'Panel Light', path: '/products/panel-light' }
          ]
        }
      ]
    },
    {
      title: 'Services',
      items: [
        {
          title: 'Embedded Software Development Services',
          links: [
            { text: 'Firmware Development', path: '/services/firmware-development' },
            { text: 'Linux Based Driver Development', path: '/services/linux-driver-development' },
            { text: 'UX And UI Development', path: '/services/ux-ui-development' }
          ]
        },
        {
          title: 'Embedded Hardware Development Services',
          links: [
            { text: 'Circuit Designing', path: '/services/circuit-designing' },
            { text: 'PCB Designing & Layouting', path: '/services/pcb-designing' },
            { text: 'Mounting Of PCB (SMD And SMT Assembly And Disassembly)', path: '/services/pcb-mounting' }
          ]
        }
      ]
    }
  ];

  const handleMouseEnter = (title: string) => {
    setActiveDropdown(title);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <>
      <div className="topbar">
        <div className="topbar-left">
          <span>📞 7307290418 | ✉️ datchikelectronics@gmail.com</span>
        </div>
        <div className="topbar-right">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon fb" aria-label="Facebook"></a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon ig" aria-label="Instagram"></a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon li" aria-label="LinkedIn"></a>
        </div>
      </div>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <Link to="/">
              <TCSmartLogo />
            </Link>
          </div>
          <div className="navbar-menu">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/about-us" className="nav-link">About Us</Link>
            {menuItems.map((item) => (
              <div
                key={item.title}
                className={`nav-link dropdown ${activeDropdown === item.title ? 'active' : ''}`}
                onMouseEnter={() => handleMouseEnter(item.title)}
                onMouseLeave={handleMouseLeave}
              >
                {item.title} <span className="dropdown-arrow">▼</span>
                <div className="mega-menu">
                  {item.items.map((category) => (
                    <div key={category.title} className="mega-menu-column">
                      <h4>{category.title}</h4>
                      {category.links.map((link) => (
                        <Link key={link.path} to={link.path}>{link.text}</Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <Link to="/gallery" className="nav-link">Gallery</Link>
            <Link to="/contact-us" className="nav-link">Contact Us</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar; 