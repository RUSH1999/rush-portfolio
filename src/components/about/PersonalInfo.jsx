import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Yash" },
  { meta: "last name", metaInfo: "Mantri" },
  { meta: "Age", metaInfo: "23 Years" },
  { meta: "Nationality", metaInfo: "Indian" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "New Mondha, Partur Jalna" },
  { meta: "phone", metaInfo: "+91 9730029317" },
  { meta: "Email", metaInfo: "yrmantri3@gmail.com" },
 // { meta: "Skype", metaInfo: " steve.milner" },
  { meta: "langages", metaInfo: "English, Hindi, Marathi" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
