import React from "react";
import uniqid from "uniqid";

function ViewDoc(props) {
  const { initPerson, initPersonDesc } = props.personSection;
  const { workList, respList } = props.workSection;
  const { eduList, eduDescList } = props.eduSection;
  const { otherList, otherDescList } = props.otherSection;

  const selectSubs = (list, key, subKey) => {
    const primary = subKey.split("_")[0];
    if (primary === key) {
      return renderDP(list, key, subKey);
    }
  };

  const renderDP = (respList, key, subKey) => {
    // we find the number of dotpoints, if only one, use paragraph instead
    const DPcount = Object.keys(respList).filter(
      (sub) => sub.split("_")[0] === key
    ).length;
    if (DPcount === 1) {
      return <p className="view--work--desc">{respList[subKey].value}</p>;
    } else {
      return (
        <ul>
          <li className="view--work--desc">{respList[subKey].value}</li>
        </ul>
      );
    }
  };

  const conditionalDate = (key) => {
    const start = key.start.value;
    const end = key.end.value;
    if (start && start !== "" && end && end !== "") {
      return " to ";
    } else {
      return "";
    }
  };

  return (
    <div className="view--CV">
      <div className="view--personal">
        <div>
          <div className="view--personal--name">
            {initPerson.personalName.value}
          </div>
          <br />
          <div>{initPersonDesc.personalD.value}</div>
        </div>
        <div className="view--personal--info">
          <div>{initPerson.personalLocation.value}</div>
          <div>{initPerson.personalEmail.value}</div>
          <div>{initPerson.personalLinkedIn.value}</div>
          <div>{initPerson.personalPortfolio.value}</div>
        </div>
      </div>
      <h2>WORK</h2>
      <hr />
      {Object.keys(workList).map((key) => (
        <div className="view--work">
          <div className="view--titleBlock">
            <div>
              <span className="view--work">{workList[key].company.value}</span>
              {", "}
              <span className="view--work">{workList[key].position.value}</span>
            </div>
            <div>
              <span>{workList[key].start.value} </span>
              {conditionalDate(workList[key])}
              <span>{workList[key].end.value} </span>
            </div>
          </div>

          {Object.keys(respList).map((subKey) =>
            selectSubs(respList, key, subKey)
          )}
        </div>
      ))}
      <h2>EDUCATION</h2>
      <hr />
      {Object.keys(eduList).map((key) => (
        <div className="view--work">
          <div className="view--titleBlock">
            <div>
              <span className="view--work">
                {eduList[key].university.value}
              </span>
              {", "}
              <span className="view--work">{eduList[key].degree.value}</span>
            </div>
            <div>
              <span>{eduList[key].start.value} </span>
              {conditionalDate(eduList[key])}
              <span>{eduList[key].end.value} </span>
            </div>
          </div>

          {Object.keys(eduDescList).map((subKey) =>
            selectSubs(eduDescList, key, subKey)
          )}
        </div>
      ))}
      <h2>ACHIEVEMENTS / EXTRACURRICULAR / OTHERS</h2>
      <hr />
      {Object.keys(otherList).map((key) => (
        <div className="view--work">
          <div className="view--titleBlock">
            <div>
              <span className="view--work">
                {otherList[key].institution.value}
              </span>
              {", "}
              <span className="view--work">{otherList[key].detail.value}</span>
            </div>
            <div>
              <span>{otherList[key].start.value} </span>
              {conditionalDate(otherList[key])}
              <span>{otherList[key].end.value} </span>
            </div>
          </div>

          {Object.keys(otherDescList).map((subKey) =>
            selectSubs(otherDescList, key, subKey)
          )}
        </div>
      ))}
    </div>
  );
}

export default ViewDoc;
