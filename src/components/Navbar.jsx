import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { SiteContext } from "../context/SiteContext";

function Navbar() {
  const { user, handleLogout } = useContext(SiteContext);
  return (
    <>
      <nav
        className="navbar navbar-expand-sm bg-body-tertiary mb-3"
        data-bs-theme="dark"
      >
        <div className="container ">
          <NavLink className="navbar-brand" to="/">
            Kan Store
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link " to="/">
                Ana Sayfa
              </NavLink>
              <NavLink className="nav-link" to="/products">
                Urunler
              </NavLink>
              <NavLink className="nav-link" to="/about">
                Hakkımızda
              </NavLink>
              <NavLink className="nav-link" to="/contact">
                Iletişim
              </NavLink>
              {user ? (
                <>
                  <NavLink className="nav-link" to="/fav">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ widht: 14, height: 14 }}
                      fill="currentColor"
                      className="bi bi-heart"
                      viewBox="0 0 16 16"
                    >
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
                    </svg>
                  </NavLink>
                  <button className="nav-link" onClick={handleLogout}>
                    Logout ({user.name})
                  </button>
                </>
              ) : (
                <NavLink className="nav-link" to="/login">
                  Giris Yap
                </NavLink>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
