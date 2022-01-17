import React from "react";

function ViewDoc(props) {
  const { workList, respList } = props.workSection;
  const { eduList, eduDescList } = props.eduSection;
  const { otherList, otherDescList } = props.otherSection;

  const selectSubs = (key, subKey) =>{
    const [primary, secondKey] = subKey.split("_")
  }

  return (
    <div key={1} className="view--block">
      {Object.keys(workList).map((key) => (
        <div className="view--work">
          <h3>{workList[key].company.value}</h3>
          {Object.keys(respList).map((subKey) => (
            <ul>
              <li>{respList[subKey].value}</li>
            </ul>
          ))}
        </div>
      ))}
    </div>
  );
}

export default ViewDoc;
