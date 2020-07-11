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

export default class Featured_Headline extends Component {
    render() {
        return (
            <div className="featured-headline">
                <Link href="/articles/first_article">
                    <a>
                        <Image src='https://cdn-images-1.medium.com/max/1024/1*GGft_aeszJhTQV1sPMzDWQ.jpeg' centered size='huge'/>
                        <Header as='h1'>
                            An open letter to recent college graduates
                            <Header.Subheader>
                                An open letter to recent college graduates
                            </Header.Subheader>
                        </Header>
                    </a>
                </Link>
                <Header as='h5'>
                    <Image circular src='/static/images/gerard_formal.jpg' />
                    <Header.Content>
                    Gerard Gueco in Medium Education Blog
                    <Header.Subheader>Jun 11 · 4 min read</Header.Subheader>
                    </Header.Content>
                </Header>
                

            </div>
        )
    }
}
