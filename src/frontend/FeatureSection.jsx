import { motion } from 'framer-motion';
import React from 'react';


const FeatureCard = ({ icon, title, description, dexplatform, numberofdays, image }) => {
  return (
    <div className="feature-card-single">
      <div className="feature-card">
        <img loading="lazy" src={icon} alt="" className="feature-card-icon w-[50px] h-[45px] rounded-xl" />
{/* 
        <img
          loading="lazy"
          src={icon}
          alt=""
          className="feature-card-icon w-[50px] h-[45px]"
        /> */}



        <div className="feature-card-body">
          <p className="text-large font-weight-500">{title}</p>
          <p className=" " style={{
            marginTop: '10px', marginBottom: '0px',
          }}>{description}</p>
          <p className="text-small feature-card-sub-text" style={{
            marginTop: '2px',
          }}>{dexplatform}</p>
          <p className="text-small feature-card-sub-text">{numberofdays}</p>
        </div>
        <img src={image} loading="lazy" className="feature-gradient" alt="" />
      </div>
    </div>
  );
};

const FeatureSection = () => {
  return (
    <section className="feature-section">

      <div className="container">


        <div className="feature-section-heading">
          <motion.div

            className="heading-two"
            initial={{ opacity: 0, y: 30 }} // Initial state: invisible, slightly below
            animate={{ opacity: 1, y: 0 }} // Final state: fully visible, at its original position
            transition={{ duration: 1, ease: 'easeOut', delay: 0.4 }} // Smooth transition with slight delay
            viewport={{ once: true }} // Trigger animation only once when it comes into view
          >
            <h1 className="heading-two">Revolutionize proprietary trading</h1>
          </motion.div>

        </div>


        <motion.div

          className=""
          initial={{ opacity: 0, y: 30 }} // Initial state: invisible, slightly below
          animate={{ opacity: 1, y: 0 }} // Final state: fully visible, at its original position
          transition={{ duration: 1, ease: 'easeOut', delay: 2 }} // Smooth transition with slight delay
          viewport={{ once: true }} // Trigger animation only once when it comes into view
        >
          <div className="feature-card-stack">
            {/* First Feature Card */}
            <FeatureCard
              icon="/assets/6726ca0f328abbff95ca0511/nightRaider.jpg"
              title="NightRaiderPRO TRADER"
              description="Last month profit = 123.24%"
              dexplatform="Platform = DEX Platforms"
              numberofdays="Number of Days= 30 days"
              image="/assets/6726ca0f328abbff95ca0511/6726ca0f328abbff95ca0667_Light.png"
            />

            {/* Second Feature Card */}
            <FeatureCard
              icon="/assets/6726ca0f328abbff95ca0511/WavekochPRO.jpg"
              title="WavekochPRO TRADER"
              description="Last month profit = 48.87%"
              dexplatform="Platform = DEX Platforms"
              numberofdays="Number of Days= 35 days"
              image="/assets/6726ca0f328abbff95ca0511/6726ca0f328abbff95ca0667_Light.png"
            />

            {/* Third Feature Card */}
            <FeatureCard
              icon="/assets/6726ca0f328abbff95ca0511/danku_zone.jpg"
              title="danku_zone PRO TRADER"
              description="Last month profit = 85.03%"
              dexplatform="Platform = DEX Platforms"
              numberofdays="Number of Days= 27 days"
              image="/assets/6726ca0f328abbff95ca0511/6726ca0f328abbff95ca0667_Light.png"
            />

            {/* Fourth Feature Card */}
            <FeatureCard
              icon="/assets/6726ca0f328abbff95ca0511/Matrix_FusionPro1.jpg"
              title="Matrix_FusionPro Trader"
              description="Last month profit = 55%"
              dexplatform="Platform = DEX Platforms"
              numberofdays="Number of Days= 45 days"
              image="/assets/6726ca0f328abbff95ca0511/6726ca0f328abbff95ca0667_Light.png"
            />
          </div>
        </motion.div>
      </div>

    </section>
  );
};

export default FeatureSection;
