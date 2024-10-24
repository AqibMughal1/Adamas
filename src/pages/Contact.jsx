import React from 'react';
import map from '../assets/images/Layer 36.png'
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <>
            <Header />
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
            <Footer />
        </>
    );
};

export default Contact;
