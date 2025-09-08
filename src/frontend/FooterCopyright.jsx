import React from 'react';

const FooterCopyright = () => {
  return (
    <div className="footer-copyright-block">
      <div className="footer-bottom-title-content">
        <img
          src="/assets/6726ca0f328abbff95ca0511/672f16cbf73995494b87055d_Secury.png"
          loading="lazy"
          alt="Secury Logo"
          className="image-12"
        />
      </div>
      <p className="text-small footer-bottom-paragraph paragraph-2">©2025 All Rights Reserved | EOSI Finance 
       
             <a
              href="https://eosi-finance-1.gitbook.io/eosi-finance-documentations/eosi-finance-general-legal-framework/terms-of-service-eosi-finance"
              className="link-block w-inline-block"
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Security feature to prevent potential vulnerabilities
            >
              <p className="text-small">| Terms of Service  </p>
            </a>


           
             <a
              href="https://eosi-finance-1.gitbook.io/eosi-finance-documentations/eosi-finance-general-legal-framework/privacy-policy-eosi-finance"
              className="link-block w-inline-block"
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Security feature to prevent potential vulnerabilities
            >
              <p className="text-small">| Privacy Policy  </p>
            </a>

            
             <a
              href="https://eosi-finance-1.gitbook.io/eosi-finance-documentations/eosi-finance-general-legal-framework/disclaimer-eosi-finance"
              className="link-block w-inline-block"
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Security feature to prevent potential vulnerabilities
            >
              <p className="text-small">| Disclaimer</p>
            </a>
      </p>
    </div>
  );
};

export default FooterCopyright;
