import React from "react";

export default function GreyBackground(props) {
  return (
    <>
      <div className="greyBackground">{props.children}</div>
    </>
  );
}
