import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import App from "./App";
import { ThirdwebProvider } from "@thirdweb-dev/react";
import "./styles/globals.css";
import { PolygonAmoyTestnet } from "@thirdweb-dev/chains";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Transactions from "./pages/Transactions";
import ProfileDetails from "./pages/ProfileDetails";
import CampaignDetails from "./pages/CampaignDetails";
import Front from './pages/Front';

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
// const activeChain = "ethereum";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ThirdwebProvider
      clientId="bbcc2d62e6b6d1f93c4463f11c5832a4"
      activeChain={PolygonAmoyTestnet}
    >
      <BrowserRouter>
        <Routes>
          <Route index element={<App />} />
          <Route path="app" element={<Front />} />
          {/* <Route path="dashboardd" element={<Dashboardd />} /> */}
          <Route path="contact" element={<Contact />} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Transactions" element={<Transactions />} />
          <Route path="profile-details/:id" element={<ProfileDetails />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
          {/* <StateContextProvider> */}

          {/* </StateContextProvider> */}
        </Routes>
      </BrowserRouter>
    </ThirdwebProvider>
  </React.StrictMode>
);
