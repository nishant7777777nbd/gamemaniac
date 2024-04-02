import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";


export default function Toprated({ slides }) {
    const indexedArray = slides.map((value, index) => ({
        value,
        index,
    }));
    indexedArray.sort((a, b) => a.value - b.value)
    return (
        <div className="recommendcontainer">
            <h2 className="boxtitle">TOP RATED GAMES </h2>
            <div className="recommendboxes">
                {indexedArray.slice(0, 9).map((box, index) => (
                    <Link to={"/" + box.index} key={box.value.id} className="linktoprated">
                        <img className="horizontalbox" src={box.value.background_image} alt={box.value.name}></img>
                        <p className="titleratingrecommend">{box.value.name}({box.value.rating}/{box.value.rating_top})</p>
                    </Link>
                ))}
            </div>
        </div>
    )
}