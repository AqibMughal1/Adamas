import React from 'react';

const ProductCard = ({ image, title, description, price }) => {
    return (
        <div className="border rounded-lg p-4 shadow-sm max-w-sm">
            {/* Product Image */}
            <img
                src={image}
                alt={title}
                className="w-full h-auto mb-4"
            />

            {/* Product Title */}
            <h2 className="text-lg font-semibold mb-2">{title}</h2>

            {/* Dashed Line */}
            <div className="flex items-center mb-4">
                <div className="h-1 w-1 rounded-full mr-2" style={{ backgroundColor: '#68C9FD' }}></div>
                <div className="border-t border-dotted flex-grow"></div>
            </div>

            {/* Product Description */}
            <p className="text-gray-600 mb-4">{description}</p>

            {/* Price and Buy Button */}
            <div className="flex justify-between items-center mb-4">
                <span className="text-xl font-bold">${price}</span>
                <button className="text-sm text-white px-2 py-1 rounded  " style={{ backgroundColor: '#68C9FD' }} >
                Buy Now
              </button>
            </div>

            {/* Category and Rating */}
            <div className="border-t pt-4 flex justify-between items-center">
                <span className="text-gray-500 flex items-center">
                    <svg
                        className="w-5 h-5 text-gray-500 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16m-7 6h7"
                        ></path>
                    </svg>
                    Category
                </span>
                <div className="flex items-center">
                    {/* Star Ratings */}
                    <svg
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.262 3.89a1 1 0 00.95.69h4.104c.969 0 1.371 1.24.588 1.81l-3.32 2.41a1 1 0 00-.364 1.118l1.262 3.89c.3.921-.755 1.688-1.538 1.118l-3.32-2.41a1 1 0 00-1.175 0l-3.32 2.41c-.783.57-1.838-.197-1.538-1.118l1.262-3.89a1 1 0 00-.364-1.118L2.347 8.517c-.783-.57-.38-1.81.588-1.81h4.104a1 1 0 00.95-.69l1.262-3.89z" />
                    </svg>
                    <svg
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.262 3.89a1 1 0 00.95.69h4.104c.969 0 1.371 1.24.588 1.81l-3.32 2.41a1 1 0 00-.364 1.118l1.262 3.89c.3.921-.755 1.688-1.538 1.118l-3.32-2.41a1 1 0 00-1.175 0l-3.32 2.41c-.783.57-1.838-.197-1.538-1.118l1.262-3.89a1 1 0 00-.364-1.118L2.347 8.517c-.783-.57-.38-1.81.588-1.81h4.104a1 1 0 00.95-.69l1.262-3.89z" />
                    </svg>
                    <svg
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.262 3.89a1 1 0 00.95.69h4.104c.969 0 1.371 1.24.588 1.81l-3.32 2.41a1 1 0 00-.364 1.118l1.262 3.89c.3.921-.755 1.688-1.538 1.118l-3.32-2.41a1 1 0 00-1.175 0l-3.32 2.41c-.783.57-1.838-.197-1.538-1.118l1.262-3.89a1 1 0 00-.364-1.118L2.347 8.517c-.783-.57-.38-1.81.588-1.81h4.104a1 1 0 00.95-.69l1.262-3.89z" />
                    </svg>
                    <svg
                        className="w-5 h-5 text-yellow-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.262 3.89a1 1 0 00.95.69h4.104c.969 0 1.371 1.24.588 1.81l-3.32 2.41a1 1 0 00-.364 1.118l1.262 3.89c.3.921-.755 1.688-1.538 1.118l-3.32-2.41a1 1 0 00-1.175 0l-3.32 2.41c-.783.57-1.838-.197-1.538-1.118l1.262-3.89a1 1 0 00-.364-1.118L2.347 8.517c-.783-.57-.38-1.81.588-1.81h4.104a1 1 0 00.95-.69l1.262-3.89z" />
                    </svg>
                    <svg
                        className="w-5 h-5 text-gray-200"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.262 3.89a1 1 0 00.95.69h4.104c.969 0 1.371 1.24.588 1.81l-3.32 2.41a1 1 0 00-.364 1.118l1.262 3.89c.3.921-.755 1.688-1.538 1.118l-3.32-2.41a1 1 0 00-1.175 0l-3.32 2.41c-.783.57-1.838-.197-1.538-1.118l1.262-3.89a1 1 0 00-.364-1.118L2.347 8.517c-.783-.57-.38-1.81.588-1.81h4.104a1 1 0 00.95-.69l1.262-3.89z" />
                    </svg>
                    {/* ... */}
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
