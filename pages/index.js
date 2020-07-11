import React, {Component} from 'react'
import Sidebar from '../components/sidebar'
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
                <Sidebar pageWrapId={"main-content"}
                    outerContainerId={"App"}
                    isOpen={
                        this.state.menuOpen
                    }
                    onStateChange={
                        (state) => this.handleStateChange(state)
                }
                active={"home"}
                />
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
                                    
                                        <a href="https://twitter.com/xogerardd" target="_blank">
                                            <Card className="twitter">
                                                <Icon name="twitter"></Icon>
                                                <div className="gradient"></div>
                                            </Card>
                                        </a>
                                   
                                </Grid.Column>
                                <Grid.Column>
                                    
                                        <a href="https://www.linkedin.com/in/gerard-brian-gueco-a86733161/" target="_blank">
                                            <Card className="linkedin">
                                                <Icon name="linkedin"></Icon>
                                                <div className="gradient"></div>
                                            </Card>
                                        </a>
                                    
                                </Grid.Column>
                                <Grid.Column>
                                    
                                        <a href="whatsapp://send?phone=+639201157306&text=Hello" target="_blank">
                                            <Card className="whatsapp">
                                                <Icon name="whatsapp"></Icon>
                                                <div className="gradient"></div>
                                            </Card>
                                        </a>
                                    
                                </Grid.Column>
                                <Grid.Column>
                                   
                                        <a href="mailto:gerardbriangueco@gmail.com" target="_blank">
                                            <Card className="mail">
                                                <Icon name="mail"></Icon>
                                                <div className="gradient"></div>
                                            </Card>
                                        </a>
                                   
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
                                {/* Made with ♥️ from 🇵🇭 */}
                                Made with <Icon size='small' color='red' name='heart' /> from <Flag name='ph' />
                            </p>

                            <Divider hidden section/>
                        </div>
                        {/* Footer End */}
                         </Container>
                </main>
r
            </div>
        )
    }
}
