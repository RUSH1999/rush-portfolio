import React from "react";

const educationContent = [
  {
    year: "2016 - 2021",
    degree: "Bachelor of Engineering (CSE)",
    institute: "Deogiri Institute of Engineering & Management Studies",
    details: `Average CGPA - 7.38`,
  },
  {
    year: "2013 - 2015",
    degree: "HSC",
    institute: "S.B.E.S College of Science, Aurangabad",
    details: `Percentage- 64.46%
    `,
  },
  {
    year: "2012",
    degree: "SSC",
    institute: "Bright Star English School, Partur",
    details: `Percentage- 82.73%`,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
