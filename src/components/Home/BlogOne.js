import React, { Component } from 'react'
import Nav from '../Nav/Nav'
import Footer from './Footer'
// import logo from '../../Assests/ballistaelogoblack.png';


class Blog extends Component {
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
                    <h1>Blog</h1>
                    <h2>Its about more than just kneepads...</h2>
                    <p className="main">
                        I'm a huge fan of the Asic Gel Volleyball Knee pad. So much in fact 
                        that they tend to be my go to for over ten years now. They provide 
                        just enough padding to protect my knee when I go for a drop catch and 
                        aren't bulky or clumsy. The pair I use today have been with me for 
                        several seasons and tournaments on virtually every surface one can think of. 
                    </p>
                    <p className="main">
                    A few years ago, I reached out to Asics seeking a discount for bulk orders. 
                    It was my hope that like the 661 Kneepads, I'd be able to get a unique deal 
                    for Dodgeball players everywhere since saving money is always a concern. 
                    Instead, after a series of exchanges of finding the right person to speak with 
                    (navigating their site is a nightmare), I came to the following response:
                    </p>
                    <p className="main">
                    "If you wanted to talk about setting up an account for retail I would need more 
                    information, do you have a retail storefront, would it just be kneepads? We do 
                    have a minimum $5,000 opening order, that's a lot of kneepads"
                    </p>
                    <p className="main">
                    Duh. That would indeed be a lot of kneepads. There was something about that 
                    last remark however that turned me off to the entire thing and had me once again 
                    facing what we as Dodgeball players all face:
                    </p>
                    <p className="main">
                    Lack of legitimacy.
                    </p>
                    <p className="main">
                    Having played Dodgeball for over ten years, I've received just about everything 
                    you can think of when I tell others I play Dodgeball. From the annoying movie 
                    quotes, to awkward stares to (and this is a good change), reactions of amazement. 
                    However, I can't help but shake the bias of years passed in which the stigma of 
                    Dodgeball and its juvenile undertones is felt even in would could have been a 
                    potentially harmless statement.
                    </p>
                    <p className="main">
                    However, when I started reverse engineering what it would take to set up a 
                    storefront and be taken seriously from retail account managers, I saw many smaller 
                    steps and goals that were very achievable. It had not been too long since I had 
                    (sorta) manufactured my own Dodgeballs for my league. I had ordered 500 Tucson 
                    Dodgeball branded red rubber 8.5 inch balls...the only problem was that they were 
                    misprinted. I was pretty furious as you can imagine, that after weeks of back and 
                    forth with the Baden rep, to have a product that looked like it was regarded with 
                    as much care as...well...as much care is not even getting the blast label correctly. 
                    </p>
                    <p className="main">
                    The desire however, never left. It wasn't until I was shopping for my second pair 
                    of kneepads that I was hit with all of this again. We all know how it goes:
                    </p>
                    <p className="main">
                    You shop the volleyball section for kneepads. You check out the baseball section 
                    for sliders, arm braces, anything to do with throwing. You hit up the basketball 
                    section for shooter's sleevesand if you're hard core, maybe happen upon the apparel 
                    for the latest in compression wear.
                    </p>
                    <p className="main">
                    Regardless, there just does not exist a store or place dedicated to our sport and just as 
                    I figured with the sales rep from Asics, waiting for it to come is doing Dodgeball a 
                    disservice. The practice ones have gone out and made their own leagues, organizations 
                    and even content such as podcasts, books, and videos and I figured it was time to step 
                    up or shut up.
                    </p>
                    <p className="main">
                    You hit up the basketball section for shooter's sleeves
                    </p>
                    <p className="main">
                    The Version 1 Ballistae Kneepads are our first answer to a long series of questions 
                    that ultimately ask "when will Dodgeball have its day?" and I am happy to finally 
                    introduce them to you:
                    </p>
                    <p className="main">
                    The Version 1 kneepads will offer the same protection and snug fit that the above mentioned 
                    Asics provide and come in the following sizes:
                    </p>
                    <p className="main">
                    S<br/>M<br/>L
                    </p>
                    <p className="main">
                    The Version 1 kneepads will offer the same protection and snug fit that the above mentioned 
                    Asics provide and come in the following sizes:
                    </p>
                    <p className="main">
                    The Version 1 Kneepad offers Level 1 Knee protection in that you can drop to your knees 
                    from a standing position with the pads absorbing the impact. For most players, this is 
                    sufficient protection and mitigates the bulkiness you'll find in heavier pads. If you're a 
                    player that loves to jump in the air and hit the ground, you should probably not use these. 
                    If you're looking for an affordable work horse pair, these are for you. 
                    </p>
                </div>
                <Footer/>
            </div>
        )
    }
}


export default Blog
