
import React, { useState } from 'react';
import ProductFilter from './ProductFilter';
import ProductCard from './ProductCard';

const ProductGrid = ({ heading = "Products", products = [], onFilterChange }) => {
  const [filters, setFilters] = useState({
    sort: "",
    brand: "",
    technology: [],
    usageCategory: [],
    allInOneType: [],
    wireless: "",
    mainFunction: []
  });

  // Local filtering and sorting
  let filteredProducts = products;
  if (filters.brand) {
    filteredProducts = filteredProducts.filter(
      (product) =>
        (product.brand && product.brand.toLowerCase() === filters.brand.toLowerCase())
    );
  }
  if (filters.technology.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      filters.technology.some((tech) =>
        Array.isArray(product.technology)
          ? product.technology.includes(tech)
          : (product.technology || "").toLowerCase().includes(tech.toLowerCase())
      )
    );
  }
  if (filters.usageCategory.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      filters.usageCategory.some((cat) =>
        Array.isArray(product.usageCategory)
          ? product.usageCategory.includes(cat)
          : (product.usageCategory || "").toLowerCase().includes(cat.toLowerCase())
      )
    );
  }
  if (filters.allInOneType.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      filters.allInOneType.some((type) =>
        Array.isArray(product.allInOneType)
          ? product.allInOneType.includes(type)
          : (product.allInOneType || "").toLowerCase().includes(type.toLowerCase())
      )
    );
  }
  if (filters.wireless) {
    filteredProducts = filteredProducts.filter((product) =>
      (product.wireless || "").toLowerCase() === filters.wireless.toLowerCase()
    );
  }
  if (filters.mainFunction.length > 0) {
    filteredProducts = filteredProducts.filter((product) =>
      filters.mainFunction.some((func) =>
        Array.isArray(product.mainFunction)
          ? product.mainFunction.includes(func)
          : (product.mainFunction || "").toLowerCase().includes(func.toLowerCase())
      )
    );
  }
  if (filters.sort === "lowToHigh") {
    filteredProducts = filteredProducts.slice().sort((a, b) => Number(a.price) - Number(b.price));
  } else if (filters.sort === "highToLow") {
    filteredProducts = filteredProducts.slice().sort((a, b) => Number(b.price) - Number(a.price));
  }

  const handleFilterChange = (updatedFilters) => {
    setFilters(updatedFilters);
    if (onFilterChange) onFilterChange(updatedFilters);
  };

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-100 py-8">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex flex-col gap-8 mb-8 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#2b94b4ff] drop-shadow-lg">
            {heading}
          </h2>
          <ProductFilter filters={filters} onChange={handleFilterChange} />
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6 md:gap-10">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product._id || product.id || index} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
