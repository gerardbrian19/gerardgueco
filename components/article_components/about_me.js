import React, {Component} from 'react'
import {Header, Image, Grid} from 'semantic-ui-react'

export default class AboutMe extends Component {
    render() {
        return (
            <div className="author">
            <Grid>
                <Grid.Row>
                    <Grid.Column computer={8}
                        mobile={16}
                        tablet={8}>
                        <Image src='/static/images/GG.png' verticalAlign='middle' size='medium' centered/>
                    </Grid.Column>
                    <Grid.Column computer={8}
                        mobile={16}
                        tablet={8}>
                        <div className="info">
                            <Header as='h2'>
                                <Header.Content>
                                    <Header.Subheader>
                                        Written By
                                    </Header.Subheader>
                                    Gerard Gueco
                                    <Header.Subheader>
                                        Software Engineer
                                    </Header.Subheader>
                                </Header.Content>

                            </Header>
                            <p>
                                Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia
                                facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
                                referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
                                electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei
                                ex natum rebum iisque.
                            </p>
                            <p>
                                Te eum doming eirmod, nominati pertinacia argumentum ad his. Ex eam alia
                                facete scriptorem, est autem aliquip detraxit at. Usu ocurreret
                                referrentur at, cu epicurei appellantur vix. Cum ea laoreet recteque
                                electram, eos choro alterum definiebas in. Vim dolorum definiebas an. Mei
                                ex natum rebum iisque.
                            </p>
                        </div>
                    </Grid.Column>
                </Grid.Row>

            </Grid>
        </div>

        )
    }
}
