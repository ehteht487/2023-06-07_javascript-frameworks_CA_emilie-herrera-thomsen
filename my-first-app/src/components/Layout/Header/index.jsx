import React from "react";
import Nav from "./Nav"; 
import IconCart from "./IconCart";

export default function Header() {
    const cartNumber = 5;

    return (
        <header>
            <Nav />
            <IconCart numberItems={cartNumber} />
        </header>
    );
};



