import Image from "next/image";

const Pricing = () => {
    return (
        <div>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
                rel="stylesheet"
            />
            <link
                href="https://fonts.googleapis.com/icon?family=Material+Icons"
                rel="stylesheet"
            />

            <body className="font-sans bg-gray-100">
                <div className="min-h-screen flex justify-center items-center">
                    <div className="">
                        <div className="text-center font-semibold">
                            <h1 className="text-5xl">
                                <span className="text-blue-700 tracking-wide">Flexible </span>
                                <span>Plans</span>
                            </h1>
                            <p className="pt-6 text-xl text-gray-400 font-normal w-full px-8 md:w-full">
                                Choose a plan that works best for you and
                                <br /> your team.
                            </p>
                        </div>
                        <div className="pt-24 flex flex-row">
                            {/* Basic Plan */}
                            <div className="w-96 p-8 bg-white text-center rounded-3xl pr-16 shadow-xl">
                                <h1 className="text-black font-semibold text-2xl">Basic</h1>
                                <p className="pt-2 tracking-wide">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-yellow-500 align-top">$ </span>
                                    <span className="text-3xl font-semibold">80 - 100</span>
                                    <span className="text-gray-400 font-medium">/ website</span>
                                </p>
                                <hr className="mt-4 border-1" />
                                <div className="pt-8">
                                    <p className="font-semibold text-gray-400 text-left">
                                        <span className="material-icons align-middle">done</span>
                                        <span className="pl-2">
                                            Ideal for small businesses or individuals needing a simple, responsive website setup.
                                        </span>
                                    </p>
                                    <p className="font-semibold text-gray-400 text-left pt-5">
                                        <span className="material-icons align-middle">done</span>
                                        <span className="pl-2">
                                            Single-page or basic multi-page site
                                        </span>
                                    </p>
                                    <p className="font-semibold text-gray-400 text-left pt-5">
                                        <span className="material-icons align-middle">done</span>
                                        <span className="pl-2">
                                            Functional & mobile-friendly design
                                        </span>
                                    </p>
                                    <p className="font-semibold text-gray-400 text-left pt-5">
                                        <span className="material-icons align-middle">done</span>
                                        <span className="pl-2">
                                            Content upload (if applicable)
                                        </span>
                                    </p>
                                    <p className="font-semibold text-gray-400 text-left pt-5">
                                        <span className="material-icons align-middle">done</span>
                                        <span className="pl-2">
                                            Limited revisions
                                        </span>
                                    </p>
                                    <p className="font-semibold text-gray-400 text-left pt-5">
                                        <span className="material-icons align-middle">done</span>
                                        <span className="pl-2">
                                            Delivery in 3-5 days
                                        </span>
                                    </p>
                                    <a href="#" className="">
                                        <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                                            <span className="font-medium">Get Started</span>
                                            <span className="pl-2 material-icons align-middle text-sm">
                                                east
                                            </span>
                                        </p>
                                    </a>
                                </div>
                            </div>

                            {/* Standard Plan */}
                            <div className="w-96 p-8 bg-white text-center rounded-3xl pr-16 shadow-xl">
                                <h1 className="text-black font-semibold text-2xl">Standard</h1>
                                <p className="pt-2 tracking-wide">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-green-500 align-top">$ </span>
                                    <span className="text-3xl font-semibold">250 - 300</span>
                                    <span className="text-gray-400 font-medium">/ website</span>
                                </p>
                                <hr className="mt-4 border-1" />
                                <div className="pt-8">
                                    <p className="font-semibold text-gray-400 text-left">
                                        <span className="material-icons align-middle">done</span>
                                        <span className="pl-2">
                                            Perfect for businesses needing a fully functional website with added features.
                                        </span>
                                    </p>
                                    <p className="font-semibold text-gray-400 text-left pt-5">
                                        <span className="material-icons align-middle">done</span>
                                        <span className="pl-2">
                                            3-5 pages with custom design
                                        </span>
                                    </p>
                                    <p className="font-semibold text-gray-400 text-left pt-5">
                                        <span className="material-icons align-middle">done</span>
                                        <span className="pl-2">
                                            E-commerce functionality (if applicable)
                                        </span>
                                    </p>
                                    <p className="font-semibold text-gray-400 text-left pt-5">
                                        <span className="material-icons align-middle">done</span>
                                        <span className="pl-2">
                                            Payment gateway integration
                                        </span>
                                    </p>
                                    <p className="font-semibold text-gray-400 text-left pt-5">
                                        <span className="material-icons align-middle">done</span>
                                        <span className="pl-2">
                                            Plugin & extension setup
                                        </span>
                                    </p>
                                    <p className="font-semibold text-gray-400 text-left pt-5">
                                        <span className="material-icons align-middle">done</span>
                                        <span className="pl-2">
                                            Unlimited revisions
                                        </span>
                                    </p>
                                    <p className="font-semibold text-gray-400 text-left pt-5">
                                        <span className="material-icons align-middle">done</span>
                                        <span className="pl-2">
                                            Delivery in 5-7 days
                                        </span>
                                    </p>
                                    <a href="#" className="">
                                        <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                                            <span className="font-medium">Get Started</span>
                                            <span className="pl-2 material-icons align-middle text-sm">
                                                east
                                            </span>
                                        </p>
                                    </a>
                                </div>
                            </div>

                            {/* Premium Plan */}
                            <div className="w-96 p-8 bg-white text-center rounded-3xl pr-16 shadow-xl">
                                <h1 className="text-black font-semibold text-2xl">Premium</h1>
                                <p className="pt-2 tracking-wide">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-500 align-top">$ </span>
                                    <span className="text-3xl font-semibold">450 - 600</span>
                                    <span className="text-gray-400 font-medium">/ website</span>
                                </p>
                                <hr className="mt-4 border-1" />
                                <div className="pt-8">
                                    <p className="font-semibold text-gray-400 text-left">
                                        <span className="material-icons align-middle">done</span>
                                        <span className="pl-2">
                                            Best for businesses requiring advanced features, branding, and seamless integrations.
                                        </span>
                                    </p>
                                    <p className="font-semibold text-gray-400 text-left pt-5">
                                        <span className="material-icons align-middle">done</span>
                                        <span className="pl-2">
                                            5-10 pages with custom assets
                                        </span>
                                    </p>
                                    <p className="font-semibold text-gray-400 text-left pt-5">
                                        <span className="material-icons align-middle">done</span>
                                        <span className="pl-2">
                                            Shopify/WordPress/WooCommerce setup
                                        </span>
                                    </p>
                                    <p className="font-semibold text-gray-400 text-left pt-5">
                                        <span className="material-icons align-middle">done</span>
                                        <span className="pl-2">
                                            Branding, SEO, and performance optimization
                                        </span>
                                    </p>
                                    <p className="font-semibold text-gray-400 text-left pt-5">
                                        <span className="material-icons align-middle">done</span>
                                        <span className="pl-2">
                                            Custom API integrations
                                        </span>
                                    </p>
                                    <p className="font-semibold text-gray-400 text-left pt-5">
                                        <span className="material-icons align-middle">done</span>
                                        <span className="pl-2">
                                            Ongoing support available
                                        </span>
                                    </p>
                                    <p className="font-semibold text-gray-400 text-left pt-5">
                                        <span className="material-icons align-middle">done</span>
                                        <span className="pl-2">
                                            Delivery in 7-14 days
                                        </span>
                                    </p>
                                    <a href="#" className="">
                                        <p className="w-full py-4 bg-blue-600 mt-8 rounded-xl text-white">
                                            <span className="font-medium">Get Started</span>
                                            <span className="pl-2 material-icons align-middle text-sm">
                                                east
                                            </span>
                                        </p>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        </div>
    );
};

export default Pricing;
