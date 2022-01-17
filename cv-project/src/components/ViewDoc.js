import React from "react";

function ViewDoc(props) {
  const { workList, respList } = props.workSection;
  const { eduList, eduDescList } = props.eduSection;
  const { otherList, otherDescList } = props.otherSection;

  const selectSubs = (key, subKey) => {
    const primary = subKey.split("_")[0];
    if (primary === key) {
      return renderDP(respList, key, subKey);
    }
  };

  const renderDP = (respList, key, subKey) => {
    // we find the number of dotpoints, if only one, use paragraph instead
    const DPcount = Object.keys(respList).filter(
      (sub) => sub.split("_")[0] === key
    ).length;
    if (DPcount === 1) {
      return <p>{respList[subKey].value}</p>;
    } else {
      return (
        <ul>
          <li>{respList[subKey].value}</li>
        </ul>
      );
    }
  };

  return (
    <div className="view--CV">
      <div className="view-personal">
        
      </div>
        {Object.keys(workList).map((key) => (
          <div className="view--work">
            <div className="view--titleBlock">
              <div>
                <span className="view--institution">
                  {workList[key].company.value}
                </span>
                , <span>{workList[key].position.value}</span>
              </div>
              <div>
                <span>{workList[key].start.value} </span> -
                <span>{workList[key].end.value} </span>
              </div>
            </div>

            {Object.keys(respList).map((subKey) => selectSubs(key, subKey))}
          </div>
        ))}
    </div>
  );
}

export default ViewDoc;
