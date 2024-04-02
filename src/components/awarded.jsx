import React from "react";
import awards from "../images/gameawards1.jpg"

const Awarded = ({ slides }) => {
    const awarditems = slides.filter(slide => {
        return slide.tags.some(tag => tag.name = 'Steam Achievements')
    })
    return (
        <div className="awardsContainer">
            <img className="gameawardimage" src={awards} alt="gameawards"></img>
            <div className="awardsimages">
                {awarditems.slice(0, 6).map(awarditem => (
                    <img src={awarditem.background_image} key={awarditem.id} alt="gameimages"></img>
                ))}
            </div>
        </div>
    )
}
export default Awarded