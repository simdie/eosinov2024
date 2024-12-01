import React, { useState } from 'react';

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div className="accordion-trigger" onClick={toggleAccordion}>
        <div className="accordion-icon-wrapper">
          <div className="open-close-icon-wrapper">
            <div className="  open-close-line---brix second-line---brix"></div>
            <div
              style={{
                transform: isOpen ? 'rotateZ(90deg)' : 'rotateZ(0deg)',
              }}
              className="open-close-line---brix "
            ></div>
          </div>
        </div>
        <div className="accordion-item-title">{question}</div>
      </div>
      <div
        style={{
          height: isOpen ? 'auto' : '0px',
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'scale3d(1, 1, 1)' : 'scale3d(0.9, 0.9, 1)',
          transition: 'all 0.8s ease',
        }}
        className="accordion-content"
      >
        <p className="accordion-paragraph">{answer}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
