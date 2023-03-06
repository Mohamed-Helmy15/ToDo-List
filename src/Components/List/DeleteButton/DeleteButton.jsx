import React from "react";
import { MdDelete } from "react-icons/md";
import "./delete.css";
function DeleteButton(props) {
  return (
    <>
      <MdDelete
        className="delete"
        style={{ display: props.show ? "inline-block" : "none" }}
        onClick={(e) => {
          props.list.map((ele) => {
            if (+ele.id === +e.target.parentNode.firstChild.id) {
              ele.isFav = !ele.isFav;
              props.favArray(props.list.filter((ele) => ele.isFav));
            }
            return true;
          });
          e.target.parentElement.parentElement.remove();
        }}
      />
    </>
  );
}

export default DeleteButton;
