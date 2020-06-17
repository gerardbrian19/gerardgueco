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

const codeString = "var numbers_m2 = []; \nfor (i = 0; i < numbers.length; i++) { \nnumbers_m2.push(numbers[i] * 2); \n} \nconsole.log(numbers_m2);"

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
                                        <Header size='huge'>I used Next.js + Semantic UI on my React App and it’s awesome!</Header>

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


                            <Grid centered>
                                <Grid.Row>
                                    <Grid.Column computer={10}
                                        mobile={16}
                                        tablet={16}>
                                        <Container text fluid textAlign='left'>
                                            <div className="text-content">
                                                {/* <Header as='h1'>Hey, congratulations!</Header> */}
                                                <p>Whenever we start doing a web project we always think of what framework should we use to create a good-looking elements for our website. Each framework has its own pros and cons, allowing you to choose based on the needs of your project. For example, if your project is simple, then there’s no need to use a complex framework.</p>
                                                <p>Most developers preferred on using popular UI frameworks such as Bootstrap, Foundation, and Material UI, however, others, including myself thinks that these frameworks are too overrated and many sites that are using these frameworks end up having a very similar look and feel. I personally like building my projects before with Bootstrap + jQuery, but lately I realized that part of me as a developer has grown tired of seeing sites using Bootstrap in its raw form — in a way, I feel it limits creativity.</p>
                                                <Header as='h1'>Discovering Next.js</Header>
                                                <p>I used to be a developer who uses native PHP and HTML5 together with Bootstrap, CSS3, and jQuery to build full-stack and single page applications (SPAs). Two years ago, I decided to learn how to use React and started experimenting with different frameworks to test its UI and UX capabilities. React was too confusing for me, I spent more than a month trying to solve rendering and configuration problems… And for that reason, I became impatient, so I started looking for an easy-to-use boilerplate for React. Eventually, I found what I was looking for. It’s a framework called Next.js.</p>
                                                
                                                <p>As documentation says:</p>
                                                <p>Next.js a minimalistic framework for server-rendered React applications. Think about how web apps are created with PHP. You create some files, write PHP code, then simply deploy it. You don’t have to worry about routing much, and the app is rendered on the server by default. That’s exactly what Next.js do. Instead of PHP, you will build your app with JavaScript and React.</p>
                                                
                                                <div className="img-group">
                                                    <Image src='https://miro.medium.com/max/800/1*4WytZLPdbUkBTYFKkrxNdQ.gif' centered size='massive'/>
                                                    <p className="center">Some codes written in React with Next JS</p>
                                                </div>
                                                <p>Here are some cool features Next.js brings to the table taken from learnnextjs.com:</p>
                                                <List bulleted>
                                                <List.Item>Server-rendered by default</List.Item>
                                                <List.Item>Automatic code splitting for faster page loads</List.Item>
                                                <List.Item>Simple client-side routing (page based)</List.Item>
                                                <List.Item>Webpack-based dev environment which supports Hot Module Replacement (HMR)</List.Item>
                                                <List.Item>Able to implement with Express or any other Node.js HTTP server</List.Item>
                                                <List.Item>Customizable with your own Babel and Webpack configurations</List.Item>
                                            </List>

                                                <p>I believe anyone who has used this framework will tell you how easy it is to get started in building a react app with Next.js. You can have your react app running without configuring webpack, babel, and other tools and speed up your development workflow.</p>
                                                
                                                
                                                <Header as='h1'>Playing around with Semantic UI for React</Header>
                                                <p>Another technology I discover while doing a react app was a UI framework called Semantic UI. Just like Bootstrap and other popular frameworks, it’s also open-source and is already used in multiple large-scale production environments.</p>
                                                <div className="img-group">
                                                    <Image src='https://miro.medium.com/max/1075/1*FyYRL1miPHhRKQbAf4WPBQ.png' centered size='massive'/>
                                                    <p className="center">Sample code of a Modal using Semantic UI</p>
                                                </div>
                                                
                                             <p>I already heard about this framework even before, but I was only able to use it when I started developing apps with React. One of the advantages of Semantic UI is it has a lot of UI components to offer. In just few lines of code, you can create beautiful and modern-looking elements just like Cards, Accordions, Modals, and other more that can benefit to the content of your website. Of course, you are free to modify some of its CSS properties if you need to. Also, what I like the most about this framework is it uses five descriptive categories to define re-usable UI components:</p>
                                                <p>A UI Element is a basic building block. It can appear alone or in uniform groups. For example, a button can be independent or put in a button group.</p>
                                                <div className="img-group">
                                                    <Image src='https://miro.medium.com/max/529/1*j1HUFHws3CPz7dHRsfH-CA.gif' centered size='massive'/>
                                                    <p className="center">Buttons can animate to show additional or hidden content.</p>
                                                </div>

                                            
                                            <p>A UI Collection is a group of different kinds of elements that are interdependent. For example, a web form can have buttons, inputs, checkboxes, icons, and so forth</p>
                                            <div className="img-group">
                                                    <Image src='https://miro.medium.com/max/537/1*_r7NexMCAqfSY73eO8Ys6g.gif' centered size='massive'/>
                                                    <p className="center">A form on a dark background may have to invert its color scheme.</p>
                                                </div>
                                            <p>A UI View represents a common piece of website content. For example, a feed or comments section.</p>
                                            <div className="img-group">
                                                    <Image src='https://miro.medium.com/max/727/1*-49bTpv3yiYnKkAJBfc_hg.gif' centered size='massive'/>
                                                    <p className="center">A basic list of comments</p>
                                                </div>
                                                <p>A UI Module is a component with interactive JavaScript-based functionality. Examples include an accordion, dimmer, modal, and so on.</p>
                                            <div className="img-group">
                                                    <Image src='https://miro.medium.com/max/765/1*jt0NsCEjSmcrBDsgBVToFQ.gif' centered size='massive'/>
                                                    <p className="center">A standard Accordion</p>
                                                </div>
                                                <p>A UI Behavior is a component that can’t exist independently, but instead is used to inject functionality into other components. For example, the Form Validation behavior provide validation functionality for the Form component.</p>
                                            <div className="img-group">
                                                    <Image src='https://miro.medium.com/max/759/1*i38OsPEcGBoxxVviKeX8Bg.png' centered size='massive'/>
                                                    <p className="center">If a form is in an error state, it will automatically show any error message blocks</p>
                                                </div>
                                                <Header as='h1'>Working and Deploying a React app with Next.js and Semantic UI</Header>
                                                <p>This project that I built was developed just in less than two weeks while I was in the bench. I finished this SPA together with my colleague who I also helped to develop a chatbot using Microsoft’s Bot Framework. The project is made for their team who are conducting internal workshops about AI-related stuff.</p>
                                                <div className="img-group">
                                                    <Image src='https://miro.medium.com/max/800/1*Qr3m06ZE_DCL3EW6T5LwNw.gif' centered size='massive'/>
                                                    <p className="center">Landing page built with fullPage.js</p>
                                                </div>
                                                <div className="img-group">
                                                    <Image src='https://miro.medium.com/max/800/1*nQkCjA0QOet2MhNu5ml2Rw.gif' centered size='massive'/>
                                                    <p className="center">Learning Materials page built with Semantic UI Accordion</p>
                                                </div>
                                                <p>Setting up of this project was made with create-next-app boilerplate and deployed on Azure IISNode Web Server.</p>
                                                 <div className="img-group">
                                                    <Image src='https://miro.medium.com/max/1280/1*JiOR6xSSW5EhdurXJWF21A.png' centered size='massive'/>
                                                    <p className="center">Necessary files deployed on Azure</p>
                                                </div>
                                                <p>One of the challenges while working in this project is playing around with CSS3 animations as well as with Spring. I would say creating fancy and smooth animations is harder than creating the whole website.</p>
                                                <div className="img-group">
                                                    <Image src='https://miro.medium.com/max/800/1*XT82yqyeCc2TRlMZJC3xYA.gif' centered size='massive'/>
                                                    <p className="center">Screenshot of Phoebe — the chatbot</p>
                                                </div>
                                                <p>Another challenge is the deployment of React app that is made with Next.js on Azure. It took me some time to be able to deploy it successfully. So, if you have a Next.js project and you’re planning to host it on Azure, you can use my created script below which compresses necessary files on your project. After the script is being executed, you can upload this compressed file and extract it on your web app server to start the deployment of your project in the cloud.</p>

                                                <p>Overall, my experience in working with Next.js and Semantic UI is very fulfilling. Both of these frameworks are very well documented, and their websites provides many examples for each component. All of this makes learning the framework a pain-free experience. So, if you’re new to React or planning to use it on your future project, the best way to learn it is to get started with Next.js and then later on, you can proceed on building your components with Semantic UI or your preferred UI framework.</p>
                                                <p>Additional Resources</p>
                                                <List bulleted>
                                                <List.Item>Next.js Repo</List.Item>
                                                <List.Item>Learn Next.js</List.Item>
                                                <List.Item>Semantic UI</List.Item>
                                            </List>
                                        </div>


                                            <div className="tags">
                                                <Label.Group size='large'>
                                                    <Label>React</Label>
                                                    <Label>Nextjs</Label>
                                                    <Label>JavaScript</Label>
                                                    <Label>ES6</Label>
                                                    <Label>Azure</Label>
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
