import React, { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props: any) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  function deleteHandler() {
    setModalIsOpen(true);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <button className="btn" onClick={deleteHandler}>
          Delete
        </button>
      </div>
      {modalIsOpen && (
        <>
          <Modal close={closeModalHandler} />
          <Backdrop close={closeModalHandler} />
        </>
      )}
    </div>
  );
}

export default Todo;
