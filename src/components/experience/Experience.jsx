import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const experiences = [
  {
    title: "BDE and Portfolio Manager",
    organization: "Uniqueorp",
    description: "At Uniqueorp i work as a Bussiness Developement Executive generating leads, dealing with clients and portfolio manager.",
    dateFrom: "Sep 2024",
    dateTo: "Present",
    link: "",
  },
  {
    title: "Kepler Healthcare",
    organization: "Medical Representative (MR)",
    description: "Analyzed market to identify new opportunities and strengthen relationships with hospitals, medical centers and primary provider physicians.",
    dateFrom: "Jan 2023",
    dateTo: "May 2023",
    link: "",
  },
  
];

const Experience = () => {
  return (
    <div className="container my-5" id="experience">
      <h2 className="text-center mb-4">Experience</h2>
      <div className="row">
        {experiences.map((exp, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div
              className="card h-100 shadow-sm"
              style={{
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.05)";
                e.currentTarget.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.2)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
              }}
            >
              <div className="card-body">
                <h5 className="card-title">{exp.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  <a href={exp.link} target="_blank" rel="noopener noreferrer">
                    {exp.organization}
                  </a>
                </h6>
                <p className="card-text">{exp.description}</p>
                <p className="card-text">
                  <small className="text-muted">
                    {exp.dateFrom} - {exp.dateTo}
                  </small>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
