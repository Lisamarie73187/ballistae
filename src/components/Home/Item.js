import React, { Component } from 'react';
// import pictureOne from '../../Assests/compressionShirt.jpg';



class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <div style={shadow}><img src={this.props.picture} alt={this.props.alt} height="300px"/></div>
            </div>
        )
    }
}

const shadow = {
    boxShadow: '5px 5px 34px 4px rgba(0,0,0,0.20)'
}

export default Item
