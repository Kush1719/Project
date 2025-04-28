import React from 'react';
import '../assets/css/global.css';
import { useCollapse } from '../context/CollapseContext';
const Footer = () => {
  const { isCollapsed } = useCollapse();
  return (
    <footer className={`app-footer ${isCollapsed ? 'collapsed' : ''}`}>
      <div className="footer-left">© 2024 Company Name. All Rights Reserved.</div>
      <div className="footer-right">
        Made by <span className="footer-highlight">Vosmos</span>
      </div>
    </footer>
  );
};

export default Footer;