import React, { Component } from 'react';
import Item from './Item';
import './Home.css';
import pictureOne from '../../Assests/compressionShirt.jpg';


class Shop extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div className="black">
                <div className="textyText" style={itemName}>{this.props.featured}</div>
                <div className="layoutShop">
                    <Item 
                        picture={pictureOne} 
                        alt="compression" />
                    <Item 
                        picture={pictureOne} 
                        alt="compression" />
                    <Item 
                        picture={pictureOne} 
                        alt="compression" />
                    <Item 
                        picture={pictureOne} 
                        alt="compression" />
                </div>
                <div style={flexyFlex}>
                    <button className="button">View All</button>
                </div>
            </div>
        )
    }
}

const flexyFlex = {
    display: 'flex',
    justifyContent: 'center',
    marginTop: '20px'
}

const itemName = {
    padding: '40px',
    fontSize: '25pt'
}
export default Shop
