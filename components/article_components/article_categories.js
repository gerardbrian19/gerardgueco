import React, {Component} from 'react'
import {Label} from 'semantic-ui-react'

export default class ArticleCategories extends Component {
    render() {
        return (
            <div className="categories">
                <Label.Group size='large'>
                    <Label>{this.props.tag}</Label>
                </Label.Group>
            </div>
        )
    }
}
