import React from "react";
import { IoCloudDoneSharp } from "react-icons/io5";
import "./toggle.css";

function ToggleButton(props) {
  return (
    <>
      <IoCloudDoneSharp
        className="toggle"
        style={{ display: props.show ? "inline-block" : "none" }}
        onClick={() => {
          props.ele.check = !props.ele.check;
          const setFavarray = props.list.filter((ele) => ele.isFav);
          props.favArray(setFavarray);
        }}
      />
    </>
  );
}

export default ToggleButton;
