import { useEffect, useState, useContext } from "react";
import Navbar from "./components/Navbar";
import { SiteContext } from "./context/SiteContext";
import SiteRoutes from "./SiteRoutes";

function App() {
  const { user, handleLogin, handleLogout } = useContext(SiteContext);
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <SiteRoutes />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
