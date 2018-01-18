import React, { Component } from 'react';
import axios from 'axios'
import Nav from '../Nav/Nav'
import Footer from './Footer'
import './Home.css'



class Shop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: []
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3003/api/products').then ( res => {
            this.setState({
                data:res.data
            })
        })
    }

    render() {
        let products = this.state.data.map((e) => {
            return (
            <div key={e.productid} className="box">
                <div className="productTitle">{e.title}</div>
                <div className="price">${e.price}</div>
                <div className="desc">{e.description}</div>
                <div className="pic">
                <div><img src={`https://s3-us-west-1.amazonaws.com/ballistae/${e.img}`} alt="product" height="300px"/></div>
                </div>
            </div>
            )
        })
        return (
            <div>
                <Nav/>
               <div className="shop">
                    {products}
               </div>
               <Footer/>
            </div>
        )
    }
}

// const shoplayout = {
//     margin: 'center'
// }

export default Shop
