const tempEdu = {
  university: {
    placeholder: "University / Institution",
    value: "",
  },
  degree: {
    placeholder: "Degree",
    value: "",
  },
  start: {
    placeholder: "Start Date",
    value: "",
  },
  end: {
    placeholder: "End Date",
    value: "",
  },
};

const initEdu = {
  0: {
    university: {
      placeholder: "University / Institution",
      value: "University of Sydney",
    },
    degree: {
      placeholder: "Degree",
      value: "Master of Data Science",
    },
    start: {
      placeholder: "Start Date",
      value: "Mar 2019",
    },
    end: {
      placeholder: "End Date",
      value: "Nov 2020",
    },
  },
  1: {
    university: {
      placeholder: "University / Institution",
      value: "University of New South Wales",
    },
    degree: {
      placeholder: "Degree",
      value: "Bachelor of Engineering (Software)",
    },
    start: {
      placeholder: "Start Date",
      value: "Mar 2015",
    },
    end: {
      placeholder: "End Date",
      value: "Nov 2018",
    },
  },
};

const tempOther = {
  institution: {
    placeholder: "Institution",
    value: "",
  },
  detail: {
    placeholder: "Award / Activity / Others",
    value: "",
  },
  start: {
    placeholder: "Start Date",
    value: "",
  },
  end: {
    placeholder: "End Date",
    value: "",
  },
};

const initOther = {
  0: {
    institution: {
      placeholder: "Institution",
      value: "University of Sydney",
    },
    detail: {
      placeholder: "Award / Activity / Others",
      value: "Dean's List for School of Computer Science 2019",
    },
    start: {
      placeholder: "Start Date",
      value: "",
    },
    end: {
      placeholder: "End Date",
      value: "Nov 2019",
    },
  },
  1: {
    institution: {
      placeholder: "Institution",
      value: "University of Sydney, Faculty of Engineering",
    },
    detail: {
      placeholder: "Award / Activity / Others",
      value: "Peer Mentor",
    },
    start: {
      placeholder: "Start Date",
      value: "June 2019",
    },
    end: {
      placeholder: "End Date",
      value: "Nov 2020",
    },
  },
};

const tempWork = {
  company: {
    placeholder: "Company",
  },
  position: {
    placeholder: "Position",
    value: "",
  },
  start: {
    placeholder: "Start Date",
    value: "",
  },
  end: {
    placeholder: "End Date",
    value: "",
  },
};

const initWork = {
  0: {
    company: {
      placeholder: "Company",
      value: "Google",
    },
    position: {
      placeholder: "Position",
      value: "Software Engineer",
    },
    start: {
      placeholder: "Start Date",
      value: "Feb 2021",
    },
    end: {
      placeholder: "End Date",
      value: "Present",
    },
  },
  1: {
    company: {
      placeholder: "Company",
      value: "Goldman Saches",
    },
    position: {
      placeholder: "Position",
      value: "Engineering Intern",
    },
    start: {
      placeholder: "Start Date",
      value: "Dec 2019",
    },
    end: {
      placeholder: "End Date",
      value: "Feb 2020",
    },
  },
};

const tempResp = { placeholder: "Reponsibility" };

const initResp = {
  "0_0": {
    placeholder: "Reponsibility",
    value:
      "Involved in building the 2021 redesign of Gmail and optimization of rendering.",
  },
  "0_1": {
    placeholder: "Reponsibility",
    value:
      "Frequent communication with back end developers, front end developers, quality assurance testers, and tech lead as needed.",
  },
  "0_2": {
    placeholder: "Reponsibility",
    value: "Managed time-sensitive updates and database upgrades.",
  },
  "1_0": {
    placeholder: "Reponsibility",
    value:
      "Provided technological support in the trading division by maintaining a high performance software system which led to 1.5% speed improvement.",
  },
};

const tempDesc = { placeholder: "Description" };

const initEduDesc = {
  "0_0": {
    placeholder: "Description",
    value: "Weighted Average Mark: 85.3 High Distinction",
  },
  "1_0": {
    placeholder: "Description",
    value: "Weighted Average Mark: 87 High Distinction",
  },
};

const initOtherDesc = {
  "0_0": {
    placeholder: "Description",
    value:
      "Achieved highest mark in the course COMP9007 Algorithms at University of Sydney in 2020.",
  },
  "1_0": {
    placeholder: "Description",
    value:
      "Led a team of new students throughout the semester to help develop a supportive and effective learning community at the University. I also helped peers to build networks, learn about student life and settle in to the University.",
  },
};

const personal = {
  personalName: {
    placeholder: "Full Name",
    value: "John Jones",
  },
  personalPhone: {
    placeholder: "Phone Number",
    value: "+61 412 345 678",
  },
  personalLocation: {
    placeholder: "Location",
    value: "Sydney, Australia",
  },
  personalEmail: {
    placeholder: "Email",
    value: "john.jones@jmail.com",
  },
  personalLinkedIn: {
    placeholder: "Linkedin",
    value: "www.linkedin.com/abc",
  },
  personalPortfolio: {
    placeholder: "Portfolio",
    value: "www.portfolio.com",
  },
};

const personalDesc = {
  personalD: {
    placeholder: "A short description about yourself",
    value:
      "I am a software developer who is passionate about delivering the highest quality work and is always looking to improve, adapt and innovate. I am interested in web development (full stack) and machine learning.",
  },
};

export {
  tempEdu,
  tempWork,
  tempOther,
  initEdu,
  initOther,
  initWork,
  initResp,
  tempResp,
  tempDesc,
  initEduDesc,
  initOtherDesc,
  personal,
  personalDesc,
};
