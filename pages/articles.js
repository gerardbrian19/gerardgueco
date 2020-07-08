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
    Segment,
    Comment,
    Form,
    Label,
    Item,
    Message,
    List
} from 'semantic-ui-react'
import {Animated} from 'react-animated-css'
import Link from 'next/link'
import dynamic from 'next/dynamic'

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
                }/>
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

                        <div className="featured-article">
                            <Grid>
                                <Grid.Row columns={2}
                                    only='computer'>
                                    <Grid.Column computer={10}
                                        mobile={16}
                                        tablet={16}>
                                        <div className="featured-headline">
                                            <Image src='https://cdn-images-1.medium.com/max/1024/1*GGft_aeszJhTQV1sPMzDWQ.jpeg' centered size='huge'/>
                                            <Header as='h1'>
                                               <Link href="/articles/first_article"><a>An open letter to recent college graduates</a></Link>
                                                <Header.Subheader>
                                                    An open letter to recent college graduates
                                                </Header.Subheader>
                                            </Header>
                                            <Header as='h2'>
                                                <Header.Subheader>
                                                    Gerard Gueco in Medium Education Blog
                                                </Header.Subheader>
                                                <Header.Subheader>
                                                    Jun 11 · 4 min read
                                                </Header.Subheader>
                                            </Header>

                                        </div>
                                        <div className="latest-articles">
                                            <Header as='h3' dividing>
                                                Latest Stories
                                            </Header>
                                            <Item.Group>
                                                <Item>
                                                    <Item.Image size='small' src='https://cdn-images-1.medium.com/max/1024/1*OgTVc-8IhuxfpDHzQgXX7Q.jpeg'/>

                                                    <Item.Content verticalAlign='middle'>
                                                        <Item.Header as='a'><Link href="/articles/second_article"><a>Portfolio Challenge: From Flat UI to Gradients</a></Link></Item.Header>
                                                        <Item.Meta>Portfolio Challenge: From Flat UI to Gradients</Item.Meta>
                                                        <Item.Description>
                                                            Portfolio Challenge: From Flat UI to Gradients
                                                        </Item.Description>
                                                        <Item.Extra>Jun 15 · 5 min read</Item.Extra>
                                                    </Item.Content>
                                                </Item>
                                                <Item>
                                                    <Item.Image size='small' src='https://cdn-images-1.medium.com/max/1024/1*PCTSrjA4HThSZKMTBtUkkw.png'/>

                                                    <Item.Content verticalAlign='middle'>
                                                        <Item.Header as='a'><Link href="/articles/third_article"><a>Managing data with modern JavaScript: map, filter, reduce, find</a></Link></Item.Header>
                                                        <Item.Meta>Managing data with modern JavaScript: map, filter, reduce, find</Item.Meta>
                                                        <Item.Description>
                                                            Managing data with modern JavaScript: map, filter, reduce, find
                                                        </Item.Description>
                                                        <Item.Extra>github.com</Item.Extra>
                                                    </Item.Content>
                                                </Item>
                                                <Item>
                                                    <Item.Image size='small' src='https://cdn-images-1.medium.com/max/800/1*4WytZLPdbUkBTYFKkrxNdQ.gif'/>

                                                    <Item.Content verticalAlign='middle'>
                                                        <Item.Header as='a'><Link href="/articles/third_article"><a>I used Next.js + Semantic UI on my React App and it’s awesome!</a></Link>
                                                            </Item.Header>
                                                        <Item.Meta>
                                                            I used Next.js + Semantic UI on my React App and it’s awesome!</Item.Meta>
                                                        <Item.Description>
                                                            I used Next.js + Semantic UI on my React App and it’s awesome!
                                                        </Item.Description>
                                                        <Item.Extra>react-semantic-ui.com</Item.Extra>
                                                    </Item.Content>
                                                </Item>

                                            </Item.Group>
                                        </div>
                                    </Grid.Column>
                                    <Grid.Column computer={6}
                                        mobile={16}
                                        tablet={16}>
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


                                <Grid.Row columns={2}
                                    only='tablet mobile'>
                                    <Grid.Column computer={10}
                                        mobile={16}
                                        tablet={16}>
                                            <div className="featured-stories">
                                            <Header as='h2'>
                                            Featured stories
                                            <Header.Subheader>
                                                Today’s best stories, picked by our editors.
                                            </Header.Subheader>
                                        </Header>
                                            </div>
                                        
                                    </Grid.Column>

                                    {/* Mobile Tablet */}

                                    <Grid.Column computer={6}
                                        mobile={16}
                                        tablet={16}>
                                          <div className="featured-headline">
                                            <Image src='https://cdn-images-1.medium.com/max/1024/1*GGft_aeszJhTQV1sPMzDWQ.jpeg' centered size='huge'/>
                                            <Header as='h1'>
                                               <Link href="/articles/first_article"><a>An open letter to recent college graduates</a></Link>
                                                <Header.Subheader>
                                                    An open letter to recent college graduates
                                                </Header.Subheader>
                                            </Header>
                                            <Header as='h2'>
                                                <Header.Subheader>
                                                    Gerard Gueco in Medium Education Blog
                                                </Header.Subheader>
                                                <Header.Subheader>
                                                    Jun 11 · 4 min read
                                                </Header.Subheader>
                                            </Header>

                                        </div>
                                        <div className="latest-articles">
                                            <Header as='h3' dividing>
                                                Latest Stories
                                            </Header>
                                            <Item.Group>
                                                <Item>
                                                    <Item.Image size='small' src='https://cdn-images-1.medium.com/max/1024/1*OgTVc-8IhuxfpDHzQgXX7Q.jpeg'/>

                                                    <Item.Content verticalAlign='middle'>
                                                        <Item.Header as='a'><Link href="/articles/second_article"><a>Portfolio Challenge: From Flat UI to Gradients</a></Link></Item.Header>
                                                        <Item.Meta>Portfolio Challenge: From Flat UI to Gradients</Item.Meta>
                                                        <Item.Description>
                                                            Portfolio Challenge: From Flat UI to Gradients
                                                        </Item.Description>
                                                        <Item.Extra>Jun 15 · 5 min read</Item.Extra>
                                                    </Item.Content>
                                                </Item>
                                                <Item>
                                                    <Item.Image size='small' src='https://cdn-images-1.medium.com/max/1024/1*PCTSrjA4HThSZKMTBtUkkw.png'/>

                                                    <Item.Content verticalAlign='middle'>
                                                        <Item.Header as='a'><Link href="/articles/third_article"><a>Managing data with modern JavaScript: map, filter, reduce, find</a></Link></Item.Header>
                                                        <Item.Meta>Managing data with modern JavaScript: map, filter, reduce, find</Item.Meta>
                                                        <Item.Description>
                                                            Managing data with modern JavaScript: map, filter, reduce, find
                                                        </Item.Description>
                                                        <Item.Extra>github.com</Item.Extra>
                                                    </Item.Content>
                                                </Item>
                                                <Item>
                                                    <Item.Image size='small' src='https://cdn-images-1.medium.com/max/800/1*4WytZLPdbUkBTYFKkrxNdQ.gif'/>

                                                    <Item.Content verticalAlign='middle'>
                                                        <Item.Header as='a'><Link href="/articles/third_article"><a>I used Next.js + Semantic UI on my React App and it’s awesome!</a></Link>
                                                            </Item.Header>
                                                        <Item.Meta>
                                                            I used Next.js + Semantic UI on my React App and it’s awesome!</Item.Meta>
                                                        <Item.Description>
                                                            I used Next.js + Semantic UI on my React App and it’s awesome!
                                                        </Item.Description>
                                                        <Item.Extra>react-semantic-ui.com</Item.Extra>
                                                    </Item.Content>
                                                </Item>

                                            </Item.Group>
                                        </div>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                        </div>
                        {/* Footer Start */}
                        <div>
                            <Divider hidden section/> {/* <p className="footer">
                                P.S. Sorry for too much colors. I'm just colorblind :)
                            </p> */}
                            <p className="credits">
                                Made with ♥️ from 🇵🇭
                            </p>

                            <Divider hidden section/>
                        </div>
                        {/* Footer End */} </Container>
                </main>
            </div>
        )
    }
}
