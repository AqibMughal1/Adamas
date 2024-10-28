import React from 'react';
import map from '../assets/images/Layer 36.png'

const Contact = () => {
    return (
        <>
            <div className="contact-page py-8 px-4">

                <div className="container mx-auto">
                    <h1 className="text-2xl font-bold text-center mb-8">Drop us a Note</h1>
                </div>
                <div className="mb-8">
                    <img
                        src={map}
                        alt="Map placeholder"
                        className="w-full object-cover"
                    />
                </div>
            </div>
            <div className="container mx-auto p-8 max-w-6xl mb-12">
                <div className="flex flex-col md:flex-row gap-8">
                    <div className="w-full md:w-2/3">
                        <form className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                    Your Name (required)
                                </label>
                                <input
                                    id="name"
                                    type="text"
                                    required
                                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                    Your Email (required)
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    required
                                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="website" className="block text-sm font-medium text-gray-700">
                                    Your Website
                                </label>
                                <input
                                    id="website"
                                    type="url"
                                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                                    Your Message (required)
                                </label>
                                <textarea
                                    id="message"
                                    required
                                    className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 h-40"
                                ></textarea>
                            </div>
                            <div className="flex justify-end gap-4">
                                <button
                                    type="button"
                                    className="px-4 py-2 border border-[#68C9FD] rounded-md text-white bg-[#68C9FD] hover:bg-[#5AB8EC] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#68C9FD]"
                                >
                                    CLEAR MESSAGE
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 border border-transparent rounded-md text-white bg-[#68C9FD] hover:bg-[#5AB8EC] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#68C9FD]"
                                >
                                    SEND MESSAGE
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="w-full md:w-1/3 space-y-6">
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Little about our Company</h2>
                            <p className="text-gray-600 mb-4">
                                Lorem ipsum <span className="font-bold">dolor sit amet</span>, consectetur vet adipiscing elit , sed diam nonummy nibh ase
                                euin mod tincidunt ut laoreet dolore mati magna aliquam <span className="text-blue-400">erat volutpat</span>. Iam nonunum
                                mmy nibh euin mod tincidunt ut laoreet.
                            </p>
                            <p className="text-gray-600">
                                Lorem ipsum <span className="font-bold">dolor sit amet</span>, consectetur vet adipiscing elit , sed diam nonummy nibh ase
                                euin mod tincidunt ut laoreet dolore mati magna aliquam <span className="text-blue-400">erat volutpat</span>. Iam nonunum
                                mmy nibh euin mod tincidunt ut laoreet.
                            </p>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
                            <div className="flex items-center gap-2">
                                <span className="text-blue-400">📍</span>
                                <span className="text-gray-600">
                                    <span className="font-bold">Address:</span> Celovska cesta 1, Ljubljana
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-blue-400">✉️</span>
                                <span className="text-gray-600">
                                    <span className="font-bold">Email:</span> info@premiumcoding.com
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-blue-400">📞</span>
                                <span className="text-gray-600">
                                    <span className="font-bold">Phone Number:</span> +456 789 854
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
