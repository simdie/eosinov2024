import React from 'react';


const reviewsData = [
  {
    name: ' Sophia Turner',
    role: 'CEO TrustFunded',
    review: "The thriving open source software, AI, machine learning, blockchain decentralization, and research ecosystem are driving more investment in web3 innovation. TrustFunded acknowledges and commends the innovative efforts of EOSI Finance in advancing Prop Firm businesses in the web3 space.",
    imgSrc: '/assets/6726ca0f328abbff95ca0511/6726ca0f328abbff95ca05ab_Base.png',
  },

  {
    name: 'Cheng Darryl',
    role: 'Owner, Sanest MoneyFX',
    review: "This will be a significant achievement! By decentralizing onboarding of prop firm traders, prioritizing excellent products and artificial intelligence, they have established themselves as the pioneers of AI powered decentralized prop firm with a winning strategy for product advancement in the realm of Web3 prop firm business.",
    imgSrc: '/assets/6726ca0f328abbff95ca0511/6726ca0f328abbff95ca05ae_Base%20%286%29.png',
  },

  {
    name: 'Aria Amandaz',
    role: 'Prop Firm Trader',
    review: "EOSI Finance has the potential to take our trading to the next level. The ability to copy top traders with ease will increase our profits consistently. As a prop firm trader, I value the AI-driven strategies, which provide us with great returns without the hassle of manual analysis",
    imgSrc: '/assets/6726ca0f328abbff95ca0511/6726ca0f328abbff95ca05b1_Base%20%283%29.png',
  },
 
  {
    name: 'Oliver Brooks',
    role: 'CFO at CryptoVision Academy',
    review: "Using EOSI Finance’s copy trading feature will be a game changer for our prop firm academy. It will allow newbies to replicate the strategies of expert traders and steadily grow their portfolio with minimal effort, providing consistent profits.",
    imgSrc: '/assets/6726ca0f328abbff95ca0511/6726ca0f328abbff95ca05b3_Base%20%281%29.png',
  },
  {
    name: 'James Collins',
    role: 'Co-Founder & CEO, CodeWrights',
    review: "Thanks to EOSI Finance, we will be able to optimize our crypto portfolio and reduce risks. Their AI-driven strategies will be top-notch, offering a hands-off approach to trading.",
    imgSrc: '/assets/6726ca0f328abbff95ca0511/6726ca0f328abbff95ca05ad_Base%20%287%29.png',
  },
  {
    name: 'Isabella Green',
    role: 'StandR Bot user',
    review: "EOSI Finance provided us with incredible insights into the crypto market. Their AI technology is incredibly powerful, making our trading decisions much more effective and reliable.",
    imgSrc: ' /assets/6726ca0f328abbff95ca0511/6726ca0f328abbff95ca05b0_Base%20%284%29.png',
  },
];

const ReviewsSection = () => {
  return (
    <section className="reviews-section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="review-section-inner">
          <div className="review-section-top-part">
            <div className="review-section-heading">
              <div className="badge">
                <div className="badge-text">VERIFIED REVIEWS</div>
              </div>
              <h2 className="heading-two reviews-title-content-heading">Trusted by 723+ happy users</h2>
              <p className="text-default reviewx-section-paragraph">
              EOSI Finance equips every crypto lover and DeFi ethuansist with varying and effective arms for maximum profit amidst their crypto trading level with the world best trusted AI technologies.
              </p>
            </div>
          </div>
    
          <div className="reviews-section-card-content">
            {reviewsData.map((review, index) => (
              <div className={`part-${Math.floor(index / 3) + 1}`} key={index}>
                <div className="reviews-section-card-one">
                  <div className="reviews-section-card-heading">
                    <div className="reviews-card-icon">
                      <img src={review.imgSrc} alt={review.name} loading="lazy" />
                    </div>
                    <div className="review-section-card-heading">
                      <p className="text-small reviews-card-heading">{review.name}</p>
                      <p className="text-small review-card-agency">{review.role}</p>
                    </div>
                  </div>
                  <div className="reviews-section-card-lower-part">
                    <p className="text-small reviews-section-card-paragraph">"{review.review}"</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
