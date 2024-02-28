'use client';
import Navigation from "./(components)/navigation";
import Footer from "./(components)/footer";
import { Nunito_Sans } from 'next/font/google'
const inter = Nunito_Sans({ subsets: ["latin"] });
import { useState } from 'react';
import YouTube from 'react-youtube';
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/navigation";

export default function Home() {

  const [openFAQ, setOpenFAQ] = useState(0);

  const router = useRouter();


  const videoId = 'lvTAfRkwBXs';
  const isMobile = useMediaQuery({ maxWidth: 767 });

  const opts = {
    height: '500',
    width: '940',
  };



  return (
    <>
      <Navigation />

      <section className={`shadow-sm font-poppins dark:bg-black pt-12 lg:pt-0 ${inter.className}`}>
        <div className="relative overflow-hidden bg-white dark:bg-black">
          <div className="mx-auto max-w-7xl">
            <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:full lg:pb-28 xl:pb-32">
              <div className="px-4 mx-auto mt-10 max-w-7xl sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="max-w-lg mx-auto mb-8 text-center lg:max-w-md lg:mx-0 lg:text-left">
                  <span
                    className="inline-block px-2.5 py-0.5 font-semibold text-xs leading-5 text-primary bg-black rounded border border-primary ">
                    Marsh Properties
                  </span>
                  <h2
                    className="mt-6 text-4xl font-bold leading-10 tracking-tight text-gray-800 dark:text-primary md:text-6xl">
                    <span className="block">Welcome to Marsh Properties</span>
                  </h2>
                  <p
                    className="mt-6 tracking-wide text-gray-600 dark:text-gray-100 font-light sm:mt-5 sm:text-md sm:max-w-xl sm:mx-auto md:mt-5">
                    Marsh Properties is an emerging force in the Real Estate sector in Pakistan. As authorized Sales partners for numerous prestigious residential and commercial projects across the country, we facilitate transactions totaling over 20 billion annually.
                  </p>
                  <div className="justify-center mt-6 lg:justify-start sm:flex">
                    <div className="rounded-md shadow">
                      <a 
                        onClick={() => {
                          router.push('/gallery');
                        }}
                        className="flex items-center justify-center w-full px-4 py-2 text-sm text-white bg-black shadow hover:bg-gray-800 border border-primary">
                        View Portfolio
                      </a>
                    </div>
                    <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                      <a 
                        onClick={() => {
                          router.push('/contact');
                        }}
                        className="flex items-center justify-center w-full px-4 py-2 text-sm text-black bg-white shadow hover:bg-gray-100 border border-primary">
                        Contact Us
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img src="/cover1.jpg" alt=""
              className="object-cover w-full h-56 sm:h-72 md:h-96 lg:w-full lg:h-full" />
          </div>
        </div>
      </section>

      <section className={`flex items-center bg-stone-100 xl:h-screen ${inter.className}`}>
        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">
          <div className="flex flex-wrap ">
            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0">
              <div className="relative lg:max-w-md">
                <img src="/image.jpeg" alt="aboutimage"
                  className="relative z-10 object-cover w-full rounded h-96" />
                <div
                  className="absolute bottom-0 right-0 z-10 p-8 bg-white border-2 border-blue-500 rounded shadow dark:border-primary lg:-mb-8 lg:-mr-11 sm:p-8 dark:text-primary text-sm">
                  <p className="text-md font-semibold md:w-72 text-gray-700 dark:text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                      className="absolute top-0 left-0 w-16 h-16 text-primary opacity-10"
                      viewBox="0 0 16 16">
                      <path
                        d="M12 12a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1h-1.388c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 9 7.558V11a1 1 0 0 0 1 1h2Zm-6 0a1 1 0 0 0 1-1V8.558a1 1 0 0 0-1-1H4.612c0-.351.021-.703.062-1.054.062-.372.166-.703.31-.992.145-.29.331-.517.559-.683.227-.186.516-.279.868-.279V3c-.579 0-1.085.124-1.52.372a3.322 3.322 0 0 0-1.085.992 4.92 4.92 0 0 0-.62 1.458A7.712 7.712 0 0 0 3 7.558V11a1 1 0 0 0 1 1h2Z">
                      </path>
                    </svg>
                    Successfully Providing business solutions from 8 years
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full px-6 mb-10 lg:w-1/2 lg:mb-0 ">
              <div className="pl-4 mb-6 border-l-4 border-primary">
                <span className="text-sm text-gray-600 uppercase dark:text-primary">Who we are?</span>
                <h1 className="mt-2 text-3xl font-black text-gray-700 md:text-5xl dark:text-gray-900">
                  About Us
                </h1>
              </div>
              <p className="mb-6 text-sm leading-6 text-gray-500 dark:text-gray-600">
                Under the leadership of NIDA YOUSUF, a respected personality in the industry, we have swiftly made our mark. Miss Nida Yousuf’s achievements.
                for his remarkable contribution to the real estate landscape, particularly in the development of commercial high-rise projects, all accomplished within a mere four-year timeframe.
                Marsh Properties prides itself on maintaining a sterling reputation both locally and internationally, attributed to our commitment to fair dealings and unparalleled post-sale services. Our team of dedicated realtors ensures that each client receives personalized attention and tailored solutions to meet their unique requirements. From residential to commercial properties, as well as versatile multi-purpose spaces, Marsh Properties offers a diverse portfolio to cater to a wide range of preferences and needs.
              </p>
              <a 
                onClick={() => {
                  router.push('/about');
                }}
                className="px-4 py-2 text-black text-sm rounded border border-primary hover:bg-primary hover:text-white">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className={`text-gray-600 body-font bg-black ${inter.className}`}>
        <div className="container px-5 py-24 mx-auto w-[90%]">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-primary tracking-widest font-medium title-font mb-1 uppercase">
              What we offer
            </h2>
            <h1 className="sm:text-3xl text-2xl font-lg title-font text-white">
              Our Services
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col border border-primary">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-primary text-white flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <h2 className="text-white text-lg title-font font-medium">Our Vision</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-sm text-white">At Marsh Properties, our vision is to redefine Pakistan's real estate landscape by incorporating novel concepts, uncompromising quality, cutting-edge technology, and innovation to shape a timeless perspective on modern living.</p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col border border-primary">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-primary text-white flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <path d="M16 18L22 12 16 6"></path>
                      <path d="M8 6L2 12 8 18"></path>
                    </svg>
                  </div>
                  <h2 className="text-white text-lg title-font font-medium">Our Services</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-sm text-white">We are committed to providing exceptional After Sales Services to our esteemed clients. As you progress through your plan, our company stands by you, offering support until the completion of your plot installments. We consider our clients as an integral part of the 'Marsh Properties' family.</p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="flex rounded-lg h-full p-8 flex-col border border-primary">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-primary text-white flex-shrink-0">
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                      <circle cx="6" cy="6" r="3"></circle>
                      <circle cx="6" cy="18" r="3"></circle>
                      <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                    </svg>
                  </div>
                  <h2 className="text-white text-lg title-font font-medium">Our Mission</h2>
                </div>
                <div className="flex-grow">
                  <p className="leading-relaxed text-sm text-white">The Marsh Properties team is dedicated to a three-fold mission:</p>
                  <ul className="list-disc text-white text-sm pl-4">
                    <li>Ensuring safe and secure investment opportunities.</li>
                    <li>Providing responsible services that prioritize our clients' needs.</li>
                    <li>Offering unparalleled after-sales support as a cornerstone of our commitment.</li>
                    <li>Pioneering innovation within Pakistan's real estate sector.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`mx-auto max-w-7xl ${inter.className}`}>
        <div className="container px-6 py-12 mx-auto">

          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-primary tracking-widest font-medium title-font mb-1 uppercase">
              FAQs
            </h2>
            <h1 className="sm:text-3xl text-2xl font-lg title-font  text-gray-800 dark:text-black">
              Frequently Asked Questions
            </h1>
          </div>

          <div className="container mx-auto w-[90%] flex flex-col justify-center items-center">
            {isMobile ? (
            <div className="video-container">
              <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${videoId}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="YouTube Video"
                className="rounded-lg dark:bg-black w-full"
              ></iframe>
            </div>
            ) : (
              <YouTube videoId={videoId} opts={opts} />
            )}
          </div>


          <div className="mt-8 space-y-8 lg:mt-12">
            <div className="p-8 rounded-lg dark:bg-black">
              <button className="flex items-center justify-between w-full">
                <h1 className="font-semibold text-gray-700 dark:text-white">What types of properties are available on your platform?</h1>

                <span className="text-black bg-primary rounded-full">
                  {openFAQ === 0 ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => setOpenFAQ(-1)}>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => setOpenFAQ(0)}>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  )}
                </span>
              </button>
              {openFAQ === 0 && (
                <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
                  We offer a diverse range of properties, including houses, apartments, condos, land, and commercial spaces. Explore our listings to find the perfect property for your needs.
                </p>
              )}
            </div>

            <div className="p-8 bg-gray-100 rounded-lg dark:bg-black">
              <button className="flex items-center justify-between w-full">
                <h1 className="font-semibold text-gray-700 dark:text-white">What is the difference between buying and renting a property?</h1>

                <span className="text-black bg-primary rounded-full">
                  {openFAQ === 1 ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => setOpenFAQ(-1)}>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => setOpenFAQ(1)}>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  )}
                </span>
              </button>
              {openFAQ === 1 && (
                <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
                  When you buy a property, you are investing in a long-term asset that you can call your own. Renting, on the other hand, offers flexibility and freedom from the responsibilities of ownership.
                </p>
              )}

            </div>

            <div className="p-8 bg-gray-100 rounded-lg dark:bg-black">
              <button className="flex items-center justify-between w-full">
                <h1 className="font-semibold text-gray-700 dark:text-white">Do i need a referral?</h1>

                <span className="text-black bg-primary rounded-full">
                  {openFAQ === 2 ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => setOpenFAQ(-1)}>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => setOpenFAQ(2)}>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  )}
                </span>
              </button>

              {openFAQ === 2 && (
                <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
                  No, you do not need a referral to buy or rent a property. Simply contact us, and we will guide you through the process.
                </p>
              )}

            </div>

            <div className="p-8 bg-gray-100 rounded-lg dark:bg-black">
              <button className="flex items-center justify-between w-full">
                <h1 className="font-semibold text-gray-700 dark:text-white">How do i get started?</h1>

                <span className="text-black bg-primary rounded-full">
                  {openFAQ === 3 ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => setOpenFAQ(-1)}>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 12H6" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={() => setOpenFAQ(3)}>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  )}
                </span>

              </button>
              {openFAQ === 3 && (
                <p className="mt-6 text-sm text-gray-500 dark:text-gray-300">
                  To get started, simply contact us when you find a property that interests you. Our team will guide you through the rest of the process.
                </p>
              )}
            </div>

          </div>
        </div>
      </section>
      <Footer />

    </>
  );
}
