import divide from "../images/divide.png";
// import { Link } from 'react-router-dom';
import { Link } from "react-scroll";
import twitter from "../images/twitter.png";
import Instagram from "../images/instagram.png";
import Mail from "../images/mail.png";
import Telegram from "../images/telegram.png";
import Eosilogo from "../images/eosiLogo.png";

export default function Footer() {

  const handleLinkClick = (url) => {
    window.open(url, '_blank');
  };

  return (
    <div className=" flex flex-col w-full items-center justify-center py-8 sm:pb-24 bg-black sm:mx-auto px-4 md:px-8 lg:px-0   ">

      <div className="container mx-auto flex sm:flex-row items-center justify-center ">

        <div className=" flex flex-col  sm:ml-32 w-full md:w-2/5 mx-8  md:mx-0 mb-8 md:mb-0">

          {/* <h2 className="text-2xl space-x-1 mb-6">
              <span className="font-bold bg-amber-500 py-1 px-3 rounded-lg text-[#4C205B]">
                EOSI
              </span>
              <span className="text-3xl text-violet-900 font-semibold">
                Finance
              </span>
            </h2> */}

          {/* Eosi Finance Logo */}

          <div className="text-2xl space-x-1 my-6 cursor-pointer">
            <img
              onClick={() => handleLinkClick('/')}
              className="hover:opacity-70"
              src={Eosilogo}
              alt=""
              style={{ width: '150px', height: 'auto' }} // Adjust the width as needed
            />
          </div>




          <div className="text-xs font-semibold pb-6 text-white">
            Copyright EOSI Finance © 2024
          </div>
          <p className="text-xs font-semibold text-white">Follow us</p>
          <div className="flex flex-row space-x-5 pt-4 items-center cursor-pointer">
            <img onClick={() => handleLinkClick('mailto:eosi@tutanota.com')}
              className="hover:opacity-70"
              src={Mail}
              alt=""
            />
            <img onClick={() => handleLinkClick('https://linktr.ee/eosifinance')}
              className="hover:opacity-70"
              src={Instagram}
              alt=""
            />
            <img onClick={() => handleLinkClick('https://t.me/EOSIFinanceToken')}
              className="hover:opacity-70"
              src={Telegram}
              alt=""
            />
            <img onClick={() => handleLinkClick('https://twitter.com/Eosifinance_ai')}
              className="hover:opacity-70"
              src={twitter}
              alt=""
            />
          </div>
        </div>

        <div className="w-full md:w-1/4 mx-8 md:mx-0 mb-10 md:mb-0">
          <div className="cursor-pointer space-y-6 ">


            <Link to="" >
              <div className="text-lg font-medium text-gray-300 cursor-pointer"  >Products</div>
            </Link>


            <div className="text-xs font-semibold text-white space-y-2 w-36 md:w-full">

              {/* <p className="cursor-pointer">Crypto Copy Trading</p> */}
              <Link to="connectwallet-section" smooth={true} duration={500}>
                <div className="cursor-pointer">Crypto Copy Trading</div>
              </Link>


              <p>Get Funded <span className="text-[#02FA1B] text-[10px]"> (Coming soon)</span></p>

            </div>
          </div>
        </div>

        <div className="  hidden sm:block w-full md:w-1/4 mx-4 md:mx-0">
          <div className=" space-y-6">
            <p className="text-lg font-medium text-gray-300">Resources</p>
            <div className="text-xs font-semibold text-white space-y-2">

              <p onClick={() => handleLinkClick('https://eosi-finance.gitbook.io/eosi-finance-whitepaper/')} className="cursor-pointer">Whitepaper</p>

              <p onClick={() => handleLinkClick('https://eosi-finance.gitbook.io/eosi-finance-whitepaper/tokenomics-and-stability-mechanisms-of-eosif/ ')} className="cursor-pointer">Tokenomics</p>

            </div>
          </div>
        </div>

        <div className="w-full hidden sm:block md:w-1/4 mx-4 md:mx-0">
          <div className=" space-y-6">
            <p className="text-lg font-medium text-gray-300">About</p>
            <div className="text-xs font-semibold text-white space-y-2">
              {/* <p className="cursor-pointer">Team</p> */}
              <Link to="team-section" smooth={true} duration={500}>
                <div className="cursor-pointer">Team</div>
              </Link>

              <div>
                <Link to="roadmap-section" smooth={true} duration={500}>
                  <div className="cursor-pointer">Roadmap</div>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
