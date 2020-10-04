import React from "react";
import "./achievement.css";

export const Achievement = (props: any) => {
  return (
    <>
      <div
        className={props.disabled ? "achievement disabled" : "achievement"}
        onClick={props.disabled ? null : props.onClick}
      >
        <img className="achievement_icon" src={props.image} alt={props.image} />
      </div>
    </>
  );
};
