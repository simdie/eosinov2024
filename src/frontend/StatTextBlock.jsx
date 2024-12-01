import React from 'react';
import { motion } from 'framer-motion';

const StatTextBlock = () => {
  return (
    <div className="stat-text-block">
      <div className="row-gap-16">

      <motion.div
          className=""
          initial={{ opacity: 0, y: 30 }} // Initial state: invisible, slightly below
          whileInView={{ opacity: 1, y: 0 }} // Animate to fully visible, original position when in view
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }} // Smooth transition
          viewport={{ once: true }} // Trigger animation only once when it comes into view
        >

        <h2
          data-w-id="c8306945-1259-813b-c3d0-03618aadb16c"
          style={{ opacity: 1 }}
          className="heading-two"
        >
          Founded by experienced quant traders
        </h2>
        </motion.div>

        <motion.div
          className="content-paragraph-wrap"
          initial={{ opacity: 0, y: 30 }} // Initial state: invisible, slightly below
          whileInView={{ opacity: 1, y: 0 }} // Animate to fully visible, original position when in view
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }} // Smooth transition
          viewport={{ once: true }} // Trigger animation only once when it comes into view
        >


        <div className="content-paragraph-wrap">
          <p
            data-w-id="c8306945-1259-813b-c3d0-03618aadb16f"
            style={{ opacity: 1 }}
            className="text-color text-large"
          >
            
            EOSI Finance equips every crypto lover and DeFi ethuansist with varying and effective arms for maximum profit amidst their crypto trading level with the world best trusted AI technologies.
          </p>
        </div>
        </motion.div>


      </div>

     
      

      <motion.div
          className="button w-inline-block"
          initial={{ opacity: 0, y: 30 }} // Initial state: invisible, slightly below
          whileInView={{ opacity: 1, y: 0 }} // Animate to fully visible, original position when in view
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }} // Smooth transition
          viewport={{ once: true }} // Trigger animation only once when it comes into view
        >
          <a href="#home" className="button w-inline-block">
        <div>Get Started For Free</div>
        
        <img
          src="/assets/6726ca0f328abbff95ca0511/6726ca0f328abbff95ca058d_arrow-right.svg"
          loading="lazy"
          alt=""
          className="button-arrow-icon"
        />
      </a>
      </motion.div>
     
    </div>

    
  );
};

export default StatTextBlock;
