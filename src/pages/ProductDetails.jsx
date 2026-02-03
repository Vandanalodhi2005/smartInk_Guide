import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/footer/Footer';
import { useCart } from '../context/CartContext';
import '../styles/pages.css';

const ProductDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);

    // Consolidated data for lookup
    const allProducts = [
        {
            id: 1,
            name: 'HP LaserJet Pro MFP 3301fdw',
            category: 'laser',
            price: 539,
            image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800',
            description: 'Experience fast, reliable color printing with the HP LaserJet Pro MFP 3301fdw. Perfect for small to medium-sized offices looking for professional-quality documents and seamless wireless connectivity.',
            features: ['Wireless', 'Color', 'All-in-One', 'Duplex'],
            brand: 'HP',
            printSpeed: '22 ppm',
            maxPaperSize: 'A4',
            connectivity: ['Wi-Fi', 'USB', 'Ethernet'],
            type: 'printer'
        },
        {
            id: 2,
            name: 'Canon PIXMA TR8620 All-in-One',
            category: 'inkjet',
            price: 199,
            image: 'https://images.unsplash.com/photo-1619546813926-a78fa6372cd2?w=800',
            description: 'The Canon PIXMA TR8620 is a versatile home office printer that does it all. From printing photos to scanning documents, its compact design and intuitive interface make it a great addition to any workspace.',
            features: ['Wireless', 'Color', 'Photo Printing', 'Auto-Duplex'],
            brand: 'Canon',
            printSpeed: '15 ppm',
            maxPaperSize: 'A4',
            connectivity: ['Wi-Fi', 'USB'],
            type: 'printer'
        },
        {
            id: 3,
            name: 'Epson EcoTank ET-2720',
            category: 'inkjet',
            price: 179,
            image: 'https://images.unsplash.com/photo-1606756790136-261ff86dd101?w=800',
            description: 'The Epson EcoTank ET-2720 is an innovative all-in-one printer with high-capacity ink tanks. It offers easy-to-fill tanks and enough ink to print thousands of pages, making it extremely cost-effective.',
            features: ['Wireless', 'Ink Tank', 'All-in-One', 'Eco-Friendly'],
            brand: 'Epson',
            printSpeed: '10 ppm',
            maxPaperSize: 'A4',
            connectivity: ['Wi-Fi', 'USB'],
            type: 'printer'
        },
        {
            id: 4,
            name: 'Brother HL-L2350DW',
            category: 'laser',
            price: 99,
            image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800',
            description: 'The Brother HL-L2350DW is a reliable monochrome laser printer for home or small office use. It features fast print speeds and automatic duplex printing in a compact, desk-friendly design.',
            features: ['Wireless', 'Monochrome', 'Compact', 'Duplex'],
            brand: 'Brother',
            printSpeed: '32 ppm',
            maxPaperSize: 'A4',
            connectivity: ['Wi-Fi', 'USB'],
            type: 'printer'
        },
        {
            id: 101,
            name: 'HP 305 Black & Tri-Color Ink Cartridge Combo Pack',
            category: 'inkjet',
            price: 39.99,
            image: 'https://images.unsplash.com/photo-1606756790136-261ff86dd101?w=800',
            description: 'Ensure consistent, high-quality results with the HP 305 Ink Cartridge Combo Pack. These genuine HP cartridges are designed to deliver crisp text and vibrant colors for all your printing needs.',
            compatible: 'HP DeskJet 2620, 2630, 3755',
            yield: 'Up to 120 pages (black), 100 pages (color)',
            type: 'ink-toner'
        }
    ];

    useEffect(() => {
        const foundProduct = allProducts.find(p => p.id === parseInt(id));
        if (foundProduct) {
            setProduct(foundProduct);
        } else {
            // Handle not found
        }
    }, [id]);

    if (!product) return (
        <div className="loading-state">
            <Navbar />
            <div className="container" style={{ paddingTop: '150px', textAlign: 'center' }}>
                <h2>Loading Product Details...</h2>
            </div>
            <Footer />
        </div>
    );

    return (
        <>
            <Navbar />
            <div className="product-details-page">
                <div className="product-details-container">
                    <button className="back-btn" onClick={() => navigate(-1)}>
                        &larr; Back to Products
                    </button>

                    <div className="product-main-info">
                        <div className="product-gallery">
                            <div className="main-image">
                                <img src={product.image} alt={product.name} />
                            </div>
                        </div>

                        <div className="product-essentials">
                            <span className="product-brand">{product.brand || 'Premium Quality'}</span>
                            <h1>{product.name}</h1>
                            <div className="product-price-section">
                                <span className="price">${product.price}</span>
                                <span className="stock-status">In Stock</span>
                            </div>

                            <p className="product-description">
                                {product.description}
                            </p>

                            <div className="purchase-actions">
                                <div className="quantity-selector">
                                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                                    <span>{quantity}</span>
                                    <button onClick={() => setQuantity(quantity + 1)}>+</button>
                                </div>
                                <button
                                    className="add-to-cart-btn-large"
                                    onClick={() => addToCart({ ...product, quantity })}
                                >
                                    Add to Cart
                                </button>
                            </div>

                            <div className="product-highlights">
                                {product.features && product.features.map((feature, index) => (
                                    <div key={index} className="highlight-item">
                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <circle cx="10" cy="10" r="9" fill="#0f3d91" opacity="0.1" />
                                            <path d="M6 10L9 13L14 7" stroke="#0f3d91" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <span>{feature}</span>
                                    </div>
                                ))}
                                {product.yield && (
                                    <div className="highlight-item">
                                        <strong>Yield:</strong> {product.yield}
                                    </div>
                                )}
                                {product.compatible && (
                                    <div className="highlight-item">
                                        <strong>Compatibility:</strong> {product.compatible}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="product-tabs">
                        <div className="tabs-header">
                            <button className="tab-btn active">Specifications</button>
                            <button className="tab-btn">Reviews</button>
                        </div>
                        <div className="tab-content">
                            <table className="specs-table">
                                <tbody>
                                    {product.printSpeed && (
                                        <tr>
                                            <td>Print Speed</td>
                                            <td>{product.printSpeed}</td>
                                        </tr>
                                    )}
                                    {product.maxPaperSize && (
                                        <tr>
                                            <td>Max Paper Size</td>
                                            <td>{product.maxPaperSize}</td>
                                        </tr>
                                    )}
                                    {product.connectivity && (
                                        <tr>
                                            <td>Connectivity</td>
                                            <td>{product.connectivity.join(', ')}</td>
                                        </tr>
                                    )}
                                    <tr>
                                        <td>Category</td>
                                        <td style={{ textTransform: 'capitalize' }}>{product.category}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            <style>{`
                .product-details-page {
                    padding-top: 120px;
                    padding-bottom: 80px;
                    background: #fff;
                }
                .product-details-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding: 0 20px;
                }
                .back-btn {
                    background: none;
                    border: none;
                    color: #666;
                    cursor: pointer;
                    font-size: 16px;
                    margin-bottom: 30px;
                    display: flex;
                    align-items: center;
                    gap: 8px;
                }
                .back-btn:hover {
                    color: #0f3d91;
                }
                .product-main-info {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 60px;
                    margin-bottom: 60px;
                }
                .product-gallery .main-image {
                    background: #f8f9fa;
                    border-radius: 16px;
                    overflow: hidden;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.05);
                }
                .product-gallery .main-image img {
                    width: 100%;
                    display: block;
                }
                .product-brand {
                    color: #0f3d91;
                    font-weight: 700;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    font-size: 14px;
                }
                .product-essentials h1 {
                    font-size: 42px;
                    color: #333;
                    margin: 12px 0 24px;
                    line-height: 1.2;
                }
                .product-price-section {
                    display: flex;
                    align-items: center;
                    gap: 20px;
                    margin-bottom: 30px;
                }
                .product-price-section .price {
                    font-size: 32px;
                    font-weight: 700;
                    color: #0f3d91;
                }
                .stock-status {
                    background: #dcfce7;
                    color: #166534;
                    padding: 4px 12px;
                    border-radius: 20px;
                    font-size: 14px;
                    font-weight: 600;
                }
                .product-description {
                    font-size: 17px;
                    color: #666;
                    line-height: 1.8;
                    margin-bottom: 40px;
                }
                .purchase-actions {
                    display: flex;
                    gap: 20px;
                    margin-bottom: 40px;
                }
                .quantity-selector {
                    display: flex;
                    align-items: center;
                    border: 2px solid #e0e0e0;
                    border-radius: 8px;
                    overflow: hidden;
                }
                .quantity-selector button {
                    background: none;
                    border: none;
                    width: 40px;
                    height: 50px;
                    font-size: 20px;
                    cursor: pointer;
                    transition: background 0.2s;
                }
                .quantity-selector button:hover {
                    background: #f8f9fa;
                }
                .quantity-selector span {
                    width: 40px;
                    text-align: center;
                    font-weight: 600;
                }
                .add-to-cart-btn-large {
                    flex: 1;
                    background: #0f3d91;
                    color: #fff;
                    border: none;
                    border-radius: 8px;
                    font-size: 18px;
                    font-weight: 600;
                    cursor: pointer;
                    transition: all 0.3s;
                }
                .add-to-cart-btn-large:hover {
                    background: #0b2c66;
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(15, 61, 145, 0.3);
                }
                .product-highlights {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 16px;
                }
                .highlight-item {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    font-size: 15px;
                    color: #444;
                }
                .product-tabs {
                    border-top: 1px solid #e0e0e0;
                    padding-top: 60px;
                }
                .tabs-header {
                    display: flex;
                    gap: 40px;
                    margin-bottom: 30px;
                    border-bottom: 2px solid #f0f0f0;
                }
                .tab-btn {
                    background: none;
                    border: none;
                    padding: 0 0 15px 0;
                    font-size: 18px;
                    font-weight: 600;
                    color: #999;
                    cursor: pointer;
                    position: relative;
                }
                .tab-btn.active {
                    color: #0f3d91;
                }
                .tab-btn.active::after {
                    content: '';
                    position: absolute;
                    bottom: -2px;
                    left: 0;
                    width: 100%;
                    height: 2px;
                    background: #0f3d91;
                }
                .specs-table {
                    width: 100%;
                    border-collapse: collapse;
                }
                .specs-table td {
                    padding: 16px;
                    border-bottom: 1px solid #f0f0f0;
                }
                .specs-table td:first-child {
                    font-weight: 600;
                    color: #333;
                    width: 200px;
                    background: #f8f9fa;
                }
                .specs-table td:last-child {
                    color: #666;
                }

                @media (max-width: 968px) {
                    .product-main-info {
                        grid-template-columns: 1fr;
                        gap: 40px;
                    }
                    .product-essentials h1 {
                        font-size: 32px;
                    }
                }
            `}</style>
        </>
    );
};

export default ProductDetails;
