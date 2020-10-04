import React from "react";
import "./header.css";

const formatter = (clicks: number) => {
  if (Math.floor(clicks / 1000000) > 0) {
    return `${(clicks / 1000000).toFixed(2)} million`
  } else if (Math.floor(clicks / 1000) > 0) {
    return `${(clicks / 1000).toFixed(2)} thousand`
  }

  return Math.round(clicks)
}

export const Header = (props: any) => {
  return (
    <div className="header">
      <h2 className="header_clicks">{`${formatter(props.clicks)} clicks`}</h2>
      <span className="header_cps">{`${Math.round(props.cps)} clicks per second`}</span>
    </div>
  );
};
