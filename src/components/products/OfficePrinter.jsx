import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../redux/actions/productActions";
import ProductGrid from "../products/ProductGrid";

const OfficePrinter = () => {
  const dispatch = useDispatch();
  const [sort, setSort] = useState("");
  const [brand, setBrand] = useState("");
  const [loadingMore, setLoadingMore] = useState(false);
  const [page, setPage] = useState(1);

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  useEffect(() => {
    dispatch(listProducts("", "", page, sort, brand));
  }, [dispatch, sort, brand, page]);

  const safeProducts = Array.isArray(products) ? products : [];

  const filteredProducts = safeProducts.filter((product) => {
    if (Array.isArray(product.usageCategory)) {
      return product.usageCategory.includes('Home') || product.usageCategory.includes('Office');
    }
    if (typeof product.usageCategory === 'string') {
      const usage = product.usageCategory.toLowerCase();
      return usage.includes('home') || usage.includes('office');
    }
    return false;
  });

  const handleFilterChange = (newSort, newBrand) => {
    setSort(newSort);
    setBrand(newBrand);
  };

  const pages = productList.pages || 1;
  const loadMoreHandler = async () => {
    if (page < pages) {
      setLoadingMore(true);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setPage(page + 1);
      setLoadingMore(false);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-white to-blue-100 py-2 sm:py-4 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-0">
        <ProductGrid
          heading="Office Printers"
          products={filteredProducts.filter(product => {
            if (Array.isArray(product.usageCategory)) {
              if (product.usageCategory.includes('Office') && product.usageCategory.includes('Home')) return true;
              if (product.usageCategory.includes('Office') && !product.usageCategory.includes('Home')) return true;
              return false;
            }
            if (typeof product.usageCategory === 'string') {
              const usage = product.usageCategory.toLowerCase();
              if (usage.includes('office') && usage.includes('home')) return true;
              if (usage.includes('office') && !usage.includes('home')) return true;
              return false;
            }
            return false;
          })}
        />
        {loading && page >= 1 && (
          <div className="py-10 text-center">
            <div className="inline-block px-6 py-3 rounded-full bg-blue-100 text-blue-700 font-semibold animate-pulse shadow-md">
              Loading More Products...
            </div>
          </div>
        )}
        {!loading && page < pages && (
          <div className="flex justify-center mt-14">
            <button
              onClick={loadMoreHandler}
              disabled={loadingMore}
              className={`px-10 py-4 bg-white text-blue-700 border border-blue-600 rounded-2xl font-bold tracking-wide shadow-xl hover:bg-blue-50 hover:text-blue-900 hover:border-blue-800 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 ${loadingMore ? 'opacity-70 cursor-not-allowed' : ''}`}
            >
              {loadingMore && (
                <span className="w-6 h-6 border-4 border-blue-600 border-t-blue-300 rounded-full animate-spin mr-2"></span>
              )}
              {loadingMore ? 'Loading...' : 'View More Products'}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default OfficePrinter;
