import React, { Component } from "react";
import "../styles/Technology.css";

const data = require("../data.json");

class Technology extends Component {
    constructor(props) {
        super(props);
        this.state = {
            NavItemActive: "0",
        };
    }

    activeitem = id => {
        const currentClass = document.getElementsByClassName("technology_li");
        for (let i = 0; i < currentClass.length; i++) {
            currentClass[i].className = currentClass[i].className.replace(" active", "");
        }
        currentClass[id].className += " active";
        this.setState({ NavItemActive: id });
    };

    render() {
        const { name, images, description } = data.technology[this.state.NavItemActive];

        return (
            <section class="technology_background">
                <div class="technology-block-1">
                    <div class="technology_header">
                        <h2><b>03</b> Space launch 101</h2>
                    </div>
                    <div class="technology_img_landscape">
                        <img src={images.landscape} alt="technology_image" />
                    </div>
                    <nav class="technology_nav">
                        <ul class="technology_ul">
                            <li onClick={() => this.activeitem(0)} class="technology_li active">1</li>
                            <li onClick={() => this.activeitem(1)} class="technology_li">2</li>
                            <li onClick={() => this.activeitem(2)} class="technology_li">3</li>
                        </ul>
                    </nav>
                    <div class="technology_content">
                        <h2>The technology...</h2>
                        <h1>{name}</h1>
                        <p>{description}</p>
                    </div >
                </div >
                <div class="technology-block-2">
                    <div class="technology_img_portrait">
                        <img src={images.portrait} alt="technology_image" />
                    </div>
                </div>
            </section>
        );
    }
}

export default Technology;