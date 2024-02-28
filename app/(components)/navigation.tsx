"use client"
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import { Drawer } from 'antd';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Nunito_Sans } from 'next/font/google'
const inter = Nunito_Sans({ subsets: ["latin"] });
import { useRouter } from 'next/navigation'
 

export default function Navigation() {


    const [isMobile, setIsMobile] = useState(false);

    const router = useRouter()

    const handleResize = () => {
        setIsMobile(window.innerWidth <= 600);
    };

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        handleResize(); // Check the initial screen size

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const handleToggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    const [showServices, setShowServices] = useState(false)
    const toggleServices = () => {
        setShowServices(!showServices);
    };

    const dropdownIconStyles = {
        transition: 'transform 0.3s ease',
        transform: showServices ? 'rotate(180deg)' : 'rotate(0deg)',
    };


    return (
        <>
            {!isMobile &&
                <motion.div
                    initial={{ y: -50, scale: 0.5 }}
                    animate={{ y: 0, scale: 1 }}
                    transition={{ duration: 1 }}
                >

                    <div className="fixed top-0 left-0 right-0 z-50">
                        <div className={`flex flex-row justify-center ${inter.className}`}>
                            <header className="text-gray-600 body-font w-3/4 border rounded-lg mt-3 bg-black">
                                <div className="container mx-auto flex flex-wrap p-2 flex-col md:flex-row items-center">
                                    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                                        <img
                                            src="/logo.jpeg"
                                            alt="Webgenics Logo"
                                            className="h-15 w-20"
                                        />
                                    </a>
                                    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-sm justify-center ">
                                        <a className="mr-10 text-white cursor-pointer hover:text-primary text-sm"
                                            onClick={
                                                () => {
                                                    router.push('/')                                                    
                                                }
                                            }

                                        >Home</a>
                                        <a className="mr-10 text-white cursor-pointer hover:text-primary text-sm"
                                            onClick={() => { 
                                                router.push('/gallery')                                                
                                             }}
                                        >Gallery</a>
                                        <a className="mr-10 text-white cursor-pointer hover:text-primary text-sm" onClick={
                                            () => {
                                                router.push('/company')
                                            }
                                        }
                                        >Company</a>
                                        <a className="mr-10 text-white cursor-pointer hover:text-primary text-sm" onClick={() => { 
                                            router.push('/contact')
                                         }}>Contact Us</a>

                                    </nav>
                                    <button 
                                        className="inline-flex items-center bg-black border border-primary text-primary
                                        py-1 px-2 focus:outline-none  rounded text-sm mt-4 md:mt-0 hover:text-white hover:bg-primary"
                                        onClick={() => { 
                                            router.push('/contact')
                                         }}
                                    >
                                        Get in Touch
                                    </button>
                                </div>
                            </header>
                        </div>
                    </div>
                </motion.div>
            }

            {isMobile &&
                <motion.div
                    initial={{ y: -50, scale: 0.5 }}
                    animate={{ y: 0, scale: 1 }}
                    transition={{ duration: 1 }}
                >
                    <div className="fixed top-0 left-0 right-0 z-50 bg-black">
                        <div className="flex flex-row justify-center bg-black">
                            <header className="text-gray-600 body-font w-full m-2 border rounded-md mt-3 bg-black">
                                <div className="container mx-auto flex p-1 flex-row  justify-between pl-4 pr-4 pt-0 pb-0 items-center">
                                    <a className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                                        <img
                                            src="/logo.jpeg"
                                            alt="Webgenics Logo"
                                            className="h-18 w-24 mt-3"
                                        />
                                    </a>
                                    <MenuOutlined className="
                                text-2xl
                                text-primary
                                " onClick={handleToggleDrawer} />
                                    <Drawer
                                        placement="right"
                                        closable={false}
                                        onClose={handleToggleDrawer}
                                        visible={isDrawerOpen}
                                        className='bg-black'
                                    >
                                        <div className='flex flex-row item-center justify-between'>
                                            <div className='text-xl text-black font-bold'> Marsh Properties </div>
                                            <CloseOutlined className='close-icon'
                                                onClick={handleToggleDrawer}
                                            />
                                        </div>
                                        <div className='flex flex-col p-3 items-center mt-4'>
                                            <div className={`text-black font-oxygen font-bold border
                                        shadow w-full text-center p-2  border-primary ${inter.className}`}
                                                onClick={() => { 
                                                    router.push('/')
                                                 }}
                                            >Home</div>
                                        </div>
                                        <div className='flex flex-col p-3 items-center'>
                                            <div className={`text-black font-oxygen font-bold border
                                        shadow w-full text-center p-2  border-primary ${inter.className}`}
                                                onClick={() => { 
                                                    router.push('/gallery')
                                                 }}
                                            >Gallery</div>
                                        </div>
                                        <div className='flex flex-col p-3 items-center'>
                                            <div className={`text-black font-oxygen font-bold border
                                        shadow w-full text-center p-2  border-primary ${inter.className}`}
                                                onClick={() => { 
                                                    router.push('/company')
                                                 }}
                                            >Company</div>
                                        </div>
                                        <div className='flex flex-col p-3 items-center'>
                                            <div className={`text-black font-oxygen font-bold border
                                        shadow w-full text-center p-2  border-primary ${inter.className}`}
                                                onClick={() => { 
                                                    router.push('/contact')
                                                 }}
                                            >Contact Us</div>
                                        </div>
                                        <div className='flex flex-col p-3 items-center'>
                                            <div className={`text-black font-oxygen font-bold border
                                        shadow w-full text-center p-2  border-primary ${inter.className}`}
                                                onClick={() => { 
                                                    router.push('/contact')
                                                 }}
                                            >Get in Touch</div>
                                        </div>


                                    </Drawer>
                                </div>

                            </header>
                        </div >
                    </div >
                </motion.div>
            }


        </>

    )
}