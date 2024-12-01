import React from 'react';

const TickerBlock = () => {
  return (
    <div
      style={{
        transform: 'translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
      }}
      className="ticker-block"
    >
      <div className="content-ticker-item">
        <div className="ticker-text">100% Decentralized •</div>
      </div>
      <div className="content-ticker-item">
        <div className="ticker-text">Diverse Portfolio Selection •</div>
      </div>
      <div className="content-ticker-item">
        <div className="ticker-text">Abundant Market Liquidity •</div>
      </div>
      <div className="content-ticker-item">
        <div className="ticker-text">World Best trusted AI Technologies. •</div>
      </div>
    </div>
  );
};

const TickerReverseBlock = () => {
  return (
    <div
      style={{
        transform: 'translate3d(0%, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)',
      }}
      className="content-ticker-reverse-block"
    >
      <div className="content-ticker-item">
        <div className="ticker-text">100% Decentralized •</div>
      </div>
      <div className="content-ticker-item">
        <div className="ticker-text">Diverse Portfolio Selection •</div>
      </div>
      <div className="content-ticker-item">
        <div className="ticker-text">Abundant Market Liquidity •</div>
      </div>
      <div className="content-ticker-item">
        <div className="ticker-text">We value our Pro-Traders •</div>
      </div>
      <div className="content-ticker-item">
        <div className="ticker-text">Gateway to Crypto Trading   •</div>
      </div>
    </div>
  );
};

const ContentThreeTextBlock = () => {
  return (
    <div className="content-two-text-block">
      <div className="row-gap-24">
        <div className="badge-wrapper">
          <div className="badge">
            <div className="badge-text">EOSI FINANCE</div>
          </div>
        </div>
        <h2 className="heading-two">
        We value our Pro-Traders
        </h2>
        <div className="content-paragraph-wrap">
          <p className="text-color text-large">
          Carving trading experience constantly is our top priority. Shorter is driven under the ethos of downright on-chain and open-source, bringing traders one step further towards our valuation of erecting a transparent, reliable, community-owned TradFi ecosystem. If you are a trader, and you want to feel the power of a Crypto Prop Firm, then EOSI Finance is the right place to kickstart your funded crypto account journey.
          </p>
        </div>
      </div>
    </div>
  );
};

const ContentThreeSection = () => {
  return (
    <section className="content-three-section">
      <div className="container">
        <div className="content-three-stack">
          <div className="content-ticker-wrapper">
            <div className="ticker">
              <TickerBlock />
              <TickerBlock />
            </div>
            <div className="ticker---reverse">
              <TickerReverseBlock />
              <TickerReverseBlock />
            </div>
            <div className="ticker">
              <TickerBlock />
              <TickerBlock />
            </div>
          </div>
          <ContentThreeTextBlock />
        </div>
      </div>
    </section>
  );
};

export default ContentThreeSection;
