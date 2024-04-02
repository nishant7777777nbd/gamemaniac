import React from "react";
import Action from "../images/action.png"
import Adventure from "../images/adventure.png"
import Rpg from "../images/rpg.png"
import Survival from "../images/survival.png"
import Puzzle from "../images/puzzle.png"
import { Link } from "react-router-dom";

export default function Genrewise({ slides }) {
  return (
    <div className="genrewisecontainer">
      <h2 className="genrewisetitle">BROWSE BY CATEGORY</h2>
      <div className="genrewiseimages">
        <Link to="/category/Action"><img src={Action} alt="action" className="actionimg"></img></Link>
        <Link to="/category/Adventure"><img src={Adventure} alt="adventure" className="adventureimg"></img></Link>
        <Link to="/category/RPG"><img src={Rpg} alt="rpg" className="rpgimg"></img></Link>
        <Link to="/category/Shooter"><img src={Survival} alt="survival" className="survivalimg"></img></Link>
        <Link to="/category/Puzzle"><img src={Puzzle} alt="puzzle" className="puzzleimg"></img></Link>

      </div>
    </div>
  )
}