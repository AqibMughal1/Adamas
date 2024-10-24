import React from 'react';
import logoimage from '../assets/images/adamas-logo.png'
import Image8 from '../assets/images/silver-ring-small.png'
import Image9 from '../assets/images/photodune-2673587-ring-with-stone-xs.png'

const Footer = () => {
    return (
        <div className="bg-gray-50">
            {/* Twitter Announcement */}
            <div className="bg-gray-100 py-4 text-center">
                <div className="flex justify-between items-center max-w-6xl mx-auto px-4">
                    <p className="text-gray-400">
                        <i className="fi-xnsuxl-twitter text-[#68C9FD] mr-2 text-sm"></i>
                        Revenant was just released on #themeforest <a href="http://bit.ly/qxXj6m" className="text-blue-500">http://bit.ly/qxXj6m</a>
                    </p>
                    <p className="text-gray-400 text-sm">
                        Check the latest news on our Social Networks:
                        <i className="fi-xnsuxl-rss text-[] ml-2"></i>
                        <i className="fi-cnsuxl-pinterest text-[#68C9FD] ml-2"></i>
                        <i className="fi-xnsuxl-facebook text-[#68C9FD] ml-2"></i>
                        <i className="fi-cnsuxl-dribbble text-[#68C9FD] ml-2"></i>
                    </p>
                </div>
            </div>

            {/* Main Footer */}
            <div className="max-w-6xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo and Description */}
                <div>
                    <img src={logoimage} alt="Adamas Logo" className="w-32 mb-4" /> {/* Replace with your logo image */}
                    <p className="text-gray-600 text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    </p>
                </div>

                {/* Recent Products */}
                <div>
                    <h3 className="font-semibold text-gray-700 mb-4">Recent Products</h3>
                    <div className="flex items-center mb-4">
                        <img src={Image8} alt="Blue Sky Diamond" className="w-12 h-12 object-cover rounded mr-4" />
                        <div>
                            <p className="text-gray-700 text-sm">Blue Sky Diamond</p>
                            <p className="text-yellow-500 text-sm">
                                ★★★★★
                            </p>
                            <p className="text-gray-600 text-sm">$589.99</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <img src={Image9} alt="Fiery Red Ring" className="w-12 h-12 object-cover rounded mr-4" />
                        <div>
                            <p className="text-gray-700 text-sm">Fiery Red Ring</p>
                            <p className="text-yellow-500 text-sm">
                                ★★★★★
                            </p>
                            <p className="text-gray-600 text-sm">$2789.99</p>
                        </div>
                    </div>
                </div>

                {/* Contacts */}
                <div>
                    <h3 className="font-semibold text-gray-700 mb-4">Contacts</h3>
                    <p className="text-gray-600 text-sm">Adamas d.o.o., 1000 Ljubljana</p>
                    <p className="text-gray-600 text-sm">Celovska cesta 135, Slovenia, Europe</p>
                    <p className="text-gray-600 text-sm">Phone: (+386) 40 123 456</p>
                    <p className="text-gray-600 text-sm">Mobile: (+386) 40 654 123 651</p>
                    <p className="text-[#68C9FD] text-sm">Email: info@premiumcoding.com</p>
                </div>

                {/* Newsletter Signup */}
                <div>
                    <h3 className="font-semibold text-gray-700 mb-4">Sign to Newsletter</h3>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                        <button
                            type="submit"
                            className="w-1/2  text-white p-2 rounded  text-sm" style={{ backgroundColor: '#68C9FD' }}
                        >
                            SUBSCRIBE
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Footer;
