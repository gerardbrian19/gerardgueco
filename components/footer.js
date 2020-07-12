import React, {Component} from 'react'
import {
    Icon,
    Divider,
    Flag
} from 'semantic-ui-react'

export default class Footer extends Component {
    render() {
        return (

            <div>
                <Divider hidden section/>
                <p className="footer">
                    P.S. Sorry for too much colors. I'm just colorblind :)
                </p>
                <p className="credits">
                    {/* Made with ♥️ from 🇵🇭 */}
                    Made with
                    <Icon size='small' color='red' name='heart'/>
                    from
                    <Flag name='ph'/>
                </p>
                <Divider hidden section/>
            </div>
        )
    }
}
