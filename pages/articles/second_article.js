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
    Item
} from 'semantic-ui-react'
import {Animated} from 'react-animated-css'
import Link from 'next/link'
import dynamic from 'next/dynamic'

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
                                <a className="menu-item">Home</a>
                            </Link>
                            <Link href="/projects">
                                <a className="menu-item">Projects</a>
                            </Link>
                            <Link href="/articles">
                                <a className="menu-item active">Articles</a>
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

                        <div className="article-content">
                            <Grid centered>
                                <Grid.Row>
                                    <Grid.Column computer={10}
                                        mobile={16}
                                        tablet={14}>
                                        <Header size='huge'>Portfolio Challenge: From Flat UI to Gradients</Header>

                                        <div className="author-header">
                                            <Grid>
                                                <Grid.Row>
                                                <Grid.Column width={10}>
                                                <Header as='h1'>
                                                <Header.Content>
                                                    <Header.Subheader>Gerard Gueco</Header.Subheader>
                                                    <Header.Subheader>Jun 27, 2019 · 4 min read</Header.Subheader>
                                                </Header.Content>
                                            </Header>
                                                        </Grid.Column>
                                                        <Grid.Column width={6}>
                                                            <div className="soc-icon">
                                                            <Header as='h2'>
                                                            
                                                            <a href="https://twitter.com/xogerardd" target="_blank"><Icon name='twitter'/></a>
                                                            <a href="https://www.linkedin.com/in/gerard-brian-gueco-a86733161/" target="_blank"><Icon name='linkedin'/></a>
                                                            <a href="https://www.facebook.com/xogerard/" target="_blank"><Icon name='facebook'/></a>
                                                        </Header>
                                                            </div>
                                                       
                                                        </Grid.Column>
                                                </Grid.Row>
                                            </Grid>
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
                                                {/* <Header as='h1'>Hey, congratulations!</Header> */}
                                                <p>Last week, I posted my first article here about my experience on using Next.JS + Semantic UI on React. Today, I finished working on my latest online portfolio which is also made with these technologies.</p>
                                                <p>It was 2012 when I created my first online portfolio — the same year when I studied HTML in my computer subject during high school. My first portfolio was just a plain website, it has a boring content — no CSS, no html font customization, no images, just paragraphs and headings.</p>
                                                <p>After a year, a group of developers found my site and contacted me to help them develop their Facebook Autolike system which is an online tool that can increase likes on any public Facebook posts or even pages. It was the time when I started learning full-stack web development. After a while, I developed my own Facebook Autolike website which is made specifically for the students from my school. I became exposed in using HTML5, CSS, jQuery, PHP and Facebook Graph API.</p>
                                                <p>Later on, together with my friend from Davao, we decided to establish a website called Wootrends, a platform for quizzes and entertainment apps for Facebook. Our website was able to acquire an average of 1 million monthly active users in a year; got thousands likes on Facebook and achieved an average of 6 million monthly page views in our website.. Those were the days when earning US$1000+ per month is super easy. Some of our apps are even featured in the national TV. Unfortunately, after sometime, we had so many competitors and loss a large number of users. And so, eventually we closed the website.</p>
                                                <p>But everything started from there.. I got client projects, learned new programming languages, created mobile-responsive sites, joined programming-related organizations, and finally redesigned my online portfolio which happened to be a Single Page Application (SPA).</p>
                                                <div className="img-group">
                                                    <Image src='https://miro.medium.com/max/800/1*Xiwgf8LfUcUlNVKXT7pykg.gif' centered size='massive'/>
                                                    <p className="center">Back then, I was so inspired in the look of Microsoft’s Metro UI so I created the layout of my page together with Metro Flat UI CSS and some CSS3 animations.</p>
                                                </div>
                                                <p>Developing this page wasn’t really hard as I made it with WordPress and MySQL. I used this portfolio for more than two years; its content is being updated from time to time, however, when I started working as a full-time, I never had a chance to edit it.</p>
                                                <p>I remember one time when I was applying for a job, a recruiter told me that although I have great skills, the content of my portfolio isn’t enough for them to take my application move forward to their recruitment process. I get discouraged and later realized they’re right.. I guess I really have to update my “two-year” old portfolio.</p>
                                                <p>And so I did!</p>
                                                <div className="img-group">
                                                    <Image src='https://miro.medium.com/max/800/1*H_LlA2a_THc4bRuk2M1ojQ.gif' centered size='massive'/>
                                                    
                                                </div>
                                                <p>I updated my projects and redesigned my portfolio using JavaScript and it’s worth it! From WordPress/jQuery to React, MySQL to NoSQL, and Metro Flat UI to Gradients!</p>
                                                <p>Yes, this page can also be done in WordPress — but think it would be a headache for me to do so. I must say working in this SPA with JavaScript is more maintainable comparing to my old one which is developed using PHP and WordPress.</p>
                                                <p>These tools and JavaScript frameworks made it possible:</p>
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
                                                <p>You can check my latest portfolio by visiting chcepe.github.io</p>
                                                <p>If you want to know more about how I created this “new portfolio” of mine, please feel free to contact me using the links listed on my page. Thanks! :)</p>

                                            </div>

                                            <div className="tags">
                                                <Label.Group size='large'>
                                                    <Label>Web Development</Label>
                                                    <Label>Reactjs</Label>
                                                    <Label>Nextjs</Label>
                                                    <Label>Semantic UI</Label>
                                                    <Label>React</Label>
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
                                                               <a href="https://twitter.com/xogerardd" target="_blank"><Icon size='large' name='twitter'/></a>
                                                               <a href="https://www.linkedin.com/in/gerard-brian-gueco-a86733161/" target="_blank"><Icon size='large' name='linkedin'/></a>
                                                                <a href="https://www.facebook.com/xogerard/" target="_blank"><Icon size='large' name='facebook'/></a>
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
                                                        <Comment.Avatar src='/static/images/gerard_formal.jpg'/>
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
                                                        <Comment.Avatar src='/static/images/gerard_formal.jpg'/>
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
                                                                <Comment.Avatar src='/static/images/gerard_formal.jpg'/>
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
                                                        <Comment.Avatar src='/static/images/gerard_formal.jpg'/>
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
    }
}
