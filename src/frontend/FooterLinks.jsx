import React from 'react';

const FooterLinks = () => {
  return (
    <div className="footer-list-block">
      <div className="footer-list-single">
        <div className="row-gap-40">
          <p className="text-small footer-heading-one">EOSI FINANCE</p>
          <div className="row-gap-13">
            {/* Anchor links for internal navigation */}
            <a href="#home" className="link-block w-inline-block">
              <p className="text-small">Home</p>
            </a>
           
            {/* <a href="#connectwallets" className="link-block w-inline-block">
              <p className="text-small">Copy trading</p>
            </a> */}

            <a href="#" className="link-block w-inline-block">
              <p className="text-small">
                Copy trading
                <span
                  style={{
                    color: 'blue',
                    fontSize: '10px',
                    fontWeight: 'bolder',
                  }}
                >
                  (coming soon)
                </span>
              </p>
            </a>


            <a href="#team" className="link-block w-inline-block">
              <p className="text-small">Team</p>
            </a>
            <a href="mailto:eosi@tutanota.com" className="link-block w-inline-block">
              <p className="text-small">Contact</p>
            </a>
            {/* External link */}
            <a href="https://medium.com/@eosifinance_ai" className="link-block w-inline-block">
              <p className="text-small">Blog</p>
            </a>
          </div>
        </div>
      </div>

      {/* <div className="footer-list-single footer-top-part-two">
        <div className="row-gap-40">
          <p className="text-small footer-heading-one">PRODUCTS</p>
          <div className="row-gap-13">
            
            <a href="#connectwallets" className="link-block w-inline-block">
              <p className="text-small">Crypto copy trading</p>
            </a>
            <a href="#team" className="link-block w-inline-block">
              <p className="text-small">Team</p>
            </a>
            <a href="#get-funded" className="link-block w-inline-block">
              <p className="text-small">
                Get Funded
                <span
                  style={{
                    color: 'green',
                    fontSize: '10px',
                    fontWeight: 'bolder',
                  }}
                >
                  (coming soon)
                </span>
              </p>
            </a>
          </div>
        </div>
      </div> */}

      <div className="footer-list-single footer-top-part-two">
        <div className="row-gap-40">
          <p className="text-small footer-heading-one">RESOURCES</p>
          <div className="row-gap-13">
            {/* External links */}
            <a
              href="https://online.fliphtml5.com/limyj/fvvf"
              className="link-block w-inline-block"
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Security feature to prevent potential vulnerabilities
            >
              <p className="text-small">Pitch Deck</p>
            </a>

            <a
              href="https://online.fliphtml5.com/limyj/fvvf/#p=10"
              className="link-block w-inline-block"
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Security feature to prevent potential vulnerabilities
            >
              <p className="text-small">Tokenomics</p>
            </a>

            <a
              href="#roadmap"
              className="link-block w-inline-block"
              target="_blank" // Opens the link in a new tab
              rel="noopener noreferrer" // Security feature to prevent potential vulnerabilities
            >
              <p className="text-small">Roadmap</p>
            </a>
            <a href="#get-funded" className="link-block w-inline-block">
              <p className="text-small">
                Get Funded
               
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterLinks;
