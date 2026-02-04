import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/useFavorites';
import '../styles/pages.css';

const Printers = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [searchQuery, setSearchQuery] = useState('');
  const [priceRange, setPriceRange] = useState({ min: 0, max: 2000 });
  const [showFilters, setShowFilters] = useState(false);
  const { addToCart } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();

  const categories = [
    { id: 'all', label: 'All Printers' },
    { id: 'inkjet', label: 'Inkjet Printers' },
    { id: 'laser', label: 'Laser Printers' },
    { id: 'all-in-one', label: 'All-in-One' },
    { id: 'photo', label: 'Photo Printers' },
    { id: 'wireless', label: 'Wireless Printers' },
    { id: 'color', label: 'Color Printers' },
    { id: 'monochrome', label: 'Monochrome' }
  ];

  // Expanded printer products database
  const printers = [
    {
      id: 1,
      name: 'HP LaserJet Pro MFP 3301fdw',
      category: 'laser',
      subcategory: 'all-in-one',
      price: 539,
      originalPrice: 639,
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400',
      features: ['Wireless', 'Color', 'All-in-One', 'Duplex'],
      rating: 4.5,
      reviews: 234,
      inStock: true,
      brand: 'HP',
      printSpeed: '22 ppm',
      maxPaperSize: 'A4',
      connectivity: ['Wi-Fi', 'USB', 'Ethernet']
    },
    {
      id: 2,
      name: 'Canon PIXMA TR8620 All-in-One',
      category: 'inkjet',
      subcategory: 'all-in-one',
      price: 199,
      originalPrice: 249,
      image: 'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=400',
      features: ['Wireless', 'Color', 'Photo Printing', 'Auto-Duplex'],
      rating: 4.3,
      reviews: 189,
      inStock: true,
      brand: 'Canon',
      printSpeed: '15 ppm',
      maxPaperSize: 'A4',
      connectivity: ['Wi-Fi', 'USB']
    },
    {
      id: 3,
      name: 'Epson EcoTank ET-2720',
      category: 'inkjet',
      subcategory: 'all-in-one',
      price: 179,
      originalPrice: 229,
      image: 'https://images.unsplash.com/photo-1606756790136-261ff86dd101?w=400',
      features: ['Wireless', 'Ink Tank', 'All-in-One', 'Eco-Friendly'],
      rating: 4.7,
      reviews: 456,
      inStock: true,
      brand: 'Epson',
      printSpeed: '10 ppm',
      maxPaperSize: 'A4',
      connectivity: ['Wi-Fi', 'USB']
    },
    {
      id: 4,
      name: 'Brother HL-L2350DW',
      category: 'laser',
      subcategory: 'monochrome',
      price: 99,
      originalPrice: 149,
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400',
      features: ['Wireless', 'Monochrome', 'Compact', 'Duplex'],
      rating: 4.4,
      reviews: 312,
      inStock: true,
      brand: 'Brother',
      printSpeed: '32 ppm',
      maxPaperSize: 'A4',
      connectivity: ['Wi-Fi', 'USB']
    },
    {
      id: 5,
      name: 'HP Envy 6055e',
      category: 'inkjet',
      subcategory: 'all-in-one',
      price: 119,
      originalPrice: 159,
      image: 'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=400',
      features: ['Wireless', 'Color', 'All-in-One', 'Mobile Printing'],
      rating: 4.2,
      reviews: 278,
      inStock: true,
      brand: 'HP',
      printSpeed: '10 ppm',
      maxPaperSize: 'A4',
      connectivity: ['Wi-Fi', 'USB']
    },
    {
      id: 6,
      name: 'Canon imageCLASS MF445dw',
      category: 'laser',
      subcategory: 'all-in-one',
      price: 299,
      originalPrice: 399,
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400',
      features: ['Wireless', 'Monochrome', 'All-in-One', 'Fax'],
      rating: 4.6,
      reviews: 145,
      inStock: true,
      brand: 'Canon',
      printSpeed: '28 ppm',
      maxPaperSize: 'A4',
      connectivity: ['Wi-Fi', 'USB', 'Ethernet']
    },
    {
      id: 7,
      name: 'HP LaserJet Pro 4201dw',
      category: 'laser',
      subcategory: 'color',
      price: 549,
      originalPrice: 699,
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400',
      features: ['Wireless', 'Color', 'Duplex', 'High-Speed'],
      rating: 4.5,
      reviews: 201,
      inStock: true,
      brand: 'HP',
      printSpeed: '35 ppm',
      maxPaperSize: 'A4',
      connectivity: ['Wi-Fi', 'USB', 'Ethernet']
    },
    {
      id: 8,
      name: 'Epson SureColor P6570D',
      category: 'photo',
      subcategory: 'photo',
      price: 4695,
      originalPrice: 4995,
      image: 'https://images.unsplash.com/photo-1606756790136-261ff86dd101?w=400',
      features: ['Large Format', 'Photo Quality', 'PostScript', 'Professional'],
      rating: 4.8,
      reviews: 67,
      inStock: true,
      brand: 'Epson',
      printSpeed: 'N/A',
      maxPaperSize: '24"',
      connectivity: ['USB', 'Ethernet']
    },
    {
      id: 9,
      name: 'Brother MFC-L3780CDW',
      category: 'laser',
      subcategory: 'all-in-one',
      price: 569,
      originalPrice: 649,
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400',
      features: ['Wireless', 'Color', 'All-in-One', 'Duplex'],
      rating: 4.6,
      reviews: 156,
      inStock: true,
      brand: 'Brother',
      printSpeed: '25 ppm',
      maxPaperSize: 'A4',
      connectivity: ['Wi-Fi', 'USB', 'Ethernet']
    },
    {
      id: 10,
      name: 'HP Smart Tank 5101',
      category: 'inkjet',
      subcategory: 'all-in-one',
      price: 189,
      originalPrice: 259,
      image: 'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=400',
      features: ['Wireless', 'Ink Tank', 'All-in-One', 'AI-Enabled'],
      rating: 4.4,
      reviews: 423,
      inStock: true,
      brand: 'HP',
      printSpeed: '12 ppm',
      maxPaperSize: 'A4',
      connectivity: ['Wi-Fi', 'USB']
    },
    {
      id: 11,
      name: 'Canon PIXMA G6020',
      category: 'inkjet',
      subcategory: 'all-in-one',
      price: 249,
      originalPrice: 299,
      image: 'https://images.unsplash.com/photo-1606756790136-261ff86dd101?w=400',
      features: ['Wireless', 'Ink Tank', 'All-in-One', 'Photo Printing'],
      rating: 4.5,
      reviews: 298,
      inStock: true,
      brand: 'Canon',
      printSpeed: '13 ppm',
      maxPaperSize: 'A4',
      connectivity: ['Wi-Fi', 'USB']
    },
    {
      id: 12,
      name: 'HP LaserJet M209dw',
      category: 'laser',
      subcategory: 'monochrome',
      price: 199,
      originalPrice: 299,
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400',
      features: ['Wireless', 'Monochrome', 'Compact', 'Duplex'],
      rating: 4.3,
      reviews: 267,
      inStock: true,
      brand: 'HP',
      printSpeed: '30 ppm',
      maxPaperSize: 'A4',
      connectivity: ['Wi-Fi', 'USB']
    }
  ];

  // Filter and sort logic
  const filteredAndSortedPrinters = useMemo(() => {
    let filtered = printers;

    // Category filter
    if (selectedCategory !== 'all') {
      filtered = filtered.filter(p =>
        p.category === selectedCategory || p.subcategory === selectedCategory
      );
    }

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Price range filter
    filtered = filtered.filter(p =>
      p.price >= priceRange.min && p.price <= priceRange.max
    );

    // Stock filter
    filtered = filtered.filter(p => p.inStock);

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
        sorted.sort((a, b) => b.rating - a.rating);
        break;
      case 'name':
        sorted.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        // Featured - keep original order
        break;
    }

    return sorted;
  }, [selectedCategory, searchQuery, priceRange, sortBy]);

  const handleAddToCart = (printer) => {
    addToCart(printer);
    // Show success notification
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.textContent = `${printer.name} added to cart!`;
    document.body.appendChild(notification);
    setTimeout(() => {
      notification.classList.add('show');
    }, 10);
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => document.body.removeChild(notification), 300);
    }, 2000);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      <>
        {'★'.repeat(fullStars)}
        {hasHalfStar && '½'}
        {'☆'.repeat(emptyStars)}
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="printers-page">
        <div className="printers-container">
          <h1 className="page-title">Printers</h1>
          <p className="page-subtitle">
            Find the perfect printer for your home or office. Browse our selection of reliable printers
            with clear compatibility information and detailed specifications.
          </p>

          {/* Search Bar */}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search printers by name, brand, or features..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="search-input"
            />
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="search-icon">
              <path d="M9 16C12.866 16 16 12.866 16 9C16 5.13401 12.866 2 9 2C5.13401 2 2 5.13401 2 9C2 12.866 5.13401 16 9 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M18 18L14 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <div className="printers-filters">
            <div className="filters-left">
              <div className="category-filters">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                    onClick={() => setSelectedCategory(category.id)}
                  >
                    {category.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="filters-right">
              <button
                className="filter-toggle-btn"
                onClick={() => setShowFilters(!showFilters)}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 5H17M5 10H15M7 15H13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Filters
              </button>
              <div className="sort-filter">
                <label htmlFor="sort">Sort by:</label>
                <select
                  id="sort"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="sort-select"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="name">Name: A to Z</option>
                </select>
              </div>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="advanced-filters">
              <div className="price-filter">
                <label>Price Range: ${priceRange.min} - ${priceRange.max}</label>
                <div className="price-inputs">
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    value={priceRange.max}
                    onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
                    className="price-slider"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Results Count */}
          <div className="results-count">
            <p>
              Showing <strong>{filteredAndSortedPrinters.length}</strong> of {printers.length} printers
            </p>
          </div>

          {/* Printers Grid */}
          <div className="printers-grid">
            {filteredAndSortedPrinters.map((printer, index) => (
              <div
                key={printer.id}
                className="printer-card"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="printer-image" style={{ position: 'relative' }}>
                  <img src={printer.image} alt={printer.name} />

                  {/* Favorite toggle */}
                  <button
                    type="button"
                    aria-pressed={false}
                    onClick={() => toggleFavorite(printer)}
                    className="fav-toggle"
                    style={{
                      position: 'absolute',
                      top: 12,
                      right: 12,
                      background: 'white',
                      borderRadius: 12,
                      padding: 8,
                      border: '1px solid rgba(0,0,0,0.06)',
                      cursor: 'pointer',
                      zIndex: 20
                    }}
                  >
                    {isFavorite(printer.id) ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#ef4444' }}>
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    )}
                  </button>

                  <div className="printer-badge">Best Seller</div>
                  {/* Discount badge removed */}
                  {!printer.inStock && (
                    <div className="out-of-stock-badge">Out of Stock</div>
                  )}
                </div>
                <div className="printer-info">
                  <div className="printer-brand">{printer.brand}</div>
                  <h3>{printer.name}</h3>
                  <div className="printer-features">
                    {printer.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="feature-tag">{feature}</span>
                    ))}
                    {printer.features.length > 3 && (
                      <span className="feature-tag">+{printer.features.length - 3} more</span>
                    )}
                  </div>
                  <div className="printer-specs">
                    <div className="spec-item">
                      <span className="spec-label">Speed:</span>
                      <span className="spec-value">{printer.printSpeed}</span>
                    </div>
                    <div className="spec-item">
                      <span className="spec-label">Paper Size:</span>
                      <span className="spec-value">{printer.maxPaperSize}</span>
                    </div>
                  </div>
                  <div className="printer-rating">
                    <span className="stars">{renderStars(printer.rating)}</span>
                    <span className="rating-text">({printer.rating})</span>
                    <span className="reviews-count">{printer.reviews} reviews</span>
                  </div>
                  <div className="printer-price">
                    <span className="current-price">${printer.price}</span>
                    {printer.originalPrice && (
                      <span className="original-price">${printer.originalPrice}</span>
                    )}
                  </div>
                  <div className="printer-actions">
                    <button
                      className="add-to-cart-btn"
                      onClick={() => handleAddToCart(printer)}
                      disabled={!printer.inStock}
                    >
                      {printer.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                    <Link to={`/printers/${printer.id}`} className="view-details-btn">View Details</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredAndSortedPrinters.length === 0 && (
            <div className="no-products">
              <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
                <circle cx="32" cy="32" r="30" stroke="#e0e0e0" strokeWidth="2" />
                <path d="M32 20V32M32 36H32.01" stroke="#e0e0e0" strokeWidth="2" strokeLinecap="round" />
              </svg>
              <h3>No printers found</h3>
              <p>Try adjusting your filters or search query</p>
            </div>
          )}

          {/* Info Section */}
          <div className="printer-info-section">
            <h2>Why Choose Our Printers?</h2>
            <div className="info-grid">
              <div className="info-card">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <rect width="48" height="48" rx="8" fill="#e0f2fe" />
                  <path d="M24 12L28 20H36L29 26L32 34L24 28L16 34L19 26L12 20H20L24 12Z" fill="#0f3d91" />
                </svg>
                <h3>Genuine Quality</h3>
                <p>All printers are genuine, original equipment from trusted manufacturers.</p>
              </div>
              <div className="info-card">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <rect width="48" height="48" rx="8" fill="#e0f2fe" />
                  <path d="M24 16C20.69 16 18 18.69 18 22V26C18 29.31 20.69 32 24 32C27.31 32 30 29.31 30 26V22C30 18.69 27.31 16 24 16Z" fill="#0f3d91" />
                </svg>
                <h3>Clear Compatibility</h3>
                <p>Detailed compatibility information for all printer models and cartridges.</p>
              </div>
              <div className="info-card">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                  <rect width="48" height="48" rx="8" fill="#e0f2fe" />
                  <path d="M16 20H32V22H16V20Z" fill="#0f3d91" />
                  <path d="M16 24H28V26H16V24Z" fill="#0f3d91" />
                  <path d="M20 28H32V30H20V28Z" fill="#0f3d91" />
                </svg>
                <h3>Fast Shipping</h3>
                <p>Quick and reliable delivery across the United States and Canada.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Printers;
