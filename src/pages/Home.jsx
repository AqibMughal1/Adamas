import React from "react";
import ProductCard from "../components/ProductCard";
import sliderImage from '../assets/images/slider.png';
import Image1 from '../assets/images/jewellery.png';
import Image2 from '../assets/images/hat.png';
import Image3 from '../assets/images/veils.png';
import Image4 from '../assets/images/wed-ring.png'
import Image5 from '../assets/images/diamond-sky.png'
import Image6 from '../assets/images/black-bag.png'
import Image7 from '../assets/images/silver-ring-small.png'

const collections = [
  {
    image: Image1,
    title: 'Check our Ring Collection',
    description: 'Lorem ipsum dolor sit amet, cotectetuer adipiscing, sed di nonummy nibh euismod te.',
  },
  {
    image: Image2,
    title: 'Summer Hat Collection',
    description: 'Lorem ipsum dolor sit amet, cotectetuer adipiscing, sed di nonummy nibh euismod te.',
  },
  {
    image: Image3,
    title: 'Veils on Sale',
    description: 'Lorem ipsum dolor sit amet, cotectetuer adipiscing, sed di nonummy nibh euismod te.',
  },
];

const Home = () => {
  return (
    <>
      {/* Hero section */}
      <section
        className="bg-contain bg-no-repeat bg-center flex items-center h-[421px]"
        style={{ backgroundImage: `url(${sliderImage})` }}
      >
        <div className="container mx-auto flex justify-end">
          <div className="text-center p-8  max-w-md">
            <button className=" text-3xl text-white px-2 py-1 " style={{ backgroundColor: '#68C9FD' }}>
              RINGS ON SALE
            </button>
            <p className="text-sm text-gray-400 mt-4 mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at justo eget lorem porttitor tincidunt.
            </p>
            <button className="text-sm text-white px-2 py-1  " style={{ backgroundColor: '#68C9FD' }} >
              Visit the Store
            </button>
          </div>
        </div>
      </section>

      {/* Headlines */}
      <section className="px-4 py-8 ">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <div key={index} className="text-center">
              <img
                src={collection.image}
                alt={collection.title}
                className="w-full h-auto mb-6"
              />
              <h2 className="text-xl  mb-4">{collection.title}</h2>
              <p className="text-gray-400 text-sm mb-6">{collection.description}</p>
              <button className="text-sm text-white px-2 py-1 rounded  " style={{ backgroundColor: '#68C9FD' }} >
                Visit the Store
              </button>
            </div>
          ))}
        </div>

      </section>

      <hr className=" border-gray-200 w-full " />

      {/* divider */}
      <section>
        <h1 className="text-center text-lg py-10 underline underline-offset-[30px] decoration-gray-200"> OUR LATEST ARRIVALS</h1>
        <p className="text-center text-gray-400 text-sm">Check our Latest Offer that just arrived at the Store. New <span style={{ color: '#68C9FD' }} >Nonummy</span> for you to Wear </p>
      </section>

      {/* products */}
      <section>
        <div className="flex space-x-4 mx-36">
          <ProductCard
            image={Image4}
            title="Set of Wedding Rings"
            description="Beautiful wedding rings for your special day."
            price="59.89"
          />
          <ProductCard
            image={Image5}
            title=" Blue Sky Diamond"
            description="Elegant diamond jewelry for any occasion."
            price="99.99"
          />
          <ProductCard
            image={Image6}
            title="A Black Leather Purse"
            description="Stylish black bag to complement your outfit."
            price="49.99"
          />
          <ProductCard
            image={Image7}
            title="Silver Ring"
            description="Elegant silver ring for a touch of class."
            price="29.99"
          />
        </div>
      </section>

      {/* divider */}
      <section>
        <h1 className="text-center text-lg py-10 underline underline-offset-[30px] decoration-gray-200"> OUR FEATURED PRODUCTS</h1>
        <p className="text-center text-gray-400 text-sm">Check our Latest Offer that just arrived at the Store. New <span style={{ color: '#68C9FD' }} >Nonummy</span> for you to Wear </p>
      </section>

      {/* products */}
      <section>
        <div className="flex space-x-4 mx-36 my-12">
          <ProductCard
            image={Image4}
            title="Set of Wedding Rings"
            description="Beautiful wedding rings for your special day."
            price="59.89"
          />
          <ProductCard
            image={Image5}
            title=" Blue Sky Diamond"
            description="Elegant diamond jewelry for any occasion."
            price="99.99"
          />
          <ProductCard
            image={Image6}
            title="A Black Leather Purse"
            description="Stylish black bag to complement your outfit."
            price="49.99"
          />
          <ProductCard
            image={Image7}
            title="Silver Ring"
            description="Elegant silver ring for a touch of class."
            price="29.99"
          />
        </div>
      </section>
    </>
  );
};
export default Home;
