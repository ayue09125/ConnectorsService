import { Link } from "react-router-dom";
import CCLogo from "../assets/Connector's_Club_logo.svg";

function Sidebar() {
  return (
    <ul className="sidenav">
      <li>
        <Link to="/ConnectorsService" className="logo">
          <img src={CCLogo} />
        </Link>
      </li>
      <li>
        <Link to="/ConnectorsService/ScholarshipReports" className="textTab">
          Scholarship Reports
        </Link>
      </li>
      <li>
        <Link to="/ConnectorsService/InternshipReports" className="textTab">
          Opportunities & Internship Reports
        </Link>
      </li>
      <li>
        <Link to="/ConnectorsService/Campus" className="textTab">
          Campus
        </Link>
      </li>
    </ul>
  );
}

export default Sidebar;
