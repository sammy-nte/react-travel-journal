import React from "react"
import locationPin from "../img/location-pin.png"


export default function Location(props){
    return(
        <section className="location-container">
            <div className="location-content">
                <div className="location-img-container">
                    <img className="location-image" src={props.item.imageUrl} alt="" />
                </div>
                <div className="description">
                    <div className="location">
                        <img
                         src={locationPin}
                         height="12px"
                         width= "10px"
                         alt=""
                        />
                        <span className="location-country">{props.item.location}</span>
                        <a href={props.item.googleMapsUrl} target="_blank" rel="noeferrer">View on Google Maps</a>
                    </div>
                    <div className="location-title">
                        <p className="location-title_p">{props.item.title}</p>
                    </div>
                    <div className="info">
                        <p className="dates"><span className="start-date">{props.item.startDate}</span>-<span className="end-date">{props.item.endDate}</span></p>
                        <p className="info-text">{props.item.description}</p>
                    </div>
                </div>
            </div>
        </section>
    )
}