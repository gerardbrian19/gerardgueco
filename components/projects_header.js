import React, {Component} from 'react'
import {
    Container,
    Header,
    Image,
    Icon,
    Button,
    Card,
    Grid,
    Divider
} from 'semantic-ui-react'
import {Animated} from 'react-animated-css'
import Link from 'next/link'

export default class Projects_Header extends Component{
    render(){
        return(
            <div>
                {/* Projects Start */}
                <Grid className="projects">
                            <Grid.Row>
                                <Grid.Column computer={4}
                                    mobile={8}
                                    tablet={8}>
                                    <Animated animationIn="fadeIn"
                                        animationInDuration={1000}
                                        animationInDelay={0}
                                        isVisible={true}>
                                        <Link href="/">
                                            <Card style={
                                                {
                                                    backgroundImage: "url(" + "/static/images/projects/coinflip/thumb.jpg" + ")"
                                                }
                                            }>
                                                <Header as='h3'>
                                                    <Header.Content>
                                                        CoinFlip
                                                        <Header.Subheader>A cloud-based payment platform at grocery stores nationwide</Header.Subheader>
                                                    </Header.Content>
                                                </Header>
                                                <div className="gradient Passion"></div>
                                            </Card>
                                        </Link>

                                    </Animated>
                                </Grid.Column>
                                <Grid.Column computer={4}
                                    mobile={8}
                                    tablet={8}>
                                    <Animated animationIn="fadeIn"
                                        animationInDuration={1000}
                                        animationInDelay={200}
                                        isVisible={true}>
                                        <Link href="/">
                                            <Card style={
                                                {
                                                    backgroundImage: "url(" + "/static/images/projects/sindro/thumb.jpg" + ")"
                                                }
                                            }>
                                                <Header as='h3'>
                                                    <Header.Content>
                                                        Sindro Web
                                                        <Header.Subheader>An online platform focused on simplicity and top of the line UX for fitness studios.</Header.Subheader>
                                                    </Header.Content>
                                                </Header>
                                                <div className="gradient Netflix"></div>
                                            </Card>
                                        </Link>

                                    </Animated>
                                </Grid.Column>
                                <Grid.Column computer={4}
                                    mobile={8}
                                    tablet={8}>
                                    <Animated animationIn="fadeIn"
                                        animationInDuration={1000}
                                        animationInDelay={400}
                                        isVisible={true}>
                                        <Link href="/">
                                            <Card style={
                                                {
                                                    backgroundImage: "url(" + "/static/images/projects/lifebrand/thumb.jpg" + ")"
                                                }
                                            }>
                                                <Header as='h3'>
                                                    <Header.Content>
                                                        Lifebrand
                                                        <Header.Subheader>Utilized machine learning platform, that scans social media for inappropriate or controversial material, and removes it.
                                                        </Header.Subheader>
                                                    </Header.Content>
                                                </Header>
                                                <div className="gradient ClearSky"></div>
                                            </Card>
                                        </Link>

                                    </Animated>
                                </Grid.Column>
                                <Grid.Column computer={4}
                                    mobile={8}
                                    tablet={8}>
                                    <Animated animationIn="fadeIn"
                                        animationInDuration={1000}
                                        animationInDelay={600}
                                        isVisible={true}>
                                        <Link href="/projects">
                                            <Card style={
                                                {
                                                    backgroundImage: "url(" + "/static/images/lowpoly.png" + ")"
                                                }
                                            }>
                                                <Header as='h3'>
                                                    <Header.Content>
                                                        View all ›
                                                        <Header.Subheader></Header.Subheader>
                                                    </Header.Content>
                                                </Header>
                                                <div className="gradient MidnightCity"></div>

                                            </Card>
                                        </Link>
                                    </Animated>
                                </Grid.Column>
                            </Grid.Row>
                        </Grid>
                        {/* Projects End */}
            </div>
        )
    }
}