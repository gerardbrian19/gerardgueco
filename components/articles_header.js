import React, {Component} from 'react'
import {
    Container,
    Header,
    Image,
    Icon,
    Button,
    Card,
    Grid,
    Divider
} from 'semantic-ui-react'
import {Animated} from 'react-animated-css'
import Link from 'next/link'

export default class Articles extends Component{
    render(){
        return(
            <div>
                {/* Articles Start */}
            <Grid className="posts">
                <Grid.Row>
                    <Grid.Column>
                        <Link href="/articles/first_article">
                            <a>
                                <Animated>
                                    <Card style={
                                        {
                                            backgroundImage: "url(" + "https://cdn-images-1.medium.com/max/1024/1*GGft_aeszJhTQV1sPMzDWQ.jpeg" + ")"
                                        }
                                    }>
                                        <Header as='h3'>
                                            <Header.Content>
                                                An open letter to recent college graduates
                                            </Header.Content>
                                        </Header>
                                        <div className="gradient"></div>
                                    </Card>
                                </Animated>
                            </a>

                        </Link>
                        <Link href="/articles/second_article">
                            <a>
                                <Animated>
                                    <Card style={
                                        {
                                            backgroundImage: "url(" + "https://cdn-images-1.medium.com/max/1024/1*OgTVc-8IhuxfpDHzQgXX7Q.jpeg" + ")"
                                        }
                                    }>
                                        <Header as='h3'>
                                            <Header.Content>
                                                Portfolio Challenge: From Flat UI to Gradients
                                            </Header.Content>
                                        </Header>
                                        <div className="gradient"></div>
                                    </Card>
                                </Animated>
                            </a>

                        </Link>
                        <Link href="/articles/third_article">
                            <a>
                                <Animated>
                                    <Card style={
                                        {
                                            backgroundImage: "url(" + "https://cdn-images-1.medium.com/max/1024/1*PCTSrjA4HThSZKMTBtUkkw.png" + ")"
                                        }
                                    }>
                                        <Header as='h3'>
                                            <Header.Content>
                                                Managing data with modern JavaScript: map, filter, reduce, find
                                            </Header.Content>
                                        </Header>
                                        <div className="gradient"></div>
                                    </Card>
                                </Animated>
                            </a>
                        </Link>
                        <Link href="/articles/fourth_article">
                            <a>
                                <Animated>
                                    <Card style={
                                        {
                                            backgroundImage: "url(" + "https://cdn-images-1.medium.com/max/800/1*4WytZLPdbUkBTYFKkrxNdQ.gif" + ")"
                                        }
                                    }>
                                        <Header as='h3'>
                                            <Header.Content>
                                                I used Next.js + Semantic UI on my React App and it’s awesome!
                                            </Header.Content>
                                        </Header>
                                        <div className="gradient"></div>
                                    </Card>
                                </Animated>
                            </a>
                        </Link>
                        <Link href="/articles">
                            <a>
                                <Animated>
                                    <Card style={
                                        {
                                            backgroundImage: "url(" + "/static/images/lowpoly.png" + ")"
                                        }
                                    }>
                                        <Header as='h3'>
                                            <Header.Content>
                                            View all ›
                                            </Header.Content>
                                        </Header>
                                        <div className="gradient MidnightCity"></div>
                                    </Card>
                                </Animated>
                            </a>
                        </Link>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            {/* Articles End */}

            </div>
        )
    }
}