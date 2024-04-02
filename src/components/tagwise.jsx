import React from "react";
// import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Tagwise({ slides }) {

    return (

        <div className="tagcontainer">
            <h2 className="tagwisetitle">BROWSE BY TAG</h2>
            <div className="tagwiseicons">
                <Link to={"/tags/Co-op"} ><div className="tagtitle">Co-op</div></Link >
                <Link to={"/tags/Comedy"} ><div className="tagtitle">Comedy</div></Link >
                <Link to={"/tags/Crime"} ><div className="tagtitle">Crime</div></Link >
                <Link to={"/tags/Fantasy"} ><div className="tagtitle">Fantasy</div></Link >
                <Link to={"/tags/First-Person"} ><div className="tagtitle">First-Person</div></Link >
                <Link to={"/tags/Great Soundtrack"} ><div className="tagtitle">Great Soundtrack</div></Link >
                <Link to={"/tags/Magic"} ><div className="tagtitle">Magic</div></Link >
                <Link to={"/tags/Mature"} ><div className="tagtitle">Mature</div></Link >
                <Link to={"/tags/Medieval"} ><div className="tagtitle">Medieval</div></Link >
                <Link to={"/tags/Multiplayer"} ><div className="tagtitle">Multiplayer</div></Link >
                <Link to={"/tags/Open World"} ><div className="tagtitle">Open World</div></Link >
                <Link to={"/tags/Singleplayer"} ><div className="tagtitle">Singleplayer</div></Link >
                <Link to={"/tags/Story Rich"} ><div className="tagtitle">Story Rich</div></Link >
                <Link to={"/tags/Third Person"} ><div className="tagtitle">Third Person</div></Link >
            </div>
        </div>
    )
}