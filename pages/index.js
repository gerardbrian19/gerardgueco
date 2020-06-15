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
                {/* Sidebar Start */}
                <Menu pageWrapId={"main-content"}
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
                {/* Sidebar End */}
                <main id="main-content">
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
                                <Button basic icon size='big'
                                    onClick={
                                        () => this.toggleMenu()
                                }>
                                    <Icon name='bars'/>
                                </Button>
                            </div>
                        </div>
                        {/* Header End */}
                        {/* Header Start */}
                        <Header as='h3'>
                            <Header.Content>
                                Things I've made
                                <Header.Subheader>I've made many projects</Header.Subheader>
                            </Header.Content>
                        </Header>
                        {/* Header End */}

                        <Projects_Header/>

                        {/* Header Start */}
                        <Header as='h3'>
                            <Header.Content>
                                Articles
                                <Header.Subheader>
                                    I like to write in my free time 
                                    <Link href="/articles">
                                        <a> (view all)</a>
                                    </Link>
                                </Header.Subheader>
                            </Header.Content>
                        </Header>
                        {/* Header End */}

                        <Articles/>

                        {/* Header Start */}
                        <Header as='h3'>
                            <Header.Content>
                                Contact
                                <Header.Subheader>If you require any further information, feel free to contact me!</Header.Subheader>
                            </Header.Content>
                        </Header>
                        {/* Header End */}
{/* Contacts Start */}
<Grid className="links">
                            <Grid.Row columns={4}>
                                <Grid.Column>
                                    <Link href="/">
                                        <Card className="twitter">
                                            <Icon name="twitter"></Icon>
                                            <div className="gradient"></div>
                                        </Card>
                                    </Link>
                                </Grid.Column>
                                <Grid.Column>
                                    <Link href="/">
                                        <Card className="linkedin">
                                            <Icon name="linkedin"></Icon>
                                            <div className="gradient"></div>
                                        </Card>
                                    </Link>
                                </Grid.Column>
                                <Grid.Column>
                                    <Link href="/">
                                        <Card className="whatsapp">
                                            <Icon name="whatsapp"></Icon>
                                            <div className="gradient"></div>
                                        </Card>
                                    </Link>
                                </Grid.Column>
                                <Grid.Column>
                                    <Link href="/">
                                        <Card className="mail">
                                            <Icon name="mail"></Icon>
                                            <div className="gradient"></div>
                                        </Card>
                                    </Link>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        {/* Contacts End */}
                        {/* Footer Start */}
                        <div>
                            <Divider hidden section/>
                            <p className="footer">
                                P.S. Sorry for too much colors. I'm just colorblind :)
                            </p>
                            <p className="credits">
                                Made with ♥️ from 🇵🇭
                            </p>

                            <Divider hidden section/>
                        </div>
                        {/* Footer End */}

                         </Container>
                </main>
            </div>
        )
    }
}
