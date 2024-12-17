import React from "react";
import Image from "next/image";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";

const ShopPage = () => {
  const categories = [
    { id: 1, name: "CLOTHS", count: "5 items", image: "/grid-1.png" },
    { id: 2, name: "CLOTHS", count: "5 items", image: "/grid-2.png" },
    { id: 3, name: "CLOTHS", count: "5 items", image: "/grid-3.png" },
    { id: 4, name: "CLOTHS", count: "5 items", image: "/grid-4.png" },
    { id: 5, name: "CLOTHS", count: "5 items", image: "/grid-5.png" },
  ];

  const brands = [
    "hooli",
    "lyft",
    "stripe",
    "aws",
    "reddit",
  ];

  return (
    <div>
      {/* Navbar */}
      <Navbar/>

      {/* Shop Header */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Shop</h1>
          <p className="text-sm text-gray-500">Home &nbsp; / &nbsp; Shop</p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="container mx-auto px-4 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="relative overflow-hidden rounded-lg shadow-md"
            >
              <Image
                src={category.image}
                alt={category.name}
                width={300}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-lg font-semibold">{category.name}</h3>
                <p className="text-sm">{category.count}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Filter and Product Section */}
      <section className="container mx-auto px-4 mt-12">
        <div className="flex justify-between items-center mb-4">
          <div>
            <p className="text-gray-600">
              Showing all <span className="font-semibold">12 results</span>
            </p>
          </div>
          <div>
            <select className="border p-2 rounded-md">
              <option>Popularity</option>
              <option>Newest</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
            <button className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
              Filter
            </button>
          </div>
        </div>

        {/* Placeholder for Products */}
        <div className="h-32 bg-gray-200 flex items-center justify-center rounded-md">
          <p className="text-gray-600">Product Grid Here</p>
        </div>
      </section>

      {/* Brands Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-around items-center">
          {brands.map((brand, index) => (
            <div key={index} className="text-gray-500 text-4xl font-bold">
              {brand}
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default ShopPage;
