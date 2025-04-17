import React from 'react';

const Footer = () => {
  return (
    <footer
      style={{
        position: 'fixed',
        bottom: 0,
        left: 255,
        right: 0,
        height: '40px',
        backgroundColor: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 20px',
        fontSize: '14px',
        zIndex: 1000,
      }}
    >
      <div>© 2024 Company Name. All Rights Reserved.</div>
      <div>
        Made by{' '}
        <span style={{ color: 'skyblue', fontWeight: 'bold'}}>Vosmos</span>
      </div>
    </footer>
  );
};

export default Footer;
