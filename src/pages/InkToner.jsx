import { useState, useMemo, useEffect } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../redux/actions/productActions';
import { listCategories } from '../redux/actions/categoryActions';
import { addToCart } from '../redux/actions/cartActions';
import { useCart } from '../context/CartContext';
import { Eye, ShoppingBag, Search, ChevronDown, Filter } from 'lucide-react';
import './InkToner.css';
import { motion, AnimatePresence } from "framer-motion";

const InkToner = ({ forcedCategory, forcedTitle, forcedDescription }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page: reduxPage, pages: totalPages } = productList;

  // Local state
  const [selectedCategory, setSelectedCategory] = useState(forcedCategory || searchParams.get('category') || 'Ink & Toner');
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState(searchParams.get('search') || '');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 10000 });
  const [allProducts, setAllProducts] = useState([]);
  const [currPage, setCurrPage] = useState(1);

  const categoryListState = useSelector((state) => state.categoryList);
  const { categories: allCategories } = categoryListState || {};

  // Filter categories to only matching "Ink" or "Toner" but exclude "Printer"
  const relevantCategories = useMemo(() => {
    if (!allCategories) return [];
    return allCategories.filter(c =>
      /Ink|Toner/i.test(c.name) && !/Printer/i.test(c.name)
    ).map(c => ({ id: c.name, label: c.name }));
  }, [allCategories]);

  useEffect(() => {
    dispatch(listCategories());
    return () => setAllProducts([]);
  }, [dispatch]);

  // Sync state with URL params changes
  useEffect(() => {
    if (forcedCategory) {
      setSelectedCategory(forcedCategory);
    } else {
      const catParam = searchParams.get('category');
      if (catParam) {
        setSelectedCategory(catParam);
      } else if (relevantCategories.length > 0) {
        const exists = relevantCategories.find(c => c.id === selectedCategory);
        if (!exists) {
          const defaultCat = relevantCategories.find(c => c.id === 'Ink & Toner');
          setSelectedCategory(defaultCat ? defaultCat.id : relevantCategories[0].id);
        }
      }
    }
  }, [searchParams, relevantCategories, selectedCategory, forcedCategory]);

  useEffect(() => {
    const searchParam = searchParams.get('search');
    setSearchQuery(searchParam || '');
  }, [searchParams]);

  // Initial Fetch & Reset on Filter Change
  useEffect(() => {
    setAllProducts([]);
    setCurrPage(1);
    if (selectedCategory) {
      dispatch(listProducts(searchQuery, selectedCategory, 1, selectedBrand));
    }
  }, [dispatch, selectedCategory, searchQuery, selectedBrand]);

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
      dispatch(listProducts(searchQuery, selectedCategory, nextPage, selectedBrand));
    }
  };

  const handleCategoryClick = (catId) => {
    setSelectedCategory(catId);
    setSearchParams({ category: catId });
  };

  const uniqueBrands = ['HP', 'Canon', 'Brother', 'Epson'];

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
  const filteredAndSortedProducts = useMemo(() => {
    let filtered = allProducts || [];
    filtered = filtered.filter(p => p.price >= priceRange.min && p.price <= priceRange.max);
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

  return (
    <div className="ink-toner-redesign main-content">
      <div className="ink-container">
        <header className="ink-hero-header">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {forcedTitle || 'Ink & Toner'}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {forcedDescription || 'Quality cartridges for every printer. Find your perfect match with our intelligent verified selection.'}
          </motion.p>
        </header>

        <div className="ink-controls-wrapper">
          <div className="ink-controls-top">
            <div className="ink-search-box">
              <input
                type="text"
                placeholder="Search by model or cartridge number..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="ink-search-icon" size={20} />
            </div>
            <div className="ink-filter-chips no-scrollbar">
              {relevantCategories.map(cat => (
                <button
                  key={cat.id}
                  onClick={() => handleCategoryClick(cat.id)}
                  className={`ink-chip ${selectedCategory === cat.id ? 'active' : ''}`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          <div className="ink-controls-bottom">
            <div className="ink-stats">
              <span className="text-sm font-bold text-slate-500">
                Found {filteredAndSortedProducts.length} Results
              </span>
            </div>
            <div className="ink-dropdowns">
              <div className="ink-select-wrapper">
                <select
                  value={selectedBrand}
                  onChange={(e) => setSelectedBrand(e.target.value)}
                  className="ink-select"
                >
                  <option value="all">Every Brand</option>
                  {uniqueBrands.map(brand => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" size={16} />
              </div>
              <div className="ink-select-wrapper">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="ink-select"
                >
                  <option value="featured">Recommended</option>
                  <option value="price-low">Lowest Price</option>
                  <option value="price-high">Highest Price</option>
                  <option value="rating">Top Rated</option>
                </select>
                <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400" size={16} />
              </div>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {filteredAndSortedProducts.length > 0 ? (
            <motion.div
              key="grid"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="ink-grid"
            >
              {filteredAndSortedProducts.map((product, index) => (
                <motion.div
                  key={product._id || index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="ink-card"
                >
                  <div className="ink-image-holder">
                    <img
                      src={product.image || (product.images?.[0]?.startsWith('http') ? product.images[0] : `${import.meta.env.VITE_API_URL?.replace('/api', '') || ''}${product.images?.[0]}`) || 'https://via.placeholder.com/300'}
                      alt={product.name}
                      onError={(e) => { e.target.src = 'https://via.placeholder.com/300?text=No+Image'; }}
                    />
                    <div className={`ink-stock-badge ${product.countInStock > 0 ? 'in-stock' : 'out-of-stock'}`}>
                      {product.countInStock > 0 ? 'Verified In Stock' : 'Out of Stock'}
                    </div>
                  </div>

                  <div className="ink-card-info">
                    <div className="ink-brand-tag">{product.brand || 'Premium'}</div>
                    <h3>{product.title || product.name}</h3>

                    <div className="ink-price-row">
                      <span className="ink-current-price">${product.price?.toFixed(2)}</span>
                      {(product.oldPrice > 0 || product.originalPrice > 0) && (
                        <span className="ink-old-price">${(product.oldPrice || product.originalPrice)?.toFixed(2)}</span>
                      )}
                    </div>

                    <div className="ink-card-actions">
                      <button onClick={(e) => handleDetails(e, product)} className="ink-btn ink-btn-secondary">
                        <Eye size={18} /> Details
                      </button>
                      <button onClick={(e) => handleBuyNow(e, product)} className="ink-btn ink-btn-primary" disabled={product.countInStock === 0}>
                        <ShoppingBag size={18} /> Buy Now
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            !loading && (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="ink-empty"
              >
                <div className="text-6xl mb-4">🔍</div>
                <h2>No Matches Found</h2>
                <p>Try adjusting your search or switching categories.</p>
              </motion.div>
            )
          )}
        </AnimatePresence>

        {loading && (
          <div className="flex justify-center py-20">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
              className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"
            />
          </div>
        )}

        {!loading && currPage < totalPages && (
          <div className="ink-load-more">
            <button onClick={handleLoadMore} className="load-more-btn">
              Load More Essentials
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default InkToner;
