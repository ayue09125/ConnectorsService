import report3 from "../assets/o&iR/Opportunities&InternshipsReport3.svg";
import report2 from "../assets/o&iR/Opportunities&InternshipsReport2.svg";
import report1 from "../assets/o&iR/Opportunities&InternshipsReport1.svg";

const InternshipReports = () => {
  return (
    <body className="page">
      <div>
        <h1>Opportunities and Internships Reports</h1>
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
                href="https://jobs.target.com/search-jobs/Sacramento%2C%20CA/1118/4/6252001-5332921-5389519-5389489/38x58157/-121x4944/50/2"
                target="_blank"
                rel="noopener noreferrer"
              >
                Local Target jobs and internships
              </a>
            </li>
            <li>
              <a
                href="https://mcclatchy.rec.pro.ukg.net/MCC1008MCLTC/JobBoard/ff11d963-22db-4278-a2b7-709f3b882262/OpportunityDetail?opportunityId=6c9c2414-293e-4fc2-8439-0d4febc2e1aa&source=LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sacramento Bee Internship
              </a>
            </li>
            <li>
              <a
                href="https://www.monster.com/job-openings/nonprofit-leadership-internship-san-francisco-ca--29580c0d-b998-4aa5-aba8-29497e8b6d16?mstr_dist=true&utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic"
                target="_blank"
                rel="noopener noreferrer"
              >
                The Borgen Project Internship
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
              Sacs-1 CubeSat Project: email <b>lilfigueroa@ucdavis.edu</b> for
              details
            </li>
            <li>
              California State Library’s Internship Program: email{" "}
              <b>csljobs@library.ca.gov</b> or call <b>(916)654-0202</b> for
              details
            </li>
            <li>
              <a
                href="https://reufinder.com/programs-for-community-college-students/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Research Experience for Undergraduates Finder (community college
                specific)
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
              Messenger Publishing Group, local freelance writers opening: call{" "}
              <b>(916)733-111</b> for details
            </li>
            <li>
              <a
                href="https://stemgateway.nasa.gov/s/course-offering/a0BSJ000000DX6D2AW/fy25-ncas-mission-1-discover-b"
                target="_blank"
                rel="noopener noreferrer"
              >
                NASA Community College Aerospace Scholars program
              </a>
            </li>
            <li>
              <a
                href="https://personnel.saccounty.net/Pages/Departments_Offering_Internships.aspx"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sacramento County department contacts potentially offering
                internships
              </a>
            </li>
          </ul>
        </div>
      </body>
    </body>
  );
};

export default InternshipReports;
