import { useState } from "react";
import { Link } from "react-scroll";
import { ConnectWallet } from "@thirdweb-dev/react";
import { VscThreeBars } from 'react-icons/vsc';
import Eosilogo from "../images/eosiLogo.png"; // Ensure this path is correct

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLinkClick = (url) => {
        window.open(url, '_blank');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="flex flex-col items-center justify-center border-b border-purple-200 shadow-2xl">
            <div className="container mx-auto flex items-center justify-between py-6 px-4 md:px-10">
                {/* Logo */}
                <div className="w-[270px] h-[65px] md:h-full md:w-[350px] flex-shrink-0">
                    <Link to="/" smooth={true} duration={500}>
                        <img
                            onClick={() => handleLinkClick('/')}
                            className="hover:opacity-70"
                            src={Eosilogo}
                            alt="EOSI Finance"
                            style={{ width: '380px', height: '68px' }}
                        />
                    </Link>
                </div>

                {/* Mobile menu button */}
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-4xl hover:text-amber-600 text-[#4C205B]">
                        <VscThreeBars />
                    </button>
                </div>

                {/* Desktop menu */}
                <div className="hidden lg:flex gap-10 items-center">
                    <Link to="/" smooth={true} duration={500}>
                        <div className="cursor-pointer">Home</div>
                    </Link>
                    <Link to="">
                        <div className="cursor-pointer">Products</div>
                    </Link>
                    <Link to="roadmap-section" smooth={true} duration={500}>
                        <div className="cursor-pointer">Roadmap</div>
                    </Link>
                    <Link to="team-section" smooth={true} duration={500}>
                        <div className="cursor-pointer">Team</div>
                    </Link>
                    <Link to="">
                        <div className="cursor-pointer" onClick={() => handleLinkClick('https://medium.com/@eosifinance_ai')}>Blog</div>
                    </Link>
                    <Link to="">
                        <div className="cursor-pointer" onClick={() => handleLinkClick('https://eosi-finance.gitbook.io/eosi-finance-whitepaper/')}>Whitepaper</div>
                    </Link>
                    <ConnectWallet
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: '9999px',
                            backgroundImage: 'linear-gradient(to right, rgba(126, 125, 129, 0.4), rgba(139, 92, 246, 0.4))',
                            width: '200px',
                            height: '55px',
                            color: 'black',
                            border: 'none',
                            cursor: 'pointer',
                            transition: 'background-color 0.3s',
                        }}
                    />
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="lg:hidden w-full bg-[#4C205B] text-white border-t border-purple-200 rounded-lg">
                    <div className="container mx-auto flex flex-col">
                        <Link to="/" smooth={true} duration={500} onClick={toggleMenu}>
                            <div className="cursor-pointer border-b border-slate-300 p-3 rounded-lg bg-[#441e51]">Home</div>
                        </Link>
                        <Link to="">
                            <div className="cursor-pointer border-b border-slate-300 p-3 rounded-lg bg-[#441e51]">Products</div>
                        </Link>
                        <Link to="roadmap-section" smooth={true} duration={500} onClick={toggleMenu}>
                            <div className="cursor-pointer border-b border-slate-300 p-3 rounded-lg bg-[#441e51]">Roadmap</div>
                        </Link>
                        <Link to="team-section" smooth={true} duration={500} onClick={toggleMenu}>
                            <div className="cursor-pointer border-b border-slate-300 p-3 rounded-lg bg-[#441e51]">Team</div>
                        </Link>
                        <Link to="" onClick={() => handleLinkClick('https://medium.com/@eosifinance_ai')}>
                            <div className="cursor-pointer border-b border-slate-300 p-3 rounded-lg bg-[#441e51]">Blog</div>
                        </Link>
                        <Link to="" onClick={() => handleLinkClick('https://eosi-finance.gitbook.io/eosi-finance-whitepaper/')}>
                            <div className="cursor-pointer border-b border-slate-300 p-3 rounded-lg bg-[#441e51]">Whitepaper</div>
                        </Link>
                        <div className="p-4">
                            <ConnectWallet
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: '9999px',
                                    backgroundImage: 'linear-gradient(to right, rgba(126, 125, 129, 0.4), rgba(139, 92, 246, 0.4))',
                                    width: '200px',
                                    height: '50px',
                                    color: 'black',
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'background-color 0.3s',
                                }}
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
