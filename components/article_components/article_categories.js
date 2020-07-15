import React, {Component} from 'react'
import {Label} from 'semantic-ui-react'

export default class ArticleCategories extends Component {
    render() {
        return (
            <div className="categories">
                <Label.Group size='large'>
                    {this.props.tag.map((subData, k) => 
                    <Label key={k}>{subData}</Label>
                    )}
                </Label.Group>
            </div>
        )
    }
}
