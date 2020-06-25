import React, {Component} from 'react'
import {scaleRotate as Menu} from 'react-burger-menu'
import {
    Container,
    Header,
    Image,
    Icon,
    Button,
    Card,
    Grid,
    Divider
} from 'semantic-ui-react'
import {Animated} from 'react-animated-css'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const Projects_Header = dynamic(
    () => import('../components/projects_header'),
    { loading: () => <div><Image src='/static/images/loading-d.gif' className="loading"/></div> }
  )

  const Articles = dynamic(
    () => import('../components/articles_header'),
    { loading: () => <div><Image src='/static/images/loading-d.gif' className="loading"/></div> }
  )


export default class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false
        }
    }
    handleStateChange(state) {
        this.setState({menuOpen: state.isOpen})
    }
    closeMenu() {
        this.setState({menuOpen: false})
    }
    toggleMenu() {
        this.setState(state => ({
            menuOpen: !state.menuOpen
        }))
    }
    render() {
        return (
            <div id="App">
                Site Maintenance :)
            </div>
        )
    }
}
