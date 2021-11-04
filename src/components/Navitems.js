import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navitems extends Component {
    render() {
        return (
            <li className={window.location.pathname === this.props.tolink ? "active" : ""} id={this.props.item} onClick={this.props.activenav.bind(this, this.props.item)}>
                <Link to={this.props.tolink}><b>{this.props.number}&nbsp;&nbsp;</b>{this.props.name}</Link>
            </li>
        )
    }
}

export default Navitems;