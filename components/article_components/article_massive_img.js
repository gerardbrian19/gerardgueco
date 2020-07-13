import React, {Component} from 'react'
import {
    Image
} from 'semantic-ui-react'

export default class MassiveImage extends Component{
    render(){
        return(
            <div className="massive_image">
                <Image className="full-img" src={this.props.massiveimg_src} centered size='massive'/>
            <p className="center">{this.props.massiveimg_cap}</p>
            </div>
        )
    }
}