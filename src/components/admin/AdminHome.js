import React, { Component } from 'react'
import AddItem from './AddItem';
import axios from 'axios';



class AdminHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }

   
    componentDidMount() {
        axios.get('http://localhost:3003/api/product/get').then(res => {
            console.log(res.data)
            this.setState ({
                products: res.data
            })
        })
    }

    render() {
        return (
            <div>
                <div>
                    <AddItem/>
                </div>
                <div>
                    {this.state.products.map((e) => {
                       return(
                        <div key={e.productid}>
                            <div>product name: {e.title}</div>
                            <div>product price: {e.price}</div>
                            <div>product description: {e.description}</div>
                            <div>product image: <img src={e.img} alt="product" width="200px"/></div>
                       </div>
                       )
                    })}
                </div>
            </div>
        )
    }
}



export default AdminHome
