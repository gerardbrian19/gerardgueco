import React, {Component} from 'react'
import Link from 'next/link'


export default class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false
        }
    }
   
    render() {
        return (
            <div id="App">
               <Link href="/">
                <a>Home</a>
                </Link>
                {typeof(this.props)}
            </div>
        )
    }
}
