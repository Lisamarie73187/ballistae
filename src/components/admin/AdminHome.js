import React, { Component } from 'react'
import AddItem from './AddItem';


class AdminHome extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
    }

    render() {
        return (
            <div>
                <div>
                    <AddItem/>
                </div>
            </div>
        )
    }
}



export default AdminHome
