// import React from "react";
import report3 from "../assets/ssR/ScholarshipReport3.svg";
import report2 from "../assets/ssR/ScholarshipReport2.svg";
import report1 from "../assets/ssR/ScholarshipReport1.svg";

const ScholarshipReports = () => {
  return (
    <body className="page">
      <div>
        <h1>Scholarship Reports</h1>
      </div>

      <body className="reportList">
        <div className="submodule2">
          <img src={report3} />
        </div>
        <div className="submodule2">
          <h3>Links</h3>
          <ul>
            <li>
              <a
                href="https://www.edvisors.com/monthly-scholarship"
                target="_blank"
                rel="noopener noreferrer"
              >
                $2,500 monthly Edvisor's Scholarship
              </a>
            </li>
            <li>
              <a
                href="https://www.edvisors.com/scholarships/featured-scholarships/2500-monthly-scholarship/enter-scholarship/"
                target="_blank"
                rel="noopener noreferrer"
              >
                $1,000 monthly Edvisor's Scholarship
              </a>
            </li>
            <li>
              <a
                href="https://scholarships.smeef.org/applications/"
                target="_blank"
                rel="noopener noreferrer"
              >
                SME Education Foundation scholarships
              </a>
            </li>
            <li>
              <a
                href="https://bold.org/scholarships/froggycrossings-creativity-scholarship/"
                target="_blank"
                rel="noopener noreferrer"
              >
                $2,000 Froggycrossings Creativity Scholarship
              </a>
            </li>
          </ul>
        </div>

        <div className="submodule2">
          <img src={report2} />
        </div>
        <div className="submodule2">
          <h3>Links</h3>
          <ul>
            <li>
              <a
                href="https://bold.org/scholarships/elevate-women-in-technology-scholarship/"
                target="_blank"
                rel="noopener noreferrer"
              >
                $1,040 Elevate Women in Technology Scholarship
              </a>
            </li>
            <li>
              <a
                href="https://bold.org/scholarships/expandyourhorizons/#ref=forward"
                target="_blank"
                rel="noopener noreferrer"
              >
                $2,000 Across Cultures "Expand Your Horizons" Scholarship
              </a>
            </li>
            <li>
              <a
                href="https://www.secatty.com/investment-fraud-awareness-scholarship-2/"
                target="_blank"
                rel="noopener noreferrer"
              >
                $2,500 Robert Wayne Pearce Investor Fraud Awareness Scholarship
              </a>
            </li>
          </ul>
        </div>

        <div className="submodule2">
          <img src={report1} />
        </div>
        <div className="submodule2">
          <h3>Links</h3>
          <ul>
            <li>
              <a
                href="https://foundationccc.org/our-work/system-support/providing-financial-assistance-and-scholarships/keenan-insurance-scholarships/#Student_Eligibility_Requirements"
                target="_blank"
                rel="noopener noreferrer"
              >
                $1,200 per academic year Keenan Insurance Scholarship
              </a>
            </li>
            <li>
              <a
                href="https://www.testclear.com/testclear-scholarship.aspx"
                target="_blank"
                rel="noopener noreferrer"
              >
                $1,000 Testclear Scholarship
              </a>
            </li>
            <li>
              <a
                href="https://seasonsmalibu.com/about-seasons-in-malibu/general-education-and-mental-health-education-scholarship/"
                target="_blank"
                rel="noopener noreferrer"
              >
                $1,500 General Education and Mental Health Scholarship
              </a>
            </li>
          </ul>
        </div>
      </body>
    </body>
  );
};

export default ScholarshipReports;
