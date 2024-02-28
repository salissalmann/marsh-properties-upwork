'use client'
import React from 'react'
import Navigation from '../(components)/navigation'
import Footer from '../(components)/footer'
import { Nunito_Sans } from 'next/font/google'

const inter = Nunito_Sans({ subsets: ["latin"] });

export default function page() {


    return (
        <>
            <Navigation />
            <section className={`py-16 bg-black ${inter.className}`}>
                <div className="justify-center flex-1 max-w-5xl px-4 py-4 mx-auto lg:py-10 md:px-7 ">
                    <div className="max-w-xl mx-auto mt-12">
                        <div className="text-center border-b-2 border-primary">
                            <div className="relative flex flex-col items-center ">
                                <div
                                    className="absolute hidden md:block -top-14 left-0 text-[120px] text-gray-100 font-bold opacity-10">
                                    Portfolio
                                </div>
                                <h1 className="text-5xl font-bold dark:text-white"> Port<span className="text-primary">folio
                                </span> </h1>
                                <div className="flex w-24 mt-1 mb-5 overflow-hidden rounded">
                                    <div className="flex-1 h-2 bg-primary">
                                    </div>
                                    <div className="flex-1 h-2 bg-black">
                                    </div>
                                    <div className="flex-1 h-2 bg-primary">
                                    </div>
                                </div>
                            </div>
                            <p className="mb-16 text-base text-center text-white">
                                We are a team of professional and enthusiastic people, who like what they do and are always in the process of growing and improving their skills.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-black font-poppins pt-12 lg:pt-0 pb-12">
                <div className="relative overflow-hidden ">
                    <div className="mx-auto max-w-7xl">
                        <div className="grid grid-cols md:grid-cols-3 gap-4">
                            <div className="grid gap-4">
                                <div>
                                    <img className="h-auto max-w-full rounded-lg" src="/portfolio/Img1.jpeg" alt="" />
                                </div>
                                <div>
                                    <img className="h-auto max-w-full rounded-lg" src="/portfolio/Img3.jpeg" alt="" />
                                </div>
                            </div>
                            <div className="grid gap-2">
                                <div>
                                    <img className="h-auto max-w-full rounded-lg" src="/portfolio/Img2.jpeg" alt="" />
                                </div>

                                <div>
                                    <img className="h-auto max-w-full rounded-lg" src="/portfolio/Img6.jpeg" alt="" />
                                </div>
                                <div>
                                    <img className="h-auto max-w-full rounded-lg" src="/portfolio/Img3.jpeg" alt="" />
                                </div>

                            </div>

                            <div className="grid gap-2">
                                <div>
                                    <img className="h-auto max-w-full rounded-lg" src="/portfolio/Img5.jpeg" alt="" />
                                </div>
                                <div>
                                    <img className="h-auto max-w-full rounded-lg" src="/portfolio/Img4.jpeg" alt="" />
                                </div>
                            </div>
                            {/* <div className="grid gap-4">
                                <div>
                                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
                                </div>
                                <div>
                                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="" />
                                </div>
                                <div>
                                    <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
                                </div>
                            </div> */}
                        </div>

                    </div>
                </div>
            </section>

            {/* <main className="container mx-auto mt-6 p-4">

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Who We Are</h2>
                    <p className="text-gray-700 leading-relaxed">
                        Welcome to Our Real Estate Company, where we strive to provide you with the best real estate solutions.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Our Values</h2>
                    <ul className="list-disc list-inside text-gray-700">
                        <li>Customer Satisfaction</li>
                        <li>Integrity and Transparency</li>
                        <li>Professionalism</li>
                        <li>Innovation</li>
                    </ul>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-bold mb-4">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold">John Doe</h3>
                            <p className="text-gray-700">Real Estate Agent</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold">Jane Smith</h3>
                            <p className="text-gray-700">Property Manager</p>
                        </div>
                        <div className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-lg font-semibold">Mike Johnson</h3>
                            <p className="text-gray-700">Finance Specialist</p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                    <p className="text-gray-700">
                        Have any questions or interested in our services? Contact us today!
                    </p>
                    <p className="text-blue-500 font-semibold mt-2">Email: info@ourrealestatecompany.com</p>
                    <p className="text-blue-500 font-semibold">Phone: (123) 456-7890</p>
                </section>
            </main> */}


            <Footer />

        </>
    )
}
