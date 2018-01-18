import React, { Component } from 'react'
import './Home.css';
import Nav from './../Nav/Nav';
import Featured from './Featured';
import Item from './Item';
import ItemsTwo from './ItemsTwo';
import Footer from './Footer';
import Slider from './Slider';

class Home extends Component {
    constructor() {
        super()
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <div className="header">
                    <Nav/>
                </div>
                <div className="hero">
                    <div className="heroText">
                        <div>DODGEBALL</div><br/>
                        <div>GEAR</div>
                    </div>
                </div>
                <div className="panelTwo">
                    <div className="red">sdfdf</div>
                    <div className="Finally">Finally...</div>
                    <div className="textyText">Dodgeball Gear Made for the Players by the Players</div>
                </div>
                <Featured/>
                <div className="red">sdfdf</div>
                <Item/>
                {/* <div className="red" style={red}>h</div> */}
                <ItemsTwo/>
                <Slider/>
                <Footer/>
            </div>
        )
    }
}

// const red = {
//     width: '90%',
//     margin: 'auto',
//     padding: '0',
//     backgroundColor: 'gray'
// }

export default Home
