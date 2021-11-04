import React, { Component } from "react";
import "../styles/Destination.css";

const data = require("../data.json");

class Destination extends Component {
    constructor(props) {
        super(props);
        this.state = {
            NavItemActive: "0",
        };
    }

    activeitem = id => {
        const currentClass = document.getElementsByClassName("destination_li");
        for (let i = 0; i < currentClass.length; i++) {
            currentClass[i].className = currentClass[i].className.replace(" active", "");
        }
        currentClass[id].className += " active";
        this.setState({ NavItemActive: id });
    };

    render() {
        const { name, images, description, distance, travel } = data.destinations[this.state.NavItemActive];

        return (
            <section class="destination_background">
                <div class="destination-block-1">
                    <div class="destination_header">
                        <h2><b>01</b> Pick your destination</h2>
                    </div>
                    <div class="destination_img">
                        <img src={images.webp} alt="destination_image" />
                    </div>
                </div>
                <div class="destination-block-2">
                    <nav class="destination_nav">
                        <ul class="destination_ul">
                            <li onClick={() => this.activeitem(0)} class="destination_li active">
                                {data.destinations[0].name}
                            </li>
                            <li onClick={() => this.activeitem(1)} class="destination_li">
                                {data.destinations[1].name}
                            </li>
                            <li onClick={() => this.activeitem(2)} class="destination_li">
                                {data.destinations[2].name}
                            </li>
                            <li onClick={() => this.activeitem(3)} class="destination_li">
                                {data.destinations[3].name}
                            </li>
                        </ul>
                    </nav>
                    <div class="destination_content">
                        <h1>{name}</h1>
                        <p>{description}</p>
                        <div class="destination_footer">
                            <div class="distance">
                                <h6>Avg. distance</h6>
                                <h5>{distance}</h5>
                            </div>
                            <div class="travel">
                                <h6>Est. travel time</h6>
                                <h5>{travel}</h5>
                            </div>
                        </div>
                    </div >
                </div >
            </section >
        );
    }
}

export default Destination;