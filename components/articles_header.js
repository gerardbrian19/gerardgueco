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
                                                Article 1 Title
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
                                             Article 2 Title
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
                                            Article 3 Title
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
                                            Article 4 Title
                                            </Header.Content>
                                        </Header>
                                        <div className="gradient"></div>
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