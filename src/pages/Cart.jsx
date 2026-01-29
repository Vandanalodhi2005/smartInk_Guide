import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import '../styles/pages.css';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  if (cart.length === 0) {
    return (
      <>
        <Navbar />
        <div className="cart-page">
          <div className="cart-container">
            <h1 className="page-title">Shopping Cart</h1>
            <div className="empty-cart">
              <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
                <circle cx="60" cy="60" r="50" stroke="#e0e0e0" strokeWidth="2" fill="none"/>
                <path d="M40 40L50 50L80 20" stroke="#e0e0e0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M35 50H85M35 70H85M35 90H65" stroke="#e0e0e0" strokeWidth="2" strokeLinecap="round"/>
              </svg>
              <h2>Your cart is empty</h2>
              <p>Looks like you haven't added any items to your cart yet.</p>
              <Link to="/printers" className="btn-primary">Start Shopping</Link>
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="cart-page">
        <div className="cart-container">
          <h1 className="page-title">Shopping Cart</h1>

          <div className="cart-content">
            <div className="cart-items">
              <div className="cart-header">
                <h2>Items ({cart.length})</h2>
                <button onClick={clearCart} className="clear-cart-btn">Clear Cart</button>
              </div>

              {cart.map((item) => (
                <div key={item.id} className="cart-item">
                  <div className="cart-item-image">
                    <img src={item.image} alt={item.name} />
                  </div>
                  <div className="cart-item-details">
                    <h3>{item.name}</h3>
                    <div className="cart-item-features">
                      {item.features?.slice(0, 2).map((feature, idx) => (
                        <span key={idx} className="feature-tag">{feature}</span>
                      ))}
                    </div>
                    <div className="cart-item-price">${item.price}</div>
                  </div>
                  <div className="cart-item-quantity">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="quantity-btn"
                    >
                      −
                    </button>
                    <span className="quantity-value">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="quantity-btn"
                    >
                      +
                    </button>
                  </div>
                  <div className="cart-item-total">
                    <div className="item-total-price">${(item.price * item.quantity).toFixed(2)}</div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="remove-btn"
                      aria-label="Remove item"
                    >
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M5 5L15 15M15 5L5 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Order Summary</h2>
              <div className="summary-row">
                <span>Subtotal</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className="summary-row">
                <span>Tax</span>
                <span>${(getCartTotal() * 0.08).toFixed(2)}</span>
              </div>
              <div className="summary-divider"></div>
              <div className="summary-row total">
                <span>Total</span>
                <span>${(getCartTotal() * 1.08).toFixed(2)}</span>
              </div>
              <Link to="/checkout" className="checkout-btn">Proceed to Checkout</Link>
              <Link to="/printers" className="continue-shopping">Continue Shopping</Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Cart;

