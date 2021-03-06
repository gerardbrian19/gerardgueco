import React, {Component} from 'react'
import {
    Header,
    Icon
} from 'semantic-ui-react'

export default class TitleAuthorHeader extends Component {
    render() {
        return (
            <div className="title_author_header">
                <Header as='h1'>
                    {
                    this.props.header_title
                }
                    <Header.Subheader> {
                        this.props.header_description
                    } </Header.Subheader>
                </Header>
                <div className="author-header">
                    <Header as='h3' floated='left'>
                    {/* <Image size="large" circular src='/static/images/gerard_formal.jpg' /> */}
                        <Header.Content>
                            <Header.Subheader>Gerard Gueco</Header.Subheader>
                            <Header.Subheader>Jun 27, 2019 · 4 min read</Header.Subheader>
                        </Header.Content>
                    </Header>
                    <Header as="h3" floated="right">
                        <a href="https://twitter.com/xogerardd" target="_blank"><Icon name='twitter'/></a>
                        <a href="https://www.linkedin.com/in/gerard-brian-gueco-a86733161/" target="_blank"><Icon name='linkedin'/></a>
                        <a href="https://www.facebook.com/xogerard/" target="_blank"><Icon name='facebook'/></a>
                    </Header>

                </div>

            </div>

        )
    }
}
