import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ScholarshipReports from "../pages/ScholarshipReports";
import InternshipReports from "../pages/InternshipReports";
import Campus from "../pages/Campus";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> {/* Route for Home page */}
      <Route path="/ScholarshipReports" element={<ScholarshipReports />} />{" "}
      {/* Route for About page */}
      <Route path="/InternshipReports" element={<InternshipReports />} />
      <Route path="/Campus" element={<Campus />} />
    </Routes>
  );
}

export default AppRoutes;
