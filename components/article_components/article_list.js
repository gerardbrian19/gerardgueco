import React, {Component} from 'react'
import {List} from 'semantic-ui-react'

export default class ArticleList extends Component {
    render() {
        return (
            <div className="article_list">
                <List bulleted>
                    <List.Item>Map evokes a function on every item in an array and it can return anything. It can have something to do in the current item’s value either do a mathematical equation or concatenation.</List.Item>
                    <List.Item>Filter has a condition and only the items on which the condition returns true will be pushed to a new set of array.</List.Item>
                    <List.Item>
                        Reduce has an accumulator and a current value and you can do something with these two parameters like add them together to combine all the values in the array which then results to a one big single value.</List.Item>
                    <List.Item>Find and findIndex is both used to find the first element that matches a condition.</List.Item>
                </List>
            </div>
        )
    }
}
