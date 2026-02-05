import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/actions/cartActions';
import printerImg from '../../assets/logo/PrintsCartsLogo.png'; // Fallback

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);

  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent navigation if clicked on card link
    e.stopPropagation();
    
    // Add to cart with quantity 1
    dispatch(addToCart(product.slug || product._id, 1));
    // Optional: Show toast or feedback
  };

  const imageUrl = product.image 
    ? (product.image.startsWith('http') ? product.image : `${import.meta.env.VITE_API_URL.replace('/api', '')}${product.image}`)
    : (product.images && product.images.length > 0 
        ? (product.images[0].startsWith('http') ? product.images[0] : `${import.meta.env.VITE_API_URL.replace('/api', '')}${product.images[0]}`) 
        : printerImg);

  const price = typeof product.price === 'number' ? product.price.toFixed(2) : product.price;

  return (
    <Link 
      to={`/product/${product.slug || product._id}`} 
      className="product-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="product-image-container">
        <img 
          src={imageUrl} 
          alt={product.title || product.name} 
          onError={(e) => { e.target.src = 'https://via.placeholder.com/300?text=No+Image'; }}
          className="product-image"
        />
        {isHovered && (
          <button className="quick-add-btn" onClick={handleAddToCart}>
             Add to Cart
          </button>
        )}
      </div>
      
      <div className="product-info">
        <div className="product-category">
            {product.category?.name || product.category || 'Printer'}
        </div>
        <h3 className="product-title" title={product.title || product.name}>
          {product.title || product.name}
        </h3>
        <div className="product-price">
           ${price}
        </div>
      </div>

      <style>{`
        .product-card {
          display: flex;
          flex-direction: column;
          background: #fff;
          border: 1px solid #eee;
          border-radius: 8px;
          overflow: hidden;
          text-decoration: none;
          color: inherit;
          transition: transform 0.2s, box-shadow 0.2s;
          height: 100%;
        }
        .product-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.05);
        }
        .product-image-container {
          position: relative;
          width: 100%;
          padding-top: 100%; /* 1:1 Aspect Ratio */
          background: #f9fafb;
          overflow: hidden;
        }
        .product-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: contain;
          padding: 20px;
          transition: transform 0.3s;
        }
        .product-card:hover .product-image {
          transform: scale(1.05);
        }
        .quick-add-btn {
          position: absolute;
          bottom: 10px;
          left: 50%;
          transform: translateX(-50%);
          background: #0f3d91;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 0.85rem;
          font-weight: 600;
          cursor: pointer;
          opacity: 0;
          animation: fadeIn 0.3s forwards;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        @keyframes fadeIn {
            to { opacity: 1; bottom: 20px; }
        }
        .product-info {
          padding: 16px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        .product-category {
          font-size: 0.75rem;
          color: #6b7280;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-bottom: 6px;
        }
        .product-title {
          font-size: 0.95rem;
          font-weight: 600;
          color: #111827;
          margin: 0 0 8px 0;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          flex: 1;
        }
        .product-price {
          font-size: 1.1rem;
          font-weight: 700;
          color: #0f3d91;
          margin-top: auto;
        }
      `}</style>
    </Link>
  );
};

export default ProductCard;
