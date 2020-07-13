import React from "react";

const BodyDataCard = (props) => {
  const entry = props.entry;

  const handleEdit = (e) => {
    e.preventDefault();
    if (e.target.getAttribute("name") === "userdata") {
      props.history.push(`/updateuserinfo/${e.target.id}`);
    } else if (e.target.getAttribute("name") === "exercisedata") {
      props.history.push(`/updateworkout/${e.target.id}`);
    } else return;
  };

  return (
    <div className="body-container" key={entry.id}>
      <p>{entry.created_at.slice(0, 10)}</p>
      <p>
        <span>Weight: </span> {entry.user_weight}
      </p>
      <label name="userdata" id={entry.id} onClick={handleEdit}>
        Edit
      </label>
    </div>
  );
};

export default BodyDataCard;
