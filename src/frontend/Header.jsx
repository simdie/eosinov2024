import React from 'react';
import '../assets/header.css'; // Import the CSS file for styles
import { ConnectWallet } from "@thirdweb-dev/react";


const Header = () => {

    const handleLinkClick = (url) => {
        window.open(url, '_blank');
    };
    return (

        <>



            <section id='connectwallets'>



                <div data-animation="default" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" role="banner" className="header is-fixed w-nav" >
                    <div className="header-shadow"></div>



                    <div className="lg:px-[150px] py-1 px-4 flex items-center justify-between bg-gradient-to-r from-[#7D2E71] from-10% to-[#C57D28] to-90% hover:to-purple-400" onClick={() => handleLinkClick('https://ico.eosifinance.org')}>
                        <div className="text-xs lg:flex flex-col lg:items-start lg:text-sm">
                            <button className="text-center font-semibold">
                                $EOSIF Token Presale is LIVE. Buy now on our website and get a 10% discount or buy on different launchpads.
                            </button>

                        </div>

                        <button className="font-bold text-xs w-[230px] sm:w-[200px] py-3 rounded-xl shadow-4xl bg-gradient-to-r from-[#02FA1B] from-10% to-green-700 to-90% slow-bounce text-black">
                            BUY $EOSIF NOW
                        </button>
                    </div>





                    <div className="header-container w-container">
                        <div className="header-content-wrap">
                            <div className="logo-menu-wrapper">
                                {/* Logo and Brand Link */}
                                <a href="/" aria-current="page" className="brand w-nav-brand w--current">
                                    <img
                                        src="/assets/6726ca0f328abbff95ca0511/672f16cbf73995494b87055d_Secury.png"
                                        loading="eager"
                                        alt="Brand Logo"
                                        className="logo"
                                    />
                                </a>
                                {/* Navigation Menu */}
                                <nav role="navigation" className="nav-menu w-nav-menu">
                                    <div data-hover="true" data-delay="0" data-w-id="45b7d535-2784-9648-82c7-c90bef9c1d98" className="dropdown w-dropdown">
                                        {/* Dropdown Menu (you can add items here if needed) */}
                                    </div>
                                    {/* Nav Items */}
                                    <a href="/" aria-current="page" className="nav-item w-nav-link w--current">Home</a>


                                    {/* Products Dropdown */}
                                    <div className="dropdown w-dropdown">
                                        <a href="#" className="nav-item w-nav-link">Products</a>
                                        <div className="w-dropdown-list">
                                            <a href="https://t.me/StandR_AI_BOT" className="dropdown-link">StandR AI Bot
                                                <span
                                                    style={{
                                                        color: 'green',
                                                        fontSize: '10px',
                                                        fontWeight: 'bolder',
                                                        marginLeft: '5px',
                                                    }}
                                                >
                                                    (new)
                                                </span>
                                            </a>
                                            <a href="#" className="dropdown-link">Copy-Trading
                                                <span
                                                    style={{
                                                        color: 'green',
                                                        fontSize: '10px',
                                                        fontWeight: 'bolder',
                                                        marginLeft: '5px',
                                                    }}
                                                >
                                                    (coming soon)
                                                </span>
                                            </a>
                                            <a href="#" className="dropdown-link">Buy a Funded Account
                                                <span
                                                    style={{
                                                        color: 'green',
                                                        fontSize: '10px',
                                                        fontWeight: 'bolder',
                                                        marginLeft: '5px',
                                                    }}
                                                >   
                                                    (coming soon)
                                                </span>
                                            </a>
                                        </div>
                                    </div>



                                    <a href="#roadmap" className="nav-item w-nav-link">Roadmap</a>
                                    <a href="#team" className="nav-item w-nav-link">Team</a>
                                    <a href="https://medium.com/@eosifinance_ai" className="nav-item w-nav-link"
                                        target="_blank" // Opens the link in a new tab
                                        rel="noopener noreferrer" // Security feature to prevent potential vulnerabilities
                                    >Blog</a>

                                    <a href="https://online.fliphtml5.com/limyj/fvvf" className="nav-item w-nav-link"
                                        target="_blank" // Opens the link in a new tab
                                        rel="noopener noreferrer" // Security feature to prevent potential vulnerabilities
                                    >White Paper</a>

                                    <a href="/" aria-current="page" className="nav-item w-nav-link w--current track-button">Track</a>



                                    <a
                                        data-w-id="ada5a5cf-e4f6-3144-9da9-d4e057f96874"

                                        className="nav-item w-nav-link w--current track-button" style={{
                                            backgroundColor: 'black', // Default background color is green
                                            color: 'white',           // Text color
                                            padding: '10px 10px',     // Example padding
                                            borderRadius: '9999px',      // Example border radius
                                            outline: '1px solid white',
                                            border: '1px',           // Remove the border
                                            transition: 'background-color 0.3s', // Smooth transition for background color change
                                        }}
                                    >
                                        <div className="text-medium font-weight-50">

                                            <ConnectWallet
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    borderRadius: '9999px',
                                                    backgroundColor: 'black',
                                                    width: '0px',
                                                    height: '0px',
                                                    color: 'white',
                                                    border: 'none',
                                                    cursor: 'pointer',
                                                    transition: 'background-color 0.3s', // Smooth transition for hover effect
                                                }}
                                                onMouseOver={(e) => e.target.style.backgroundColor = '#6c2bd7'} // Change to purple on hover
                                                onMouseOut={(e) => e.target.style.backgroundColor = 'black'} // Revert back to black
                                            />


                                        </div>


                                    </a>







                                </nav>

                            </div>


                            <div className="menu-button-wrap">
                                <a
                                    data-w-id="ada5a5cf-e4f6-3144-9da9-d4e057f96874"

                                    className="button outline mobile-hidden w-inline-block button-hover-effect" style={{
                                        backgroundColor: 'black', // Default background color is green
                                        color: 'white',           // Text color
                                        padding: '10px 10px',     // Example padding
                                        borderRadius: '9999px',      // Example border radius
                                        outline: '1px solid white',
                                        border: '1px',           // Remove the border
                                        transition: 'background-color 0.3s', // Smooth transition for background color change
                                    }}
                                >
                                    <div className="text-medium font-weight-50">

                                        <ConnectWallet
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius: '9999px',
                                                backgroundColor: 'black',
                                                width: '0px',
                                                height: '0px',
                                                color: 'white',
                                                border: 'none',
                                                cursor: 'pointer',
                                                transition: 'background-color 0.3s', // Smooth transition for hover effect
                                            }}
                                            onMouseOver={(e) => e.target.style.backgroundColor = '#6c2bd7'} // Change to purple on hover
                                            onMouseOut={(e) => e.target.style.backgroundColor = 'black'} // Revert back to black
                                        />


                                    </div>

                                    <img
                                        src="/assets/6726ca0f328abbff95ca0511/6726ca0f328abbff95ca05a9_arrow-right.png"
                                        loading="lazy"
                                        data-w-id="ada5a5cf-e4f6-3144-9da9-d4e057f96877"
                                        alt=""
                                        className="arrow-icon"
                                    />
                                </a>

                                <div className="menu-button w-nav-button">
                                    <div className="w-icon-nav-menu"></div>
                                </div>
                            </div>






                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Header;
