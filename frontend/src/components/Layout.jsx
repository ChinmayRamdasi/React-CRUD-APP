import { Outlet } from "react-router-dom";
import Page1 from "./Page1";


const Layout = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <Page1 />
      <main style={{ flex: 1, padding: 20, backgroundColor: "#e2e8f0" }}>
        <Outlet/> {/* REQUIRED */}
      </main>
    </div>
  );
};

export default Layout;
