import React from 'react';
import AccordionItem from './AccordionItem';

const faqData = [
  {
    question: 'What is EOSI Finance?',
    answer: "EOSI Finance is a cutting-edge platform that combines artificial intelligence (AI), machine learning (ML), and decentralized finance (DeFi) to help users automate their crypto trading. Whether you're an experienced pro-trader or a beginner, EOSI Finance provides tools to help you trade efficiently and safely while giving you the ability to copy top-performing traders or get funded to start trading.",
  },
  {
    question: "How does EOSI Finance's AI-powered trading work?",
    answer: "EOSI Finance uses AI algorithms to analyze market trends, execute trades, and optimize results. This eliminates the need for manual trading and enables both novice and experienced traders to benefit from the platform’s AI technology. You can either trade on your own or copy top pro-traders’ strategies, with AI also selecting traders for you based on your risk tolerance.",
  },
  {
    question: "Can I get funded to trade on EOSI Finance?",
    answer: "Yes and soon, EOSI Finance provides an opportunity for aspiring pro-traders to showcase their skills and get evaluated. Once you demonstrate your ability to trade successfully, you can qualify for funding to start trading with EOSI Finance’s capital. This democratizes access to professional trading opportunities without the traditional barriers.",
  },
  {
    question: "How do I get started with EOSI Finance?",
    answer: "Getting started on EOSI Finance is easy and quick, Identify Your Goal: Whether you are a beginner or experienced trader, EOSI Finance offers multiple options to meet your needs. Connect Your Web3 Wallet: You can connect your existing Web3 wallets (such as Metamask, Trustwallet, etc.) and approve the desired amount for trading. Start Trading or Copy Trading: Choose from a wide selection of pro-traders or allow EOSI Finance's AI to select traders based on your risk profile.",
  },
  {
    question: "How secure is my investment on EOSI Finance?",
    answer: "Your funds are completely secure on EOSI Finance. The platform ensures that your funds remain on-chain for maximum interoperability and security. EOSI Finance does not have direct access to your funds, and all trades are encrypted and interact with public-private smart contracts to prevent any bot frontrunning or unauthorized access.",
  },

  {
    question: "What are the benefits of using decentralized exchanges (DEX) with EOSI Finance?",
    answer: "EOSI Finance leverages decentralized exchanges (DEX), allowing users to trade securely and privately without the need for centralized intermediaries. By using DEX, you gain access to more liquidity, lower fees, and enhanced security. EOSI Finance's AI and smart contract infrastructure ensure that your trading is reliable and efficient, while offering users the flexibility to trade without restrictions.",
  },
];

const Accordion = () => {
  return (
    <div className="accordion-wrapper">
      {faqData.map((faq, index) => (
        <AccordionItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default Accordion;
