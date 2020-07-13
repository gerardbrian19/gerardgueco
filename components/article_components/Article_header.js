import React, {Component} from 'react'
import {Header} from 'semantic-ui-react'

export default class ArticleHeader extends Component {
    render() {
        return (
            <Header as='h1'>
                {this.props.art_header}
                </Header>
        )
    }
}
