import React from 'react'
import { Nunito_Sans } from 'next/font/google'

const inter = Nunito_Sans({ subsets: ["latin"] });

export default function footer() {
    return (
        <div className={`relative py-8 bg-center bg-no-repeat bg-black border-t-2 border-primary  ${inter.className}`}>
            <div className="absolute top-0 left-0 w-full h-full"></div>
            <div className="relative z-10 justify-center flex-1 max-w-6xl px-4 py-4 mx-auto lg:py-0">
                <div className="flex flex-wrap pb-10 -mx-3">
                    <div className="w-full px-4 mb-11 md:w-1/2 lg:w-4/12 lg:mb-0">
                        <a href="#" className="inline-block pb-2 text-md font-bold text-primary">About Company</a>
                        <div className="w-16 mb-4 border-b-2 border-gray-300 "></div>
                        <p className="text-sm font-normal leading-6 text-white lg:w-64">
                            Marsh Properties is an emerging force in the Real Estate sector in Pakistan. As authorized Sales partners for numerous prestigious residential and commercial projects across the country, we facilitate transactions totaling over 20 billion annually.
                        </p>
                    </div>
                    <div className="w-full px-4 md:w-1/4 lg:w-2/12 mb-11 lg:mb-0">
                        <h2 className="pb-2 text-sm font-bold text-primary ">Quick Links</h2>
                        <div className="w-16 mb-4 border-b-2 border-gray-300"></div>
                        <ul>
                            <li className="mb-4">
                                <a href="/" className="inline-block text-sm font-normal text-white">Home</a>
                            </li>
                            <li className="mb-4">
                                <a href="/company" className="inline-block text-sm font-normal text-white">Company</a>
                            </li>
                            <li className="mb-4">
                                <a href="/projects" className="inline-block text-sm font-normal text-white">Projects</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="inline-block text-sm font-normal text-white">Portfolio</a>
                            </li>
                            <li className="mb-4">
                                <a href="#" className="inline-block text-sm font-normal text-white">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full px-4 md:w-1/4 lg:w-2/12 mb-11 lg:mb-0">
                        <h2 className="pb-2 text-sm font-bold text-primary ">Contacts</h2>
                        <div className="w-16 mb-4 border-b-2 border-gray-300"></div>
                        <ul>
                            <li className="mb-4">
                                <a
                                    onClick={() => {
                                        window.open("https://www.instagram.com/marshproperties?igsh=M2Riamd3emVraXh3", "_blank");
                                    }}
                                    className="inline-block text-sm font-normal text-white">Instagram </a>
                            </li>
                            <li className="mb-4">
                                <a
                                    onClick={() => {
                                        window.open("https://api.whatsapp.com/send/?phone=03151071668", "_blank");
                                    }}
                                    className="inline-block text-sm font-normal text-white">Whatsapp</a>
                            </li>
                            <li className="mb-4">
                                <a
                                    onClick={() => {
                                        window.open("mailto:marshproperties.pvt@gmail.com", "_blank");
                                    }}
                                    className="inline-block text-sm font-normal text-white">Gmail</a>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full px-4 mb-11 lg:mb-0 md:w-1/3 lg:w-3/12">
                        <h2 className="pb-2 text-sm font-bold text-primary ">Stay Connected</h2>
                        <div className="w-16 mb-4 border-b-2 border-gray-300 "></div>
                        <div className="flex justify-start mt-4 ">
                            <a href="#" type="button"
                                onClick={
                                    () => {
                                        window.open("https://www.facebook.com/marshproperties", "_blank");
                                    }
                                }

                                className="m-1 leading-normal text-primary uppercase transition duration-150 ease-in-out border-2 border-gray-400 rounded-full dark:border-gray-400 dark:hover:bg-gray-800 hover:border-blue-600 hover:bg-blue-800 w-9 h-9">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-4 h-full mx-auto text-primary text-primary bi bi-facebook"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                </svg>
                            </a>
                            <a href="#" type="button"
                                onClick={
                                    () => {
                                        window.open("https://mail.google.com/mail/u/0/#inbox?compose=marshproperties.pvt@gmail.com", "_blank");
                                    }}

                                className="m-1 leading-normal text-primary uppercase transition duration-150 ease-in-out border-2 border-gray-400 rounded-full dark:border-gray-400 text-primary dark:hover:bg-gray-800 hover:border-blue-600 text-text-gray-50 hover:bg-blue-600 w-9 h-9">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-4 h-full mx-auto text-gray-100 text-primary bi bi-google"
                                    viewBox="0 0 16 16">
                                    <path
                                        d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                                </svg>
                            </a>
                            <a href="#" type="button"
                                onClick={() => {
                                    window.open("https://www.instagram.com/marshproperties?igsh=M2Riamd3emVraXh3", "_blank");
                                }}
                                className="m-1 leading-normal text-primary uppercase transition duration-150 ease-in-out border-2 border-gray-400 rounded-full dark:border-gray-400 text-primary dark:hover:bg-gray-800 hover:border-blue-600 text-text-gray-50 hover:bg-blue-600 w-9 h-9"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    className="w-4 h-full mx-auto text-gray-100 text-primary bi bi-instagram"
                                    viewBox="0 0 16 16"
                                >
                                    <path d="M8 0a8 8 0 1 0 8 8A8 8 0 0 0 8 0zm1 2.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zM8 4a4 4 0 1 1-4 4 4 4 0 0 1 4-4zm3 8.77c0 .384-.033.765-.093 1.14H5.093c-.06-.375-.093-.756-.093-1.14V6.28h1.797A4.036 4.036 0 0 1 8 6c.862 0 1.653.336 2.25.88h1.797v6.77z" />
                                    <path
                                        d="M4.34 0h7.32C14.493 0 16 1.507 16 3.36v9.28C16 14.493 14.493 16 12.16 16H3.84C1.507 16 0 14.493 0 12.64V3.36C0 1.507 1.507 0 3.36 0zm.067 1.34a1.336 1.336 0 0 0-1.333 1.334v8.66c0 .738.6 1.334 1.333 1.334h8.66a1.336 1.336 0 0 0 1.334-1.334V3.675a1.336 1.336 0 0 0-1.334-1.333H4.407z"
                                        fill-rule="evenodd"
                                    />
                                </svg>
                            </a>

                        </div>
                    </div>
                </div>
                <div className="pt-4 text-center text-sm text-primary">
                    <span>© Copyright 2024 . All Rights Reserved</span>
                </div>
            </div>
        </div>
    )
}
