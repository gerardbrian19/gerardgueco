import React, {Component} from 'react'
import {
    Container,
    Header,
    Image,
    Icon,
    Button,
    Grid,
    Divider,
    Flag
} from 'semantic-ui-react'
import Sidebar from '../../components/sidebar'
import TitleAuthorHeader from '../../components/article_components/title_author_header'
import MassiveImage from '../../components/article_components/article_massive_img'
import ArticleParagraph from '../../components/article_components/article_paragraph'
import ArticleHeader from '../../components/article_components/article_headerz'
import ArticleCategories from '../../components/article_components/article_categories'
import ArticleClaps from '../../components/article_components/article_claps'
import AboutAuthor from '../../components/article_components/about_me'
import ArticleComment from '../../components/article_components/article_comments'
import InlineImage from '../../components/article_components/article_inline_img'
import ArticleItems from '../../components/article_components/article_items'
import ArticleCode from '../../components/article_components/article_code'
import ArticleList from '../../components/article_components/article_list'
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
                    pageWrapId={"main-content"} outerContainerId={"App"}
                    isOpen={this.state.menuOpen}
                    onStateChange={(state) => this.handleStateChange(state)} active={"home"}/> 
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
                                <Button basic icon size='big'onClick={() => this.toggleMenu()}>
                                    <Icon name='bars'/>
                                </Button>
                            </div>
                        </div>
                        {/* Header End */}

                        <div className="article-content">
                            <Grid centered>
                                <Grid.Row>
                                    <Grid.Column computer={10} tablet={16} mobile={16}>
                                        {Object.keys(this.props).map((data, i) => 
                                        {return this.props[data].articlenum == "1" ?
                                        <div key={i}>
                                            <TitleAuthorHeader
                                            header_title={typeof(this.props[data].header) == 'string' ? this.props[data].header : null}
                                            header_description={typeof(this.props[data].header_desc) == 'string' ? this.props[data].header_desc : null}
                                            />
                                            {typeof(this.props[data].preview) == 'object' ? 
                                            this.props[data].preview.map((subData, j) => (

                                            <div key={j}> <MassiveImage massiveimg_src={typeof(subData.img) == 'string' ? subData.img : null} massiveimg_cap={typeof(subData.caption) == 'string' ? subData.caption : null} /> </div> )) : null}
                                            
                                            <div className="text-content">
                                                
                                                {typeof(this.props[data].article_content) == 'object' ? this.props[data].article_content.map((subData, k) => Object.getOwnPropertyNames(subData).map((data, l) =>
                                                
                                                data == "article_header" ? <div key={k}> <ArticleHeader art_header={typeof(subData.article_header) == 'string' ? subData.article_header : null} /> </div> :
                                                data == "p" ? <div key={k}> <ArticleParagraph art_p={typeof(subData.p) == 'string' ? subData.p : null} /> </div> :
                                                data == "article_items" ? <div key={k}> <ArticleItems article_items={subData.article_items} /> </div> :
                                                data == "article_list" ? <div key={k}> <ArticleList article_list={subData.article_list} /> </div> :
                                                data == "code" ? <div key={k}> <ArticleCode code={typeof(subData.code) == 'string' ? subData.code : null} /> </div> :
                                                data == "inl_img" ? subData.inl_img.map((sData, a) => ( <div key={k}><InlineImage inl_img_src={sData.img} inl_cap={typeof(sData.caption) == 'string' ? sData.caption : null} /></div>)) : 
                                                null )) : null}
                                            </div>
                                                {typeof(this.props[data].categories) == 'object' ? <ArticleCategories tag={this.props[data].categories}/> : null}
                                        </div> : null })}
                                         
                                        <ArticleClaps/>
                                        <Divider clearing section />
                                        <AboutAuthor/>
                                        <Divider clearing section/>
                                        <ArticleComment/>
                                        
                                        <div>
                                            <Divider hidden section/>
                                            <p className="credits">
                                                {/* Made with ♥️ from 🇵🇭 */}
                                                Made with &nbsp;
                                                <Icon size='small' color='red' name='heart'/>
                                                from &nbsp;
                                                <Flag name='ph'/>
                                            </p>
                                            <Divider hidden section/>
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
