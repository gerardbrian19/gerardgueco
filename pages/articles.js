import React, {Component} from 'react'
import Sidebar from '../components/sidebar'
import {
    Container,
    Header,
    Image,
    Icon,
    Button,
    Grid
} from 'semantic-ui-react'
import Featured_Headline from '../components/article_components/featured_headline'
import Latest_Articles from '../components/article_components/latest_articles'
import Footer from '../components/footer'

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
                <Sidebar 
                pageWrapId={"main-content"}
                outerContainerId={"App"}
                isOpen={this.state.menuOpen}
                onStateChange={(state) => this.handleStateChange(state)}
                active={"home"}
                />
                {/* Sidebar End */}
                <main id="main-content">
                    <Container>
                        {/* Header Start */}
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
                                <Button basic icon size='big' onClick={() => this.toggleMenu()} >
                                    <Icon name='bars'/>
                                </Button>
                            </div>
                        </div>
                        {/* Header End */}

                        <div className="featured">
                            <Grid>
                                <Grid.Row columns={2} only="computer">
                                    <Grid.Column computer={11} mobile={16} tablet={16}>
                                        
                                            <Featured_Headline />
                                        
                                        <div className="latest-articles">
                                            <Header as='h3' dividing>
                                                Latest Stories
                                            </Header>
                                            <Latest_Articles/>
                                        </div>
                                    </Grid.Column>
                                    <Grid.Column computer={5} mobile={16} tablet={16}>
                                        <div className="featured-stories">
                                            <Header as='h2'>
                                                Featured stories
                                                <Header.Subheader>
                                                    Today’s best stories, picked by our editors.
                                                </Header.Subheader>
                                            </Header>
                                        </div>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row columns={2} only='tablet mobile'>
                                    <Grid.Column computer={11} mobile={16} tablet={16}>
                                        <div className="featured-stories">
                                            <Header as='h2'>
                                                Featured stories
                                                <Header.Subheader>
                                                    Today’s best stories, picked by our editors.
                                                </Header.Subheader>
                                            </Header>
                                        </div>
                                    </Grid.Column>
                                    <Grid.Column computer={5} mobile={16} tablet={16}>
                                       
                                            <Featured_Headline />
                                       
                                        <div className="latest-articles">
                                            <Header as='h3' dividing>
                                                Latest Stories
                                            </Header>
                                            <Latest_Articles/>
                                        </div>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </div>
                       {/* Footer Start */}
                       <Footer />
                        {/* Footer End */}
                    </Container>
                </main>
            </div>
        )
    }
}
