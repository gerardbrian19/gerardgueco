import React, {Component} from 'react'
import {
    Item
} from 'semantic-ui-react'

export default class ArticleItems extends Component {
    render() {
        return (
            <div className="article_items">
                <Item.Group>
                    <Item>
                        <Item.Image size='small' src='https://miro.medium.com/max/320/0*JsCxh8ckwJllI2In'/>

                        <Item.Content verticalAlign='middle'>
                            <Item.Header as='a'>uiGradients - Beautiful colored gradients</Item.Header>
                            {/* <Item.Meta>Description</Item.Meta> */}
                            <Item.Description>
                                uiGradients is a handpicked collection of beautiful color gradients for designers and developers.
                            </Item.Description>
                            <Item.Extra>uigradients.com</Item.Extra>
                        </Item.Content>
                    </Item>

                    <Item>
                        <Item.Image size='small' src='https://miro.medium.com/max/320/0*I3TiS0a273hCok0-'/>

                        <Item.Content verticalAlign='middle'>
                            <Item.Header as='a'>vercel/next.js</Item.Header>
                            {/* <Item.Meta>Description</Item.Meta> */}
                            <Item.Description>
                                The React Framework. Contribute to vercel/next.js development by creating an account on GitHub.
                            </Item.Description>
                            <Item.Extra>github.com</Item.Extra>
                        </Item.Content>
                    </Item>
                    <Item>
                        <Item.Image size='small' src='https://miro.medium.com/max/320/0*O_WVawBCrBy-WXTh'/>

                        <Item.Content verticalAlign='middle'>
                            <Item.Header as='a'>negomi/react-burger-menu</Item.Header>
                            {/* <Item.Meta>Description</Item.Meta> */}
                            <Item.Description>
                                hamburger: An off-canvas sidebar component with a collection of effects and styles using CSS transitions and SVG path...
                            </Item.Description>
                            <Item.Extra>github.com</Item.Extra>
                        </Item.Content>
                    </Item>
                    <Item>
                        <Item.Image size='small' src='https://miro.medium.com/max/320/0*fyrM-xp9LumtS-Ow'/>

                        <Item.Content verticalAlign='middle'>
                            <Item.Header as='a'>Introduction - Semantic UI React</Item.Header>
                            {/* <Item.Meta>Description</Item.Meta> */}
                            <Item.Description>
                                Button Container Divider Flag Header Icon Image Input Label List Loader Placehoder Rail Reveal Segment Step
                            </Item.Description>
                            <Item.Extra>react-semantic-ui.com</Item.Extra>
                        </Item.Content>
                    </Item>

                </Item.Group>
            </div>
        )
    }
}
