import React, {Component} from 'react'
import Link from 'next/link'


export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false
        }
    }
    render() {
        return (
            <div id="App">
               <Link href="/projects">
          <a>Projects</a>
        </Link>
            </div>
        )
    }
}
