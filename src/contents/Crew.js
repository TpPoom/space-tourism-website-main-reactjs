import React, { Component } from "react";
import "../styles/Crew.css";

const data = require("../data.json");

class Crew extends Component {
    constructor(props) {
        super(props);
        this.state = {
            NavItemActive: "0",
        };
    }

    activeitem = id => {
        const currentClass = document.getElementsByClassName("crew_li");
        for (let i = 0; i < currentClass.length; i++) {
            currentClass[i].className = currentClass[i].className.replace(" active", "");
        }
        currentClass[id].className += " active";
        this.setState({ NavItemActive: id });
    };

    render() {
        const { name, images, role, bio } = data.crew[this.state.NavItemActive];

        return (
            <section class="crew_background">
                <div class="crew-block-1">
                    <div class="crew_header">
                        <h2><b>02</b> Meet your crew</h2>
                    </div>
                    <div class="crew_img_phone opacity">
                        <img src={images.webp} alt="crew_image" />
                    </div>
                    <div class="crew_content">
                        <h2>{role}</h2>
                        <h1>{name}</h1>
                        <p>{bio}</p>
                    </div >
                    <nav class="crew_nav">
                        <ul class="crew_ul">
                            <li onClick={() => this.activeitem(0)} class="crew_li active"></li>
                            <li onClick={() => this.activeitem(1)} class="crew_li"></li>
                            <li onClick={() => this.activeitem(2)} class="crew_li"></li>
                            <li onClick={() => this.activeitem(3)} class="crew_li"></li>
                        </ul>
                    </nav>
                </div >
                <div class="crew-block-2">
                    <div class="crew_img opacity">
                        <img src={images.webp} alt="crew_image" />
                    </div>
                </div>
            </section>
        );
    }
}

export default Crew;