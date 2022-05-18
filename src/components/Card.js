import React from "react"
import star from "../images/star.png"



function Card(props) {

    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }

    return (
        <div className="card">
            {badgeText&& <div className="card--badge">{badgeText}</div>}
            <img src={`../images/${props.coverImg}`} className="card--image" />
            <div className="card--stats">
                <img src={star} className="card--star" />
                <span>{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p><span className="bold card-price">From ${props.price}</span> / person</p>
        </div>
    )
}

export default Card;