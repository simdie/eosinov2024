import React from "react"
import section7Left from "../images/section7-left.png"
import section7Right from "../images/section7-right.png"

export default function EosiSection7() {
    return (
        <div className="flex  flex-col md:flex-row  items-center justify-between   bg-[#F5F7FF] mx-4 md:mx-24 py-16">
            <div className="  w-full h-full space-y-4  pb-12">

                <p className="font-semibold text-2xl sm:text-3xl">
                    Becoming an <span className=" text-[#4C205B]  decoration-amber-500  decoration-wavy ">EOSI Finance </span> User:  Your Gateway to Crypto Trading and Funding
                </p>

                <img src={section7Left} alt="" />



                <p className="leading-7 ">
                    Are you ready to explore the exciting world of crypto trading? Look no further than  <span className="font-semibold">EOSI Finance,</span>  a platform that combines simplicity, security, decentralization and innovation. Here's what makes EOSI Finance stand out:

                </p>

                <ul className="list-disc pl-[15px] space-y-2">
                    <li>EOSI Finance revolutionizes proprietary trading through democratizing access via AI and ML technologies, enabling prospective pro-traders to participate and get funded without traditional barriers.</li>

                    <li>EOSI Finance enables easy entry into the crypto space for beginners by utilizing decentralized exchange (DEX) protocols, ensuring confident engagement.</li>

                    <li>EOSI Finance allows you to copy trades from experienced crypto traders, letting you benefit from their expertise without needing to understand the market intricacies. Grow your crypto assets effortlessly with a solution designed for steady returns.
                    </li>

                    <li>Get evaluated, showcase skills, qualify, and receive funding to start trading with EOSI Finance empowering talent.</li>

                    <li> EOSI Finance utilizes AI to analyze market trends and execute trades, benefiting all users with optimized results, akin to a virtual trading assistant.</li>

                    <li>EOSI Finance revolutionizes proprietary trading through democratizing access via AI and ML technologies, enabling prospective pro-traders to participate and get funded without traditional barriers.</li>

                </ul>


                <p className="font-bold text-xl">

                    Join EOSI Finance today and experience the future of crypto trading!

                </p>

            </div>

            <div className="flex justify-end w-full h-full">

                <img className="hue-rotate-15 " src={section7Right} alt="" />

            </div>

        </div>
    )
}
