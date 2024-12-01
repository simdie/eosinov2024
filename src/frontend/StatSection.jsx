import React from 'react';
import StatCard from './StatCard';
import StatTextBlock from './StatTextBlock';

const statCards = [
  {
    iconSrc: '/assets/6726ca0f328abbff95ca0511/6726ca0f328abbff95ca067d_Group%2034452.svg',
    title: 'Crypto Capitals',
    statValue: 'Web3 lovers',
    description: "EOSI Finance empowers Crypto Capitals with AI-driven strategies, delivering consistent profits through seamless copy trading and secure, decentralized solutions.",
  },
  {
    iconSrc: '/assets/6726ca0f328abbff95ca0511/6726ca0f328abbff95ca067e_Group%2034452%20%281%29.svg',
    title: 'Traders',
    statValue: 'Blockchain',
    description: "EOSI Finance provides traders with AI-powered tools and seamless copy trading, enabling them to maximize profits and execute successful strategies effortlessly.",
  },
];

const StatSection = () => {
  return (
    <section className="stat-section">
      <div className="container">
        <div className="stat-content-inner">
          <StatTextBlock />
          <div className="stat-card-block">
            {statCards.map((stat, index) => (
              <StatCard
                key={index}
                iconSrc={stat.iconSrc}
                title={stat.title}
                statValue={stat.statValue}
                description={stat.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatSection;
