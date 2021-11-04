import React, { Component } from "react";
import Navitems from "./Navitems";
import Logo from "../assets/shared/logo.svg";
import "../styles/Navbar.css";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      NavItemActive: "home",
    };
  }

  activeitem = (item) => {
    if (this.state.NavItemActive.length > 0) {
      document.getElementById(this.state.NavItemActive).classList.remove("active");
    }
    this.setState({ NavItemActive: item }, () => {
      document.getElementById(this.state.NavItemActive).classList.add("active");
    })
  };

  hamburger = () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".navbar_ul");
    const navLink = document.querySelectorAll(".navbar_ul li");

    navLink.forEach(n => n.addEventListener("click", closeMenu));

    hamburger.classList.toggle("active");
    navMenu.style.right = "0";

    if (hamburger.classList.contains("active") === false) {
      navMenu.style.right = "-40vw";
    }

    function closeMenu() {
      hamburger.classList.remove("active");
      navMenu.style.right = "-40vw";
    }
  }

  render() {
    return (
      <nav class="nav">
        <a class="logo" href="/">
          <img src={Logo} alt="Logo" />
        </a>
        <div class="hamburger" onClick={() => this.hamburger()}>
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
        <ul class="navbar_ul">
          <Navitems
            name="home"
            number="00"
            item="home"
            tolink="/"
            activenav={this.activeitem}
          ></Navitems>
          <Navitems
            name="destination"
            number="01"
            item="destination"
            tolink="/destination"
            activenav={this.activeitem}
          ></Navitems>
          <Navitems
            name="crew"
            number="02"
            item="crew"
            tolink="/crew"
            activenav={this.activeitem}
          ></Navitems>
          <Navitems
            name="technology"
            number="03"
            item="technology"
            tolink="/technology"
            activenav={this.activeitem}
          ></Navitems>
        </ul>
      </nav >
    );
  }
}

export default Navbar;
