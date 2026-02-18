import { useState, useEffect, useRef } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import {
  listProductDetails,
  listProducts,
  createProductReview,
  updateProductReview,
  deleteProductReview
} from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";
import {
  PRODUCT_CREATE_REVIEW_RESET,
} from "../redux/constants/productConstants";
import { ShoppingCart, CreditCard, Star, ChevronLeft, ChevronRight, CheckCircle, Info } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import "./ProductDetails.css";

const ProductDetails = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { products: relatedProducts } = productList;

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [qty, setQty] = useState(1);
  const [tab, setTab] = useState("overview");

  // Review State
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [editingReviewId, setEditingReviewId] = useState(null);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [canReview, setCanReview] = useState(false);
  const [showEligibilityToast, setShowEligibilityToast] = useState(false);
  const [showLoginToast, setShowLoginToast] = useState(false);

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const userHasReviewed = product?.reviews?.some((r) => r.user === userInfo?._id);

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const { success: successProductReview } = productReviewCreate;

  useEffect(() => {
    if (product && product.category) {
      const categoryName = product.category.name || product.category;
      dispatch(listProducts('', categoryName, 1));
    }

    const checkEligibility = async () => {
      if (userInfo && product && product._id) {
        try {
          const config = { headers: { Authorization: `Bearer ${userInfo.token}` } };
          const { data } = await axios.get(
            `${import.meta.env.VITE_API_URL}/orders/check-review-eligibility/${product._id}`,
            config
          );
          setCanReview(data.canReview);
        } catch (error) {
          console.error("Error checking review eligibility", error);
          setCanReview(false);
        }
      }
    };
    checkEligibility();
  }, [dispatch, product, userInfo]);

  useEffect(() => {
    if (successProductReview) {
      setRating(0);
      setComment("");
      setEditingReviewId(null);
      setShowReviewForm(false);
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
      if (slug) dispatch(listProductDetails(slug));
    }
  }, [successProductReview, slug, dispatch]);

  const submitReviewHandler = (e) => {
    e.preventDefault();
    if (editingReviewId) {
      dispatch(updateProductReview(product._id, { rating, comment, reviewId: editingReviewId }));
      setEditingReviewId(null);
    } else {
      dispatch(createProductReview(product._id, { rating, comment }));
    }
  };

  const deleteReviewHandler = (reviewId) => {
    if (window.confirm('Are you sure you want to delete this review?')) {
      dispatch(deleteProductReview(product._id, reviewId));
      setTimeout(() => { if (slug) dispatch(listProductDetails(slug)) }, 1000);
    }
  };

  const startEditReview = (review) => {
    setRating(review.rating);
    setComment(review.comment);
    setEditingReviewId(review._id);
    window.scrollTo({ top: document.querySelector('.pd-tabs-section').offsetTop, behavior: 'smooth' });
  };

  const handleReviewClick = () => {
    if (showReviewForm) {
      setShowReviewForm(false);
      return;
    }
    if (canReview) {
      setShowReviewForm(true);
    } else {
      setShowEligibilityToast(true);
      setTimeout(() => setShowEligibilityToast(false), 3000);
    }
  };

  // Zoom state
  const [isHovered, setIsHovered] = useState(false);
  const [zoomPos, setZoomPos] = useState({ x: 50, y: 50 });

  useEffect(() => {
    if (slug) dispatch(listProductDetails(slug));
    window.scrollTo(0, 0);
  }, [dispatch, slug]);

  useEffect(() => {
    setActiveImageIndex(0);
    setQty(1);
  }, [product]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-secondary mb-6"></div>
        <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Synchronizing Details...</p>
      </div>
    );
  }

  if (error || !product) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] py-20 text-center px-4">
        <h2 className="text-2xl font-black text-primary mb-4">Product Transmission Interrupted</h2>
        <p className="text-slate-500 mb-8">We couldn't locate the product you're looking for.</p>
        <Link to="/printers" className="px-8 py-3 bg-primary text-white rounded-xl font-bold text-sm uppercase tracking-widest hover:bg-secondary transition-all">
          Return to Catalog
        </Link>
      </div>
    );
  }

  const images = product.images && product.images.length > 0 ? product.images : product.image ? [product.image] : [];
  const activeImgSrc = images[activeImageIndex];

  const handleAddToCart = () => {
    if (!userInfo) {
      setShowLoginToast(true);
      setTimeout(() => setShowLoginToast(false), 3000);
      return;
    }
    dispatch(addToCart(product.slug || product._id, qty));
    navigate('/cart');
  };

  const buyNowHandler = () => {
    if (!userInfo) {
      setShowLoginToast(true);
      setTimeout(() => setShowLoginToast(false), 3000);
      return;
    }
    dispatch(addToCart(product.slug || product._id, qty));
    navigate('/cart?redirect=shipping');
  };

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;
    setZoomPos({ x, y });
  };

  return (
    <div className="product-details-redesign main-content">
      <AnimatePresence>
        {showEligibilityToast && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed top-24 right-5 bg-orange-500 text-white px-6 py-4 rounded-2xl shadow-2xl z-[100] flex items-center gap-4"
          >
            <Info size={24} />
            <div>
              <h4 className="font-bold">Review Locked</h4>
              <p className="text-xs opacity-90">Purchase this item to share your feedback.</p>
            </div>
          </motion.div>
        )}

        {showLoginToast && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed top-24 right-5 bg-rose-600 text-white px-6 py-4 rounded-2xl shadow-2xl z-[100] flex items-center gap-4"
          >
            <Info size={24} />
            <div>
              <h4 className="font-bold">Authentication Required</h4>
              <p className="text-xs opacity-90">Please sign in to manage your cart.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="pd-premium-container">
        <div className="pd-main-grid">

          {/* Thumbnails Sidebar */}
          <div className="pd-thumbs-column">
            {images.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`thumb-item ${i === activeImageIndex ? "active" : ""}`}
                onMouseEnter={() => setActiveImageIndex(i)}
                onClick={() => setActiveImageIndex(i)}
              >
                <img src={img} alt={`${product.title} ${i + 1}`} />
              </motion.div>
            ))}
          </div>

          {/* Featured Image Stage */}
          <div className="pd-image-stage">
            <div
              className="w-full h-full flex items-center justify-center p-12"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              onMouseMove={handleMouseMove}
            >
              <img
                src={activeImgSrc}
                alt={product.title}
                style={{
                  transformOrigin: `${zoomPos.x}% ${zoomPos.y}%`,
                  transform: isHovered ? "scale(1.8)" : "scale(1)",
                }}
              />
            </div>
          </div>

          {/* Product Specs Panel */}
          <div className="pd-content-panel">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="pd-brand-badge">{product.brand || 'Premium Edition'}</span>
              <h1>{product.title || product.name}</h1>

              {/* Structured Attributes */}
              <div className="flex flex-wrap items-center gap-2 mb-2">
                {Array.isArray(product.technology) && product.technology.length > 0 && (
                  <span className="inline-block bg-slate-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-blue-100">{product.technology.join(', ')}</span>
                )}
                {Array.isArray(product.usageCategory) && product.usageCategory.length > 0 && (
                  <span className="inline-block bg-blue-50 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-blue-100">{product.usageCategory.join(', ')}</span>
                )}
                {Array.isArray(product.allInOneType) && product.allInOneType.length > 0 && (
                  <span className="inline-block bg-purple-50 text-purple-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-purple-100">{product.allInOneType.join(', ')}</span>
                )}
                {product.wireless && (
                  <span className="inline-block bg-green-50 text-green-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-green-100">Wireless: {product.wireless}</span>
                )}
                {Array.isArray(product.mainFunction) && product.mainFunction.length > 0 && (
                  <span className="inline-block bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest border border-emerald-100">{product.mainFunction.join(', ')}</span>
                )}
                {product.countInStock > 0 ? (
                  <span className="inline-block bg-green-100 text-green-700 text-xs font-bold px-3 py-1 rounded-full">In Stock</span>
                ) : (
                  <span className="inline-block bg-red-100 text-red-700 text-xs font-bold px-3 py-1 rounded-full">Out of Stock</span>
                )}
              </div>

              <div className="pd-rating-row">
                <div className="pd-stars">
                  {"★".repeat(Math.round(product.rating || 0))}
                  <span className="text-slate-200">{"★".repeat(5 - Math.round(product.rating || 0))}</span>
                </div>
                <span className="pd-review-count">({product.numReviews || 0} Professional Reviews)</span>
              </div>

              <div className="pd-price-card">
                {/* Bonus offer above price */}
                {product.bonusOffer && (
                  <div className="bg-yellow-100 text-yellow-800 font-extrabold text-xs uppercase tracking-widest rounded-xl px-4 py-2 mb-4 text-center border border-yellow-300 shadow-sm">
                    {product.bonusOffer}
                  </div>
                )}
                <div className="pd-price-row">
                  <span className="pd-main-price">${product.price?.toFixed(2)}</span>
                  {product.oldPrice && <span className="pd-old-price">${product.oldPrice.toFixed(2)}</span>}
                </div>
                <div className="flex gap-3 mt-3">
                  <button
                    className="pd-btn-premium pd-btn-cart"
                    onClick={handleAddToCart}
                    disabled={product.countInStock === 0}
                  >
                    <ShoppingCart size={20} />
                    {product.countInStock === 0 ? "Out of Stock" : "Add to Cart"}
                  </button>
                  <button
                    className="pd-btn-premium pd-btn-buy"
                    onClick={buyNowHandler}
                    disabled={product.countInStock === 0}
                  >
                    <CreditCard size={20} />
                    Buy Now
                  </button>
                </div>
              </div>

              {product.shortDetails && (
                <div className="pd-highlights-box">
                  <h4>Product Highlights</h4>
                  <ul>
                    {/* Example highlights, replace with dynamic or static as needed */}
                    <li>Functions - Print, Scan, Copy, Photo</li>
                    <li>Print, scan, copy; wireless; 35-sheet ADF</li>
                    <li>Perfectly formatted prints with HP AI</li>
                    <li>Customize the backs of photos for personalized cards with HP's exclusive automatic 2-sided photo printing</li>
                  </ul>
                </div>
              )}

              {/* Removed quantity selector and action buttons from here, now shown under price only */}
            </motion.div>
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <section className="pd-tabs-section">
          <div className="pd-tab-nav">
            {["overview", "specs", "reviews"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`pd-tab-trigger ${tab === t ? "active" : ""}`}
              >
                {t === "specs" ? "Technical Specs" : t}
              </button>
            ))}
          </div>

          <div className="pd-tab-content">
            <AnimatePresence mode='wait'>
              {tab === "overview" && (
                <motion.div
                  key="overview"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="prose max-w-none text-slate-600 leading-relaxed"
                >
                  {product.overview ? (
                    <div dangerouslySetInnerHTML={{ __html: product.overview }} />
                  ) : (
                    <p>{product.description}</p>
                  )}
                </motion.div>
              )}

              {tab === "specs" && (
                <motion.div
                  key="specs"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                >
                  {product.technicalSpecification ? (
                    <div
                      dangerouslySetInnerHTML={{ __html: product.technicalSpecification }}
                      className="html-content text-slate-700"
                    />
                  ) : (
                    <table className="pd-specs-table">
                      <tbody>
                        {[
                          { l: "Manufacturer", v: product.brand },
                          { l: "Product Type", v: product.category?.name || product.category },
                          { l: "Design Color", v: product.color },
                          { l: "Display Size", v: product.screenSize },
                          { l: "Dimensions (W)", v: product.width },
                          { l: "Dimensions (H)", v: product.height },
                          { l: "Dimensions (D)", v: product.depth },
                        ].filter(row => row.v).map((row, i) => (
                          <tr key={i}>
                            <td>{row.l}</td>
                            <td>{row.v}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </motion.div>
              )}

              {tab === "reviews" && (
                <motion.div
                  key="reviews"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="reviews-professional"
                >
                  <div className="reviews-header-card">
                    <div className="reviews-summary-big">
                      <h2>Verified Reviews</h2>
                      <div className="rating-big-row">
                        <span className="rating-big-value">{product.rating?.toFixed(1) || "0.0"}</span>
                        <div className="pd-stars">
                          {"★".repeat(Math.round(product.rating || 0))}
                        </div>
                      </div>
                    </div>

                    {userInfo ? (
                      !userHasReviewed && (
                        <button onClick={handleReviewClick} className="btn-review-write">
                          {showReviewForm ? "Cancel Entry" : "Post a Review"}
                        </button>
                      )
                    ) : (
                      <Link to="/signin" className="btn-review-write">Sign in to Review</Link>
                    )}
                  </div>

                  {showReviewForm && (
                    <motion.form
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      onSubmit={submitReviewHandler}
                      className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl space-y-6"
                    >
                      <div>
                        <label className="block text-xs font-black uppercase text-slate-400 mb-4 tracking-widest">Select Rating</label>
                        <div className="flex gap-3 text-3xl">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <button
                              type="button"
                              key={star}
                              onClick={() => setRating(star)}
                              className={rating >= star ? "text-yellow-400" : "text-slate-100 hover:text-yellow-200 transition-colors"}
                            >
                              ★
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <label className="block text-xs font-black uppercase text-slate-400 tracking-widest">Your Experience</label>
                        <textarea
                          rows="5"
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                          className="w-full p-6 rounded-2xl border border-slate-100 bg-slate-50 focus:bg-white focus:border-secondary transition-all font-medium text-slate-700 outline-none"
                          placeholder="Share your detailed feedback about this product..."
                          required
                        />
                      </div>

                      <button className="px-10 py-4 bg-secondary text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-primary transition-all shadow-lg hover:shadow-secondary/20">
                        {editingReviewId ? "Update Feedback" : "Broadcast Review"}
                      </button>
                    </motion.form>
                  )}

                  <div className="space-y-6">
                    {product.reviews?.length > 0 ? (
                      product.reviews.map((r) => (
                        <div key={r._id} className="review-item-premium">
                          <div className="review-avatar-professional">
                            {r.name?.charAt(0) || "U"}
                          </div>
                          <div className="review-body-premium">
                            <div className="review-meta-premium">
                              <span className="review-author-name">{r.name || "Anonymous User"}</span>
                              <span className="review-date-premium">{r.createdAt?.substring(0, 10)}</span>
                            </div>
                            <div className="pd-stars text-xs mb-3">{"★".repeat(r.rating)}</div>
                            <p className="review-comment-premium">“{r.comment}”</p>

                            {userInfo && r.user === userInfo._id && (
                              <div className="review-actions-premium">
                                <button onClick={() => startEditReview(r)} className="edit-btn">Adjust</button>
                                <button onClick={() => deleteReviewHandler(r._id)} className="delete-btn">Remove</button>
                              </div>
                            )}
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-20 bg-slate-50 rounded-3xl border border-dashed border-slate-200">
                        <p className="text-slate-400 font-bold uppercase tracking-widest text-xs">No feedback synchronized yet</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Related Assets Section */}
        {relatedProducts && relatedProducts.length > 0 && (
          <div className="pd-related-section">
            <h2>Recommended Complementary Systems</h2>
            <div className="pd-related-grid">
              {relatedProducts.filter(p => p._id !== product._id).slice(0, 4).map(p => (
                <Link to={`/product/${p.slug || p._id}`} key={p._id} className="pd-related-card" onClick={() => window.scrollTo(0, 0)}>
                  <div className="pd-related-img">
                    <img src={p.image || (p.images && p.images[0])} alt={p.name} />
                  </div>
                  <div className="pd-related-info">
                    <h4>{p.name}</h4>
                    <span className="pd-related-price">${p.price?.toFixed(2)}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;
