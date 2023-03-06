import React, { useState, useRef } from "react";
import List from "../List/List.jsx";
import "./input.css";
import Favorite from "../Favorite/Favorite";

function Input() {
  const input = useRef(null);
  const [name, setName] = useState("");
  const [check] = useState(false);
  const [date, setDate] = useState();
  const [fav] = useState(false);
  const [list, setList] = useState([]);
  let [favArray, setFavArray] = useState([]);

  const handleInput = (e) => {
    setName(e.target.value);
  };
  const handleDate = (e) => {
    setDate(e.target.value);
  };
  return (
    <section className="wrapper">
      <List list={list} fav={favArray} favArray={setFavArray} show={true} />
      <div className="input">
        <section className="input">
          <input
            type="text"
            placeholder="Write The Activity"
            value={name}
            onChange={handleInput}
            ref={input}
          />
          <input type="date" onChange={handleDate} />
          <button
            onClick={() => {
              setList([
                ...list,
                {
                  id: Math.random(),
                  name: name !== "" ? name : "Unkown Activity",
                  date:
                    date === undefined || date === ""
                      ? "Unkown Date Activity"
                      : date,
                  check: check,
                  isFav: fav,
                },
              ]);
              setName("");
              input.current.focus();
            }}
          >
            ADD
          </button>
        </section>
        <Favorite list={favArray} />
      </div>
    </section>
  );
}

export default Input;
