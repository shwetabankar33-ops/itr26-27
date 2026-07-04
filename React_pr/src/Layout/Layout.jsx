import { Outlet } from "react-router-dom";
import Navbar from "../component/Navbar";

function Layout() {
  return (
    <div>
      <Navbar />
      <Outlet />

      <footer>
        <p>Copyright 2026 My Website. All Rights Reserved.</p>
      </footer>
    </div>
  );
}

export default Layout;
