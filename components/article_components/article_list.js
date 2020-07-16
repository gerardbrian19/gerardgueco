import React, {Component} from 'react'
import {List} from 'semantic-ui-react'

export default class ArticleList extends Component {
    render() {
        return (
            <div className="article_list">
                <List bulleted>
                {this.props.article_list.map((data, i) => (
                    <List.Item key={i}>
                        {data.list_item}
                    </List.Item>
                ))}
                
                    
                    
                </List>
            </div>
        )
    }
}
