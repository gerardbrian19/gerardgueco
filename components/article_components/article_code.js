import React, {Component} from 'react'
import {
    Message
} from 'semantic-ui-react'
const codeString = "var numbers_m2 = []; \nfor (i = 0; i < numbers.length; i++) { \nnumbers_m2.push(numbers[i] * 2); \n} \nconsole.log(numbers_m2);"
export default class ArticleCode extends Component{
    render(){
        return(
            <div className="article_code">
               <Message>
                    <code> {
                        codeString.split('\n').map((item, i) => 
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