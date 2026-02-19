import { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../redux/actions/productActions';
import { addToCart } from '../redux/actions/cartActions';
import { useCart } from '../context/CartContext';
import { Eye, ShoppingBag, ChevronDown, Search, Filter, Home, Building2, Printer as PrinterIcon, Zap, X, Check } from 'lucide-react';
import './Printers.css';
import { motion, AnimatePresence } from "framer-motion";

const Printers = ({ forcedCategory, forcedUsageCategory }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page: reduxPage, pages: totalPages } = productList;

  const [selectedCategory, setSelectedCategory] = useState(forcedCategory || searchParams.get('category') || 'all');
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });

  // Local state for accumulated products
  const [allProducts, setAllProducts] = useState([]);
  const [currPage, setCurrPage] = useState(1);
  const { addToCart: contextAddToCart } = useCart();

  // Advanced Filters State
  const [showFilters, setShowFilters] = useState(false);
  const [filters, setFilters] = useState({
    technology: [],
    usageCategory: [],
    allInOneType: [],
    wireless: [],
    mainFunction: [],
    brand: []
  });

  const uniqueBrands = useMemo(() => {
    const brands = new Set(allProducts.map(p => p.brand).filter(Boolean));
    return [...brands].sort();
  }, [allProducts]);

  const handleFilterChange = (category, value) => {
    setFilters(prev => {
      const current = prev[category];
      const updated = current.includes(value)
        ? current.filter(item => item !== value)
        : [...current, value];
      return { ...prev, [category]: updated };
    });
  };

  // Sync state with URL params changes
  useEffect(() => {
    if (forcedCategory) {
      setSelectedCategory(forcedCategory);
    } else {
      const catParam = searchParams.get('category');
      setSelectedCategory(catParam || 'all');
    }
  }, [searchParams, forcedCategory]);

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
    // If forcedUsageCategory is present, pass it. validated by the new action signature: (search, category, page, brand, usageCategory)
    // Note: The action signature is (search, category, page, brand, usageCategory)
    // We need to pass empty string for brand if we are not filtering by brand yet (or add brand state)
    // The current component has brand filtering but it's local or not fully wired in this useEffect?
    // Looking at line 51: dispatch(listProducts(searchQuery, categoryArg, 1));
    // The previous signature was (search, category, page, brand).
    // I need to be careful with arguments position.
    // New signature: (search, category, pageNumber, brand, usageCategory)

    // We should use the existing 'filters' state if available, but for now let's stick to the basic fetch.
    // Provide '' for brand if not used in this specific effect (although there is a separate filter component)
    // Actually, looking at the previous code, top-level usage didn't pass brand.

    dispatch(listProducts(searchQuery, categoryArg, 1, '', forcedUsageCategory || ''));
  }, [dispatch, selectedCategory, searchQuery]);

  // Handle Accumulation
  useEffect(() => {
    if (products && Array.isArray(products) && !loading) {
      if (reduxPage === 1) {
        setAllProducts(products);
      } else if (reduxPage > 1) {
        setAllProducts(prev => {
          const existingIds = new Set(prev.map(p => p._id));
          const uniqueNew = products.filter(p => !existingIds.has(p._id));
          return [...prev, ...uniqueNew];
        });
      }
    }
  }, [products, reduxPage, loading]);

  const handleLoadMore = () => {
    const maxPages = totalPages || 1;
    if (currPage < maxPages && !loading) {
      const nextPage = currPage + 1;
      setCurrPage(nextPage);
      let categoryArg = selectedCategory === 'all' ? '' : selectedCategory;
      dispatch(listProducts(searchQuery, categoryArg, nextPage, '', forcedUsageCategory || ''));
    }
  };

  const handleBuyNow = (e, product) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch(addToCart(product.slug || product._id, 1));
    navigate('/cart?redirect=shipping');
  };

  // Filter and sort logic
  const filteredAndSortedPrinters = useMemo(() => {
    let filtered = allProducts || [];
    filtered = filtered.filter(p => p.price >= priceRange.min && p.price <= priceRange.max);

    // Apply Advanced Filters
    // Apply Advanced Filters (Multi-Select)
    if (filters.brand.length > 0) {
      filtered = filtered.filter(p => filters.brand.includes(p.brand));
    }
    if (filters.technology.length > 0) {
      filtered = filtered.filter(p => filters.technology.some(t => p.technology?.includes(t)));
    }
    if (filters.usageCategory.length > 0) {
      filtered = filtered.filter(p => filters.usageCategory.some(u => p.usageCategory?.includes(u)));
    }
    if (filters.allInOneType.length > 0) {
      filtered = filtered.filter(p => filters.allInOneType.some(type => p.allInOneType?.includes(type)));
    }
    if (filters.wireless.length > 0) {
      filtered = filtered.filter(p => filters.wireless.includes(p.wireless));
    }
    if (filters.mainFunction.length > 0) {
      filtered = filtered.filter(p => filters.mainFunction.some(f => p.mainFunction?.includes(f)));
    }

    const sorted = [...filtered];
    switch (sortBy) {
      case 'price-low': sorted.sort((a, b) => a.price - b.price); break;
      case 'price-high': sorted.sort((a, b) => b.price - a.price); break;
      case 'rating': sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0)); break;
      case 'name': sorted.sort((a, b) => a.name.localeCompare(b.name)); break;
      default: break;
    }
    return sorted;
  }, [allProducts, priceRange, sortBy]);

  // ... inside component ...

  const categoryData = {
    'Home Printer': {
      title: 'Home Printers',
      description: 'Compact, versatile, and user-friendly printers designed for photos, creative projects, and everyday home documents.',
      icon: <Home size={48} className="text-teal-400" />,
      theme: 'home'
    },
    'Office Printer': {
      title: 'Office Printers',
      description: 'High-performance, durable printers engineered for speed, volume, and professional business productivity.',
      icon: <Building2 size={48} className="text-blue-500" />,
      theme: 'office'
    },
    'Laser': {
      title: 'Laser Printers',
      description: 'Efficient and fast laser printing solutions for crisp text and high-volume document printing.',
      icon: <Zap size={48} className="text-amber-400" />,
      theme: 'laser'
    },
    'Inkjet': {
      title: 'Inkjet Printers',
      description: 'Professional-grade inkjet printers for vibrant colors, high-resolution photos, and creative projects.',
      icon: <PrinterIcon size={48} className="text-purple-400" />,
      theme: 'inkjet'
    },
    'Home': {
      title: 'Home Printers',
      description: 'Compact and versatile printers designed for home offices and personal use.',
      icon: <Home size={48} className="text-teal-400" />,
      theme: 'home'
    },
    'Office': {
      title: 'Office Printers',
      description: 'High-performance printers built for business productivity and heavy workloads.',
      icon: <Building2 size={48} className="text-blue-500" />,
      theme: 'office'
    },
    'all': {
      title: 'Premium Printers',
      description: 'Browse our complete collection of top-rated printers from industry-leading brands.',
      icon: <PrinterIcon size={48} className="text-blue-400" />
    }
  };

  const currentCategoryInfo = categoryData[forcedCategory || selectedCategory] || categoryData['all'];

  return (
    <div className="printers-redesign main-content">
      <div className="printers-main-container">

        <header className="printers-hero-header">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-4 flex justify-center"
          >
            {currentCategoryInfo.icon}
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {currentCategoryInfo.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            {currentCategoryInfo.description}
          </motion.p>
        </header>

        {/* Professional Control Panel */}
        <div className="printers-controls-wrapper">
          <div className="printers-controls-top">
            <div className="printer-search-container">
              <div className="printer-search-icon">
                <Search size={22} />
              </div>
              <input
                type="text"
                placeholder="Search by model, brand, or features..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="printers-controls-bottom">
            <div className="results-badge">
              Found <span>{filteredAndSortedPrinters.length}</span> Printers
            </div>

            <div className="printers-dropdown-group">
              <div className="price-slider-panel">
                <label>Limit Price</label>
                <input
                  type="range"
                  min="0"
                  max="10000"
                  step="100"
                  value={priceRange.max}
                  onChange={(e) => setPriceRange({ ...priceRange, max: Number(e.target.value) })}
                  className="custom-range"
                />
                <span className="price-value">${priceRange.max}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Permanent Advanced Filter Panel */}
        <div className="overflow-hidden bg-white border border-slate-200 shadow-xl rounded-2xl mt-4 relative z-10 mb-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
            <div className="filter-group">
              <label className="text-xs font-bold text-slate-500 uppercase mb-1 block">Technology</label>
              <div className="relative">
                <select
                  className="professional-select w-full text-sm py-2"
                  value={filters.technology}
                  onChange={(e) => setFilters({ ...filters, technology: e.target.value })}
                >
                  <option value="">Any</option>
                  <option value="Inkjet">Inkjet</option>
                  <option value="Laser">Laser</option>
                  <option value="Laser (B/W)">Laser (B/W)</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none size-3" />
              </div>
            </div>

            <div className="filter-group">
              <label className="text-xs font-bold text-slate-500 uppercase mb-1 block">Usage</label>
              <div className="relative">
                <select
                  className="professional-select w-full text-sm py-2"
                  value={filters.usageCategory}
                  onChange={(e) => setFilters({ ...filters, usageCategory: e.target.value })}
                >
                  <option value="">Any</option>
                  <option value="Home">Home</option>
                  <option value="Office">Office</option>
                  <option value="Mobile">Mobile</option>
                  <option value="Photo">Photo</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none size-3" />
              </div>
            </div>

            <div className="filter-group">
              <label className="text-xs font-bold text-slate-500 uppercase mb-1 block">Type</label>
              <div className="relative">
                <select
                  className="professional-select w-full text-sm py-2"
                  value={filters.allInOneType}
                  onChange={(e) => setFilters({ ...filters, allInOneType: e.target.value })}
                >
                  <option value="">Any</option>
                  <option value="Multifunction">Multifunction</option>
                  <option value="Single Function">Single Function</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none size-3" />
              </div>
            </div>

            <div className="filter-group">
              <label className="text-xs font-bold text-slate-500 uppercase mb-1 block">Wireless</label>
              <div className="relative">
                <select
                  className="professional-select w-full text-sm py-2"
                  value={filters.wireless}
                  onChange={(e) => setFilters({ ...filters, wireless: e.target.value })}
                >
                  <option value="">Any</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none size-3" />
              </div>
            </div>

            <div className="filter-group">
              <label className="text-xs font-bold text-slate-500 uppercase mb-1 block">Function</label>
              <div className="relative">
                <select
                  className="professional-select w-full text-sm py-2"
                  value={filters.mainFunction}
                  onChange={(e) => setFilters({ ...filters, mainFunction: e.target.value })}
                >
                  <option value="">Any</option>
                  <option value="Print">Print</option>
                  <option value="Scan">Scan</option>
                  <option value="Copy">Copy</option>
                  <option value="Fax">Fax</option>
                  <option value="Print Only">Print Only</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none size-3" />
              </div>
            </div>
          </div>
        </div>

        <motion.div
          layout
          className="printers-grid"
        >
          <AnimatePresence mode='popLayout'>
            {filteredAndSortedPrinters.map((printer, index) => (
              <motion.div
                key={printer._id || index}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="printer-card-premium"
              >
                <Link to={`/product/${printer.slug || printer._id}`} className="printer-img-preview">
                  <motion.img
                    src={
                      printer.image ||
                      (printer.images && printer.images.length > 0
                        ? (printer.images[0].startsWith('http')
                          ? printer.images[0]
                          : `${import.meta.env.VITE_API_URL?.replace('/api', '') || ''}${printer.images[0]}`)
                        : 'https://via.placeholder.com/400?text=No+Image')
                    }
                    alt={printer.title || printer.name}
                    onError={(e) => { e.target.src = 'https://via.placeholder.com/400?text=No+Image'; }}
                    loading="lazy"
                  />

                  <div className={`stock-status-pill ${printer.countInStock > 0 ? 'status-in' : 'status-out'}`}>
                    {printer.countInStock > 0 ? 'Verified Stock' : 'Out of Stock'}
                  </div>
                </Link>

                <div className="printer-details-box">
                  <div className="printer-tag-line">
                    <span className="brand-chip">{printer.brand || 'Premium'}</span>
                    <div className="rating-indicator">
                      <span>★</span> {printer.rating || '4.8'}
                    </div>
                  </div>

                  <Link to={`/product/${printer.slug || printer._id}`}>
                    <h3 title={printer.title || printer.name}>{printer.title || printer.name}</h3>
                  </Link>

                  <div className="price-cta-row">
                    <div className="price-display">
                      {(printer.oldPrice > 0 || printer.originalPrice > 0) && (
                        <span className="original-price-striked">
                          ${(printer.oldPrice || printer.originalPrice).toFixed(2)}
                        </span>
                      )}
                      <span className="current-price-bold">
                        ${printer.price?.toFixed(2)}
                      </span>
                    </div>
                  </div>

                  <div className="printer-actions-grid">
                    <Link
                      to={`/product/${printer.slug || printer._id}`}
                      className="explore-details-btn"
                    >
                      <Eye size={18} />
                      Details
                    </Link>
                    <button
                      onClick={(e) => handleBuyNow(e, printer)}
                      className="buy-now-btn-premium"
                    >
                      <ShoppingBag size={18} />
                      Buy Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {loading && (
          <div className="flex justify-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        )}

        {!loading && filteredAndSortedPrinters.length === 0 && (
          <div className="no-results-premium">
            <h3>No results for these filters.</h3>
            <p>Try broadening your search or resetting the price range.</p>
          </div>
        )}

        {products && products.length > 0 && currPage < totalPages && !loading && (
          <div className="load-more-professional">
            <button
              onClick={handleLoadMore}
              className="btn-load-more"
            >
              Discover More
            </button>
          </div>
        )}
      </div>
    </div >
  );
};

export default Printers;
