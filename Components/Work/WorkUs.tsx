'use client'
import React from 'react'
import Container from '../shared/Container'
import Marquee from 'react-marquee-slider'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants/variants'
import FolderAnimation from '../shared/FolderAnimation'
type Props = {}

const WorkUs = (props: Props) => {
    return (
        <>
            <Container >
                <div className="flex my-[80px] items-center justify-center"> <h2 className="text-[15px] lg:max-w-[60%] text-center  md:text-[22px] lg:text-[30px] font-bold">
                    <span className="text-black">Why work with us?</span>
                    <span className="text-gray-500">We streamline the development process by breaking projects into smaller, hyper-focused tasks for seamless execution.</span>
                </h2></div>
                <div className="w-full flex flex-col lg:flex-row gap-3 my-10 mt-[60px]">




                    <div className="lg:w-[30%] w-full rounded-4xl overflow-hidden  border-2 border-gray-300 shadow-lg p-6 items-center bg-white relative">
                        <motion.div
                            variants={fadeIn("right", 0.2, 0.5)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }}



                            className="hidden md:flex justify-center items-center">
                            <FolderAnimation />
                        </motion.div>


                        <h2 className=" text-base sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl lg:mt-[12%] font-bold text-center text-gray-800 mb-2">Fast TurnAround</h2>
                        <p className="text-sm sm:text-xs md:text-base lg:text-md xl:text-lg  text-gray-600 max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto text-center">
                            Stay in the loop with real-time updates and direct collaboration, ensuring your project runs smoothly
                            from start to finish.
                        </p>
                    </div>

                    <div className="lg:w-[70%] rounded-4xl overflow-hidden  border-2 border-gray-300 shadow-lg p-6 bg-white relative">
                        <div className="hidden md:block">  <div className="absolute inset-0 pointer-events-none">
                            <motion.div variants={fadeIn("up", 0.2, 0.3)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.7 }}
                                className="text-gray-400 text-sm opacity-50 absolute top-15 right-5">
                                <div className="flex items-start">
                                    <div className="w-[25px] h-[25px] relative">
                                        <Image
                                            src='/green.png'
                                            alt="image"
                                            layout="fill"
                                            className="object-cover opacity-50 p-[2px]"
                                        />
                                    </div>
                                    <div className="flex-1 ml-4">
                                        <div className="flex justify-between items-center">
                                            <h3 className="text-md font-semibold">John Doe</h3>
                                            <span className="text-sm">1:15 PM</span>
                                        </div>
                                        <p className="mt-2">
                                            Let me check that for you!
                                        </p>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div variants={fadeIn("up", 0.3, 0.3)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.7 }} className="text-gray-400 text-sm opacity-50 absolute top-1/2 left-5">
                                <div className="flex items-start">
                                    <div className="w-[25px] h-[25px] opacity-50 relative">
                                        <Image
                                            src='/orange.png'
                                            alt="image"
                                            layout="fill"
                                            className="object-cover p-[2px]"
                                        />
                                    </div>
                                    <div className="flex-1 ml-4">
                                        <div className="flex justify-between items-center">
                                            <h3 className="text-md font-semibold">Anna Smith</h3>
                                            <span className="text-sm">3:30 PM</span>
                                        </div>
                                        <p className="mt-2">
                                            I’ll send you the report soon.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                            <span>
                                <motion.div variants={fadeIn("up", 0.4, 0.3)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{ once: false, amount: 0.7 }} className="max-w-md mt-2  bg-white shadow-lg rounded-lg p-4 relative">
                                    <div className="flex items-start">
                                        <div className="w-[25px] h-[25px] relative">
                                            <Image
                                                src='/blue.png'
                                                alt="image"
                                                layout="fill"
                                                className="object-cover "
                                            />
                                        </div>
                                        <div className="flex-1 ml-4">
                                            <div className="flex justify-between items-center">
                                                <h3 className="text-md font-semibold">Jhon</h3>
                                                <span className="text-sm text-gray-500">2:46 PM</span>
                                            </div>
                                            <p className="text-gray-700 mt-2">
                                                Hey there! Any Update
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>

                            </span>
                            <motion.div variants={fadeIn("up", 0.5, 0.3)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.7 }} className="max-w-full mt-2 ml-[40%] bg-white shadow-lg rounded-lg p-4 relative">
                                <div className="flex items-start">
                                    <div className="w-[25px] h-[25px] relative">
                                        <Image
                                            src='/o.png'
                                            alt="image"
                                            layout="fill"
                                            className="object-cover p-[2px]"
                                        />
                                    </div>
                                    <div className="flex-1 ml-4">
                                        <div className="flex justify-between items-center">
                                            <h3 className="text-md font-semibold">Like Officials</h3>
                                            <span className="text-sm text-gray-500">2:46 PM</span>
                                        </div>
                                        <p className="text-gray-700 mt-2">
                                            Hey there! Will deliver you on time
                                        </p>
                                    </div>
                                </div>
                            </motion.div></div>
                        {/* Background messages */}


                        <div className="px-4 py-6 sm:px-6 md:px-8 lg:px-12">
                            <h2 className="text-base sm:text-md md:text-lg lg:text-xl xl:text-2xl  lg:mt-12 font-bold text-center text-gray-800 mb-4">
                                Expert Development Team
                            </h2>
                            <p className="text-sm sm:text-xs md:text-base lg:text-md xl:text-lg text-gray-600 max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl mx-auto text-center">
                                We bring together a team of skilled developers specializing in WordPress, Shopify, and custom web solutions to deliver high-quality, tailored websites that meet your business needs.
                            </p>
                        </div>

                    </div>


                </div>

                <div className="w-full flex flex-col lg:flex-row gap-3 my-10">
                    <div className="lg:w-[70%] w-full  rounded-4xl overflow-hidden border-2 border-gray-300 shadow-lg  items-center bg-white relative">
                        <div className="">
                            <div className=" hidden mt-[70px] rounded-4xl md:flex flex-col gap-12">
                                <div className="absolute top-0 left-0 h-full w-40 opacity-60 bg-gradient-to-r from-white to-transparent pointer-events-none z-10"></div>
                                <div className="absolute top-0 right-0 h-full w-40 bg-gradient-to-l from-white to-transparent pointer-events-none z-10"></div>
                                <motion.div variants={fadeIn("up", 0.3, 0.5)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{ once: false, amount: 0.7 }}> <Marquee
                                        velocity={29}
                                        resetAfterTries={200}
                                        scatterRandomly={false}
                                        direction="ltr"
                                        onInit={() => console.log('Marquee initialized')}
                                        onFinish={() => console.log('Marquee finished')}
                                    >
                                        {[
                                            { role: 'UI/UX Designer', color: 'bg-yellow-200', avatar: '/yellow.png' },
                                            { role: 'Content Writer', color: 'bg-pink-100', avatar: '/beige.png' },
                                            { role: 'QA Engineer', color: 'bg-blue-400', avatar: '/blue1.png' },
                                            { role: 'Software Tester', color: 'bg-green-300', avatar: '/green.png' },
                                            { role: 'Project Manager', color: 'bg-blue-200', avatar: '/blue.png' },
                                            { role: 'DevOps Engineer', color: 'bg-orange-300', avatar: '/orange.png' },
                                            { role: 'Web Developer', color: 'bg-pink-200', avatar: '/pink.png' },
                                        ].map((item, index) => (
                                            <div
                                                key={index}
                                                className={`flex items-center gap-3 p-2 ${item.color} shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 ease-in-out mx-2`}
                                            >
                                                <div className=" md:w-13 md:h-13 lg:w-16 lg:h-16 relative">
                                                    <Image
                                                        src={item.avatar}
                                                        alt={item.role}
                                                        layout="fill"
                                                        className="object-cover rounded-full border-2 border-black"
                                                    />
                                                </div>

                                                <span className="text-lg font-semibold text-gray-800">{item.role}</span>
                                            </div>
                                        ))}
                                    </Marquee></motion.div>
                                <motion.div variants={fadeIn("up", 0.3, 0.5)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{ once: false, amount: 0.7 }}> <Marquee
                                        velocity={19}
                                        resetAfterTries={200}
                                        scatterRandomly={false}
                                        direction="rtl"
                                        onInit={() => console.log('Marquee initialized')}
                                        onFinish={() => console.log('Marquee finished')}
                                    >
                                        {[
                                            { role: 'Software Tester', color: 'bg-green-300', avatar: '/green.png' },
                                            { role: 'Project Manager', color: 'bg-blue-200', avatar: '/blue.png' },
                                            { role: 'DevOps Engineer', color: 'bg-orange-300', avatar: '/orange.png' },
                                            { role: 'Web Developer', color: 'bg-pink-200', avatar: '/pink.png' },
                                            { role: 'UI/UX Designer', color: 'bg-yellow-200', avatar: '/yellow.png' },
                                            { role: 'Content Writer', color: 'bg-pink-100', avatar: '/beige.png' },
                                            { role: 'QA Engineer', color: 'bg-blue-400', avatar: '/blue1.png' },
                                        ].map((item, index) => (
                                            <div
                                                key={index}
                                                className={`flex items-center gap-4 p-3 ${item.color} shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 ease-in-out mx-2`}
                                            >
                                                <div className=" md:w-13 md:h-13 lg:w-16 lg:h-16 relative">
                                                    <Image
                                                        src={item.avatar}
                                                        alt={item.role}
                                                        layout="fill"
                                                        className="object-cover rounded-full border-2 border-black"
                                                    />
                                                </div>
                                                <span className="text-lg font-semibold text-gray-800">{item.role}</span>
                                            </div>
                                        ))}
                                    </Marquee>
                                </motion.div>


                            </div>


                        </div>


                        <div className="px-4 py-6 sm:px-6 md:px-8 lg:px-12">
                            <h2 className="text-base sm:text-md md:text-lg lg:text-xl xl:text-2xl  lg:mt-12 font-bold text-center text-gray-800 mb-4">
                                Expert Development Team
                            </h2>
                            <p className="text-sm sm:text-xs md:text-base lg:text-md xl:text-lg text-gray-600 max-w-sm md:max-w-md lg:max-w-lg xl:max-w-2xl mx-auto text-center">
                                We bring together a team of skilled developers specializing in WordPress, Shopify, and custom web solutions to deliver high-quality, tailored websites that meet your business needs.
                            </p>
                        </div>

                    </div>


                    <div className="lg:w-[30%] w-full rounded-4xl overflow-hidden  overflow-hidden border-2 border-gray-300 shadow-lg p-6 flex gap-7 lg:flex-col items-center justify-center bg-white relative">
                        <motion.div variants={fadeIn("down", 0.3, 0.5)}
                            initial="hidden"
                            whileInView={"show"}
                            viewport={{ once: false, amount: 0.7 }} className="bg-white p-6  shadow-2xl lg:ml-12 hidden md:block rounded-lg ">
                            <motion.div variants={fadeIn("left", 0.3, 0.5)}
                                initial="hidden"
                                whileInView={"show"}
                                viewport={{ once: false, amount: 0.7 }} className=" text-base sm:text-md md:text-lg lg:text-lg xl:text-xl font-bold mb-4 text-red-500">
                                Say no to
                            </motion.div>
                            <ul className="space-y-4">
                                <motion.div variants={fadeIn("left", 0.3, 0.5)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{ once: false, amount: 0.7 }} className="flex items-start">
                                    <span className="w-6 h-6 mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 467.36">
                                            <g fill-rule="nonzero">
                                                <path fill="#333" d="M58.328 0h281.808c-12.342 13.848-23.286 27.376-32.931 40.444H58.328c-4.93 0-9.416 2.01-12.656 5.227a17.946 17.946 0 00-5.228 12.657v350.705c0 4.869 2.041 9.331 5.289 12.58 3.263 3.263 7.749 5.303 12.595 5.303h395.345c4.822 0 9.293-2.055 12.564-5.326 3.271-3.271 5.319-7.735 5.319-12.557V173.301A949.318 949.318 0 00512 155.387v253.646c0 15.988-6.595 30.585-17.164 41.155-10.562 10.562-25.175 17.172-41.163 17.172H58.328c-15.996 0-30.624-6.58-41.194-17.149C6.596 439.672 0 425.082 0 409.033V58.328c0-16.012 6.565-30.57 17.112-41.132l.084-.084C27.758 6.565 42.332 0 58.328 0z" />
                                                <path fill="#E60000" d="M133.575 346.12c18.954-37.249 49.386-79.673 85.902-120.988-33.864-33.099-68.76-63.815-101.133-89.447-4.792-3.783-5.61-10.761-1.826-15.553a10.965 10.965 0 016.572-3.997c25.946-5.128 46.451-2.69 64.755 5.327 17.86 7.833 32.992 20.78 48.843 37.127 6.832 7.054 14.49 15.285 22.629 24.334a903.03 903.03 0 0118.495-17.845c57.166-53.589 121.141-99.314 177.703-120.56 5.732-2.156 12.136.733 14.291 6.465a11.11 11.11 0 01-2.889 12.098c-23.515 25.091-50.562 51.511-78.786 79.077-29.148 28.476-59.565 58.197-87.904 88.118a1859.92 1859.92 0 0119.779 24.127c26.099 32.404 49.929 64.319 62.668 85.496 3.141 5.251 1.43 12.068-3.821 15.209a11.03 11.03 0 01-7.482 1.421l-34.888-4.425a11.052 11.052 0 01-7.451-4.318c-19.359-25.663-41.614-51.793-65.305-77.303-25.518 29.569-47.513 58.87-62.73 86.895-2.063 3.798-6.037 5.9-10.088 5.777l-47.62-.932c-6.114-.092-10.99-5.136-10.898-11.25a11.256 11.256 0 011.184-4.853z" />
                                            </g>
                                        </svg>
                                    </span>
                                    Endless meetings                                </motion.div >
                                <motion.div variants={fadeIn("right", 0.4, 0.5)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{ once: false, amount: 0.7 }} className="flex items-start">
                                    <span className="w-6 h-6 mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 467.36">
                                            <g fill-rule="nonzero">
                                                <path fill="#333" d="M58.328 0h281.808c-12.342 13.848-23.286 27.376-32.931 40.444H58.328c-4.93 0-9.416 2.01-12.656 5.227a17.946 17.946 0 00-5.228 12.657v350.705c0 4.869 2.041 9.331 5.289 12.58 3.263 3.263 7.749 5.303 12.595 5.303h395.345c4.822 0 9.293-2.055 12.564-5.326 3.271-3.271 5.319-7.735 5.319-12.557V173.301A949.318 949.318 0 00512 155.387v253.646c0 15.988-6.595 30.585-17.164 41.155-10.562 10.562-25.175 17.172-41.163 17.172H58.328c-15.996 0-30.624-6.58-41.194-17.149C6.596 439.672 0 425.082 0 409.033V58.328c0-16.012 6.565-30.57 17.112-41.132l.084-.084C27.758 6.565 42.332 0 58.328 0z" />
                                                <path fill="#E60000" d="M133.575 346.12c18.954-37.249 49.386-79.673 85.902-120.988-33.864-33.099-68.76-63.815-101.133-89.447-4.792-3.783-5.61-10.761-1.826-15.553a10.965 10.965 0 016.572-3.997c25.946-5.128 46.451-2.69 64.755 5.327 17.86 7.833 32.992 20.78 48.843 37.127 6.832 7.054 14.49 15.285 22.629 24.334a903.03 903.03 0 0118.495-17.845c57.166-53.589 121.141-99.314 177.703-120.56 5.732-2.156 12.136.733 14.291 6.465a11.11 11.11 0 01-2.889 12.098c-23.515 25.091-50.562 51.511-78.786 79.077-29.148 28.476-59.565 58.197-87.904 88.118a1859.92 1859.92 0 0119.779 24.127c26.099 32.404 49.929 64.319 62.668 85.496 3.141 5.251 1.43 12.068-3.821 15.209a11.03 11.03 0 01-7.482 1.421l-34.888-4.425a11.052 11.052 0 01-7.451-4.318c-19.359-25.663-41.614-51.793-65.305-77.303-25.518 29.569-47.513 58.87-62.73 86.895-2.063 3.798-6.037 5.9-10.088 5.777l-47.62-.932c-6.114-.092-10.99-5.136-10.898-11.25a11.256 11.256 0 011.184-4.853z" />
                                            </g>
                                        </svg>
                                    </span>
                                    Micromanagement
                                </motion.div>
                                <motion.div variants={fadeIn("left", 0.5, 0.5)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{ once: false, amount: 0.7 }} className="flex items-start">
                                    <span className="w-6 h-6 mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 467.36">
                                            <g fill-rule="nonzero">
                                                <path fill="#333" d="M58.328 0h281.808c-12.342 13.848-23.286 27.376-32.931 40.444H58.328c-4.93 0-9.416 2.01-12.656 5.227a17.946 17.946 0 00-5.228 12.657v350.705c0 4.869 2.041 9.331 5.289 12.58 3.263 3.263 7.749 5.303 12.595 5.303h395.345c4.822 0 9.293-2.055 12.564-5.326 3.271-3.271 5.319-7.735 5.319-12.557V173.301A949.318 949.318 0 00512 155.387v253.646c0 15.988-6.595 30.585-17.164 41.155-10.562 10.562-25.175 17.172-41.163 17.172H58.328c-15.996 0-30.624-6.58-41.194-17.149C6.596 439.672 0 425.082 0 409.033V58.328c0-16.012 6.565-30.57 17.112-41.132l.084-.084C27.758 6.565 42.332 0 58.328 0z" />
                                                <path fill="#E60000" d="M133.575 346.12c18.954-37.249 49.386-79.673 85.902-120.988-33.864-33.099-68.76-63.815-101.133-89.447-4.792-3.783-5.61-10.761-1.826-15.553a10.965 10.965 0 016.572-3.997c25.946-5.128 46.451-2.69 64.755 5.327 17.86 7.833 32.992 20.78 48.843 37.127 6.832 7.054 14.49 15.285 22.629 24.334a903.03 903.03 0 0118.495-17.845c57.166-53.589 121.141-99.314 177.703-120.56 5.732-2.156 12.136.733 14.291 6.465a11.11 11.11 0 01-2.889 12.098c-23.515 25.091-50.562 51.511-78.786 79.077-29.148 28.476-59.565 58.197-87.904 88.118a1859.92 1859.92 0 0119.779 24.127c26.099 32.404 49.929 64.319 62.668 85.496 3.141 5.251 1.43 12.068-3.821 15.209a11.03 11.03 0 01-7.482 1.421l-34.888-4.425a11.052 11.052 0 01-7.451-4.318c-19.359-25.663-41.614-51.793-65.305-77.303-25.518 29.569-47.513 58.87-62.73 86.895-2.063 3.798-6.037 5.9-10.088 5.777l-47.62-.932c-6.114-.092-10.99-5.136-10.898-11.25a11.256 11.256 0 011.184-4.853z" />
                                            </g>
                                        </svg>
                                    </span>
                                    High cost hiring
                                </motion.div>
                                <motion.div variants={fadeIn("right", 0.7, 0.5)}
                                    initial="hidden"
                                    whileInView={"show"}
                                    viewport={{ once: false, amount: 0.7 }} className="flex items-start">
                                    <span className="w-6 h-6 mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 467.36">
                                            <g fill-rule="nonzero">
                                                <path fill="#333" d="M58.328 0h281.808c-12.342 13.848-23.286 27.376-32.931 40.444H58.328c-4.93 0-9.416 2.01-12.656 5.227a17.946 17.946 0 00-5.228 12.657v350.705c0 4.869 2.041 9.331 5.289 12.58 3.263 3.263 7.749 5.303 12.595 5.303h395.345c4.822 0 9.293-2.055 12.564-5.326 3.271-3.271 5.319-7.735 5.319-12.557V173.301A949.318 949.318 0 00512 155.387v253.646c0 15.988-6.595 30.585-17.164 41.155-10.562 10.562-25.175 17.172-41.163 17.172H58.328c-15.996 0-30.624-6.58-41.194-17.149C6.596 439.672 0 425.082 0 409.033V58.328c0-16.012 6.565-30.57 17.112-41.132l.084-.084C27.758 6.565 42.332 0 58.328 0z" />
                                                <path fill="#E60000" d="M133.575 346.12c18.954-37.249 49.386-79.673 85.902-120.988-33.864-33.099-68.76-63.815-101.133-89.447-4.792-3.783-5.61-10.761-1.826-15.553a10.965 10.965 0 016.572-3.997c25.946-5.128 46.451-2.69 64.755 5.327 17.86 7.833 32.992 20.78 48.843 37.127 6.832 7.054 14.49 15.285 22.629 24.334a903.03 903.03 0 0118.495-17.845c57.166-53.589 121.141-99.314 177.703-120.56 5.732-2.156 12.136.733 14.291 6.465a11.11 11.11 0 01-2.889 12.098c-23.515 25.091-50.562 51.511-78.786 79.077-29.148 28.476-59.565 58.197-87.904 88.118a1859.92 1859.92 0 0119.779 24.127c26.099 32.404 49.929 64.319 62.668 85.496 3.141 5.251 1.43 12.068-3.821 15.209a11.03 11.03 0 01-7.482 1.421l-34.888-4.425a11.052 11.052 0 01-7.451-4.318c-19.359-25.663-41.614-51.793-65.305-77.303-25.518 29.569-47.513 58.87-62.73 86.895-2.063 3.798-6.037 5.9-10.088 5.777l-47.62-.932c-6.114-.092-10.99-5.136-10.898-11.25a11.256 11.256 0 011.184-4.853z" />
                                            </g>
                                        </svg>
                                    </span>
                                    Long-term contracts                                </motion.div>
                            </ul>
                        </motion.div>


                        <div className='py-6'><h2 className=" text-base sm:text-sm md:text-md lg:text-lg xl:text-xl 2xl:text-2xl lg:mt-[12%] font-bold text-center text-gray-800 mb-2 ">Flexible & Scalable</h2>
                            <p className="text-sm sm:text-xs md:text-base lg:text-md xl:text-lg  text-gray-600 max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto text-center">
                                Stay in the loop with real-time updates and direct collaboration, ensuring your project runs smoothly
                                from start to finish.
                            </p></div>
                    </div>






                </div>
            </Container>

        </>)
}

export default WorkUs