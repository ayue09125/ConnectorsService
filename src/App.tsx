import { BrowserRouter } from "react-router-dom";
import "./App.css";

import AppRoutes from "./components/AppRoutes";
import Background from "./components/Background";
import ScrollToTop from "./components/ScrollToTop";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

function App() {
  return (
    <>
      <div className="background-layer">
        <Background />
      </div>
      <div className="content">
        <Topbar />
        <BrowserRouter>
          <ScrollToTop />
          <Sidebar />
          <AppRoutes />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
