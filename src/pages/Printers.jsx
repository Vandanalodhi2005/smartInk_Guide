import { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { useCart } from '../context/CartContext';
import '../styles/pages.css';

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
    <>
      <Navbar />
      <div className="printers-page bg-slate-50 min-h-screen">
        <div className="printers-container mx-auto max-w-7xl px-4 py-8">
          <div className="text-center mb-10">
            <h1 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Printers</h1>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg leading-relaxed">
                Find the perfect printer for your home or office.
            </p>
          </div>

          {/* Filters Top Bar */}
          <div className="bg-white p-4 rounded-xl border border-slate-200 mb-8 flex flex-col md:flex-row items-center gap-4 shadow-sm transition-shadow duration-300">
             {/* Search */}
             <div className="flex-1 w-full relative">
                <input
                    type="text"
                    placeholder="Search model, brand or features..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-900 transition-all font-medium"
                />
                <svg className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
             </div>

             {/* Sort & Price Filter */}
             <div className="flex items-center gap-4 w-full md:w-auto">
                 <select 
                    value={sortBy} 
                    onChange={(e) => setSortBy(e.target.value)}
                    className="py-3 px-4 bg-slate-50 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 focus:outline-none cursor-pointer hover:bg-slate-100 transition-colors"
                 >
                    <option value="featured">Recommended</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Top Rated</option>
                 </select>
                 
                 <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg hidden sm:flex">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Max Price:</span>
                    <input 
                        type="range" 
                        min="0" 
                        max="5000" 
                        step="100"
                        value={priceRange.max}
                        onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                        className="w-24 h-1 bg-slate-300 rounded-lg appearance-none cursor-pointer accent-slate-900"
                    />
                    <span className="text-sm font-bold text-slate-900">${priceRange.max}</span>
                 </div>
             </div>
          </div>

          {/* Results Count */}
          <div className="results-count mb-4 flex justify-between items-center">
            <p className="text-slate-500 font-medium text-sm">
              Showing <strong>{filteredAndSortedPrinters.length}</strong> items
            </p>
          </div>

          {/* Printers Grid - Responsive: 2(mobile), 3(sm), 4(md+) */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-6 pb-8">
            {filteredAndSortedPrinters.map((printer, index) => (
              <div
                key={printer._id || index}
                className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group relative h-full transform hover:-translate-y-1 block"
              >
                {/* Image */}
                <Link to={`/product/${printer.slug || printer._id}`} className="relative w-full aspect-[4/3] bg-white p-6 flex items-center justify-center overflow-hidden border-b border-slate-50 block">
                  <img 
                     src={
                        printer.image || 
                        (printer.images && printer.images.length > 0 
                            ? (printer.images[0].startsWith('http') 
                                ? printer.images[0] 
                                : `${import.meta.env.VITE_API_URL?.replace('/api', '') || ''}${printer.images[0]}`)
                            : 'https://via.placeholder.com/300?text=No+Image')
                      }
                    alt={printer.title || printer.name}
                    className="w-full h-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/300?text=No+Image'; }}
                    loading="lazy"
                  />
                  {printer.countInStock === 0 && (
                     <div className="absolute top-2 right-2 bg-red-50 text-red-500 text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wide border border-red-100">
                        Out of Stock
                     </div>
                  )}
                </Link>

                {/* Info */}
                <div className="p-4 flex flex-col flex-1 gap-1">
                    {/* Brand */}
                    <div className="flex items-center">
                        <span className="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full uppercase tracking-wider mb-1">
                            {printer.brand || 'Printer'}
                        </span>
                    </div>

                    {/* Title - Limit to 2 lines */}
                    <Link to={`/product/${printer.slug || printer._id}`} className="text-sm font-bold text-slate-800 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2 h-10 mb-1" title={printer.title || printer.name}>
                        {printer.title || printer.name}
                    </Link>
                    
                    {/* Price */}
                    <div className="mt-auto flex items-end gap-2 pt-2 border-t border-dashed border-slate-100 mb-2">
                        <span className="text-lg font-black text-slate-900">
                            ${printer.price?.toFixed(2)}
                        </span>
                        {(printer.oldPrice > 0 || printer.originalPrice > 0) && (
                            <span className="text-xs text-slate-400 line-through mb-1">
                                ${printer.oldPrice?.toFixed(2) || printer.originalPrice?.toFixed(2)}
                            </span>
                        )}
                    </div>
                    
                    {/* Buttons */}
                    <div className="flex gap-2 mt-auto flex-col sm:flex-row">
                        <button 
                            onClick={(e) => handleDetails(e, printer)}
                            className="flex-1 py-1.5 px-2 rounded-lg text-xs font-bold border border-blue-900 text-blue-900 bg-white hover:bg-blue-50 transition-colors"
                        >
                            See Details
                        </button>
                        <button 
                            onClick={(e) => handleBuyNow(e, printer)}
                            className="flex-1 py-1.5 px-2 rounded-lg text-xs font-bold bg-blue-900 text-white border border-blue-900 hover:bg-blue-800 transition-colors"
                        >
                            Buy Now
                        </button>
                    </div>
                </div>
              </div>
            ))}
          </div>

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
        <Footer />
      </div>
    </>
  );
};

export default Printers;
