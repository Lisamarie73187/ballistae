import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import Footer from './Footer'


class AboutUs extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
               <Nav/>
               <div className="about">
                   <h1>About Ballistae</h1>
                        <p className="main">Ballistae Dodgeball Gear and Apparel is a labor of love derived from a sport 
                            we are fanatic about. After getting fed up with having to search in 
                            multiple departments of a sporting goods store to piece together the 
                            ultimate Dodgeball performance wear and gear, we decided it was time 
                            to be part of the change we wish to see in this world.</p>
                    <h2>What's in a Name?</h2>
                        <p>As there aren't very many coined Dodgeball terms (unless you want to 
                            bring up "the movie") to work off of (and some exist within certain 
                            organizations exclusively), we wanted a name that would stand out 
                            amongst the Dodgeball community and its players new and experienced alike.</p>

                        <p>When one thinks of the sport of Dodgeball, the main theme is someone being 
                            pelted by a relentless series of balls. As Ballistae is the plural form of 
                            Ballista, we felt we'd get the point across. </p>
                    <h2>Our Mission</h2>
                        <p>"To become the official supplier of Dodgeball gear and apparel"</p>
                    <h2>Our Vision</h2>
                        <p>That Dodgeball players new and experienced alike will have one single 
                            place to go to in order to acquire everything they need to get in the game. 
                            To one day walk into a sporting goods store and b-line straight for the 
                            Dodgeball section. </p>
                    <h2>Our Promise</h2>
                        <p>Our promise to you, the Dodgeball player, is to provide you with affordable, 
                            quality gear and apparel that will keep you in the game. </p>
               </div>
               <Footer/>
            </div>
        )
    }
}


export default AboutUs
