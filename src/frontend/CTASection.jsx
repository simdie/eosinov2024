import React from 'react';
import CTAButton from './CTAButton';
import CTABackground from './CTABackground';

const CTASection = () => {
  return (
    <section data-w-id="d6a5aa84-2800-39ba-728f-a3235c9e4304" className="cta-section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="cta-content-box">
          <div className="cta-text-content-block">
            <div className="row-gap-18">
              <div className="cta-badge-wrapper">
                <div data-w-id="8fd66346-f683-470d-8b22-c6b385ff3c7f" className="badge">
                  <div className="badge-text">SECURITY AND TRANSPARENCY IS OUR #1 PRIORITY</div>
                </div>
              </div>
              <div className="row-gap-16">
                <h2 className="heading-two">Start Copytrading Today</h2>
                <p className="text-medium text-color">
                With our Gateway to Crypto Trading and Funding, we Revolutionize proprietary trading
                </p>
              </div>
            </div>
            <CTAButton />
          </div>
          <CTABackground />
          <div className="cta-absolute-shape-top">
            <img
              src="/assets/6726ca0f328abbff95ca0511/6726ca0f328abbff95ca05ce_3d-render-of-dark-gray-metal-loop-cylinder%201.png"
              loading="lazy"
              data-w-id="d6a5aa84-2800-39ba-728f-a3235c9e4315"
              alt="CTA Shape Top"
            />
          </div>
          <div className="cta-absolute-shape-bottom">
            <img
              src="/assets/6726ca0f328abbff95ca0511/6726ca0f328abbff95ca05cd_black-matte-cube-with-circular-hole%201.png"
              loading="lazy"
              data-w-id="d6a5aa84-2800-39ba-728f-a3235c9e4317"
              sizes="(max-width: 479px) 100vw, 175.5px"
              alt="CTA Shape Bottom"
              srcSet="/assets/6726ca0f328abbff95ca0511/6726ca0f328abbff95ca05cd_black-matte-cube-with-circular-hole%25201-p-500.png 500w, /assets/6726ca0f328abbff95ca0511/6726ca0f328abbff95ca05cd_black-matte-cube-with-circular-hole%201.png 636w"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
