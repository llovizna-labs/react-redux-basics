import React, {Component} from "react";

export const List = (props) => {

    let items = props.items;

    return (
      <div>
        <h2> {items.length} Elements  </h2>
        <ul>
            {items.map(function(i, index){
                return <li key={ index }>{i.value}</li>;
            })}
        </ul>
      </div>
    );
}
