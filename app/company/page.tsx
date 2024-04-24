'use client'
import React from "react";
import { Nunito_Sans } from 'next/font/google'
import Navigation from "../(components)/navigation";
import Footer from "../(components)/footer";
import { useRouter } from "next/navigation";

const inter = Nunito_Sans({ subsets: ["latin"] });



const About1 = () => {


    const router = useRouter();

    return (
        <>
            <Navigation />
            <section className={`bg-black font-poppins pt-12 lg:pt-0 pb-12 ${inter.className}`}>
                <div className="relative overflow-hidden ">
                    <div className="mx-auto max-w-7xl p-8 md:p-0">

                        <section className="overflow-hidden pt-20 pb-12 lg:pt-[120px] lg:pb-[90px] bg-dark">
                            <div className="container mx-auto">
                                <div className="flex flex-wrap items-center justify-between -mx-4">
                                    <div className="w-full px-4 lg:w-6/12">
                                        <div className="flex items-center -mx-3 sm:-mx-4">
                                            <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                                <div className="py-3 sm:py-4">
                                                    <img
                                                        src="https://i.ibb.co/gFb3ns6/image-1.jpg"
                                                        alt=""
                                                        className="w-full rounded-2xl"
                                                    />
                                                </div>
                                                <div className="py-3 sm:py-4">
                                                    <img
                                                        src="https://i.ibb.co/rfHFq15/image-2.jpg"
                                                        alt=""
                                                        className="w-full rounded-2xl"
                                                    />
                                                </div>
                                            </div>
                                            <div className="w-full px-3 sm:px-4 xl:w-1/2">
                                                <div className="relative z-10 my-4">
                                                    <img
                                                        src="https://i.ibb.co/9y7nYCD/image-3.jpg"
                                                        alt=""
                                                        className="w-full rounded-2xl"
                                                    />
                                                    <span className="absolute -right-7 -bottom-7 z-[-1]">
                                                        <svg
                                                            width={134}
                                                            height={106}
                                                            viewBox="0 0 134 106"
                                                            fill="none"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                        >
                                                            <circle
                                                                cx="1.66667"
                                                                cy={104}
                                                                r="1.66667"
                                                                transform="rotate(-90 1.66667 104)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="16.3333"
                                                                cy={104}
                                                                r="1.66667"
                                                                transform="rotate(-90 16.3333 104)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx={31}
                                                                cy={104}
                                                                r="1.66667"
                                                                transform="rotate(-90 31 104)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="45.6667"
                                                                cy={104}
                                                                r="1.66667"
                                                                transform="rotate(-90 45.6667 104)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="60.3334"
                                                                cy={104}
                                                                r="1.66667"
                                                                transform="rotate(-90 60.3334 104)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="88.6667"
                                                                cy={104}
                                                                r="1.66667"
                                                                transform="rotate(-90 88.6667 104)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="117.667"
                                                                cy={104}
                                                                r="1.66667"
                                                                transform="rotate(-90 117.667 104)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="74.6667"
                                                                cy={104}
                                                                r="1.66667"
                                                                transform="rotate(-90 74.6667 104)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx={103}
                                                                cy={104}
                                                                r="1.66667"
                                                                transform="rotate(-90 103 104)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx={132}
                                                                cy={104}
                                                                r="1.66667"
                                                                transform="rotate(-90 132 104)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="1.66667"
                                                                cy="89.3333"
                                                                r="1.66667"
                                                                transform="rotate(-90 1.66667 89.3333)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="16.3333"
                                                                cy="89.3333"
                                                                r="1.66667"
                                                                transform="rotate(-90 16.3333 89.3333)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx={31}
                                                                cy="89.3333"
                                                                r="1.66667"
                                                                transform="rotate(-90 31 89.3333)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="45.6667"
                                                                cy="89.3333"
                                                                r="1.66667"
                                                                transform="rotate(-90 45.6667 89.3333)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="60.3333"
                                                                cy="89.3338"
                                                                r="1.66667"
                                                                transform="rotate(-90 60.3333 89.3338)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="88.6667"
                                                                cy="89.3338"
                                                                r="1.66667"
                                                                transform="rotate(-90 88.6667 89.3338)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="117.667"
                                                                cy="89.3338"
                                                                r="1.66667"
                                                                transform="rotate(-90 117.667 89.3338)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="74.6667"
                                                                cy="89.3338"
                                                                r="1.66667"
                                                                transform="rotate(-90 74.6667 89.3338)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx={103}
                                                                cy="89.3338"
                                                                r="1.66667"
                                                                transform="rotate(-90 103 89.3338)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx={132}
                                                                cy="89.3338"
                                                                r="1.66667"
                                                                transform="rotate(-90 132 89.3338)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="1.66667"
                                                                cy="74.6673"
                                                                r="1.66667"
                                                                transform="rotate(-90 1.66667 74.6673)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="1.66667"
                                                                cy="31.0003"
                                                                r="1.66667"
                                                                transform="rotate(-90 1.66667 31.0003)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="16.3333"
                                                                cy="74.6668"
                                                                r="1.66667"
                                                                transform="rotate(-90 16.3333 74.6668)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="16.3333"
                                                                cy="31.0003"
                                                                r="1.66667"
                                                                transform="rotate(-90 16.3333 31.0003)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx={31}
                                                                cy="74.6668"
                                                                r="1.66667"
                                                                transform="rotate(-90 31 74.6668)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx={31}
                                                                cy="31.0003"
                                                                r="1.66667"
                                                                transform="rotate(-90 31 31.0003)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="45.6667"
                                                                cy="74.6668"
                                                                r="1.66667"
                                                                transform="rotate(-90 45.6667 74.6668)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="45.6667"
                                                                cy="31.0003"
                                                                r="1.66667"
                                                                transform="rotate(-90 45.6667 31.0003)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="60.3333"
                                                                cy="74.6668"
                                                                r="1.66667"
                                                                transform="rotate(-90 60.3333 74.6668)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="60.3333"
                                                                cy="30.9998"
                                                                r="1.66667"
                                                                transform="rotate(-90 60.3333 30.9998)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="88.6667"
                                                                cy="74.6668"
                                                                r="1.66667"
                                                                transform="rotate(-90 88.6667 74.6668)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="88.6667"
                                                                cy="30.9998"
                                                                r="1.66667"
                                                                transform="rotate(-90 88.6667 30.9998)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="117.667"
                                                                cy="74.6668"
                                                                r="1.66667"
                                                                transform="rotate(-90 117.667 74.6668)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="117.667"
                                                                cy="30.9998"
                                                                r="1.66667"
                                                                transform="rotate(-90 117.667 30.9998)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="74.6667"
                                                                cy="74.6668"
                                                                r="1.66667"
                                                                transform="rotate(-90 74.6667 74.6668)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="74.6667"
                                                                cy="30.9998"
                                                                r="1.66667"
                                                                transform="rotate(-90 74.6667 30.9998)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx={103}
                                                                cy="74.6668"
                                                                r="1.66667"
                                                                transform="rotate(-90 103 74.6668)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx={103}
                                                                cy="30.9998"
                                                                r="1.66667"
                                                                transform="rotate(-90 103 30.9998)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx={132}
                                                                cy="74.6668"
                                                                r="1.66667"
                                                                transform="rotate(-90 132 74.6668)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx={132}
                                                                cy="30.9998"
                                                                r="1.66667"
                                                                transform="rotate(-90 132 30.9998)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="1.66667"
                                                                cy="60.0003"
                                                                r="1.66667"
                                                                transform="rotate(-90 1.66667 60.0003)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="1.66667"
                                                                cy="16.3333"
                                                                r="1.66667"
                                                                transform="rotate(-90 1.66667 16.3333)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="16.3333"
                                                                cy="60.0003"
                                                                r="1.66667"
                                                                transform="rotate(-90 16.3333 60.0003)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="16.3333"
                                                                cy="16.3333"
                                                                r="1.66667"
                                                                transform="rotate(-90 16.3333 16.3333)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx={31}
                                                                cy="60.0003"
                                                                r="1.66667"
                                                                transform="rotate(-90 31 60.0003)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx={31}
                                                                cy="16.3333"
                                                                r="1.66667"
                                                                transform="rotate(-90 31 16.3333)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="45.6667"
                                                                cy="60.0003"
                                                                r="1.66667"
                                                                transform="rotate(-90 45.6667 60.0003)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="45.6667"
                                                                cy="16.3333"
                                                                r="1.66667"
                                                                transform="rotate(-90 45.6667 16.3333)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="60.3333"
                                                                cy="60.0003"
                                                                r="1.66667"
                                                                transform="rotate(-90 60.3333 60.0003)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="60.3333"
                                                                cy="16.3333"
                                                                r="1.66667"
                                                                transform="rotate(-90 60.3333 16.3333)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="88.6667"
                                                                cy="60.0003"
                                                                r="1.66667"
                                                                transform="rotate(-90 88.6667 60.0003)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="88.6667"
                                                                cy="16.3333"
                                                                r="1.66667"
                                                                transform="rotate(-90 88.6667 16.3333)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="117.667"
                                                                cy="60.0003"
                                                                r="1.66667"
                                                                transform="rotate(-90 117.667 60.0003)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="117.667"
                                                                cy="16.3333"
                                                                r="1.66667"
                                                                transform="rotate(-90 117.667 16.3333)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="74.6667"
                                                                cy="60.0003"
                                                                r="1.66667"
                                                                transform="rotate(-90 74.6667 60.0003)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="74.6667"
                                                                cy="16.3333"
                                                                r="1.66667"
                                                                transform="rotate(-90 74.6667 16.3333)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx={103}
                                                                cy="60.0003"
                                                                r="1.66667"
                                                                transform="rotate(-90 103 60.0003)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx={103}
                                                                cy="16.3333"
                                                                r="1.66667"
                                                                transform="rotate(-90 103 16.3333)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx={132}
                                                                cy="60.0003"
                                                                r="1.66667"
                                                                transform="rotate(-90 132 60.0003)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx={132}
                                                                cy="16.3333"
                                                                r="1.66667"
                                                                transform="rotate(-90 132 16.3333)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="1.66667"
                                                                cy="45.3333"
                                                                r="1.66667"
                                                                transform="rotate(-90 1.66667 45.3333)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="1.66667"
                                                                cy="1.66683"
                                                                r="1.66667"
                                                                transform="rotate(-90 1.66667 1.66683)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="16.3333"
                                                                cy="45.3333"
                                                                r="1.66667"
                                                                transform="rotate(-90 16.3333 45.3333)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="16.3333"
                                                                cy="1.66683"
                                                                r="1.66667"
                                                                transform="rotate(-90 16.3333 1.66683)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx={31}
                                                                cy="45.3333"
                                                                r="1.66667"
                                                                transform="rotate(-90 31 45.3333)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx={31}
                                                                cy="1.66683"
                                                                r="1.66667"
                                                                transform="rotate(-90 31 1.66683)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="45.6667"
                                                                cy="45.3333"
                                                                r="1.66667"
                                                                transform="rotate(-90 45.6667 45.3333)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="45.6667"
                                                                cy="1.66683"
                                                                r="1.66667"
                                                                transform="rotate(-90 45.6667 1.66683)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="60.3333"
                                                                cy="45.3338"
                                                                r="1.66667"
                                                                transform="rotate(-90 60.3333 45.3338)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="60.3333"
                                                                cy="1.66683"
                                                                r="1.66667"
                                                                transform="rotate(-90 60.3333 1.66683)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="88.6667"
                                                                cy="45.3338"
                                                                r="1.66667"
                                                                transform="rotate(-90 88.6667 45.3338)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="88.6667"
                                                                cy="1.66683"
                                                                r="1.66667"
                                                                transform="rotate(-90 88.6667 1.66683)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="117.667"
                                                                cy="45.3338"
                                                                r="1.66667"
                                                                transform="rotate(-90 117.667 45.3338)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="117.667"
                                                                cy="1.66683"
                                                                r="1.66667"
                                                                transform="rotate(-90 117.667 1.66683)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="74.6667"
                                                                cy="45.3338"
                                                                r="1.66667"
                                                                transform="rotate(-90 74.6667 45.3338)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx="74.6667"
                                                                cy="1.66683"
                                                                r="1.66667"
                                                                transform="rotate(-90 74.6667 1.66683)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx={103}
                                                                cy="45.3338"
                                                                r="1.66667"
                                                                transform="rotate(-90 103 45.3338)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx={103}
                                                                cy="1.66683"
                                                                r="1.66667"
                                                                transform="rotate(-90 103 1.66683)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx={132}
                                                                cy="45.3338"
                                                                r="1.66667"
                                                                transform="rotate(-90 132 45.3338)"
                                                                fill="#3056D3"
                                                            />
                                                            <circle
                                                                cx={132}
                                                                cy="1.66683"
                                                                r="1.66667"
                                                                transform="rotate(-90 132 1.66683)"
                                                                fill="#3056D3"
                                                            />
                                                        </svg>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                                        <div className="mt-10 lg:mt-0">
                                            <span className="block mb-4 text-lg font-semibold text-primary">
                                                Why Choose Us
                                            </span>
                                            <h2 className="mb-5 text-3xl font-bold text-dark dark:text-white sm:text-[40px]/[48px]">
                                                "Why Choose Marsh Properties for Real Estate Consultancy?"
                                            </h2>
                                            <p className="mb-5 text-base dark:text-white">
                                                This question is paramount in the minds of individuals seeking real estate advice. Our simple answer: professionalism, transparency, and trustworthiness are the cornerstones of our operations. At Marsh Properties, we consistently prioritize our clients' interests, ensuring that each transaction is conducted with integrity and clarity.
                                            </p>
                                            <p className="mb-8 text-base dark:text-white">
                                                We are committed to offering our clients the finest deals and diligently addressing the needs of every investor. Recognizing that real estate investment in Pakistan is a significant life decision, we approach each interaction with care and dedication.
                                            </p>
                                            <a
                                                onClick={() => {
                                                    router.push("/contact");
                                                }}
                                                className="inline-flex items-center justify-center py-3 text-base font-medium text-center text-white border border-transparent rounded-md px-7 bg-primary hover:bg-opacity-90"
                                            >
                                                Contact Us
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>

                        <section className="bg-white dark:bg-black rounded-3xl border border-gray-400 dark:border-primary">
                            <div className="container px-6 py-10 mx-auto">
                                <div className="xl:flex xl:items-center xL:-mx-4">
                                    <div className="xl:w-1/2 xl:mx-4">
                                        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Our Team</h1>

                                        <p className="max-w-2xl mt-4 text-gray-500 dark:text-gray-300">
                                            Our team is comprised of highly skilled professionals who are passionate about their work. We are committed to providing our clients with the best possible service and ensuring that their needs are met.
                                        </p>
                                    </div>

                                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-0 xl:mx-4 xl:w-1/2 md:grid-cols-2">
                                        <div>
                                            <img className="object-cover rounded-xl aspect-square" src="/image.jpeg" alt="" />

                                            <h1 className="mt-4 text-2xl font-semibold text-gray-700 capitalize dark:text-white">Nida Yousuf</h1>

                                            <p className="mt-2 text-gray-500 capitalize dark:text-gray-300"> CEO </p>
                                        </div>
                                    </div>


                                </div>

                            </div>

                            <div className="bg-black min-h-[75%] py-12 flex items-center justify-center p-10">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[100px]">

                                    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                                        <div className="p-1 bg-blue-400">
                                        </div>
                                        <div className="p-8">
                                            <h2 className="text-3xl font-bold text-white mb-4">Sales Manager</h2>
                                            <p className="text-white mb-6">Drives real estate sales, leads team, strategizes growth.</p>
                                            <ul className="text-sm text-white mb-6">
                                                <li className="mb-2 flex items-center">
                                                    <svg className="w-4 h-4 mr-2 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                            d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                    Team Leadership
                                                </li>
                                                <li className="mb-2 flex items-center">
                                                    <svg className="w-4 h-4 mr-2 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                            d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                    Client Acquisition
                                                </li>
                                                <li className="flex items-center">
                                                    <svg className="w-4 h-4 mr-2 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                            d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                    Market Analysis
                                                </li>
                                            </ul>
                                        </div>
                                        
                                    </div>

                                    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                                        <div className="p-1 bg-green-400">
                                        </div>
                                        <div className="p-8">
                                            <h2 className="text-3xl font-bold text-white mb-4">Sales executive</h2>
                                            <p className="text-white mb-6">Cultivates leads, negotiates deals, exceeds sales targets.</p>
                                            <ul className="text-sm text-white mb-6">
                                                <li className="mb-2 flex items-center">
                                                    <svg className="w-4 h-4 mr-2 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                            d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                    Prospecting
                                                </li>
                                                <li className="mb-2 flex items-center">
                                                    <svg className="w-4 h-4 mr-2 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                            d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                    Client Relations
                                                </li>
                                                <li className="flex items-center">
                                                    <svg className="w-4 h-4 mr-2 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                            d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                    Closing Transactions
                                                </li>
                                            </ul>
                                        </div>
                                        
                                    </div>

                                    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                                        <div className="p-1 bg-purple-400">
                                        </div>
                                        <div className="p-8">
                                            <h2 className="text-3xl font-bold text-white mb-4">Team lead</h2>
                                            <p className="text-white mb-6">Guides, motivates, ensures performance, fosters team cohesion.</p>
                                            <ul className="text-sm text-white mb-6">
                                                <li className="mb-2 flex items-center">
                                                    <svg className="w-4 h-4 mr-2 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                            d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                    Coaching
                                                </li>
                                                <li className="mb-2 flex items-center">
                                                    <svg className="w-4 h-4 mr-2 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                        xmlns="http/www.w3.org/2000/svg">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                            d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                    Goal Setting
                                                </li>
                                                <li className="flex items-center">
                                                    <svg className="w-4 h-4 mr-2 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                            d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                    Resolving Conflicts
                                                </li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>
                            </div>

                            <div className="bg-black min-h-[75%] py-12 flex items-center justify-center p-10">
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[100px]">

                                    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                                        <div className="p-1 bg-rose-400">
                                        </div>
                                        <div className="p-8">
                                            <h2 className="text-3xl font-bold text-white mb-4">HR</h2>
                                            <p className="text-white mb-6">Manages personnel, facilitates training, ensures compliance with regulations. </p>
                                            <ul className="text-sm text-white mb-6">
                                                <li className="mb-2 flex items-center text-white">
                                                    <svg className="w-4 h-4 mr-2 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                            d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                    Recruitment
                                                </li>
                                                <li className="mb-2 flex items-center text-white">
                                                    <svg className="w-4 h-4 mr-2 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                            d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                    Employee Relations
                                                </li>
                                                <li className="flex items-center text-white">
                                                    <svg className="w-4 h-4 mr-2 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                            d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                    Policy Development
                                                </li>
                                            </ul>
                                        </div>
                                        
                                    </div>

                                    <div className="bg-gray-900 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
                                        <div className="p-1 bg-yellow-400">
                                        </div>
                                        <div className="p-8">
                                            <h2 className="text-3xl font-bold text-white mb-4">Branch manager</h2>
                                            <p className="text-white mb-6">Oversees operations, drives revenue, ensures customer satisfaction. </p>
                                            <ul className="text-sm text-white mb-6">
                                                <li className="mb-2 flex items-center">
                                                    <svg className="w-4 h-4 mr-2 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                            d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                    Staff management
                                                </li>
                                                <li className="mb-2 flex items-center">
                                                    <svg className="w-4 h-4 mr-2 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                            d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                    Budgeting
                                                </li>
                                                <li className="flex items-center">
                                                    <svg className="w-4 h-4 mr-2 text-green-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                                        xmlns="http://www.w3.org/2000/svg">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                            d="M5 13l4 4L19 7"></path>
                                                    </svg>
                                                    Business Development
                                                </li>
                                            </ul>
                                        </div>
                                        
                                    </div>s

                                </div>
                            </div>

                        </section>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
};

export default About1;
