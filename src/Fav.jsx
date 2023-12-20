import { useEffect } from "react";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";

function Fav() {
  const navigate = useNavigate();
  const [favs, setFavs] = useState([]);
  useEffect(() => {
    setFavs(JSON.parse(localStorage.getItem("favs")) ?? []);
  }, []);

  return (
    <>
      <h1>Favoriler</h1>
      <div className="list-group">
        {favs.map((item) => (
          <Link
            key={item.id}
            to={`/products/product/${item.id}`}
            className="list-group-item list-group-item-action"
          >
            {item.title.toUpperCase()}
          </Link>
        ))}
      </div>
    </>
  );
}

export default Fav;
