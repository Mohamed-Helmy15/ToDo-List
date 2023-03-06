import React from "react";
import { AiFillStar } from "react-icons/ai";
import "./list.css";
import DeleteButton from "./DeleteButton/DeleteButton";
import ToggleButton from "./ToggleButton/ToggleButton";

function List(props) {
  return (
    <section className="list-container">
      <h3>{props.show ? "Activities" : "Favourite Activities"}</h3>
      {props.list.map((ele) => {
        return (
          <div key={ele.id}>
            <div className="todo">
              <div
                id={ele.id}
                style={{ textDecoration: ele.check && "line-through" }}
              >
                {ele.name}
              </div>
              <div>{ele.date}</div>
              <AiFillStar
                className="favourite"
                onClick={() => {
                  ele.isFav = !ele.isFav;
                  const setFavarray = props.list.filter((ele) => ele.isFav);
                  props.favArray(setFavarray);
                }}
                style={{
                  color: ele.isFav ? "yellow" : "white",
                  display: props.show ? "inline-block" : "none",
                }}
              />
              <ToggleButton
                ele={ele}
                show={props.show}
                favArray={props.favArray}
                list={props.list}
              />
              <DeleteButton
                show={props.show}
                favArray={props.favArray}
                list={props.fav}
              />
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default List;
