import React, {Component} from 'react'
import {
    Image
} from 'semantic-ui-react'

export default class InlineImage extends Component{
    render(){
        return(
            <div className="inline_image">
                <Image src={this.props.inl_img_src} centered size='massive'/>
               <p className="center">{this.props.inl_cap}</p>
            </div>
        )
    }
}