import React from 'react';
import FooterLinks from './FooterLinks';
import FooterNewsletter from './FooterNewsletter';
import FooterCopyright from './FooterCopyright';

const FooterSection = () => {
  return (
    <section className="footer-section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="footer-section-main-content">
          <div className="footer-top-content">
            <FooterLinks />
            <FooterNewsletter />
          </div>
          <FooterCopyright />
        </div>
      </div>
    </section>
  );
};

export default FooterSection;
