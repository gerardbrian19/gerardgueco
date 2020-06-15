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
const codeString = "var numbers_m2 = []; \n for (i = 0; i < numbers.length; i++) { \n numbers_m2.push(numbers[i] * 2); \n } \n console.log(numbers_m2);"

export default class First_Article extends Component {
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

                    <div className="article-content">
                        <Grid centered>
                            <Grid.Row>
                                <Grid.Column computer={10}
                                    mobile={16}
                                    tablet={14}>
                                    <Header size='huge'>Managing data with modern JavaScript: map, filter, reduce, find</Header>

                                    <div className="author-header">
                                        <Header as='h1' floated='right'>
                                            <Icon name='twitter'/>
                                            <Icon name='linkedin'/>
                                            <Icon name='facebook'/>
                                        </Header>
                                        <Header as='h1' floated='left'>
                                            <Header.Content>
                                                <Header.Subheader>Gerard Gueco</Header.Subheader>
                                                <Header.Subheader>Jun 27, 2019 · 4 min read</Header.Subheader>
                                            </Header.Content>
                                        </Header>
                                    </div>


                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        <Divider hidden/>

                        <div className="img-group">
                            <Image src='https://miro.medium.com/max/1200/1*OgTVc-8IhuxfpDHzQgXX7Q.jpeg' centered size='massive'/>
                            <p className="center">2016 vs 2019 Portfolio</p>
                        </div>


                        <Grid centered>
                            <Grid.Row>
                                <Grid.Column computer={10}
                                    mobile={16}
                                    tablet={16}>
                                    <Container text fluid textAlign='left'>
                                        <div className="text-content">
                                            <Header as='h1'>Hey, congratulations!</Header>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
                                            </p>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
                                            </p>
                                            <div className="img-group">
                                                <Image src='https://miro.medium.com/max/800/1*H_LlA2a_THc4bRuk2M1ojQ.gif' centered size='massive'/>
                                                <p className="center">2016 vs 2019 Portfolio</p>
                                            </div>

                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
                                            </p>
                                            <div className="img-group">
                                                <Image src='https://miro.medium.com/max/800/1*H_LlA2a_THc4bRuk2M1ojQ.gif' centered size='massive'/>
                                                <p className="center">2016 vs 2019 Portfolio</p>
                                            </div>

                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
                                            </p>
                                            <Message>
                                                <code> {
                                                    codeString.split('\n').map((item, i) => <p key={i}>
                                                        {item}</p>)
                                                } </code>
                                            </Message>
                                            <List bulleted>
                                                <List.Item>Gaining Access</List.Item>
                                                <List.Item>Inviting Friends</List.Item>
                                                <List.Item>
                                                    Benefits
                                                    <List.List>
                                                        <List.Item href='#'>Link to somewhere</List.Item>
                                                        <List.Item>Rebates</List.Item>
                                                        <List.Item>Discounts</List.Item>
                                                    </List.List>
                                                </List.Item>
                                                <List.Item>Warranty</List.Item>
                                            </List>
                                            <p>
                                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ligula eget dolor. Aenean massa strong. Cum sociis natoque penatibus et
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        Nullam dictum felis eu pede link mollis pretium. Integer tincidunt. Cras
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                        Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi.
                                            </p>
                                            <Item.Group>
                                                <Item>
                                                    <Item.Image size='small' src='https://miro.medium.com/max/320/0*JsCxh8ckwJllI2In'/>

                                                    <Item.Content verticalAlign='middle'>
                                                        <Item.Header as='a'>uiGradients - Beautiful colored gradients</Item.Header>
                                                        {/* <Item.Meta>Description</Item.Meta> */}
                                                        <Item.Description>
                                                            uiGradients is a handpicked collection of beautiful color gradients for designers and developers.
                                                        </Item.Description>
                                                        <Item.Extra>uigradients.com</Item.Extra>
                                                    </Item.Content>
                                                </Item>

                                                <Item>
                                                    <Item.Image size='small' src='https://miro.medium.com/max/320/0*I3TiS0a273hCok0-'/>

                                                    <Item.Content verticalAlign='middle'>
                                                        <Item.Header as='a'>vercel/next.js</Item.Header>
                                                        {/* <Item.Meta>Description</Item.Meta> */}
                                                        <Item.Description>
                                                            The React Framework. Contribute to vercel/next.js development by creating an account on GitHub.
                                                        </Item.Description>
                                                        <Item.Extra>github.com</Item.Extra>
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

                                        <div className="tags">
                                            <Label.Group size='large'>
                                                <Label>College</Label>
                                                <Label>Motivation</Label>
                                                <Label>Graduation</Label>
                                                <Label>Goals</Label>
                                            </Label.Group>

                                        </div>
                                        <div className="claps">
                                            <Grid>
                                                <Grid.Row>
                                                    <Grid.Column width={8}>
                                                        <div className="lft">
                                                            <div className="like">
                                                                <Label basic size='medium'>
                                                                    <Icon size='big' name='thumbs up outline'/>
                                                                    23
                                                                </Label>

                                                            </div>
                                                            <div className="respo">
                                                                <Label basic size='medium'>
                                                                    <Icon size='big' name='comment outline'/>
                                                                    23
                                                                </Label>

                                                            </div>
                                                        </div>
                                                    </Grid.Column>
                                                    <Grid.Column width={8}>
                                                        <div className="rght">
                                                            <Icon size='large' name='twitter'/>
                                                            <Icon size='large' name='linkedin'/>
                                                            <Icon size='large' name='facebook'/>
                                                        </div>
                                                    </Grid.Column>
                                                </Grid.Row>
                                            </Grid>
                                        </div>
                                        <Divider section/>
                                        <div className="author">
                                            <Grid>
                                                <Grid.Row>
                                                    <Grid.Column computer={8}
                                                        mobile={16}
                                                        tablet={8}>
                                                        <Image src='/static/images/GG.png' verticalAlign='middle' size='medium' centered/>
                                                    </Grid.Column>
                                                    <Grid.Column computer={8}
                                                        mobile={16}
                                                        tablet={8}>
                                                        <div className="info">
                                                            <Header as='h2'>
                                                                <Header.Content>
                                                                    <Header.Subheader>
                                                                        Written By
                                                                    </Header.Subheader>
                                                                    Gerard Gueco
                                                                    <Header.Subheader>
                                                                        Software Engineer
                                                                    </Header.Subheader>
                                                                </Header.Content>

                                                            </Header>
                                                            <p>
                                                                Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ex natum rebum iisque.
                                                            </p>
                                                            <p>
                                                                Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ex natum rebum iisque.
                                                            </p>

                                                        </div>
                                                    </Grid.Column>
                                                </Grid.Row>

                                            </Grid>
                                        </div>
                                        <Divider section/>
                                        <div className="comments">
                                            <Comment.Group>
                                                <Header as='h3'>
                                                    Comments
                                                </Header>

                                                <Comment>
                                                    <Comment.Avatar src='/images/avatar/small/matt.jpg'/>
                                                    <Comment.Content>
                                                        <Comment.Author as='a'>Matt</Comment.Author>
                                                        <Comment.Metadata>
                                                            <div>Today at 5:42PM</div>
                                                        </Comment.Metadata>
                                                        <Comment.Text>How artistic!</Comment.Text>
                                                        <Comment.Actions>
                                                            <Comment.Action>Reply</Comment.Action>
                                                        </Comment.Actions>
                                                    </Comment.Content>
                                                </Comment>

                                                <Comment>
                                                    <Comment.Avatar src='/images/avatar/small/elliot.jpg'/>
                                                    <Comment.Content>
                                                        <Comment.Author as='a'>Elliot Fu</Comment.Author>
                                                        <Comment.Metadata>
                                                            <div>Yesterday at 12:30AM</div>
                                                        </Comment.Metadata>
                                                        <Comment.Text>
                                                            <p>This has been very useful for my research. Thanks as well!</p>
                                                        </Comment.Text>
                                                        <Comment.Actions>
                                                            <Comment.Action>Reply</Comment.Action>
                                                        </Comment.Actions>
                                                    </Comment.Content>
                                                    <Comment.Group>
                                                        <Comment>
                                                            <Comment.Avatar src='/images/avatar/small/jenny.jpg'/>
                                                            <Comment.Content>
                                                                <Comment.Author as='a'>Jenny Hess</Comment.Author>
                                                                <Comment.Metadata>
                                                                    <div>Just now</div>
                                                                </Comment.Metadata>
                                                                <Comment.Text>Elliot you are always so right :)</Comment.Text>
                                                                <Comment.Actions>
                                                                    <Comment.Action>Reply</Comment.Action>
                                                                </Comment.Actions>
                                                            </Comment.Content>
                                                        </Comment>
                                                    </Comment.Group>
                                                </Comment>

                                                <Comment>
                                                    <Comment.Avatar src='/images/avatar/small/joe.jpg'/>
                                                    <Comment.Content>
                                                        <Comment.Author as='a'>Joe Henderson</Comment.Author>
                                                        <Comment.Metadata>
                                                            <div>5 days ago</div>
                                                        </Comment.Metadata>
                                                        <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
                                                        <Comment.Actions>
                                                            <Comment.Action>Reply</Comment.Action>
                                                        </Comment.Actions>
                                                    </Comment.Content>
                                                </Comment>

                                                <Form reply>
                                                    <Form.TextArea/>
                                                    <Button content='Add Reply' labelPosition='left' icon='edit' primary/>
                                                </Form>
                                            </Comment.Group>
                                            <div>
                                                <Divider hidden section/>
                                                <p className="credits">
                                                    Made with ♥️ from 🇵🇭
                                                </p><Divider hidden section/>
                                            </div>
                                        </div>

                                    </Container>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>

                    </div>

                </Container>
            </main>
        </div>
    )
}}
