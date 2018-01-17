import React, { Component } from 'react';
import axios from 'axios'
// import pictureOne from '../../Assests/compressionShirt.jpg';



class Item extends Component {
    constructor(props) {
        super(props)
        this.state = {
           data: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3003/api/products').then( res => {
            console.log(res.data)
            this.setState({
                data: res.data
            })
        })
    }

    render() {
        return (
            <div className="layoutShop">
                {this.state.data.map((e) => {
                    return (
                    <div key={e.productid}>
                        <div className="images" style={shadow}><img src={`https://s3-us-west-1.amazonaws.com/ballistae/${e.img}`} alt={this.props.alt} height="300px"/></div>
                    </div>)
                })}
            </div>
        )
    }
}

const shadow = {
    boxShadow: '5px 5px 34px 4px rgba(0,0,0,0.20)'
}

export default Item
