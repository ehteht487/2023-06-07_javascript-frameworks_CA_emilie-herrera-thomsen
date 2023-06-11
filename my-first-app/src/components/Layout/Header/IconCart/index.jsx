import React from "react";
import { FiShoppingCart } from "react-icons/fi"

export default function IconCart({numberItems}) {
    return (
        <div>
            <FiShoppingCart/>
            {numberItems > 0 && (
                <div className="overlay">
                    <span className="number-items">{numberItems}</span>
                </div>
            )}
        </div>
    );
};