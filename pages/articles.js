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
                            <Link href="/">
                                <a className="menu-item">Resumé</a>
                            </Link>
                        </div>
                        <div className="social-icons">
                            <a title="Medium" href="/">
                                <Icon name="medium"></Icon>
                            </a>
                            <a title="Youtube" href="/">
                                <Icon name="youtube square"></Icon>
                            </a>
                            <a title="Github" href="/">
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

                        <div className="featured-article">
                            <Grid>
                                <Grid.Row columns={2}
                                    only='computer'>
                                    <Grid.Column computer={10}
                                        mobile={16}
                                        tablet={16}>
                                        <div className="feature-headline">
                                            <Image src='https://miro.medium.com/max/2720/1*0UAhL7naxUuBE2lqS9pBcQ.jpeg' centered size='huge'/>
                                            <Header as='h1'>
                                                Dont' Ask What Caused the Spike i Cases. Ask What the U.S. Will Do About Them
                                                <Header.Subheader>
                                                    We likely won’t know for certain where new cases are coming from. How the U.S. responds to those cases is what really matters
                                                </Header.Subheader>
                                            </Header>
                                            <Header as='h2'>
                                                <Header.Subheader>
                                                    Yasmin Tayag in Medium Coronavirus Blog
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
                                                    <Item.Image size='small' src='https://miro.medium.com/max/320/0*JsCxh8ckwJllI2In'/>

                                                    <Item.Content verticalAlign='middle'>
                                                        <Item.Header as='a'>WFH Taught Me How to Live in the Moment</Item.Header>
                                                        <Item.Meta>Being cooped up in the crib has forced me to learn (and unlearn) some major habits</Item.Meta>
                                                        <Item.Description>
                                                            The Only Black Guy In the Office in LEVEL
                                                        </Item.Description>
                                                        <Item.Extra>Jun 15 · 5 min read
                                                            <Icon name='favorite'/></Item.Extra>
                                                    </Item.Content>
                                                </Item>

                                                <Item>
                                                    <Item.Image size='small' src='https://miro.medium.com/max/320/0*I3TiS0a273hCok0-'/>

                                                    <Item.Content verticalAlign='middle'>
                                                        <Item.Header as='a'>WFH Taught Me How to Live in the Moment</Item.Header>
                                                        <Item.Meta>Being cooped up in the crib has forced me to learn (and unlearn) some major habits</Item.Meta>
                                                        <Item.Description>
                                                            The Only Black Guy In the Office in LEVEL
                                                        </Item.Description>
                                                        <Item.Extra>Jun 15 · 5 min read
                                                            <Icon name='favorite'/></Item.Extra>
                                                    </Item.Content>
                                                </Item>
                                                <Item>
                                                    <Item.Image size='small' src='https://miro.medium.com/max/320/0*O_WVawBCrBy-WXTh'/>

                                                    <Item.Content verticalAlign='middle'>
                                                        <Item.Header as='a'>negomi/react-burger-menu</Item.Header>
                                                        {/* <Item.Meta>Description</Item.Meta> */}
                                                        <Item.Description>
                                                            hamburger: An off-canvas sidebar component with a collection of effects and styles using CSS transitions and SVG path...
                                                        </Item.Description>
                                                        <Item.Extra>github.com</Item.Extra>
                                                    </Item.Content>
                                                </Item>
                                                <Item>
                                                    <Item.Image size='small' src='https://miro.medium.com/max/320/0*fyrM-xp9LumtS-Ow'/>

                                                    <Item.Content verticalAlign='middle'>
                                                        <Item.Header as='a'>Introduction - Semantic UI React</Item.Header>
                                                        {/* <Item.Meta>Description</Item.Meta> */}
                                                        <Item.Description>
                                                            Button Container Divider Flag Header Icon Image Input Label List Loader Placehoder Rail Reveal Segment Step
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
                                        <Header as='h2'>
                                            Featured stories
                                            <Header.Subheader>
                                                Today’s best stories, picked by our editors.
                                            </Header.Subheader>
                                        </Header>
                                    </Grid.Column>
                                </Grid.Row>
                                <Grid.Row columns={2}
                                    only='tablet mobile'>
                                    <Grid.Column computer={10}
                                        mobile={16}
                                        tablet={16}>
                                        <Header as='h2'>
                                            Featured stories
                                            <Header.Subheader>
                                                Today’s best stories, picked by our editors.
                                            </Header.Subheader>
                                        </Header>
                                    </Grid.Column>
                                    <Grid.Column computer={6}
                                        mobile={16}
                                        tablet={16}>
                                        <div className="feature-headline">
                                            <Image src='https://miro.medium.com/max/2720/1*0UAhL7naxUuBE2lqS9pBcQ.jpeg' centered size='huge'/>
                                            <Header as='h1'>
                                                Dont' Ask What Caused the Spike i Cases. Ask What the U.S. Will Do About Them
                                                <Header.Subheader>
                                                    We likely won’t know for certain where new cases are coming from. How the U.S. responds to those cases is what really matters
                                                </Header.Subheader>
                                            </Header>
                                            <Header as='h2'>
                                                <Header.Subheader>
                                                    Yasmin Tayag in Medium Coronavirus Blog
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
                                                    <Item.Image size='small' src='https://miro.medium.com/max/320/0*JsCxh8ckwJllI2In'/>

                                                    <Item.Content verticalAlign='middle'>
                                                        <Item.Header as='a'>WFH Taught Me How to Live in the Moment</Item.Header>
                                                        <Item.Meta>Being cooped up in the crib has forced me to learn (and unlearn) some major habits</Item.Meta>
                                                        <Item.Description>
                                                            The Only Black Guy In the Office in LEVEL
                                                        </Item.Description>
                                                        <Item.Extra>Jun 15 · 5 min read
                                                            <Icon name='favorite'/></Item.Extra>
                                                    </Item.Content>
                                                </Item>

                                                <Item>
                                                    <Item.Image size='small' src='https://miro.medium.com/max/320/0*I3TiS0a273hCok0-'/>

                                                    <Item.Content verticalAlign='middle'>
                                                        <Item.Header as='a'>WFH Taught Me How to Live in the Moment</Item.Header>
                                                        <Item.Meta>Being cooped up in the crib has forced me to learn (and unlearn) some major habits</Item.Meta>
                                                        <Item.Description>
                                                            The Only Black Guy In the Office in LEVEL
                                                        </Item.Description>
                                                        <Item.Extra>Jun 15 · 5 min read
                                                            <Icon name='favorite'/></Item.Extra>
                                                    </Item.Content>
                                                </Item>
                                                <Item>
                                                    <Item.Image size='small' src='https://miro.medium.com/max/320/0*O_WVawBCrBy-WXTh'/>

                                                    <Item.Content verticalAlign='middle'>
                                                        <Item.Header as='a'>negomi/react-burger-menu</Item.Header>
                                                        {/* <Item.Meta>Description</Item.Meta> */}
                                                        <Item.Description>
                                                            hamburger: An off-canvas sidebar component with a collection of effects and styles using CSS transitions and SVG path...
                                                        </Item.Description>
                                                        <Item.Extra>github.com</Item.Extra>
                                                    </Item.Content>
                                                </Item>
                                                <Item>
                                                    <Item.Image size='small' src='https://miro.medium.com/max/320/0*fyrM-xp9LumtS-Ow'/>

                                                    <Item.Content verticalAlign='middle'>
                                                        <Item.Header as='a'>Introduction - Semantic UI React</Item.Header>
                                                        {/* <Item.Meta>Description</Item.Meta> */}
                                                        <Item.Description>
                                                            Button Container Divider Flag Header Icon Image Input Label List Loader Placehoder Rail Reveal Segment Step
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
                    </Container>
                </main>
            </div>
        )
    }
}
