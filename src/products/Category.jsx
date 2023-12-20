import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

function Category() {
  const { categoryName } = useParams();
  const [categoryProducts, setCategoryProducts] = useState([]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
      .then((res) => res.json())
      .then((res) => setCategoryProducts(res))
      .catch((err) => console.error(err));
  }, [categoryName]);

  return (
    <>
      <h1>Kategori : {categoryName.toUpperCase()}</h1>
      <h1 className="mb-3">Urunler:</h1>
      <div className="row row-cols-sm-3 row-cols-md-4 row-cols-lg-5">
        {categoryProducts.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default Category;
