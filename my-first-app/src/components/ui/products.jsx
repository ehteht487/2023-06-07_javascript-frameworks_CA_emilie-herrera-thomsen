import React from "react";
import { Link } from "react-router-dom";

export default function Products({products}) {
    return (
        <div>
            <h3>{products.title}</h3>
            <p>{products.description}</p>
            <Link to={`/product/${products.id}`}>
                <button>View product</button>
            </Link>
        </div>
    )
};