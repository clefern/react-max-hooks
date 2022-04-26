import React from "react";

function Modal(props: any) {
  return (
    <div className="modal">
      <p>Are you sure?</p>
      <button className="btn btn--alt" onClick={props.close}>
        Cancel
      </button>
      <button className="btn" onClick={props.close}>
        Confirm
      </button>
    </div>
  );
}
export default Modal;
