import React from "react";
import "./upgrade.css";

export const Upgrade = (props: any) => {
  return (
    <>
      <div
        className={props.disabled ? "upgrade disabled" : "upgrade"}
        onClick={props.disabled ? null : props.onClick}
      >
        <img className="upgrade_icon" src={props.image} alt={props.image} />
        <div className="upgrade_description">
          <h2 className="upgrade_name">{props.name}</h2>
          <span className="upgrade_cost">{Math.round(props.cost)} clicks</span>
        </div>
        <span className="upgrade_count">{props.count}</span>
      </div>
    </>
  );
};
