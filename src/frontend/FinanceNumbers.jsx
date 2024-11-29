import React from "react";
import divide from "../images/divide.png";

export default function FinanceNumbers() {
    return (
        <div className="justify-center flex flex-col w-full items-center py-16 bg-black sm:mx-auto">

            <div className="flex items-center justify-center w-full mb-8">
                <p className="font-semibold text-2xl sm:text-3xl text-indigo-400">EOSI Finance in numbers</p>
            </div>

            <div className="flex flex-col lg:flex-row lg:space-x-10 w-5/6 max-w-6xl mx-auto space-y-10 lg:space-y-0">

                <div className="flex flex-col lg:flex-row items-center justify-between w-full space-y-8 lg:space-y-0 lg:space-x-10">

                    <div className="flex flex-col items-center justify-center w-full">
                        <img src={divide} alt="" className="mb-4 lg:mb-0" />
                        <div className="text-center space-y-2">
                            <p className="text-lg text-gray-200">Active Users</p>
                            <p className="text-3xl sm:text-4xl font-semibold text-indigo-400">723</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center w-full">
                        <img src={divide} alt="" className="mb-4 lg:mb-0" />
                        <div className="text-center space-y-2">
                            <p className="text-lg text-gray-200">Active Pro-Traders</p>
                            <p className="text-3xl sm:text-4xl font-semibold text-indigo-400">5</p>
                        </div>
                    </div>

                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between w-full space-y-8 lg:space-y-0 lg:space-x-10">

                    <div className="flex flex-col items-center justify-center w-full">
                        <img src={divide} alt="" className="mb-4 lg:mb-0" />
                        <div className="text-center space-y-2">
                            <p className="text-lg text-gray-200">Total Value Traded</p>
                            <p className="text-3xl sm:text-4xl font-semibold text-indigo-400">$2,047,698</p>
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center w-full">
                        <img src={divide} alt="" className="mb-4 lg:mb-0" />
                        <div className="text-center space-y-2">
                            <p className="text-lg text-gray-200">DEX Platforms</p>
                            <p className="text-3xl sm:text-4xl font-semibold text-indigo-400">13</p>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    );
}
