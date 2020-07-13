import React, {Component} from 'react'
import {
    Header,
    Icon,
    Label
} from 'semantic-ui-react'

export default class ArticleClaps extends Component {
    render() {
        return (
            <div className="claps">
                <Header as='h4' floated='left'>
                    <Label basic size='medium'>
                        <Icon size='big' name='thumbs up outline'/>
                        23
                    </Label>
                    <Label basic size='medium'>
                        <Icon size='big' name='comment outline'/>
                        23
                    </Label>
                </Header>
                <Header as='h4' floated='right'>
                    <a href="https://twitter.com/xogerardd" target="_blank"><Icon size='large' name='twitter'/></a>
                    <a href="https://www.linkedin.com/in/gerard-brian-gueco-a86733161/" target="_blank"><Icon size='large' name='linkedin'/></a>
                    <a href="https://www.facebook.com/xogerard/" target="_blank"><Icon size='large' name='facebook'/></a>
                </Header>
            </div>
        )
    }
}
