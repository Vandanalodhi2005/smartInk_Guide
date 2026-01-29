import { useState } from 'react';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { useCart } from '../context/CartContext';
import '../styles/pages.css';

const InkToner = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const { addToCart } = useCart();

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
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                  {product.originalPrice && (
                    <div className="discount-badge">
                      {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                    </div>
                  )}
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
                  <button 
                    className="add-to-cart-btn"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
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
                  <circle cx="16" cy="16" r="14" stroke="#0f3d91" strokeWidth="2" fill="none"/>
                  <path d="M12 16L15 19L20 13" stroke="#0f3d91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Genuine Quality Products</span>
              </div>
              <div className="feature-item">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="14" stroke="#0f3d91" strokeWidth="2" fill="none"/>
                  <path d="M12 16L15 19L20 13" stroke="#0f3d91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span>Clear Compatibility Information</span>
              </div>
              <div className="feature-item">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                  <circle cx="16" cy="16" r="14" stroke="#0f3d91" strokeWidth="2" fill="none"/>
                  <path d="M12 16L15 19L20 13" stroke="#0f3d91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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

