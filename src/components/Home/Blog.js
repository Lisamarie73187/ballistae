import React, { Component } from 'react'
// import BlogOne from './BlogOne'
import { Link } from 'react-router-dom'
import Nav from '../Nav/Nav'
import Footer from './Footer'


class Blog extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <div>
                <Nav/>
                <div className="about">
                    <h1>Blog</h1>
                        <h2>Its about more than just kneepads...</h2>
                        <p className="main">Nov 19, 2017</p>
                        <p className="main">
                            I'm a huge fan of the Asic Gel Volleyball Knee pad. So much in fact 
                            that they tend to be my go to for over ten years now. They provide 
                            just enough padding to protect my knee when I go for a drop catch and 
                            aren't bulky or clumsy. The pair I use today have been with me for 
                            several seasons and tournaments on virtually every surface one can think of. 
                            <Link to="/blogone" style={read}><div>Read More</div></Link>
                        </p>
                    </div>
                </div>
                <Footer/>
            </div>
        )
    }
}

const read = {
    color: 'rgb(110, 110, 110',
    cursor: 'pointer'
}
export default Blog
