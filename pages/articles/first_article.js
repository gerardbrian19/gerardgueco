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
    Label
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
                                        <Header size='huge'>An open letter to recent college graduates</Header>

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
                                <Image src='https://miro.medium.com/max/4150/1*GGft_aeszJhTQV1sPMzDWQ.jpeg' centered size='massive'/>
                                <p className="center">https://www.unpakt.com/blog/7-best-cities-for-young-college-grads/</p>
                            </div>


                            <Grid centered>
                                <Grid.Row>
                                    <Grid.Column computer={10}
                                        mobile={16}
                                        tablet={16}>
                                        <Container text fluid textAlign='left'>
                                            <div className="text-content">
                                                <Header as='h1'>Hey, congratulations!</Header>
                                                <p>You spent a long four or five years in which you have shared great moments with other people. You have been through unforgettable experiences. You made friends that you will probably keep for the rest of your life. A whole host of moments that, without a doubt, have marked in your life.</p>
                                                <p>You also had to go through some bittersweet circumstances during these years, such as those terrible exams and quizzes that you had to memorize; those boring internship tasks that you had to spend so many hours on and which unfortunately had little impact on your professional training; professors whose courses you had to catch up with and who made you think about the quality of schooling that cost you so much, and so on.</p>
                                                <p>Not everything has been rosy.</p>
                                                <p>But that’s all of your past already.</p>
                                                <p>Now it’s time to start again.</p>
                                                <p>Go back to that scenario when you turned 17 and made that decision to study this profession.</p>
                                                <p>But now it’s not like before. These years have brought you to maturity and growth. You now have a different view of money and are very likely realized the difficulty of getting it today.</p>
                                                <p>You may be staying at the house of your parents or have to come back, now that you have graduated from college, but then again, you are not the same person anymore. You are now independent.</p>
                                                <p>You may not yet have a job or you don’t really know yet what to do in your life. You’re not alone in facing this experience, neither the confusion nor the feeling of depression nor even the delay in getting that dream profession.</p>
                                                <p>You’ve now got something worth more than anything else. It’s F-R-E-E-D-O-M. The power to choose your path.</p>
                                                <p>You’re now free.</p>
                                                <p>This is your moment.</p>
                                                <p>Do not be intimidated by social pressure or by your fears.</p>
                                                <p>Create your own choices.</p>
                                                <p>You did it four years ago when you chose to begin this journey that consumed you so much investment: sweat, money, and time. You completed high school and you were told by society that the immediate thing was to enroll in an in-demand profession in college, despite not being evident about your place in this life.</p>
                                                <p>You might have decided right and you are now where you wanted to be, or maybe you might not be completely pleased with the results.</p>
                                                <p>But that no longer matters.</p>
                                                <p>Now you have to think about everything.</p>
                                                <p>What’s the next step for you? The high unemployment rate and the pessimism that our society consumes are making things more torn apart.</p>
                                                <p>Unless that Master’s Degree is the only way to accomplish your dream, do not enroll. Not today at least. Pause to reflect for a while before proceeding with the next phase of your career.</p>
                                                <p>Your time is the most important thing, so try not to sell it to the first bidder.</p>
                                                <p>You are now a man that is more mature and independent. It’s time to put the cards on the table, shuffle the various options and bet on the best one. Consider what your next step is going to be and make sure it is going to take you where you dream.</p>
                                                <p>This is your moment, so do not waste it.</p>
                                                <p>Take advantage of the end of this stage to relax, reflect and, above all, enjoy the most of each moment.</p>
                                                <p>Just do not stop dreaming, and continue to make yourself eager to succeed, go for your dream and cheer for you in terms of success, and do not make anything stop you and hinder your insistence. Do not get carried away by the fear and insecurities of society and become the sole owner of your decisions.</p>
                                                <p>After university life, it is time to put your fingerprints and make an impact in this life. Many lived for decades without being heard by their names, and some did not exceed 20 and have a resounding name in this world.</p>
                                                <p>The greatest achievements began with an idea and with determination, and challenge turned into great achievements and changed the world. Look at the lives of the successful people and the simplicity of the ideas they started. You will know that you can achieve success. You will reach what you want and always remember that the most important reason for success is to convince you of your abilities and your determination to succeed. Listen to yourself well and all the time that you are capable of success.</p>
                                                <p>Without further ado, I want to congratulate you again for that long-awaited graduation. You finally made it!</p>

                                            </div>

                                            <div className="tags">
                                                <Label.Group size='large'>
                                                    <Label>College</Label>
                                                    <Label>Motivation</Label>
                                                    <Label>Graduation</Label>
                                                    <Label>University</Label>
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
