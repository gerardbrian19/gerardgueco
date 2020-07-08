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
    Divider,
    Flag
} from 'semantic-ui-react'
import Link from 'next/link'

export default class Sidebar extends Component{
    componentDidMount(){
    console.log(this.props.active);
    
    }
    render(){

        return(
            <Menu {...this.props}>
                    <div className="bm-item nav-content">
                            <Image src='/static/images/logo-light1.png' className="logo"/>
                            <div className="links">
                                <Link href="/">
                                    <a className="menu-item active">Home</a>
                                </Link>
                                <Link href="/projects">
                                    <a className="menu-item">Projects</a>
                                </Link>
                                <Link href="/articles">
                                    <a className="menu-item">Articles</a>
                                </Link>
                                <Link href="/static/images/gerard_gueco_resume.pdf">
                                    <a  target="_blank" className="menu-item">Resumé</a>
                                </Link>
                            </div>
                            <div className="social-icons">
                                <a title="Medium" href="https://medium.com/@gerardgueco" target="_blank">
                                    <Icon name="medium"></Icon>
                                </a>
                                <a title="Youtube" href="https://www.youtube.com/channel/UC1bQUFzHdunG_62gVVQxn9g?view_as=subscriber" target="_blank">
                                    <Icon name="youtube square"></Icon>
                                </a>
                                <a title="Github" href="https://github.com/gerardbrian19" target="_blank">
                                    <Icon name="github square"></Icon>
                                </a>
                            </div>
                        </div>
                </Menu>
        )
    }
}