import React from "react";

const experienceContent = [
  {
    year: "   2022 - Present",
    position: "Remax V21 Realty Pvt Ltd ",
    compnayName: "Digital Marketing Executive",
    details: ``,
  },
  {
    year: "2021 - Present",
    position: "Brand It Up ",
    compnayName: "CEO",
    details: ``,
  },
  {
    year: "2016 - 2021",
    position: "Freelancer",
    compnayName: "",
    details: ``,
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
