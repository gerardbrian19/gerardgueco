import React, {Component} from 'react'
import {scaleRotate as Menu} from 'react-burger-menu'
import {
    Container,
    Header,
    Image,
    Icon,
    Button,
    Grid,
    Divider
} from 'semantic-ui-react'
import Sidebar from '../../components/sidebar'
import Footer from '../../components/footer'
import TitleAuthorHeader from '../../components/article_components/title_author_header'
import MassiveImage from '../../components/article_components/article_massive_img'
import ArticleParagraph from '../../components/article_components/article_paragraph'
import ArticleHeader from '../../components/article_components/article_headerz'
import ArticleCategories from '../../components/article_components/article_categories'
import ArticleClaps from '../../components/article_components/article_claps'
import AboutAuthor from '../../components/article_components/about_me'
import ArticleComment from '../../components/article_components/article_comments'
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
                    <Sidebar 
                    pageWrapId={"main-content"}
                    outerContainerId={"App"}
                    isOpen={this.state.menuOpen}
                    onStateChange={(state) => this.handleStateChange(state)}
                    active={"home"}/> 
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
                                    <Grid.Column computer={10} tablet={16} mobile={16}>
                                        <TitleAuthorHeader
                                        header_title={"How to Cultivate Your Curiosity"}
                                        header_description={"Science tells us how to encourage curiosity in children—I wanted a system for staying curious as an adult"}
                                        />
                                        <MassiveImage
                                        massiveimg_src={"https://miro.medium.com/max/4150/1*GGft_aeszJhTQV1sPMzDWQ.jpeg"}
                                        massiveimg_cap={"https://www.unpakt.com/blog/7-best-cities-for-young-college-grads/"}
                                        />
                                        <div className="text-content">
                                        <ArticleHeader
                                        art_header={"Hey, congratulations!"}
                                        />
                                        <ArticleParagraph
                                        art_p={"I never gave curiosity much thought or considered myself a particularly curious person. It’s not that I lacked curiosity — I just never thought of it as a skill you could nurture with time and practice."}
                                        />
                                        <ArticleParagraph
                                        art_p={"I never gave curiosity much thought or considered myself a particularly curious person. It’s not that I lacked curiosity — I just never thought of it as a skill you could nurture with time and practice."}
                                        />
                                        <ArticleParagraph
                                        art_p={"I never gave curiosity much thought or considered myself a particularly curious person. It’s not that I lacked curiosity — I just never thought of it as a skill you could nurture with time and practice."}
                                        />
                                        <ArticleParagraph
                                        art_p={"I never gave curiosity much thought or considered myself a particularly curious person. It’s not that I lacked curiosity — I just never thought of it as a skill you could nurture with time and practice."}
                                        />
                                        <ArticleParagraph
                                        art_p={"I never gave curiosity much thought or considered myself a particularly curious person. It’s not that I lacked curiosity — I just never thought of it as a skill you could nurture with time and practice."}
                                        />
                                        <ArticleParagraph
                                        art_p={"I never gave curiosity much thought or considered myself a particularly curious person. It’s not that I lacked curiosity — I just never thought of it as a skill you could nurture with time and practice."}
                                        />
                                        <ArticleParagraph
                                        art_p={"I never gave curiosity much thought or considered myself a particularly curious person. It’s not that I lacked curiosity — I just never thought of it as a skill you could nurture with time and practice."}
                                        />
                                        
                                       
                                        </div>

                                        <ArticleCategories
                                        tag={"College"}
                                        />
                                        <ArticleClaps/>
                                        <Divider clearing section />

                                        <AboutAuthor/>
                                        <Divider clearing section/>
                                        <ArticleComment/>
                                        <Footer/>
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
