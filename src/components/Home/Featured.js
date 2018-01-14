import React, { Component } from 'react';
import './Home.css';
import kneePads from '../../Assests/KneePad2.jpg';


class Featured extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className="raps">
                <img className="shadow" src={kneePads} alt="Ballistae Knee Pads" width="400px"/>
                <div className="rapper">
                    <div className="featuredItem">It's almost here. The Ballistae Version 1 Kneepads are the staple kneepads for the Dodgeball Player. Prevent injury and maintain the ease of movement needed for dominating on the court</div>
                    <button className="button">Shop Now</button>
                </div>
            </div>
        )
    }
}



export default Featured
