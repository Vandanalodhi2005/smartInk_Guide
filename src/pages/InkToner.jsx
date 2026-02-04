import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { useCart } from '../context/CartContext';
import { useFavorites } from '../context/useFavorites';
import '../styles/pages.css';

const InkToner = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { addToCart } = useCart();
  const { isFavorite, toggleFavorite } = useFavorites();

  const handleAddToCart = (product) => {
    addToCart(product);
    const notification = document.createElement('div');
    notification.className = 'cart-notification';
    notification.textContent = `${product.name} added to cart!`;
    document.body.appendChild(notification);
    setTimeout(() => {
      notification.classList.add('show');
    }, 10);
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => document.body.removeChild(notification), 300);
    }, 2000);
  };

  const categories = [
    { id: 'all', label: 'All Products' },
    { id: 'ink', label: 'Ink Cartridges' },
    { id: 'toner', label: 'Toner Cartridges' },
    { id: 'combo', label: 'Combo Packs' },
    { id: 'photo', label: 'Photo Ink' }
  ];

  // Sample products
  const products = [
    {
      id: 1,
      name: 'HP 305 Black & Tri-Color Ink Cartridge Combo Pack',
      category: 'combo',
      price: 39.99,
      originalPrice: 49.99,
      image: 'https://images.unsplash.com/photo-1606756790136-261ff86dd101?w=400',
      compatible: 'HP DeskJet 2620, 2630, 3755',
      yield: 'Up to 120 pages (black), 100 pages (color)'
    },
    {
      id: 2,
      name: 'Canon PGI-280XL Black Ink Cartridge',
      category: 'ink',
      price: 24.99,
      originalPrice: 29.99,
      image: 'https://images.unsplash.com/photo-1606756790136-261ff86dd101?w=400',
      compatible: 'Canon PIXMA TR8620, MG3620',
      yield: 'Up to 300 pages'
    },
    {
      id: 3,
      name: 'HP 206A Black Laser Toner Cartridge',
      category: 'toner',
      price: 89.99,
      originalPrice: 109.99,
      image: 'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=400',
      compatible: 'HP LaserJet Pro MFP 3301fdw',
      yield: 'Up to 1,200 pages'
    },
    {
      id: 4,
      name: 'Epson 103 Black Ink Cartridge (2-Pack)',
      category: 'ink',
      price: 19.99,
      originalPrice: 24.99,
      image: 'https://images.unsplash.com/photo-1606756790136-261ff86dd101?w=400',
      compatible: 'Epson EcoTank ET-2720, ET-2750',
      yield: 'Up to 450 pages per cartridge'
    },
    {
      id: 5,
      name: 'Brother TN760 High-Yield Black Toner',
      category: 'toner',
      price: 54.99,
      originalPrice: 64.99,
      image: 'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=400',
      compatible: 'Brother HL-L2350DW, HL-L2370DW',
      yield: 'Up to 2,600 pages'
    },
    {
      id: 6,
      name: 'Canon CLI-281 5-Color Photo Ink Set',
      category: 'photo',
      price: 69.99,
      originalPrice: 79.99,
      image: 'https://images.unsplash.com/photo-1606756790136-261ff86dd101?w=400',
      compatible: 'Canon PIXMA Photo Printers',
      yield: 'Up to 300 photos'
    }
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <>
      <Navbar />
      <div className="ink-toner-page">
        <div className="ink-toner-container">
          <h1 className="page-title">Ink & Toner</h1>
          <p className="page-subtitle">
            Find genuine-quality ink and toner cartridges for your printer. Each product includes
            detailed compatibility information to help you choose the right cartridge.
          </p>

          <div className="ink-hero grid md:grid-cols-2 gap-8 items-center mb-8">
            <div className="hero-left">
              <h2 className="hero-title text-2xl md:text-3xl font-bold text-gray-800">Genuine Ink & Toner for Your Printer</h2>
              <p className="hero-text text-gray-600 mt-3">High-quality cartridges, clear compatibility details, and bulk options to keep your business printing smoothly. Select a category to get started or view the featured cartridge to the right.</p>
            </div>

            <div className="hero-right">
              {/* Featured product (first item) */}
              {products[0] && (
                <div className="product-card featured-product">
                  <div className="product-image">
                    <img src={products[0].image} alt={products[0].name} />
                  </div>
                  <div className="product-info">
                    <h3>{products[0].name}</h3>
                    <div className="product-price">
                      <span className="current-price">${products[0].price}</span>
                      {products[0].originalPrice && (
                        <span className="original-price">${products[0].originalPrice}</span>
                      )}
                    </div>

                    <div className="product-actions mt-4">
                      <button className="add-to-cart-btn" onClick={() => handleAddToCart(products[0])}>Add to Cart</button>
                      <Link to={`/ink-toner/${products[0].id}`} className="view-details-btn-sm">View Details</Link>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

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

          <div className="products-grid">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="product-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="product-image" style={{ position: 'relative' }}>
                  <img src={product.image} alt={product.name} />

                  <button
                    type="button"
                    onClick={() => toggleFavorite(product)}
                    className="fav-toggle"
                    style={{
                      position: 'absolute',
                      top: 10,
                      right: 10,
                      background: 'white',
                      borderRadius: 12,
                      padding: 8,
                      border: '1px solid rgba(0,0,0,0.06)',
                      cursor: 'pointer',
                      zIndex: 20
                    }}
                  >
                    {isFavorite(product.id) ? (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" style={{ color: '#ef4444' }}>
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                      </svg>
                    ) : (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                      </svg>
                    )}
                  </button>

                  {/* Discount badge removed */}
                </div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <div className="compatibility-info">
                    <strong>Compatible with:</strong>
                    <p>{product.compatible}</p>
                  </div>
                  <div className="yield-info">
                    <strong>Page Yield:</strong>
                    <p>{product.yield}</p>
                  </div>
                  <div className="product-price">
                    <span className="current-price">${product.price}</span>
                    {product.originalPrice && (
                      <span className="original-price">${product.originalPrice}</span>
                    )}
                  </div>
                  <div className="product-actions">
                    <button
                      className="add-to-cart-btn"
                      onClick={() => handleAddToCart(product)}
                    >
                      Add to Cart
                    </button>
                    <Link to={`/ink-toner/${product.id}`} className="view-details-btn-sm">View Details</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="no-products">
              <p>No products found in this category.</p>
            </div>
          )}

          <div className="compatibility-section">
            <h2>Find Compatible Cartridges</h2>
            <p>
              Not sure which cartridge is right for your printer? Each product page includes
              detailed compatibility information based on manufacturer specifications. You can also
              check your printer model on the product label or user manual.
            </p>
            <div className="compatibility-features">
              <div className="feature-item">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="14" stroke="#0f3d91" strokeWidth="2" fill="none" />
                  <path d="M12 16L15 19L20 13" stroke="#0f3d91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Genuine Quality Products</span>
              </div>
              <div className="feature-item">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="14" stroke="#0f3d91" strokeWidth="2" fill="none" />
                  <path d="M12 16L15 19L20 13" stroke="#0f3d91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Clear Compatibility Information</span>
              </div>
              <div className="feature-item">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="14" stroke="#0f3d91" strokeWidth="2" fill="none" />
                  <path d="M12 16L15 19L20 13" stroke="#0f3d91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <span>Manufacturer Specifications</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default InkToner;

