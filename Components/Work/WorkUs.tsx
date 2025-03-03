'use client'
import React from 'react'
import Container from '../shared/Container'
import Marquee from 'react-marquee-slider'
import Image from 'next/image'
import FolderAnimation from '../shared/FolderAnimation'
type Props = {}

const WorkUs = (props: Props) => {
    return (
        <>
            <Container>
                <div className="w-full flex gap-3 my-10">
                    <div className="w-[30%] rounded-xl border-2 border-gray-300 shadow-lg p-6 bg-white relative">

                        <FolderAnimation />

                        <h2 className="text-2xl mt-[12%] font-bold text-center text-gray-800 mb-2">Fast TurnAround</h2>
                        <p className="text-gray-600 max-w-sm mx-auto text-center">
                            Stay in the loop with real-time updates and direct collaboration, ensuring your project runs smoothly
                            from start to finish.
                        </p>
                    </div>

                    <div className="w-[70%] rounded-xl border-2 border-gray-300 shadow-lg p-6 bg-white relative">
                        {/* Background messages */}
                        <div className="absolute inset-0 pointer-events-none">
                            <div className="text-gray-400 text-sm opacity-50 absolute top-5 left-5">
                                <div className="flex items-start">
                                    <div className="w-[25px] h-[25px] relative">
                                        <Image
                                            src='/bg1.png'
                                            alt="image"
                                            layout="fill"
                                            className="object-cover p-[2px]"
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
                            </div>

                            <div className="text-gray-400 text-sm opacity-50 absolute top-1/2 left-5">
                                <div className="flex items-start">
                                    <div className="w-[25px] h-[25px] relative">
                                        <Image
                                            src='/bg2.png'
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
                            </div>
                        </div>

                        <span>
                            <div className="max-w-md mt-2  bg-white shadow-lg rounded-lg p-4 relative">
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
                                            <h3 className="text-md font-semibold">Jhon</h3>
                                            <span className="text-sm text-gray-500">2:46 PM</span>
                                        </div>
                                        <p className="text-gray-700 mt-2">
                                            Hey there! Any Update
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </span>
                        <div className="max-w-md mt-2 ml-[40%] bg-white shadow-lg rounded-lg p-4 relative">
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
                        </div>

                        <h2 className="text-2xl mt-[12%] font-bold text-center text-gray-800 mb-2 ">Efficient Communication</h2>
                        <p className="text-gray-600 max-w-sm mx-auto text-center">
                            Stay in the loop with real-time updates and direct collaboration, ensuring your project runs smoothly
                            from start to finish.
                        </p>
                    </div>


                </div>

                <div className="w-full flex gap-3 my-10">
                    <div className="w-[70%] rounded-xl border-2 border-gray-300 shadow-lg  bg-white relative">
                        <div className="">
                            <div className="">
                                <Marquee
                                    velocity={12}
                                    resetAfterTries={200}
                                    scatterRandomly={false}
                                    direction="ltr"
                                    onInit={() => console.log('Marquee initialized')}
                                    onFinish={() => console.log('Marquee finished')}
                                >
                                    {[
                                        { role: 'Web Developer' },
                                        { role: 'UI/UX Designer' },
                                        { role: 'Content Writer' },
                                        { role: 'QA Engineer' },
                                        { role: 'Software Tester' },
                                        { role: 'Project Manager' },
                                        { role: 'DevOps Engineer' },
                                        { role: 'Data Analyst' },
                                    ].map((item, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-4 p-4 bg-white shadow-lg rounded-lg border border-gray-200 hover:shadow-xl transition-shadow duration-300 ease-in-out mx-2"
                                        >
                                            <div className="w-10 h-10 relative">
                                                <Image
                                                    src='/o.png'
                                                    alt={item.role}
                                                    layout="fill"
                                                    className="object-cover rounded-full border-2 border-gray-300"
                                                />
                                            </div>
                                            <span className="text-lg font-semibold text-gray-800">{item.role}</span>
                                        </div>
                                    ))}
                                </Marquee>
                            </div>


                        </div>

                        <span><h2 className="text-2xl mt-[12%] font-bold text-center text-gray-800 mb-2 ">Expert Development Team</h2>
                            <p className="text-gray-600 max-w-sm mx-auto text-center">
                                We bring together a team of skilled developers specializing in WordPress, Shopify, and custom web
                                solutions to deliver high-quality, tailored websites that meet your business needs.
                            </p></span>
                    </div>


                    <div className="w-[30%] rounded-xl border-2 border-gray-300 shadow-lg  bg-white relative">
                        <div className="bg-white p-6 shadow-2xl ml-12 rounded-lg max-w-lg">
                            <div className="text-2xl font-bold mb-4 text-red-500">
                                Say no to
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className="w-6 h-6 mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 467.36">
                                            <g fill-rule="nonzero">
                                                <path fill="#333" d="M58.328 0h281.808c-12.342 13.848-23.286 27.376-32.931 40.444H58.328c-4.93 0-9.416 2.01-12.656 5.227a17.946 17.946 0 00-5.228 12.657v350.705c0 4.869 2.041 9.331 5.289 12.58 3.263 3.263 7.749 5.303 12.595 5.303h395.345c4.822 0 9.293-2.055 12.564-5.326 3.271-3.271 5.319-7.735 5.319-12.557V173.301A949.318 949.318 0 00512 155.387v253.646c0 15.988-6.595 30.585-17.164 41.155-10.562 10.562-25.175 17.172-41.163 17.172H58.328c-15.996 0-30.624-6.58-41.194-17.149C6.596 439.672 0 425.082 0 409.033V58.328c0-16.012 6.565-30.57 17.112-41.132l.084-.084C27.758 6.565 42.332 0 58.328 0z" />
                                                <path fill="#E60000" d="M133.575 346.12c18.954-37.249 49.386-79.673 85.902-120.988-33.864-33.099-68.76-63.815-101.133-89.447-4.792-3.783-5.61-10.761-1.826-15.553a10.965 10.965 0 016.572-3.997c25.946-5.128 46.451-2.69 64.755 5.327 17.86 7.833 32.992 20.78 48.843 37.127 6.832 7.054 14.49 15.285 22.629 24.334a903.03 903.03 0 0118.495-17.845c57.166-53.589 121.141-99.314 177.703-120.56 5.732-2.156 12.136.733 14.291 6.465a11.11 11.11 0 01-2.889 12.098c-23.515 25.091-50.562 51.511-78.786 79.077-29.148 28.476-59.565 58.197-87.904 88.118a1859.92 1859.92 0 0119.779 24.127c26.099 32.404 49.929 64.319 62.668 85.496 3.141 5.251 1.43 12.068-3.821 15.209a11.03 11.03 0 01-7.482 1.421l-34.888-4.425a11.052 11.052 0 01-7.451-4.318c-19.359-25.663-41.614-51.793-65.305-77.303-25.518 29.569-47.513 58.87-62.73 86.895-2.063 3.798-6.037 5.9-10.088 5.777l-47.62-.932c-6.114-.092-10.99-5.136-10.898-11.25a11.256 11.256 0 011.184-4.853z" />
                                            </g>
                                        </svg>
                                    </span>
                                    Endless meetings                                </li>
                                <li className="flex items-start">
                                    <span className="w-6 h-6 mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 467.36">
                                            <g fill-rule="nonzero">
                                                <path fill="#333" d="M58.328 0h281.808c-12.342 13.848-23.286 27.376-32.931 40.444H58.328c-4.93 0-9.416 2.01-12.656 5.227a17.946 17.946 0 00-5.228 12.657v350.705c0 4.869 2.041 9.331 5.289 12.58 3.263 3.263 7.749 5.303 12.595 5.303h395.345c4.822 0 9.293-2.055 12.564-5.326 3.271-3.271 5.319-7.735 5.319-12.557V173.301A949.318 949.318 0 00512 155.387v253.646c0 15.988-6.595 30.585-17.164 41.155-10.562 10.562-25.175 17.172-41.163 17.172H58.328c-15.996 0-30.624-6.58-41.194-17.149C6.596 439.672 0 425.082 0 409.033V58.328c0-16.012 6.565-30.57 17.112-41.132l.084-.084C27.758 6.565 42.332 0 58.328 0z" />
                                                <path fill="#E60000" d="M133.575 346.12c18.954-37.249 49.386-79.673 85.902-120.988-33.864-33.099-68.76-63.815-101.133-89.447-4.792-3.783-5.61-10.761-1.826-15.553a10.965 10.965 0 016.572-3.997c25.946-5.128 46.451-2.69 64.755 5.327 17.86 7.833 32.992 20.78 48.843 37.127 6.832 7.054 14.49 15.285 22.629 24.334a903.03 903.03 0 0118.495-17.845c57.166-53.589 121.141-99.314 177.703-120.56 5.732-2.156 12.136.733 14.291 6.465a11.11 11.11 0 01-2.889 12.098c-23.515 25.091-50.562 51.511-78.786 79.077-29.148 28.476-59.565 58.197-87.904 88.118a1859.92 1859.92 0 0119.779 24.127c26.099 32.404 49.929 64.319 62.668 85.496 3.141 5.251 1.43 12.068-3.821 15.209a11.03 11.03 0 01-7.482 1.421l-34.888-4.425a11.052 11.052 0 01-7.451-4.318c-19.359-25.663-41.614-51.793-65.305-77.303-25.518 29.569-47.513 58.87-62.73 86.895-2.063 3.798-6.037 5.9-10.088 5.777l-47.62-.932c-6.114-.092-10.99-5.136-10.898-11.25a11.256 11.256 0 011.184-4.853z" />
                                            </g>
                                        </svg>
                                    </span>
                                    Micromanagement
                                </li>
                                <li className="flex items-start">
                                    <span className="w-6 h-6 mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 467.36">
                                            <g fill-rule="nonzero">
                                                <path fill="#333" d="M58.328 0h281.808c-12.342 13.848-23.286 27.376-32.931 40.444H58.328c-4.93 0-9.416 2.01-12.656 5.227a17.946 17.946 0 00-5.228 12.657v350.705c0 4.869 2.041 9.331 5.289 12.58 3.263 3.263 7.749 5.303 12.595 5.303h395.345c4.822 0 9.293-2.055 12.564-5.326 3.271-3.271 5.319-7.735 5.319-12.557V173.301A949.318 949.318 0 00512 155.387v253.646c0 15.988-6.595 30.585-17.164 41.155-10.562 10.562-25.175 17.172-41.163 17.172H58.328c-15.996 0-30.624-6.58-41.194-17.149C6.596 439.672 0 425.082 0 409.033V58.328c0-16.012 6.565-30.57 17.112-41.132l.084-.084C27.758 6.565 42.332 0 58.328 0z" />
                                                <path fill="#E60000" d="M133.575 346.12c18.954-37.249 49.386-79.673 85.902-120.988-33.864-33.099-68.76-63.815-101.133-89.447-4.792-3.783-5.61-10.761-1.826-15.553a10.965 10.965 0 016.572-3.997c25.946-5.128 46.451-2.69 64.755 5.327 17.86 7.833 32.992 20.78 48.843 37.127 6.832 7.054 14.49 15.285 22.629 24.334a903.03 903.03 0 0118.495-17.845c57.166-53.589 121.141-99.314 177.703-120.56 5.732-2.156 12.136.733 14.291 6.465a11.11 11.11 0 01-2.889 12.098c-23.515 25.091-50.562 51.511-78.786 79.077-29.148 28.476-59.565 58.197-87.904 88.118a1859.92 1859.92 0 0119.779 24.127c26.099 32.404 49.929 64.319 62.668 85.496 3.141 5.251 1.43 12.068-3.821 15.209a11.03 11.03 0 01-7.482 1.421l-34.888-4.425a11.052 11.052 0 01-7.451-4.318c-19.359-25.663-41.614-51.793-65.305-77.303-25.518 29.569-47.513 58.87-62.73 86.895-2.063 3.798-6.037 5.9-10.088 5.777l-47.62-.932c-6.114-.092-10.99-5.136-10.898-11.25a11.256 11.256 0 011.184-4.853z" />
                                            </g>
                                        </svg>
                                    </span>
                                    High cost hiring
                                </li>
                                <li className="flex items-start">
                                    <span className="w-6 h-6 mr-3">
                                        <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 467.36">
                                            <g fill-rule="nonzero">
                                                <path fill="#333" d="M58.328 0h281.808c-12.342 13.848-23.286 27.376-32.931 40.444H58.328c-4.93 0-9.416 2.01-12.656 5.227a17.946 17.946 0 00-5.228 12.657v350.705c0 4.869 2.041 9.331 5.289 12.58 3.263 3.263 7.749 5.303 12.595 5.303h395.345c4.822 0 9.293-2.055 12.564-5.326 3.271-3.271 5.319-7.735 5.319-12.557V173.301A949.318 949.318 0 00512 155.387v253.646c0 15.988-6.595 30.585-17.164 41.155-10.562 10.562-25.175 17.172-41.163 17.172H58.328c-15.996 0-30.624-6.58-41.194-17.149C6.596 439.672 0 425.082 0 409.033V58.328c0-16.012 6.565-30.57 17.112-41.132l.084-.084C27.758 6.565 42.332 0 58.328 0z" />
                                                <path fill="#E60000" d="M133.575 346.12c18.954-37.249 49.386-79.673 85.902-120.988-33.864-33.099-68.76-63.815-101.133-89.447-4.792-3.783-5.61-10.761-1.826-15.553a10.965 10.965 0 016.572-3.997c25.946-5.128 46.451-2.69 64.755 5.327 17.86 7.833 32.992 20.78 48.843 37.127 6.832 7.054 14.49 15.285 22.629 24.334a903.03 903.03 0 0118.495-17.845c57.166-53.589 121.141-99.314 177.703-120.56 5.732-2.156 12.136.733 14.291 6.465a11.11 11.11 0 01-2.889 12.098c-23.515 25.091-50.562 51.511-78.786 79.077-29.148 28.476-59.565 58.197-87.904 88.118a1859.92 1859.92 0 0119.779 24.127c26.099 32.404 49.929 64.319 62.668 85.496 3.141 5.251 1.43 12.068-3.821 15.209a11.03 11.03 0 01-7.482 1.421l-34.888-4.425a11.052 11.052 0 01-7.451-4.318c-19.359-25.663-41.614-51.793-65.305-77.303-25.518 29.569-47.513 58.87-62.73 86.895-2.063 3.798-6.037 5.9-10.088 5.777l-47.62-.932c-6.114-.092-10.99-5.136-10.898-11.25a11.256 11.256 0 011.184-4.853z" />
                                            </g>
                                        </svg>
                                    </span>
                                    Long-term contracts                                </li>
                            </ul>
                        </div>


                        <div className='p-6'><h2 className="text-2xl mt-[12%] font-bold text-center text-gray-800 mb-2 ">Flexible & Scalable</h2>
                            <p className="text-gray-600  max-w-sm mx-auto text-center">
                                Stay in the loop with real-time updates and direct collaboration, ensuring your project runs smoothly
                                from start to finish.
                            </p></div>
                    </div>






                </div>
            </Container>

        </>)
}

export default WorkUs