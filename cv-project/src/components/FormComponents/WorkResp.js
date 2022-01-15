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

  const addResp = () => {
    setRespList((prevRespList) => ({
      ...prevRespList,
      [`${jobNumber}_${respNum + 1}`]: Resp,
    }));
    addRespNum((prevJobNum) => prevJobNum + 1);
  };

  const removeResp = (e) => {
    const currResp = e.target.previousElementSibling;
    const [_, jobIndex, respIndex] = currResp.name.split("_");
    const newObj = {};
    Object.assign(newObj, respList);
    delete newObj[`${jobIndex}_${respIndex}`];
    setRespList(newObj);
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
      {Object.keys(respList).map((key) => (
        <div key={`Resp_${key}`}>
          <textarea
            placeholder={respList[key].placeholder}
            value={respList[key].value}
            onChange={handleChange}
            name={`Resp_${key}`}
          />
          <button type="button" onClick={removeResp}>
            remove
          </button>
        </div>
      ))}
      <button type="button" onClick={addResp}>
        Add
      </button>
    </React.Fragment>
  );
}

export default WorkResponsibilities;
