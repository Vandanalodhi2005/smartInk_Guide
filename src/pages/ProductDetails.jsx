import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);

  const products = [
    {
      id: 1,
      name: "HP ENVY Photo 7975 All-in-One Printer",
      brand: "HP",
      price: 239.99,
      image:
        "https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800",
      description:
        "Print, scan, copy and create stunning borderless photos with HP ENVY Photo. AI-powered enhancements and wireless printing make it perfect for home and small offices.",
      features: [
        "Print, Scan, Copy, Photo",
        "Wireless Printing",
        "35-Sheet ADF",
        "AI-Enhanced Photos",
        "Instant Ink Ready",
      ],
      printSpeed: "15 ppm",
      maxPaperSize: "A4",
      connectivity: ["Wi-Fi", "USB"],
      category: "inkjet",
    },
  ];

  useEffect(() => {
    const found = products.find((p) => p.id === Number(id)) || products[0];
    setProduct(found);
  }, [id]);

  if (!product) return null;

  return (
    <>
      <Navbar />

      <div className="product-page">
        <div className="container">
          <button className="back-btn" onClick={() => navigate(-1)}>
            ← Back
          </button>

          <div className="product-layout">
            {/* IMAGE */}
            <div className="image-box">
              <img src={product.image} alt={product.name} />
            </div>

            {/* DETAILS */}
            <div className="details">
              <span className="brand">{product.brand}</span>
              <h1>{product.name}</h1>

              <ul className="feature-list">
                {product.features.map((f, i) => (
                  <li key={i}>✓ {f}</li>
                ))}
              </ul>

              <p className="description">{product.description}</p>

              <div className="price-card">
                <div className="price-row">
                  <span className="price">${product.price}</span>
                  <span className="stock">In Stock</span>
                </div>

                <div className="qty-row">
                  <span>Quantity</span>
                  <div className="qty">
                    <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                      −
                    </button>
                    <span>{quantity}</span>
                    <button onClick={() => setQuantity(quantity + 1)}>+</button>
                  </div>
                </div>

                <div className="actions">
                  <button
                    className="add-cart"
                    onClick={() => addToCart({ ...product, quantity })}
                  >
                    Add to Cart
                  </button>
                  <button className="buy-now">Buy Now</button>
                </div>
              </div>
            </div>
          </div>

          {/* SPECIFICATIONS */}
          <div className="specs">
            <h2>Key Specifications</h2>
            <table>
              <tbody>
                <tr>
                  <td>Print Speed</td>
                  <td>{product.printSpeed}</td>
                </tr>
                <tr>
                  <td>Max Paper Size</td>
                  <td>{product.maxPaperSize}</td>
                </tr>
                <tr>
                  <td>Connectivity</td>
                  <td>{product.connectivity.join(", ")}</td>
                </tr>
                <tr>
                  <td>Category</td>
                  <td>{product.category}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <Footer />

      {/* STYLES */}
      <style>{`
        .product-page {
          padding: 140px 0 80px;
          background: #fff;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
        }

        .back-btn {
          background: none;
          border: none;
          font-size: 16px;
          color: #666;
          margin-bottom: 30px;
          cursor: pointer;
        }

        .product-layout {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 80px;
          margin-bottom: 80px;
        }

        .image-box {
          background: #f6f8fb;
          border-radius: 24px;
          padding: 40px;
        }

        .image-box img {
          width: 100%;
          object-fit: contain;
        }

        .brand {
          color: #0f3d91;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
          font-size: 13px;
        }

        .details h1 {
          font-size: 36px;
          margin: 14px 0 20px;
          line-height: 1.25;
        }

        .feature-list {
          list-style: none;
          padding: 0;
          margin-bottom: 20px;
          color: #4b5563;
          font-size: 14px;
        }

        .feature-list li {
          margin-bottom: 6px;
        }

        .description {
          font-size: 16px;
          color: #5f6b7a;
          line-height: 1.8;
          margin-bottom: 32px;
        }

        .price-card {
          background: #f9fbff;
          border-radius: 24px;
          padding: 28px;
          box-shadow: 0 10px 30px rgba(15, 61, 145, 0.08);
        }

        .price-row {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }

        .price {
          font-size: 34px;
          font-weight: 800;
          color: #0f3d91;
        }

        .stock {
          background: #e6f0ff;
          color: #0f3d91;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
        }

        .qty-row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 24px;
          font-weight: 600;
        }

        .qty {
          display: flex;
          align-items: center;
          border: 1px solid #dbe3f0;
          border-radius: 12px;
        }

        .qty button {
          width: 42px;
          height: 42px;
          background: none;
          border: none;
          font-size: 20px;
          color: #0f3d91;
          cursor: pointer;
        }

        .qty span {
          width: 42px;
          text-align: center;
        }

        .actions {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 14px;
        }

        .add-cart {
          background: #0f3d91;
          color: #fff;
          border: none;
          border-radius: 14px;
          padding: 14px;
          font-weight: 600;
          cursor: pointer;
        }

        .buy-now {
          background: #4f5dff;
          color: #fff;
          border: none;
          border-radius: 14px;
          padding: 14px;
          font-weight: 600;
          cursor: pointer;
        }

        .specs h2 {
          font-size: 24px;
          margin-bottom: 20px;
        }

        table {
          width: 100%;
          border-collapse: collapse;
        }

        td {
          padding: 16px;
          border-bottom: 1px solid #eee;
        }

        td:first-child {
          font-weight: 600;
          background: #f8f9fa;
          width: 200px;
        }

        @media (max-width: 1024px) {
          .product-layout {
            grid-template-columns: 1fr;
            gap: 50px;
          }
        }
      `}</style>
    </>
  );
};

export default ProductDetails;
