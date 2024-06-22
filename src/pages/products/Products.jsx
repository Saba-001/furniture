import { useState } from "react";
import { products } from "/data";
import { Img } from "/src/components";
import { Navigation } from "./components/Navigation";

import { DashboardFooter } from "./components/DashboardFooter";

export const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Calculate current items based on currentPage
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);

  // Handler for pagination click
  const handleClick = (number) => {
    setCurrentPage(number);
  };

  // Previous page handler
  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // Next page handler
  const goToNextPage = () => {
    if (currentPage < Math.ceil(products.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Generate page numbers for pagination
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(products.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  // Render pagination buttons
  const renderPageNumbers = pageNumbers.map((number) => (
    <li
      key={number}
      className={`mx-1 cursor-pointer ${
        currentPage === number ? "text-blue-600 font-bold" : "text-gray-500"
      }`}
    >
      <button onClick={() => handleClick(number)}>{number}</button>
    </li>
  ));

  // Render individual product items
  const renderItems = currentItems.map((item) => (
    <div key={item.id} className="border p-4 rounded-lg shadow-lg">
      <Img
        name={item.iconNames[0]}
        alt={item.name}
        className="w-full h-48 object-cover mb-4"
      />
      <h2 className="text-xl font-bold">{item.name}</h2>
      <p className="text-gray-600">{item.miniDescription}</p>
      <p className="mt-2 text-gray-800">
        ${item.currentPrice}{" "}
        {item.oldPrice && (
          <span className="line-through text-gray-500">${item.oldPrice}</span>
        )}
      </p>
      <p className="mt-2">{item.description}</p>
    </div>
  ));
  return (
    <>
      <Navigation />
      <div className="flex-grow pt-20">
        <div className="relative mb-20">
          <Img
            name="products"
            alt="Products"
            className="w-full h-80 object-cover"
          />
          <h1 className="absolute inset-0 flex items-center justify-center text-5xl font-bold">
            ჩვენი პროდუქტები
          </h1>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {renderItems}
          </div>
          <ul className="flex justify-center mt-4">
            <li className="mx-1">
              <button
                onClick={goToPreviousPage}
                disabled={currentPage === 1}
                className="px-3 py-1 bg-blue-600 text-white rounded-full disabled:bg-gray-300"
              >
                Previous
              </button>
            </li>
            {renderPageNumbers}
            <li className="mx-1">
              <button
                onClick={goToNextPage}
                disabled={
                  currentPage === Math.ceil(products.length / itemsPerPage)
                }
                className="px-3 py-1 bg-blue-600 text-white rounded-full disabled:bg-gray-300"
              >
                Next
              </button>
            </li>
          </ul>
        </div>
      </div>
      <DashboardFooter />
    </>
  );
};
