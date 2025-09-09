import React from 'react';
import { motion } from 'framer-motion';
import { ConnectWallet } from "@thirdweb-dev/react";


const FeatureSection = () => {
  return (
    <section className="feature-two-section">
      <div className="w-layout-blockcontainer container w-container">
        <div className="featurte-two-section-inner">
          <motion.div
            className="feature-two-section-heading"
            initial={{ opacity: 0, y: 30 }} // Initial state: invisible, slightly below
            whileInView={{ opacity: 1, y: 0 }} // Animate to fully visible when in view
            transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }} // Smooth transition with delay
            viewport={{ once: true }} // Trigger animation only once when it comes into view
          >
            <div className="feature-two-section-heading">



              <div
                className="badge"
                data-w-id="8fd66346-f683-470d-8b22-c6b385ff3c7f"
              >
                <div className="badge-text">SAFE &amp; SECURE</div>
              </div>
              <h2
                className="heading-two reviews-title-content-heading"
                style={{ opacity: 1 }}
                data-w-id="fa625fd4-ecd6-3f78-217f-0076a6d3b0b9"
              >
                Get Started in 3 Easy Steps
              </h2>


              <motion.div
                className="feature-two-section-heading-paragraph"
                initial={{ opacity: 0, y: 30 }} // Initial state: invisible, slightly below
                whileInView={{ opacity: 1, y: 0 }} // Animate to fully visible when in view
                transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }} // Smooth transition with delay
                viewport={{ once: true }} // Trigger animation only once when it comes into view
              >

                <div className="feature-two-section-heading-paragraph">
                  <p
                    className="text-default text-color"
                    style={{ opacity: 1 }}
                    data-w-id="fa625fd4-ecd6-3f78-217f-0076a6d3b0bb"
                  >
                    Your Gateway to Crypto Trading and Funding. Whether you’re an experienced pro-trader or just starting out, we got you covered
                  </p>
                </div>
              </motion.div>



            </div>
          </motion.div>
          <div
            className="feature-two-card-row"
            style={{ opacity: 1 }}
            data-w-id="fa625fd4-ecd6-3f78-217f-0076a6d3b0bd"

          >


            <motion.div
              className="feature-card-two"
              initial={{ opacity: 0, y: 30 }} // Initial state: invisible, slightly below
              whileInView={{ opacity: 1, y: 0 }} // Animate to fully visible when in view
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }} // Smooth transition with delay
              viewport={{ once: true }} // Trigger animation only once when it comes into view
            >
              <div className="feature-card-two" id="w-node-e21b74d0-79f4-90ba-2ed4-88afb0951618-95ca0515">
                <div className="feature-card-two-inner">
                  <div className="row-gap-24">
                    <div className="feature-card-two-title-block">
                      <h3 className="heading-three">
                        1. Identify your goal
                      </h3>
                    </div>
                    <p
                      className="text-color small-text"
                      id="w-node-a7df6de7-de25-16e6-d264-b106252c652d-95ca0515"
                    >
                      EOSI Finance offers a range of options to cater to your trading needs. Whether you’re an experienced pro-trader or just starting out, we got you covered.
                    </p>
                  </div>
                </div>
                <div
                  id="w-node-fef919f8-8181-4e28-0dba-b52a632c4ee4-95ca0515"
                >



                  <a className="button w-inline-block">

                    <ConnectWallet
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '9999px',
                        backgroundColor: 'white',
                        width: '0px',
                        height: '0px',
                        color: 'black',
                        border: 'none',
                        cursor: 'pointer',
                        transition: 'background-color 0.3s', // Smooth transition for hover effect
                      }}
                      onMouseOver={(e) => e.target.style.backgroundColor = 'transparent'} // Set background to transparent on hover
                      onMouseOut={(e) => e.target.style.backgroundColor = 'white'} // Revert back to white
                    >
                      Get Started
                    </ConnectWallet>

                    <img
                      src="/assets/6726ca0f328abbff95ca0511/6726ca0f328abbff95ca058d_arrow-right.svg"
                      loading="lazy"
                      alt=""
                      className="button-arrow-icon"
                    />
                  </a>






                </div>
              </div>

            </motion.div>



            <motion.div

              initial={{ opacity: 0, y: 30 }} // Initial state: invisible, slightly below
              whileInView={{ opacity: 1, y: 0 }} // Animate to fully visible when in view
              transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }} // Smooth transition with delay
              viewport={{ once: true }} // Trigger animation only once when it comes into view
            >
              <div
                className="feature-card-two is-large"
                id="w-node-f22a9aa4-e527-3a6a-b7ac-72d070f47468-95ca0515"
              >


                <div className="feature-card-two-inner">
                  <img
                    src="/assets/6726ca0f328abbff95ca0511/6726ca0f328abbff95ca067a_Map.png"
                    loading="lazy"
                    sizes="(max-width: 479px) 100vw, (max-width: 767px) 90vw, (max-width: 991px) 46vw, (max-width: 1439px) 62vw, 755.3359375px"
                    srcSet="/assets/6726ca0f328abbff95ca0511/6726ca0f328abbff95ca067a_Map-p-500.png 500w, /assets/6726ca0f328abbff95ca0511/6726ca0f328abbff95ca067a_Map-p-800.png 800w, /assets/6726ca0f328abbff95ca0511/6726ca0f328abbff95ca067a_Map.png 2367w"
                    alt="map"
                    className="feature-card-two-map-image"
                  />
                  <div className="row-gap-24">
                    <div className="feature-card-two-title-block">
                      <h3 className="heading-three">
                        2. Trade with your Web3 Wallet
                      </h3>
                    </div>
                    <p
                      className="text-color small-text"
                      id="w-node-f22a9aa4-e527-3a6a-b7ac-72d070f4746d-95ca0515"
                    >
                      Easily connect your existing web3 wallets, such as Metamask, Trustwallet, SafePal, etc and seamlessly approve the desired trading amount you want to trade with.
                    </p>
                  </div>


                  <div className="row-gap-24">
                    <div className="feature-card-two-title-block">
                      <h3 className="heading-three">
                        3. Start trading Today
                      </h3>
                    </div>
                    <p
                      className="text-color small-text"
                      id="w-node-f22a9aa4-e527-3a6a-b7ac-72d070f4746d-95ca0515"
                    >
                      Choose from a wide seletion of our doxxed pro-traders or allow EOSI Finance AI to select pro-traders according to your risk level.
                    </p>
                  </div>






                </div>


              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
