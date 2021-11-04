import React, { Component } from "react";
import "../styles/Home.css";

class Home extends Component {
    render() {
        return (
            <section class="home_background">
                <div class="home-block-1">
                    <div class="home_content">
                        <h2>So, you want to travel to</h2>
                        <h1>Space</h1>
                        <p>Let’s face it; if you want to go to space, you might as well genuinely go to
                            outer space and not hover kind of on the edge of it. Well sit back, and relax
                            because we’ll give you a truly out of this world experience!</p>
                    </div>
                </div>
                <div class="home-block-2">
                    <div class="home_explore">
                        <a href="https://earth.google.com/web/" target="_blank" rel="noreferrer">explore</a>
                    </div>
                </div>
            </section>
        );
    }
}

export default Home;