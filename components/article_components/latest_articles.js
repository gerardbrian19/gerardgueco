import React, {Component} from 'react'
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
import Link from 'next/link'

export default class Latest_Articles extends Component {
    render() {
        return (
            <Item.Group>

                <Item>

                    <Item.Image src='https://cdn-images-1.medium.com/max/1024/1*OgTVc-8IhuxfpDHzQgXX7Q.jpeg'/>

                    <Item.Content verticalAlign='middle'>
                        <Item.Header>
                            <Link href="/articles/second_article">
                                <a>
                                    Portfolio Challenge: From Flat UI to Gradients
                                </a>
                            </Link>
                        </Item.Header>
                        <Item.Meta>Portfolio Challenge: From Flat UI to Gradients</Item.Meta>

                        <Item.Extra>Jun 15 · 5 min read</Item.Extra>
                    </Item.Content>

                </Item>


                <Item>
                    <Item.Image src='https://cdn-images-1.medium.com/max/1024/1*PCTSrjA4HThSZKMTBtUkkw.png'/>

                    <Item.Content verticalAlign='middle'>
                        <Item.Header>
                            <Link href="/articles/third_article">
                                <a>Managing data with modern JavaScript: map, filter, reduce, find</a>
                            </Link>
                        </Item.Header>
                        <Item.Meta>Managing data with modern JavaScript: map, filter, reduce, find</Item.Meta>
                        <Item.Extra>github.com</Item.Extra>
                    </Item.Content>
                </Item>
                <Item>
                    <Item.Image  src='https://cdn-images-1.medium.com/max/800/1*4WytZLPdbUkBTYFKkrxNdQ.gif'/>

                    <Item.Content verticalAlign='middle'>
                        <Item.Header>
                            <Link href="/articles/third_article">
                                <a>I used Next.js + Semantic UI on my React App and it’s awesome!</a>
                            </Link>
                        </Item.Header>
                        <Item.Meta>
                            I used Next.js + Semantic UI on my React App and it’s awesome!</Item.Meta>

                        <Item.Extra>react-semantic-ui.com</Item.Extra>
                    </Item.Content>
                </Item>

            </Item.Group>
        )
    }
}
