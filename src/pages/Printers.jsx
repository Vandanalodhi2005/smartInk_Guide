import { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';
import { useCart } from '../context/CartContext';
import { Eye, ShoppingBag } from 'lucide-react';
import '../styles/pages.css';
import { motion } from "framer-motion";

const Printers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page: reduxPage, pages: totalPages } = productList;

  const [selectedCategory, setSelectedCategory] = useState(searchParams.get('category') || 'all');
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 5000 });

  // Local state for accumulated products
  const [allProducts, setAllProducts] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const { addToCart: contextAddToCart } = useCart();

  // Sync state with URL params changes
  useEffect(() => {
    const catParam = searchParams.get('category');
    setSelectedCategory(catParam || 'all');
  }, [searchParams]);

  useEffect(() => {
    const searchParam = searchParams.get('search');
    setSearchQuery(searchParam || '');
  }, [searchParams]);

  // Initial Fetch & Reset on Filter Change
  useEffect(() => {
    // Reset local state
    setAllProducts([]);
    setCurrPage(1);

    let categoryArg = selectedCategory === 'all' ? '' : selectedCategory;
    dispatch(listProducts(searchQuery, categoryArg, 1));
  }, [dispatch, selectedCategory, searchQuery]);

  // Handle Accumulation
  useEffect(() => {
    // Only update if we have new products and not in loading state (unless it's a fresh load)
    if (products && Array.isArray(products) && !loading) {
      if (reduxPage === 1) {
        setAllProducts(products);
      } else if (reduxPage > 1) {
        setAllProducts(prev => {
          // Prevent duplicates
          const existingIds = new Set(prev.map(p => p._id));
          const uniqueNew = products.filter(p => !existingIds.has(p._id));
          return [...prev, ...uniqueNew];
        });
      }
    }
  }, [products, reduxPage, loading]);

  const handleLoadMore = () => {
    // Ensure we don't fetch if already loading or at end
    const maxPages = totalPages || 1;
    if (currPage < maxPages && !loading) {
      const nextPage = currPage + 1;
      setCurrPage(nextPage);
      let categoryArg = selectedCategory === 'all' ? '' : selectedCategory;
      dispatch(listProducts(searchQuery, categoryArg, nextPage));
    }
  };

  const handleBuyNow = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart(product.slug || product._id, 1));
    navigate('/cart?redirect=shipping');
  };

  const handleDetails = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    navigate(`/product/${product.slug || product._id}`);
  };

  // Filter and sort logic
  const filteredAndSortedPrinters = useMemo(() => {
    let filtered = allProducts || [];

    // Price range filter
    filtered = filtered.filter(p =>
      p.price >= priceRange.min && p.price <= priceRange.max
    );

    // Sort
    const sorted = [...filtered];
    switch (sortBy) {
      case 'price-low':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'name':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break;
    }

    return sorted;
  }, [allProducts, priceRange, sortBy]);

  return (
    <div className="printers-page bg-slate-50 min-h-screen">
      <div className="printers-container mx-auto max-w-7xl px-4 py-8">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Printers</h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Find the perfect printer for your home or office.
          </p>
        </div>

        {/* Filters Top Bar */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 mb-10 flex flex-col lg:flex-row items-center gap-6 shadow-sm hover:shadow-md transition-all duration-300">
          {/* Search */}
          <div className="flex-1 w-full relative">
            <input
              type="text"
              placeholder="Search by brand, model or features..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl text-md focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all font-medium placeholder:text-slate-400"
            />
            <svg className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          {/* Sort & Price Filter */}
          <div className="flex flex-col sm:flex-row items-center gap-6 w-full lg:w-auto">
            <div className="relative w-full sm:w-48">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full py-3.5 px-4 bg-slate-50 border border-slate-200 rounded-xl text-sm font-bold text-slate-700 focus:outline-none cursor-pointer hover:bg-slate-100 transition-colors appearance-none"
              >
                <option value="featured">Recommended</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Top Rated</option>
              </select>
              <FaChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none text-[10px]" />
            </div>

            <div className="flex items-center gap-4 px-6 py-3 bg-slate-50 border border-slate-200 rounded-xl w-full sm:w-auto">
              <span className="text-xs font-black text-slate-400 uppercase tracking-widest whitespace-nowrap">Max Price:</span>
              <div className="flex items-center gap-3 flex-1 sm:flex-none">
                <input
                  type="range"
                  min="0"
                  max="5000"
                  step="100"
                  value={priceRange.max}
                  onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                  className="w-full sm:w-28 h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
                />
                <span className="text-sm font-black text-slate-900 min-w-[50px] text-right">${priceRange.max}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6 flex justify-between items-center px-2">
          <p className="text-slate-500 font-bold text-sm">
            Showing <span className="text-blue-500">{filteredAndSortedPrinters.length}</span> Results
          </p>
        </div>

        {/* Printers Grid - Responsive: 1(mobile), 2(sm), 3(md), 4(lg+) */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 pb-12"
        >
          {filteredAndSortedPrinters.map((printer, index) => (
            <motion.div
              key={printer._id || index}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white border border-slate-100 rounded-3xl overflow-hidden shadow-[0_10px_40px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 flex flex-col group relative h-full"
            >
              {/* Image Holder */}
              <Link to={`/product/${printer.slug || printer._id}`} className="relative w-full h-64 bg-slate-50 p-8 flex items-center justify-center overflow-hidden border-b border-slate-100 group">
                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  src={
                    printer.image ||
                    (printer.images && printer.images.length > 0
                      ? (printer.images[0].startsWith('http')
                        ? printer.images[0]
                        : `${import.meta.env.VITE_API_URL?.replace('/api', '') || ''}${printer.images[0]}`)
                      : 'https://via.placeholder.com/300?text=No+Image')
                  }
                  alt={printer.title || printer.name}
                  className="w-full h-full object-contain mix-blend-multiply transition-transform duration-500"
                  onError={(e) => { e.target.src = 'https://via.placeholder.com/300?text=No+Image'; }}
                  loading="lazy"
                />

                {/* Badge Overlay */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {printer.countInStock === 0 ? (
                    <div className="bg-red-500 text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                      Out of Stock
                    </div>
                  ) : (
                    <div className="bg-emerald-500 text-white text-[10px] font-black px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">
                      In Stock
                    </div>
                  )}
                </div>
              </Link>

              {/* Info Section */}
              <div className="p-6 flex flex-col flex-1">
                {/* Brand & Stats */}
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-black text-blue-500 bg-blue-50 px-3 py-1.5 rounded-full uppercase tracking-widest">
                    {printer.brand || 'Premium'}
                  </span>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400 text-xs">★</span>
                    <span className="text-slate-400 text-[11px] font-bold">{printer.rating || '4.8'}</span>
                  </div>
                </div>

                {/* Title */}
                <Link to={`/product/${printer.slug || printer._id}`} className="text-lg font-extrabold text-slate-800 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2 h-14" title={printer.title || printer.name}>
                  {printer.title || printer.name}
                </Link>

                {/* Price & Cart Actions */}
                <div className="mt-auto pt-6 flex flex-col gap-5">
                  <div className="flex items-end justify-between">
                    <div className="flex flex-col">
                      {(printer.oldPrice > 0 || printer.originalPrice > 0) && (
                        <span className="text-xs text-slate-400 line-through font-bold mb-1">
                          ${(printer.oldPrice || printer.originalPrice)?.toFixed(2)}
                        </span>
                      )}
                      <span className="text-2xl font-black text-slate-900 tracking-tight">
                        ${printer.price?.toFixed(2)}
                      </span>
                    </div>

                    <button
                      onClick={(e) => handleBuyNow(e, printer)}
                      className="w-12 h-12 rounded-2xl bg-slate-900 text-white flex items-center justify-center hover:bg-blue-600 transition-all duration-300 shadow-xl active:scale-90"
                    >
                      <ShoppingBag size={20} />
                    </button>
                  </div>

                  <Link
                    to={`/product/${printer.slug || printer._id}`}
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-2xl text-sm font-black border-2 border-slate-100 text-slate-600 hover:bg-slate-50 hover:border-slate-200 transition-all"
                  >
                    <Eye size={18} />
                    Explore Details
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Loading State or No Products */}
        {loading && currPage === 1 && (
          <div className="flex justify-center py-12">
            <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-slate-900"></div>
          </div>
        )}

        {!loading && filteredAndSortedPrinters.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="mb-4">
              <circle cx="32" cy="32" r="30" stroke="#e0e0e0" strokeWidth="2" />
              <path d="M32 20V32M32 36H32.01" stroke="#e0e0e0" strokeWidth="2" strokeLinecap="round" />
            </svg>
            <h3 className="text-lg font-bold text-slate-700">No printers found</h3>
            <p className="text-slate-500">Try adjusting your filters or search query</p>
          </div>
        )}

        {/* Load More Trigger */}
        {products && products.length > 0 && currPage < totalPages && !loading && (
          <div className="flex justify-center pt-8">
            <button
              onClick={handleLoadMore}
              className="px-8 py-3 bg-white border border-slate-200 text-slate-700 font-bold rounded-full shadow-sm hover:shadow-md hover:border-slate-300 transition-all"
            >
              Load More Products
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default Printers;
