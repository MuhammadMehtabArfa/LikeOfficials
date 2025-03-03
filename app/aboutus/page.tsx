import React from 'react'

type Props = {}

const page = (props: Props) => {
    return (
        <>
            <div className="bg-white">
                <header className="bg-black text-white text-center py-12">
                    <h1 className="text-4xl font-bold mt-4">About Us</h1>
                </header>

                <section className="text-center py-12 px-4">
                    <h2 className="text-2xl font-bold">Development Partner for Startups, Agencies & Brands</h2>
                    <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
                        Get a stunning, high-performing website from a top-tier dev team with flexible, project-based pricing. We'll handle everything from concept to launch.
                    </p>
                    <div className="flex justify-center space-x-8 mt-8">
                        <a href="#" className="bg-black text-white px-6 py-3 rounded-lg">View Packages</a>
                        <a href="#" className="bg-gray-700 text-white px-6 py-3 rounded-lg">Book a Call</a>
                    </div>
                </section>

                <section className="bg-gray-100 py-12 px-4">
                    <h2 className="text-2xl font-bold text-center">How We Work</h2>
                    <p className="mt-4 text-center max-w-2xl mx-auto">
                        We streamline the development workflow by breaking projects into bite-sized tasks for seamless execution.
                    </p>
                    <ul className="mt-8 max-w-3xl mx-auto text-gray-700 text-left">
                        <li>- Flexible requests</li>
                        <li>- One or two tasks at a time</li>
                        <li>- 48-hour turnaround for small updates</li>
                    </ul>
                </section>

                <section className="text-center py-12 px-4">
                    <h2 className="text-2xl font-bold">Why Work With Us?</h2>
                    <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
                        Fast turnarounds, efficient communication, and expert developers specializing in WordPress, Shopify, and custom web solutions.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-8">
                        <div className="p-4 shadow-lg rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors">
                            <h3 className="text-xl font-bold">No Endless Meetings</h3>
                        </div>
                        <div className="p-4 shadow-lg rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors">
                            <h3 className="text-xl font-bold">No Long-Term Contracts</h3>
                        </div>
                        <div className="p-4 shadow-lg rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors">
                            <h3 className="text-xl font-bold">Scalable Solutions</h3>
                        </div>
                        <div className="p-4 shadow-lg rounded-lg bg-gray-200 hover:bg-gray-300 transition-colors">
                            <h3 className="text-xl font-bold">Transparent Pricing</h3>
                        </div>
                    </div>
                </section>

                <section className="bg-black text-white py-12 px-4">
                    <h2 className="text-2xl font-bold text-center">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8 max-w-5xl mx-auto">
                        <div className="p-4 shadow-lg rounded-lg bg-gray-800">
                            <h3 className="text-xl font-bold">Web Development</h3>
                            <p className="mt-2">Custom, high-performing websites using WordPress, Shopify, or modern tech stacks.</p>
                        </div>
                        <div className="p-4 shadow-lg rounded-lg bg-gray-800">
                            <h3 className="text-xl font-bold">E-Commerce Solutions</h3>
                            <p className="mt-2">Launch or scale your store with optimized Shopify or WooCommerce development.</p>
                        </div>
                        <div className="p-4 shadow-lg rounded-lg bg-gray-800">
                            <h3 className="text-xl font-bold">Custom Web Apps</h3>
                            <p className="mt-2">Scalable, fully customized web applications using the latest technologies like React and Node.js.</p>
                        </div>
                        <div className="p-4 shadow-lg rounded-lg bg-gray-800">
                            <h3 className="text-xl font-bold">UI/UX Design</h3>
                            <p className="mt-2">Create intuitive interfaces to enhance customer engagement and conversions.</p>
                        </div>
                    </div>
                </section>

                <footer className="bg-black text-white text-center py-8">
                    <p>&copy; 2025 Like Officials. All rights reserved.</p>
                </footer>
            </div>

        </>
    )
}

export default page