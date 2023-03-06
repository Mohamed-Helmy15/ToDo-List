import React from "react";
import List from "../List/List";
import "./favorite.css";
import "../List/list.css";
const Favorite = (props) => {
  let fav = props.list;
  return (
    <section className="fav-container">
      <List list={fav} fav={fav} show={false} />
    </section>
  );
};

export default Favorite;
