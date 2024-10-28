import React, { useState } from "react";
import ProductCard from "../components/ProductCard";

import Image6 from "../assets/images/black-bag.png";
import Image5 from "../assets/images/diamond-sky.png";
import Image7 from "../assets/images/silver-ring-small.png";
import Image4 from "../assets/images/wed-ring.png";

import Thumnail4 from "../assets/images/photodune-2669680-ring-with-stones-xs.png";
import Thumnail5 from "../assets/images/photodune-2673587-ring-with-stone-xs.png";
import Thumnail2 from "../assets/images/photodune-2773150-ring-isolated-on-white-xs.png";

const relatedProducts = [
  { name: "Set of Wedding Rings", price: "59.89", rating: 4, image: Image4 },
  { name: "Blue Sky Diamond", price: "159.89", rating: 4, image: Image5 },
  { name: "A black leather Purse", price: "24.89", rating: 4, image: Image6 },
  { name: "Silver Ring with blue Diamond", price: "2559.89", rating: 4, image: Image7 },
];

const SingleProduct = () => {
  const [mainImage, setMainImage] = useState(Image7);
  const [quantity, setQuantity] = useState(1);

  const thumbnails = [Image7, Thumnail2, Thumnail4, Thumnail5];

  return (
    <div className="bg-gray-100">
      <div className="container mx-auto py-8">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <div className="mb-4">
              <img
                src={mainImage}
                alt="Silver Ring with a blue Diamond"
                className="w-full h-auto"
              />
            </div>
            <div className="flex -mx-2">
              {thumbnails.map((img, index) => (
                <div key={index} className="w-1/5 px-2">
                  <img
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    className="w-full h-auto cursor-pointer"
                    onClick={() => setMainImage(img)}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <h1 className="text-3xl font-bold mb-4">
              Silver Ring with a blue Diamond
            </h1>
            <div className="flex items-center mb-4">
              {[...Array(4)].map((_, i) => (
                <svg
                  key={i}
                  className="w-5 h-5 text-yellow-400 fill-current"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <svg
                className="w-5 h-5 text-gray-300 fill-current"
                viewBox="0 0 20 20"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-gray-600 ml-2 text-sm">12 Reviews</span>
              <a href="#" className="text-[#68C9FD] ml-4 text-sm">
                Add your Review
              </a>
            </div>
            <p className="text-gray-600 mb-6 text-sm">
              Duis autem vel eum iriure dolor in hendrerit in vulputate velit
              esse molestie consequat, vel illum dolore eu feugiat nulla
              facilisis at vero eros et accumsan et iusto odio dignissim qui.
              Duis autem vel eum iriure dolor in hendrerit in vulputate.
              Accumsan et iusto odio dignissim qui. Duis autem vel eum iriure
              dolor in hendrerit in vulputate.
            </p>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Color:</h3>
              <div className="flex space-x-2">
                <button className="w-6 h-6 bg-gray-300 rounded-full"></button>
                <button className="w-6 h-6 bg-blue-300 rounded-full"></button>
                <button className="w-6 h-6 bg-blue-500 rounded-full"></button>
              </div>
            </div>
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Size:</h3>
              <select className="w-full border border-gray-300 rounded px-3 py-2">
                <option>Extra small</option>
                <option>Small</option>
                <option>Medium</option>
                <option>Large</option>
              </select>
            </div>
            <div className="flex items-center mb-6">
              <h3 className="text-lg font-semibold mr-4">Qty:</h3>
              <button 
                className="border border-gray-300 px-3 py-1 rounded-l h-10"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                -
              </button>
              <input
                type="text"
                value={quantity}
                className="border-t border-b border-gray-300 w-12 text-center h-10"
                readOnly
              />
              <button 
                className="border border-gray-300 px-3 py-1 rounded-r h-10"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
              <span className="ml-auto text-2xl font-bold">$489.90</span>
            </div>
            <button className="bg-[#68C9FD] text-white py-2 px-6 rounded hover:bg-[#68C9FD]/80 transition-colors">
              ADD TO CART
            </button>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-[#68C9FD]">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="text-[#68C9FD]">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="text-[#68C9FD]">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex">
              <a
                href="#"
                className="border-b-2 border-[#68C9FD] py-4 px-6 text-sm font-medium text-[#68C9FD]"
              >
                DESCRIPTION
              </a>
              <a
                href="#"
                className="border-b-2 border-transparent py-4 px-6 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
              >
                ADDITIONAL INFORMATION
              </a>
              <a
                href="#"
                className="border-b-2 border-transparent py-4 px-6 text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300"
              >
                REVIEWS (12)
              </a>
            </nav>
          </div>
          <div className="py-6">
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
              consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu
              feugiat nulla facilisis at vero eros et accumsan et iusto odio
              dignissim qui blandit praesent luptatum zzril delenit augue duis
              dolore te feugait nulla facilisi. Nam liber tempor cum soluta
              nobis eleifend option congue nihil imperdiet doming id quod mazim
              placerat facer possim assum.
            
            </p>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">YOU MIGHT ALSO LIKE</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {relatedProducts.map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                title={product.name}
                price={product.price}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;