import React from 'react';
import { motion } from 'framer-motion';
import '../assets/content2.css'; // Import the CSS file for styles

const ContentTwoTextBlock = () => {

  return (

    <motion.div
      className="content-two-text-block"
      initial={{ opacity: 0, y: 30 }} // Initial state: invisible, slightly below
      whileInView={{ opacity: 1, y: 0 }} // Animate to fully visible when in view
      transition={{ duration: 1, ease: 'easeOut' }} // Smooth transition
      viewport={{ once: true }} // Trigger animation only once when it comes into view
    >
    
    <div className="content-two-text-block" >
      <div className="row-gap-24">
        <div className="badge-wrapper">
          <div className="badge">
            <div className="badge-text">Join EOSI Finance today </div>
          </div>
        </div>
        <h2 className="heading-two">
        Experience the future of crypto trading!
        </h2>
        <div className="content-paragraph-wrap">
          <p className="text-color">
          Empower your crypto-trading journey with user-friendly AI tools. While our technology aims to enhance trading efficiency, outcomes depend on market conditions and user decisions.
          </p>
        </div>
      </div>

      <motion.div
          className="hero-button-group"
          initial={{ opacity: 0, y: 30 }} // Initial state: invisible, slightly below
          whileInView={{ opacity: 1, y: 0 }} // Animate to fully visible, original position when in view
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }} // Smooth transition
          viewport={{ once: true }} // Trigger animation only once when it comes into view
        >


        
      <div className="content-text-widgets">
        <div className="content-text-widget">
          <div className="text-medium font-weight-700">EOSI Finance utilizes AI</div>
          <div className="text-color small-text">
          EOSI Finance utilizes AI to analyze market trends and execute trades, benefiting all users with optimized results, akin to a virtual trading assistant.
          </div>
        </div>
        <div className="content-text-widget">
          <div className="text-medium font-weight-700">Get evaluated, showcase skills</div>
          <div className="text-block">
          Get evaluated, showcase skills, qualify, and receive funding to start trading with EOSI Finance empowering talent.
          </div>
        </div>
      </div>
      </motion.div>
    </div>
    </motion.div>
  );
};




const ContentTwoImageBlock = () => {
  return (

    <motion.div
    className="content-two-image-block"
    initial={{ opacity: 0, y: 30 }} // Initial state: invisible, slightly below
    whileInView={{ opacity: 1, y: 0 }} // Animate to fully visible when in view
    transition={{ duration: 1, ease: 'easeOut' }} // Smooth transition
    viewport={{ once: true }} // Trigger animation only once when it comes into view
  >

<div className="content-image-gradient-blush">
        <div className="gradient-blush">
          <div className="gradient-blush-orange"></div>
          <div className="gradient-blush-blue"></div>
        </div>
      </div>



    
    
      <img
        src="/assets/6726ca0f328abbff95ca0511/6726ca0f328abbff95ca05ca_content-1-background.webp"
        loading="lazy"
        sizes="(max-width: 479px) 100vw, (max-width: 991px) 320px, (max-width: 1439px) 45vw, 555px"
        srcSet="/assets/6726ca0f328abbff95ca0511/6726ca0f328abbff95ca05ca_content-1-background-p-500.webp 500w, /assets/6726ca0f328abbff95ca0511/6726ca0f328abbff95ca05ca_content-1-background-p-800.webp 800w, /assets/6726ca0f328abbff95ca0511/6726ca0f328abbff95ca05ca_content-1-background.webp 1110w"
        alt=""
        className="width-full"
      />


      <img
        className="floating-object content-two-object-image"
        src="/assets/6726ca0f328abbff95ca0511/6726ca0f328abbff95ca05c3_Content%202%20Object.webp"
        alt=""
        style={{ opacity: 1 }}
        sizes="(max-width: 479px) 100vw, (max-width: 991px) 156.796875px, (max-width: 1439px) 23vw, 271.9453125px"
        loading="lazy"
        srcSet="/assets/6726ca0f328abbff95ca0511/6726ca0f328abbff95ca05c3_Content%25202%2520Object-p-500.webp 500w, /assets/6726ca0f328abbff95ca0511/6726ca0f328abbff95ca05c3_Content%25202%2520Object-p-800.webp 800w, /assets/6726ca0f328abbff95ca0511/6726ca0f328abbff95ca05c3_Content%202%20Object.webp 1056w"
      />


      <img
        src="/assets/6726ca0f328abbff95ca0511/6726ca0f328abbff95ca05c2_content-image-2.webp"
        loading="lazy"
        sizes="(max-width: 479px) 100vw, (max-width: 991px) 320px, (max-width: 1439px) 48vw, 555px"
        srcSet="/assets/6726ca0f328abbff95ca0511/6726ca0f328abbff95ca0511/6726ca0f328abbff95ca05c2_content-image-2-p-500.webp 500w, /assets/6726ca0f328abbff95ca0511/6726ca0f328abbff95ca0511/6726ca0f328abbff95ca05c2_content-image-2-p-800.webp 800w, /assets/6726ca0f328abbff95ca0511/6726ca0f328abbff95ca0511/6726ca0f328abbff95ca05c2_content-image-2-p-1080.webp 1080w, /assets/6726ca0f328abbff95ca0511/6726ca0f328abbff95ca0511/6726ca0f328abbff95ca05c2_content-image-2-p-1600.webp 1600w, /assets/6726ca0f328abbff95ca0511/6726ca0f328abbff95ca0511/6726ca0f328abbff95ca05c2_content-image-2-p-2000.webp 2000w, /assets/6726ca0f328abbff95ca0511/6726ca0f328abbff95ca0511/6726ca0f328abbff95ca05c2_content-image-2.webp 2220w"
        alt=""
        className="width-full"
      />
    
    </motion.div>
  );
};

const ContentTwoSection = () => {
  return (
    <section className="content-two-section" style={{ marginTop: '100px' }}>
      <div className="container">
        <div className="content-two-stack-wrapper">
          <div className="content-two-stack">
            <ContentTwoImageBlock />
            <ContentTwoTextBlock />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentTwoSection;
