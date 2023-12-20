import { useState, useEffect } from "react";
import { ProductCard } from "../products";

function Products() {
  const [last10Products, setLast10Products] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products?limit=10")
      .then((res) => res.json())
      .then((json) => setLast10Products(json));
  }, []);
  return (
    <>
      <h1 className="mb-3">Urunler:</h1>
      <div className="row row-cols-sm-3 row-cols-md-4 row-cols-lg-5">
        {last10Products.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default Products;
