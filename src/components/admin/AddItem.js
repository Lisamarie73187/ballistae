import React, { Component } from 'react'
import axios from 'axios'


class AddItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            price: '',
            desc:'',
            img: '',
        }
        this.addNewProduct = this.addNewProduct.bind(this)
    }

    addNewProduct(){
        console.log('button working?')
        axios.post('http://localhost:3003/api/product/add', {
            title: this.state.title, 
            price: this.state.price, 
            desc: this.state.desc, 
            img: this.state.img
        })
         .then(res => {
            // this.props.history.push('/home');
        }).catch(err => console.error(err))
        }

    handleTitleChange ( value ){
        console.log(value)
        this.setState({ title: value})
    }
    handlePriceChange ( value ){
        console.log(value)
        this.setState({ price: value})
    }
    handleDescChange ( value ){
        console.log(value)
        this.setState({ desc: value})
    }
    handleImgChange ( value ){
        console.log(value)
        this.setState({ img: value})
    }

    render() {
        return (
            <div className="textyText">
                <div>Add Item</div>
                <form>
                    <div><input onChange={(e)=> {this.handleTitleChange(e.target.value)}}
                                type="text" 
                                value={this.state.value} 
                                placeholder="name of product"/></div>
                    <div><input onChange={(e)=> {this.handlePriceChange(e.target.value)}}
                                type="text"
                                value={this.state.value}
                                placeholder="price"/></div>
                    <div><input onChange={(e)=> {this.handleDescChange(e.target.value)}}
                                type="text"
                                value={this.state.value}
                                placeholder="description"/></div>
                    <div><input onChange={(e)=> {this.handleImgChange(e.target.value)}}
                                value={this.state.value}
                                placeholder="upload picture"
                                type="file" 
                                name="filename" 
                                accept="image/jpeg, image/png"/></div>
                    <div><button type="reset">reset</button>
                    <button onClick={this.addNewProduct} type="submit">Add</button></div>
               </form>
            </div>
        )
    }
}


export default AddItem
