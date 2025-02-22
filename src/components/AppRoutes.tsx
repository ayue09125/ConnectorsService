import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ScholarshipReports from "../pages/ScholarshipReports";
import InternshipReports from "../pages/InternshipReports";
import Campus from "../pages/Campus";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/ConnectorsService" element={<Home />} />{" "}
      {/* Route for Home page */}
      <Route
        path="/ConnectorsService/ScholarshipReports"
        element={<ScholarshipReports />}
      />{" "}
      {/* Route for About page */}
      <Route
        path="/ConnectorsService/InternshipReports"
        element={<InternshipReports />}
      />
      <Route path="/ConnectorsService/Campus" element={<Campus />} />
    </Routes>
  );
}

export default AppRoutes;
