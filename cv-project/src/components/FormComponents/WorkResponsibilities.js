import React, { useState } from "react";

function WorkResponsibilities(props) {
  const { jobNumber } = props;
  const Resp = {
    placeholder: "Reponsibility",
    value: "",
  };

  const [respNum, addRespNum] = useState(0);
  const [respList, setRespList] = useState({
    [`${jobNumber}_${respNum}`]: Resp,
  });

  const addWork = (e) => {
    setRespList((prevRespList) => ({
      ...prevRespList,
      [`${jobNumber}_${respNum + 1}`]: Resp,
    }));
    addRespNum((prevJobNum) => prevJobNum + 1);
  };

  const handleChange = (e) => {
    const [_, jobIndex, respIndex] = e.target.name.split("_");
    setRespList((prevRespList) => ({
      ...prevRespList,
      [`${jobIndex}_${respIndex}`]: {
        ...prevRespList[`${jobIndex}_${respIndex}`],
        value: e.target.value,
      },
    }));
  };

  return (
    <React.Fragment>
      {Object.keys(respList).map((key, index) => (
        <input
          placeholder={respList[key].placeholder}
          value={respList[key].value}
          onChange={handleChange}
          name={`Resp_${jobNumber}_${index}`}
        />
      ))}
      <button type="button" onClick={addWork}>
        Add
      </button>
    </React.Fragment>
  );
}

export default WorkResponsibilities;
