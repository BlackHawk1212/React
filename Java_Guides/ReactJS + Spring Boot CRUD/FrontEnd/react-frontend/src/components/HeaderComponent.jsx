import React, { Component } from 'react'

export default class HeaderComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <header>
                    <nav className='navbar navbar-expand-md navbar-dark dg-dark'>
                        <div><h1>Employee Management App</h1></div>
                        {/* <div><a href="https://javaguides.net" className="navbar-brand">Employee Management App</a></div> */}
                    </nav>
                </header>
            </div>
        )
    }
}