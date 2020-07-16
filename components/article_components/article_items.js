import React, {Component} from 'react'
import {Item} from 'semantic-ui-react'

export default class ArticleItems extends Component {
    render() {
        return (
            <div className="article_items">
                <Item.Group> 
                    {
                    this.props.article_items.map((data, i) => (
                        <Item key={i}>
                            <Item.Image size='small' src={data.item_img }/>
                            <Item.Content verticalAlign='middle'>
                                <Item.Header as='a'>{data.item_header}</Item.Header>
                                <Item.Description>{data.item_desc} </Item.Description>
                                <Item.Extra>{data.item_extra}</Item.Extra>
                            </Item.Content>
                        </Item>
                    ))
                } 
                </Item.Group>
            </div>
        )
    }
}
