import React from "react";

export default function Card(props) {
  const style = {
    height: "20rem",
    backgroundColor: props.color,
    width: "100%",
    borderRadius: "2.5rem",
    padding: "2.5rem",
  };
  return (
    <>
      <div className="card mt-3" style={style}>
        {props.img && <img src={props.img} alt="" />}
        <h3>{props.title}</h3>
        <p className="card-text">{props.description}</p>
      </div>
    </>
  );
}
