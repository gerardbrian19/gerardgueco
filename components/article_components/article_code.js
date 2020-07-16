import React, {Component} from 'react'
import {
    Message
} from 'semantic-ui-react'

export default class ArticleCode extends Component{
    render(){
        return(
            <div className="article_code">
               <Message>
                    <code> {
                        this.props.code.split('\n').map((item, i) => 
                        <span key={i}>
                            {item}<br/>
                        </span>
                            )
                    } </code>
                </Message>
            </div>
        )
    }
}