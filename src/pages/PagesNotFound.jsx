import { Link } from "react-router-dom";

function PagesNotFound() {
  return (
    <>
      <h1>404 - Sayfa Bulunamadi...</h1>
      <Link to="/" className="btn btn-success">
        Ana Sayfaya Gitmek Icin Tiklayiniz..
      </Link>
    </>
  );
}

export default PagesNotFound;
