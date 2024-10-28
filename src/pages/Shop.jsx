import React from "react";
import Image6 from "../assets/images/black-bag.png";
import Image5 from "../assets/images/diamond-sky.png";
import Image2 from "../assets/images/hat.png";
import Image7 from "../assets/images/silver-ring-small.png";
import Image4 from "../assets/images/wed-ring.png";
import ProductCard from "../components/ProductCard";

const categories = [
  { name: "Jewelry", count: 5 },
  { name: "Apparel", count: 3 },
  { name: "Rings", count: 8 },
  { name: "Dresses & Jackets", count: 12 },
  { name: "Necklaces", count: 7 },
  { name: "Bags", count: 15 },
];

const priceRanges = [
  { range: "$5.00 - $50.00" },
  { range: "$50.00 - $100.00" },
  { range: "$100.00 - $200.00" },
  { range: "$200.00 - $500.00" },
];

const recentProducts = [
  { name: "Blue Sky Diamond", price: "$589.99", rating: 4 },
  { name: "Fiery Red Ring", price: "$2789.99", rating: 4 },
];

const products = [
  { name: "Set of Wedding Rings", price: "59.89", rating: 4, image: Image4 },
  { name: "Blue Sky Diamond", price: "159.89", rating: 4, image: Image5 },
  { name: "A black leather Purse", price: "24.89", rating: 4, image: Image6 },
  { name: "Set of Wedding Rings", price: "59.89", rating: 4, image: Image4 },
  { name: "Blue Sky Diamond", price: "159.89", rating: 4, image: Image5 },
  { name: "A black leather Purse", price: "24.89", rating: 4, image: Image6 },
];

const Shop = () => {
  return (
    <div className="bg-gray-100">
      <div className="flex  py-8 container mx-auto">
        <div className="w-1/4 px-4">
          <div className=" p-4 rounded-lg mb-6">
            <h2 className="text-lg font-bold mb-4">Categories</h2>
            <ul>
              {categories.map((category, index) => (
                <li key={index} className="mb-2">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-primary text-sm"
                  >
                    {category.name}{" "}
                    <span className="text-gray-400 text-sm">
                      ({category.count})
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className=" p-4 rounded-lg  mb-6">
            <h2 className="text-lg font-bold mb-4">Best Sellers</h2>
            <div className="mb-4">
              <img src={Image7} alt="Best Seller" className="w-full h-auto" />
              <p className="text-center mt-2">Silver Ring with a Diamond</p>
            </div>
          </div>
          <div className="p-4 rounded-lg shmb-6">
            <h2 className="text-lg font-bold mb-4">Price Range</h2>
            <ul>
              {priceRanges.map((range, index) => (
                <li key={index} className="mb-2">
                  <a
                    href="#"
                    className="text-gray-600 hover:text-primary text-sm"
                  >
                    {range.range}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className=" p-4 rounded-lg ">
            <h2 className="text-lg font-bold mb-4">Recent Products</h2>
            {recentProducts.map((product, index) => (
              <div key={index} className="flex items-center mb-4">
                <img
                  src={index === 0 ? Image5 : Image2}
                  alt={product.name}
                  className="w-12 h-12 mr-4"
                />
                <div>
                  <p className="font-semibold text-md">{product.name}</p>
                  <p className="text-primary text-sm">{product.price}</p>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-4 h-4 ${i < product.rating ? "text-yellow-400" : "text-gray-300"
                          }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-3/4 px-4">
          <div className="grid grid-cols-3 gap-6">
            {products.map((product, index) => (
              <ProductCard
                key={index}
                image={product.image}
                title={product.name}
                price={product.price}
              />
            ))}
          </div>
          <div className="flex justify-center mt-8 text-sm">
            <button className="px-4 py-2 bg-gray-300 text-gray-700">Prev</button>
            <button className="px-4 py-2 bg-[#68C9FD] text-white">1</button>
            <button className="px-4 py-2 bg-gray-300 text-gray-700">2</button>
            <button className="px-4 py-2 bg-gray-300 text-gray-700">3</button>
            <button className="px-4 py-2 bg-gray-300 text-gray-700">4</button>
            <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-r">
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;