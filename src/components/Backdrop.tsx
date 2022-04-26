import React from "react";

function Backdrop(props: any) {
  return <div className="backdrop" onClick={props.close} />;
}
export default Backdrop;
