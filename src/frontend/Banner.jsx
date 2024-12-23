import React from 'react';
import '../assets/header.css'; // Import the CSS file for styles

const Banner = () => {

    const handleLinkClick = (url) => {
        window.open(url, '_blank');
    };


    return (

        // <div className="bg-[#F5F7FF] mx-auto px-4 sm:px-6 md:px-8 max-w-6xl py-6"></div>
        <div className=" lg:px-[150px] py-2 px-4 flex items-center justify-between  bg-gradient-to-r from-[#7D2E71] from-10% to-[#C57D28] to-90% hover:to-purple-400  " onClick={() => handleLinkClick('https://ico.eosifinance.org')}>

            <div className="text-normal lg:flex flex-col lg:items-start lg:text-lg">
                <button className="text-center font-semibold ">$EOSIF Token Presale is LIVE. 
                </button>
                <button className="text-center font-semibold ">
                Buy now on our website and get a 10% discount or buy on different launchpads.
                </button>
            </div>

            <button className={`font-bold text-sm w-[230px]  sm:w-[200px] py-3 rounded-xl shadow-4xl bg-gradient-to-r from-[#02FA1B] from-10% to-green-700 to-90% slow-bounce`} >
                BUY $EOSIF NOW
            </button>


        </div >
    )
}

export default Banner;
