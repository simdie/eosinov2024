import React, { useEffect, useState } from "react";
import { ConnectWallet, useAddress } from "@thirdweb-dev/react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import MenuItem from "../components/MenuItem";
import { Loader, Loading2 } from '../components';
import { AiOutlineHome } from 'react-icons/ai';
import { VscThreeBars } from 'react-icons/vsc';

import {
  Banner,
  Header,
  Hero,
  Brand,
  FeatureSection,
  FeatureTwoSection,
  ContentSection,
  ContentTwoSection,
  ContentTwoSectionCopy,
  ContentThreeSection,
  ProcessSection,
  ReviewsSection,
  StatSection,
  RoadMap,
  TeamSection,
  FAQSection,
  CTASection,
  FooterSection,

} from '../frontend';

const Front = () => {
  const navigate = useNavigate();
  const address = useAddress();
  const [isWalletConnected, setIsWalletConnected] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsWalletConnected(!!address);
    if (isWalletConnected) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        navigate("/dashboard");
      }, 7000);
      return () => clearTimeout(timer);
    }
  }, [address, isWalletConnected, navigate]);

  if (isLoading) {
    return (
      <div>
        <Loading2 />
      </div>
    );
  }

  if (isWalletConnected) {
    return null;
  }

  const handleLinkClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className="">



      <Banner />
      <Header />

      <div className="page-wrapper">


        <Hero />

        <div className="brand-title-block flex justify-center items-center mt-10 mb-10">
          <div className="brand-title text-center">Pre-confirmed Listing & Partners</div>
        </div>


        <Brand />


        <FeatureSection />
        <FeatureTwoSection />

        <ContentSection />
        <ContentTwoSection />
        <ContentTwoSectionCopy />
        <ContentThreeSection />

        <ProcessSection />
        {/* <ProcessWidget />
        <ProcessGraph /> */}

        <ReviewsSection />
        {/* <ReviewCard />
        <ReviewSectionHeading /> */}

        <StatSection />
        {/* <StatTextBlock />
        <StatCard /> */}
        <RoadMap />
        <TeamSection />

        <FAQSection />


        <CTASection />


        <FooterSection />


      </div>







    </div>
  );
};

export default Front;

