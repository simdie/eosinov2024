import React from 'react';

const StatCard = ({ iconSrc, title, statValue, description }) => {
  return (
    <div className="stat-card">
      <div className="stat-icon-block">
        <img src={iconSrc} loading="lazy" alt="icon" />
        <div>{title}</div>
      </div>
      <div className="stat-text-content">
        <div>
          <span className="text-span">{statValue}</span>
        </div>
        <div className="text-block-2">{description}</div>
      </div>
    </div>
  );
};

export default StatCard;
