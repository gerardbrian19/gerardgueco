import React, {Component} from 'react'
import {scaleRotate as Menu} from 'react-burger-menu'
import ReactFullpage from '@fullpage/react-fullpage'
import Swiper from 'react-id-swiper'
import {
    Container,
    Header,
    Image,
    Icon,
    Button,
    Card,
    Grid,
    Divider,
    Label
} from 'semantic-ui-react'
import {Animated} from 'react-animated-css'
import Link from 'next/link'
import { TransitionModal } from 'semantic-ui-react-transition-modal'
import YouTube from 'react-youtube'

export default class Projects extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false,
            idx: 0
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
    _onReady(event) { // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
    componentDidMount(e) {
        console.log(this.props)
    }
    render() {
        const params = {
            effect: 'coverflow',
            grabCursor: true,
            coverflowEffect: {
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true
            },
            centeredSlides: true,
            slidesPerView: 'auto',

            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev'
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            }
        };
        return (
            <div id="App">
                {/* Sidebar Start */}
                <Menu pageWrapId={"full-screen"}
                    outerContainerId={"App"}
                    isOpen={
                        this.state.menuOpen
                    }
                    onStateChange={
                        (state) => this.handleStateChange(state)
                }>
                    <div className="bm-item nav-content">
                        <Image src='/static/images/logo-light1.png' className="logo"/>
                        <div className="links">
                            <Link href="/">
                                <a className="menu-item">Home</a>
                            </Link>
                            <Link href="/projects">
                                <a className="menu-item active">Projects</a>
                            </Link>
                            <Link href="/">
                                <a className="menu-item">Resumé</a>
                            </Link>
                        </div>
                        <div className="social-icons">
                            <a href="/">
                                <Icon name="medium"></Icon>
                            </a>
                            <a href="/">
                                <Icon name="youtube square"></Icon>
                            </a>
                            <a href="/">
                                <Icon name="github square"></Icon>
                            </a>
                        </div>
                    </div>

                </Menu>
                {/* Sidebar End */}
                <main id="full-screen">
                    <div className="light-nav">
                        <Container> {/* Header Start */}
                            <div className="header-content">
                                <div>
                                    <Header as='h2'>
                                        <Image circular src='/static/images/gerard_formal.jpg'/>
                                        <Header.Content>
                                            Hi, I'm Gerard Gueco
                                            <Header.Subheader>Software Engineer
                                                <br></br>
                                                <p className="location"><Icon name='map marker alternate'/>
                                                    Manila, Philippines
                                                </p>
                                            </Header.Subheader>
                                        </Header.Content>
                                    </Header>
                                </div>
                                <div>
                                    <Button inverted icon size='big'
                                        onClick={
                                            () => this.toggleMenu()
                                    }>
                                        <Icon name='bars'/>
                                    </Button>
                                </div>
                            </div>
                            {/* Header End */} </Container>
                    </div>
                    <div className="projects-page">
                    <ReactFullpage navigation
                    render={
                        comp => console.log("render prop change") || (
                            <ReactFullpage.Wrapper> {
                                <div> 
                                    <div className="section" data-anchor="">
                                        <div className="content">
                                            <Header as='h1' className="welcome-projects">
                                                <Header.Content>
                                                    Projects
                                                </Header.Content>
                                            </Header>
                                            <Icon inverted name='chevron down' className="go-down bounce"/>
                                        </div>
                                        <div className="gradient MidnightCity"></div>
                                        <div className="lowpoly"></div>
                                    </div>
                                    {Object.keys(this.props).map((data, i) => {
                                        return typeof(this.props[data].slug) == 'string' ?
                                        <div
                                        key={i}
                                        className="section"
                                        style={
                                            {
                                                // background: "pink"
                                                background: "rgba(201, 124, 124, 0) url(" + this.props[data].thumb + ") repeat scroll 0% 0%"
                                            }
                                        }
                                        data-fp-styles={
                                            {
                                                // background: "pink"
                                                background: "rgba(0, 0, 0, 0) url(" + this.props[data].thumb + ") repeat scroll 0% 0%"
                                            }
                                        }
                                        
                                        data-anchor={this.props[data].slug}
                                        >
                                            <div className="content">
                                                <Grid>
                                                    <Grid.Row>
                                                        <Grid.Column className="center">
                                                            <Header as='h2' icon>
                                                                <Image src={this.props[data].logo} centered/>
                                                                <Divider hidden/> 
                                                                {this.props[data].name}
                                                                <Header.Subheader>
                                                                    {this.props[data].desc} 
                                                                </Header.Subheader>
                                                            </Header>
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                    {typeof(this.props[data].languages) == 'object' ? 
                                                    <Grid.Row className="center languages">
                                                        {typeof(this.props[data].role) == 'string' ? 
                                                        <Label color="red">{this.props[data].role}</Label> 
                                                        : 
                                                        null}
                                                        {typeof(this.props[data].languages) == 'object' ? 
                                                        this.props[data].languages.sort().map((subData, j) => {
                                                            return (
                                                            <Label key={j}>{subData} </Label>
                                                            )})
                                                        : 
                                                        null} 

                                                    </Grid.Row>
                                                    : 
                                                    null}
                                                    <Grid.Row className="center btns">
                                                        {typeof(this.props[data].platforms) == 'object' ? 
                                                        <div className="platforms">
                                                            {this.props[data].platforms.map((subData, j) => (
                                                            subData.type == 'web' ?
                                                            <a key={j} href={subData.link} target="_blank">
                                                                <Button circular basic inverted icon='globe'/>
                                                            </a>
                                                            :
                                                            subData.type == 'android' ?
                                                            <a key={j} href={subData.link} target="_blank">
                                                                <Button circular basic inverted icon='android'/>
                                                            </a>
                                                            :
                                                            null
                                                            ))} 
                                                        </div> 
                                                        : 
                                                        null}
                                                    <TransitionModal className="preview-lightbox" size="small" basic animation="fade" duration={400} trigger={(<Button circular inverted>{this.props[data].view_title}</Button>)} closeIcon>
                                                            {typeof(this.props[data].preview) == 'object' ? 
                                                             <div className="center content">
                                                                 <Swiper {...params}>
                                                                {this.props[data].preview.map((subData, j) => (
                                                                typeof(subData.img) == 'string' ?
                                                                <div className="center" key={j}>
                                                                    <div 
                                                                    className="img"
                                                                    style={
                                                                        {background: "url(" + subData.img + ")"}
                                                                    }/>
                                                                </div>
                                                                :
                                                                typeof(subData.yt) == 'string' ?
                                                                <div className="center" key={j}>
                                                                    <YouTube className="yt" videoId={subData.yt} onReady={this._onReady} />
                                                                </div>
                                                                :
                                                                null
                                                                ))}
                                                                
                                                             </Swiper>
                                                             {/* {this.props[data].preview[0].caption} */}
                                                             </div>
                                                            : 
                                                            null}
                                                    </TransitionModal>
                                                        {/* TODO: 
                                                            Fix Captions
                                                            Add Loader in Projects
                                                            Fix Wrapper in  Project Burger Menu
                                                            Fix Youtube IFrame
                                                            Add All Links
                                                            Add Slash in link
                                                        */}
                                                        
                                                        
                                                    </Grid.Row>
                                                    {typeof(this.props[data].credit) == 'string' ?
                                                    <Grid.Row className="center credit">
                                                        <Divider inverted hidden/>
                                                        <div dangerouslySetInnerHTML={{__html: this.props[data].credit}}/>
                                                    </Grid.Row>
                                                    :
                                                    null}
                                                </Grid>
                                            </div> 
                                            <div className={'gradient ' + this.props[data].gradient}></div>
                                        </div>
                                        :
                                        null
                                    }
                                    )}
                            </div>
                            } </ReactFullpage.Wrapper>
                        )
                    }/>
                    </div>

                </main>
            </div>
        )
    }
}
