import products from "../../data/products";
import ProductCard from "./ProductCard";

const ProductGrid = () => {
  return (
    <div className="grid">
      {products.map(p => (
        <ProductCard key={p.id} product={p} />
      ))}

      <style>{`
        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
          gap: 24px;
        }
      `}</style>
    </div>
  );
};

export default ProductGrid;
