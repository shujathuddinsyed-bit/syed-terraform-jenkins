import React, { Component } from 'react'
import './Logout.css'
export class Logout extends Component {
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div>
                <h3 style={{'margin-top': '10%'}}>Thank you for using breach reporting system.You have successfully loggedout</h3>
            </div>
        )
    }
}

export default Logout
