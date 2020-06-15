import React from "react";
import ListItem from "./ListItem";
import "./List.css"


export default function List(props) {
    return (
        <ul className="List">
            {props.items.map((things) => (
                <ListItem key={things} itemName={things}/>
            ))}
        </ul>
    )

}

