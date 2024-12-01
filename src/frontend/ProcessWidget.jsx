import React from 'react';

const ProcessWidget = ({ title, step }) => {
  return (
    <div className={`process-widget process-${step}`}>
      <div>{title}</div>
      <div className="process-widget-digit">
        <div>{step}</div>
      </div>
    </div>
  );
};

export default ProcessWidget;
