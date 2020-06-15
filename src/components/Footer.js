import React from "react";
import "./Footer.css"

export default function Footer(props) {
    return (
        <footer className="appFooter">
            <h4>{props.children}</h4>
            <p>Einhörnchen for president</p>
        </footer>
    )
}