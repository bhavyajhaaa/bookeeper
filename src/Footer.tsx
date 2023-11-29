// Footer.tsx

import React from 'react';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className='footer-left'>
        <div className="footer-column">
          <h6>About Us</h6>
          {/* Add content for "About Us" */}
        </div>
        <div className="footer-column">
          <h6>Careers</h6>
          {/* Add content for "Careers" */}
        </div>
        <div className="footer-column">
          <h6>Need Help?</h6>
          {/* Add content for "Need Help?" */}
        </div>
      </div>
      <div className='footer-right'>
        <div className="footer-column">
          <h6>Follow on Social Media</h6>
          {/* Add social media links or icons */}
        </div>
      </div>  
    </footer>
  );
};

export default Footer;
