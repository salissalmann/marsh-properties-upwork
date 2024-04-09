'use client'
import React, { useState } from 'react'
import Navigation from '../(components)/navigation'
import Footer from '../(components)/footer'
import { Nunito_Sans } from 'next/font/google'

const inter = Nunito_Sans({ subsets: ["latin"] });

export default function page() {

    const [selectedImage, setSelectedImage] = useState<number | null>(1);

    const handleImageClick = (index: number) => {
        setSelectedImage(index);
    };

    const ChangeCarousel = (id: number) => {
        setSelectedImage(1);
        if (id === 1) {
            document.getElementById('Park')?.classList.remove('hidden');
            document.getElementById('Rudn')?.classList.add('hidden');
            document.getElementById('Blue')?.classList.add('hidden');
        }
        else if (id === 2) {
            document.getElementById('Park')?.classList.add('hidden');
            document.getElementById('Rudn')?.classList.remove('hidden');
            document.getElementById('Blue')?.classList.add('hidden');
        }
        else if (id === 3) {
            document.getElementById('Park')?.classList.add('hidden');
            document.getElementById('Rudn')?.classList.add('hidden');
            document.getElementById('Blue')?.classList.remove('hidden');
        }
    }

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
                                    Projects
                                </div>
                                <h1 className="text-5xl font-bold dark:text-white"> Pro<span className="text-primary">jects
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
                                Our passionate team constantly enhances skills while tackling exciting commercial, and mixed-use real estate projects with professionalism and enthusiasm.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8  h-screen bg-black" id='Park'>
                <div className="flex flex-col md:flex-row -mx-4">
                    <div className="md:flex-1 px-4">
                        <div>
                            <div className="h-[500px] rounded-lg bg-gray-100 mb-4">
                                {[1, 2, 3, 4].map((imageIndex) => (
                                    <div
                                        key={imageIndex}
                                        className={`h-[500px] rounded-lg bg-gray-100 mb-4 flex items-center justify-center ${selectedImage === imageIndex ? '' : 'hidden'
                                            }`}
                                    >
                                        <img src={`/Park/Park-${imageIndex}.jpg`} alt="" className='h-full w-full' />
                                    </div>
                                ))}
                            </div>

                            <div className="flex -mx-2 mb-4">
                                {[1, 2, 3, 4].map((index) => (
                                    <div key={index} className="flex-1 px-2">
                                        <button
                                            onClick={() => handleImageClick(index)}
                                            className={`focus:outline-none w-full  h-full rounded-lg md:h-32 bg-gray-100 flex items-center justify-center ${selectedImage === index
                                                ? 'ring-2 ring-indigo-300 ring-inset'
                                                : ''
                                                }`}
                                        >
                                            <img src={`/Park/Park-${index}.jpg`} alt="" className='h-full' />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="md:flex-1 px-4">
                        <h2 className="mb-2 leading-tight tracking-tight font-boldtext-2xl md:text-3xl text-white font-bold">Park View City</h2>
                        <p className="text-white text-sm">By <a className="text-indigo-600 hover:underline">Marsh Properties</a></p>

                        <p className="text-white mt-4">Park View City is a meticulously planned residential community situated in the heart of Islamabad, Pakistan. Boasting lush green landscapes and serene surroundings, it offers a harmonious blend of modern living and natural beauty. With top-notch amenities including parks, schools, hospitals, and commercial areas, Park View City provides a comfortable lifestyle for its residents. Its strategic location, coupled with stringent security measures, makes it an ideal choice for families seeking tranquility and convenience amidst urban life.</p>
                    </div>
                </div>
            </div>

            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8  h-screen bg-black hidden" id='Rudn'>
                <div className="flex flex-col md:flex-row -mx-4">
                    <div className="md:flex-1 px-4">
                        <div>
                            <div className="h-[500px] rounded-lg bg-gray-100 mb-4">
                                {[1, 2, 3, 4].map((imageIndex) => (
                                    <div
                                        key={imageIndex}
                                        className={`h-[500px] rounded-lg bg-gray-100 mb-4 flex items-center justify-center ${selectedImage === imageIndex ? '' : 'hidden'
                                            }`}
                                    >
                                        <img src={`/Rudn/Rudn-${imageIndex}.jpg`} alt="" className='h-full w-full' />
                                    </div>
                                ))}
                            </div>

                            <div className="flex -mx-2 mb-4">
                                {[1, 2, 3, 4].map((index) => (
                                    <div key={index} className="flex-1 px-2">
                                        <button
                                            onClick={() => handleImageClick(index)}
                                            className={`focus:outline-none w-full  h-full rounded-lg md:h-32 bg-gray-100 flex items-center justify-center ${selectedImage === index
                                                ? 'ring-2 ring-indigo-300 ring-inset'
                                                : ''
                                                }`}
                                        >
                                            <img src={`/Rudn/Rudn-${index}.jpg`} alt="" className='h-full' />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="md:flex-1 px-4">
                        <h2 className="mb-2 leading-tight tracking-tight font-boldtext-2xl md:text-3xl text-white font-bold">Rudn World</h2>
                        <p className="text-white text-sm">By <a className="text-indigo-600 hover:underline">Marsh Properties</a></p>

                        <p className="text-white mt-4">Rudn World is a visionary project aimed at creating a diverse, interconnected community of individuals, businesses, and organizations. It strives to foster innovation, collaboration, and sustainability on a global scale. Through its multifaceted approach, Rudn World seeks to address pressing challenges while embracing opportunities for growth and development. With a focus on inclusivity and progress, it aims to become a hub for creativity, knowledge exchange, and positive societal impact, transcending geographical boundaries to shape a better future for all.</p>
                    </div>
                </div>
            </div>

            <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8  h-screen bg-black hidden" id='Blue'>
                <div className="flex flex-col md:flex-row -mx-4">
                    <div className="md:flex-1 px-4">
                        <div>
                        <div className="h-[500px] rounded-lg bg-gray-100 mb-4">
                                {[1, 2, 3, 4].map((imageIndex) => (
                                    <div
                                        key={imageIndex}
                                        className={`h-[500px] rounded-lg bg-gray-100 mb-4 flex items-center justify-center ${selectedImage === imageIndex ? '' : 'hidden'
                                            }`}
                                    >
                                        <img src={`/Blue/Blue-${imageIndex}.jpg`} alt="" className='h-full w-full' />
                                    </div>
                                ))}
                            </div>

                            <div className="flex -mx-2 mb-4">
                                {[1, 2, 3, 4].map((index) => (
                                    <div key={index} className="flex-1 px-2">
                                        <button
                                            onClick={() => handleImageClick(index)}
                                            className={`focus:outline-none w-full  h-full rounded-lg md:h-32 bg-gray-100 flex items-center justify-center ${selectedImage === index
                                                ? 'ring-2 ring-indigo-300 ring-inset'
                                                : ''
                                                }`}
                                        >
                                            <img src={`/Blue/Blue-${index}.jpg`} alt="" className='h-full w-full' />
                                        </button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="md:flex-1 px-4">
                        <h2 className="mb-2 leading-tight tracking-tight font-boldtext-2xl md:text-3xl text-white font-bold">Blue World City</h2>
                        <p className="text-white text-sm">By <a className="text-indigo-600 hover:underline">Marsh Properties</a></p>

                        <p className="text-white mt-4">Blue World City is an ambitious real estate development project located near Islamabad, Pakistan. It promises to redefine modern living by offering a holistic lifestyle experience amidst serene surroundings. With an array of residential, commercial, and recreational facilities, Blue World City aims to create a vibrant and sustainable community. Its strategic location, coupled with world-class amenities and meticulous urban planning, makes it an ideal choice for individuals and families seeking a harmonious blend of comfort, convenience, and tranquility in their daily lives.</p>
                    </div>
                </div>
            </div>

            <section className='bg-black -mt-[16%]'>
                <div className="py-16">
                    <div className="mx-auto px-6 max-w-7xl text-gray-500">
                        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-[8%]">
                            <div className="relative group overflow-hidden p-8 rounded-xl border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                                <div aria-hidden="true" className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-blue-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"></div>
                                <div className="relative">
                                    <div className="border border-blue-500/10 flex relative *:relative *:size-11 *:m-auto size-12 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-blue-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                                        <img src="/Park.png" alt="Park View" />
                                    </div>

                                    <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
                                        <p className="text-gray-700 dark:text-gray-300">Park View City redefines urban living with its luxurious residences offering breathtaking views of lush parks, creating a harmonious balance between nature and modern amenities.</p>
                                    </div>

                                    <div className="flex gap-3 -mb-8 py-4 border-t border-gray-200 dark:border-primary cursor-pointer" onClick={() => ChangeCarousel(1)}>
                                        <a className="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center">
                                            <span>See More</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-up-right" width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M17 7l-10 10" />
                                                <path d="M8 7l9 0l0 9" />
                                            </svg>
                                        </a>
                                    </div>

                                </div>
                            </div>
                            <div className="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                                <div aria-hidden="true" className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-green-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"></div>
                                <div className="relative">
                                    <div className="border border-green-500/10 flex relative *:relative *:size-11 *:m-auto size-12 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-green-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">

                                        <img src="/Rudn.png" alt="Rudn Enclave" />
                                    </div>

                                    <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
                                        <p className="text-gray-700 dark:text-gray-300">Rudn Enclave presents a serene residential haven with meticulously designed homes, lush green spaces, and world-class amenities, offering a tranquil escape from the city's hustle and bustle.</p>
                                    </div>

                                    <div className="flex gap-3 -mb-8 py-4 border-t border-gray-200 dark:border-primary cursor-pointer" onClick={() => ChangeCarousel(2)}>
                                        <a className="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center">
                                            <span>See More</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-up-right" width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M17 7l-10 10" />
                                                <path d="M8 7l9 0l0 9" />
                                            </svg>
                                        </a>
                                    </div>

                                </div>
                            </div>
                            <div className="relative group overflow-hidden p-8 rounded-xl bg-white border border-gray-200 dark:border-gray-800 dark:bg-gray-900">
                                <div aria-hidden="true" className="inset-0 absolute aspect-video border rounded-full -translate-y-1/2 group-hover:-translate-y-1/4 duration-300 bg-gradient-to-b from-red-500 to-white dark:from-white dark:to-white blur-2xl opacity-25 dark:opacity-5 dark:group-hover:opacity-10"></div>
                                <div className="relative">
                                    <div className="border border-red-500/10 flex relative *:relative *:size-11 *:m-auto size-12 rounded-lg dark:bg-gray-900 dark:border-white/15 before:rounded-[7px] before:absolute before:inset-0 before:border-t before:border-white before:from-red-100 dark:before:border-white/20 before:bg-gradient-to-b dark:before:from-white/10 dark:before:to-transparent before:shadow dark:before:shadow-gray-950">
                                        <img src="/Blue.png" alt="Blue World" />
                                    </div>

                                    <div className="mt-6 pb-6 rounded-b-[--card-border-radius]">
                                        <p className="text-gray-700 dark:text-gray-300">Blue World City is an iconic residential and commercial destination, blending world-class architecture, modern amenities, and sustainable living, and a harmonious community by the water.</p>
                                    </div>

                                    <div className="flex gap-3 -mb-8 py-4 border-t border-gray-200 dark:border-primary cursor-pointer" onClick={() => ChangeCarousel(3)}>
                                        <a className="group rounded-xl disabled:border *:select-none [&>*:not(.sr-only)]:relative *:disabled:opacity-20 disabled:text-gray-950 disabled:border-gray-200 disabled:bg-gray-100 dark:disabled:border-gray-800/50 disabled:dark:bg-gray-900 dark:*:disabled:!text-white text-gray-950 bg-gray-100 hover:bg-gray-200/75 active:bg-gray-100 dark:text-white dark:bg-gray-500/10 dark:hover:bg-gray-500/15 dark:active:bg-gray-500/10 flex gap-1.5 items-center text-sm h-8 px-3.5 justify-center">
                                            <span>See More</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-arrow-up-right" width="1.5em" height="1.5em" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                <path d="M17 7l-10 10" />
                                                <path d="M8 7l9 0l0 9" />
                                            </svg>
                                        </a>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>


            <Footer />

        </>
    )
}
