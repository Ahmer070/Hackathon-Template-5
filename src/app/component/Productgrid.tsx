
// import Image from 'next/image';

// export default function ProductGrid() {
//   const products = [
//     { id: 1, name: "Graphic Design", department: "English Department", price: "$16.48", salePrice: "$6.48", image: "/grid-1.png" },
//     { id: 2, name: "Graphic Design", department: "English Department", price: "$16.48", salePrice: "$6.48", image: "/grid-2.png" },
//     { id: 3, name: "Graphic Design", department: "English Department", price: "$16.48", salePrice: "$6.48", image: "/grid-3.png" },
//     { id: 4, name: "Graphic Design", department: "English Department", price: "$16.48", salePrice: "$6.48", image: "/grid-4.png" },
//     { id: 5, name: "Graphic Design", department: "English Department", price: "$16.48", salePrice: "$6.48", image: "/grid-5.png" },
//     { id: 6, name: "Graphic Design", department: "English Department", price: "$16.48", salePrice: "$6.48", image: "/grid-6.png" },
//     { id: 7, name: "Graphic Design", department: "English Department", price: "$16.48", salePrice: "$6.48", image: "/grid-7.png" },
//     { id: 8, name: "Graphic Design", department: "English Department", price: "$16.48", salePrice: "$6.48", image: "/grid-8.png" },
//   ];

//   return (
//     <section className="py-12 bg-gray-50">
//       {/* Section Heading */}
//       <div className="text-center mb-10">
//         <h2 className="text-sm uppercase text-gray-500">Featured Products</h2>
//         <h1 className="text-3xl font-bold text-gray-800">BESTSELLER PRODUCTS</h1>
//         <p className="text-gray-500 mt-2">
//           Problems trying to resolve the conflict between
//         </p>
//       </div>

//       {/* Product Grid */}
//       <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
//         {products.map((product) => (
//           <div
//             key={product.id}
//             className="bg-white shadow-md rounded-lg overflow-hidden"
//           >
//             {/* Product Image */}
//             <div className="relative w-full h-72">
//               <Image
//                 src={product.image}
//                 alt={product.name}
//                 width={300}
//                 height={300}
//                 className="w-full h-full object-contain" 
//               />
//             </div>

//             {/* Product Details */}
//             <div className="p-4 text-center">
//               <h3 className="font-semibold text-gray-700">{product.name}</h3>
//               <p className="text-gray-500 text-sm">{product.department}</p>
//               <div className="mt-2">
//                 <span className="text-gray-500 line-through">{product.price}</span>
//                 <span className="text-green-500 ml-2 font-semibold">
//                   {product.salePrice}
//                 </span>
//               </div>

//               {/* Color Dots */}
//               <div className="flex justify-center mt-3 space-x-2">
//                 <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
//                 <span className="w-4 h-4 bg-red-500 rounded-full"></span>
//                 <span className="w-4 h-4 bg-green-500 rounded-full"></span>
//                 <span className="w-4 h-4 bg-black rounded-full"></span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }
