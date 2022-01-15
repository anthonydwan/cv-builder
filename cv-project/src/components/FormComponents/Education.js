import React, { Component } from 'react'

function Education() {
	const workTemplate = {
	  company: {
		placeholder: "Company",
		value: "",
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
  
	const initialWork = {
	  ...workTemplate,
	  company: {
		value: "Google",
	  },
	  position: {
		value: "Software Engineer",
	  },
	  start: {
		value: "2021-2",
	  },
	  end: {
		value: "2022-2",
	  },
	};
  
	const [jobNum, addjobNum] = useState(0);
	const [workList, setWorkList] = useState({ [jobNum]: initialWork });
  
	const addWork = (e) => {
	  setWorkList((prevWorkList) => ({
		...prevWorkList,
		[jobNum + 1]: workTemplate,
	  }));
	  addjobNum((prevJobNum) => prevJobNum + 1);
	};
  
	const handleChange = (e) => {
	  const [inputBox, jobIndex] = e.target.name.split("_");
	  setWorkList((prevWorkList) => ({
		...prevWorkList,
		[jobIndex]: {
		  ...prevWorkList[jobIndex],
		  [inputBox]: {
			...prevWorkList[jobIndex][inputBox],
			value: e.target.value,
		  },
		},
	  }));
	};
  
	return (
	  <div>
		{Object.keys(workList).map((key) => (
		  <div className="workExp--block" key={key}>
			<RenderTextInput
			  passedObj={workList[key]}
			  handler={handleChange}
			  index={key}
			/>
			<WorkResp jobNumber={key} />
		  </div>
		))}
		<button type="button" onClick={addWork}>
		  Add
		</button>
	  </div>
	);
  }
  

export default Education
