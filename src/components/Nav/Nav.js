import React, { Component } from 'react';
import logo from '../../Assests/BallistaeLogoWhite.png';
import { Link } from 'react-router-dom'

class Nav extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <div className="header">
                    <div className="nav">
                        <img className="logo" src={logo} alt="logo"/>
                        <div className="boxyBox"></div>
                        <Link to="/" className="link"><div>Home</div></Link>
                        <Link to="/about" className="link"><div>About Us</div></Link>
                        <Link to="/shop" className="link"><div>Catalog</div></Link>
                        <Link to="/blog" className="link"><div>Blog</div></Link>
                        {/* <Link to="/admin">admin</Link> */}
                    </div>
                </div>
            </div>
        )
    }
}



export default Nav
