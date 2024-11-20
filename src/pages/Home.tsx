// import React from "react";
import reportImage from "../assets/ReportImageVertical.svg";

const Home = () => {
  return (
    <body className="page">
      <h1>Connector's Service</h1>

      <body className="module1">
        <div className="submodule1">
          <img src={reportImage} />
        </div>
        <div className="submodule1">
          <h3>About us</h3>
          <div>
            The Connector's Service works to provide local and low-competition
            scholarships, internships, and opportunities specifically selected
            for Sacramento community college students seeking to transfer to a
            four-year college or university
          </div>
        </div>
      </body>
      <body className="module1">
        <div className="submodule3">
          <h3>Scholarship Reports</h3>
          From STEM to business to art and more, scholarships are often targeted
          towards a certain niche. We select scholarships that target the
          general niches shared by most community college students.
        </div>
        <div className="submodule3">
          <h3>Opportunities & Internship Reports</h3>A professional career often
          requires you to have experience in your field, but getting said
          experience can be a very challenging process. We select accessible
          opportunities and internships that are very beginner friendly or are
          local.
        </div>
        <div className="submodule3">
          <h3>Campus Information</h3>A current work in progress. The aim is a
          provision of resources available on Los Rios campuses that are
          relevant to professional and educational development.
        </div>
      </body>
    </body>
  );
};

export default Home;
