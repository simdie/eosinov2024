import React from 'react';
import Accordion from './Accordion';
import { motion } from 'framer-motion';

const FAQSection = () => {
  return (
    <section className="faq-section">



      <div className="w-layout-blockcontainer container w-container">
        <div className="faq-inner">
          <div className="faq-section-heading">

          <motion.div
                    className=""
                    initial={{ opacity: 0, y: 30 }} // Initial state: invisible, slightly below
                    whileInView={{ opacity: 1, y: 0 }} // Animate to fully visible when in view
                    transition={{ duration: 1, ease: 'easeOut' }} // Smooth transition
                    viewport={{ once: true }} // Trigger animation only once when it comes into view
                  >


            <div data-w-id="8fd66346-f683-470d-8b22-c6b385ff3c7f" className="badge">
              <div className="badge-text">GOT QUESTIONS?</div>
            </div>
            </motion.div>


            <motion.div
                    className=""
                    initial={{ opacity: 0, y: 30 }} // Initial state: invisible, slightly below
                    whileInView={{ opacity: 1, y: 0 }} // Animate to fully visible when in view
                    transition={{ duration: 1, ease: 'easeOut', delay: 0.5 }} // Smooth transition
                    viewport={{ once: true }} // Trigger animation only once when it comes into view
                  >
            <h2
              data-w-id="0963e869-6cdc-3cfa-4fae-12a38230b312"
              style={{ opacity: 1 }}
              className="heading-two reviews-title-content-heading"
            >
              Frequently Asked Questions
            </h2>

            </motion.div>
          </div>
          <Accordion />
        </div>
      </div>
     


    </section>
  );
};

export default FAQSection;
