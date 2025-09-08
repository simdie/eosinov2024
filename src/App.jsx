import React from 'react';

+import React, { useEffect, useState } from 'react';


import { Route, Routes } from 'react-router-dom';

import { Sidebar, Navbar } from './components';
import { CampaignDetails, CreateCampaign, Dashboard, Transactions, CopyTrade, ProfileDetails, Contact, Front, Dashboardd, Home2, } from './pages';
import ConsentModal from './components/ConsentModal';

const CONSENT_KEY = 'eosi_tac'; // localStorage key

const App = () => {
  
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem(CONSENT_KEY);
    if (accepted !== 'yes') setShowConsent(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, 'yes');
    setShowConsent(false);
  };

  const handleReject = () => {
    localStorage.setItem(CONSENT_KEY, 'no');
    window.location.href = 'https://ico.eosifinance.org/';
  };



  return (

    <>

    <ConsentModal show={showConsent} onAccept={handleAccept} onReject={handleReject}>
      {/* all your <p> Terms & Conditions text goes here */}
    </ConsentModal>

      {/* <Home2 /> */}

      <div className="">




        <div >
          {/* <Navbar /> */}

          <Routes>

            <Route path="/app" element={<Front />} />

            {/* <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/transactions" element={<Transactions />} /> */}
            {/* <Route path="/copytrade" element={<CopyTrade />} /> */}

            {/* <Route path="/create-campaign" element={<CreateCampaign />} />
                    
                    <Route path="/campaign-details/:id" element={<CampaignDetails />} /> */}

            <Route path="/profile-details/:id" element={<ProfileDetails />} />

            {/* <Route path="/contact" element={<Contact />} /> */}
          </Routes>
          <Front />
          {/* <Dashboardd /> */}
          {/* <Contact />
                 <Dashboard />
                 <Transactions /> */}
        </div>
      </div>

    </>



  )
}

export default App