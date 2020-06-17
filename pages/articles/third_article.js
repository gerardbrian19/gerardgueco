import React, {Component} from 'react'
import {scaleRotate as Menu} from 'react-burger-menu'
import {
    Container,
    Header,
    Image,
    Icon,
    Button,
    Card,
    Grid,
    Divider,
    Segment,
    Comment,
    Form,
    Label,
    Item,
    Message,
    List
} from 'semantic-ui-react'
import {Animated} from 'react-animated-css'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const codeString = "var numbers_m2 = []; \nfor (i = 0; i < numbers.length; i++) { \nnumbers_m2.push(numbers[i] * 2); \n} \nconsole.log(numbers_m2);"

export default class First_Article extends Component {
    constructor(props) {
        super(props)
        this.state = {
            menuOpen: false
        }
    }
    handleStateChange(state) {
        this.setState({menuOpen: state.isOpen})
    }
    closeMenu() {
        this.setState({menuOpen: false})
    }
    toggleMenu() {
        this.setState(state => ({
            menuOpen: !state.menuOpen
        }))
    }
    render() {
        return (
            <div id="App">
                {/* Sidebar Start */}
                <Menu pageWrapId={"main-content"}
                    outerContainerId={"App"}
                    isOpen={
                        this.state.menuOpen
                    }
                    onStateChange={
                        (state) => this.handleStateChange(state)
                }>
                    <div className="bm-item nav-content">
                        <Image src='/static/images/logo-light1.png' className="logo"/>
                        <div className="links">
                            <Link href="/">
                                <a className="menu-item">Home</a>
                            </Link>
                            <Link href="/projects">
                                <a className="menu-item">Projects</a>
                            </Link>
                            <Link href="/articles">
                                <a className="menu-item active">Articles</a>
                            </Link>
                            <Link href="/static/images/gerard_gueco_resume.pdf">
                                <a  target="_blank" className="menu-item">Resumé</a>
                            </Link>
                        </div>
                        <div className="social-icons">
                            <a title="Medium" href="https://medium.com/@gerardgueco" target="_blank">
                                <Icon name="medium"></Icon>
                            </a>
                            <a title="Youtube" href="https://www.youtube.com/channel/UC1bQUFzHdunG_62gVVQxn9g?view_as=subscriber" target="_blank">
                                <Icon name="youtube square"></Icon>
                            </a>
                            <a title="Github" href="https://github.com/gerardbrian19" target="_blank">
                                <Icon name="github square"></Icon>
                            </a>
                        </div>
                    </div>

                </Menu>
                {/* Sidebar End */}
                <main id="main-content">
                    <Container> {/* Header Start */}
                        <div className="header-content">
                            <div>
                                <Header as='h2'>
                                    <Image circular src='/static/images/gerard_formal.jpg'/>
                                    <Header.Content>
                                        Hi, I'm Gerard Gueco
                                        <Header.Subheader>Software Engineer
                                            <br></br>
                                            <p className="location"><Icon name='map marker alternate'/>
                                                Manila, Philippines
                                            </p>
                                        </Header.Subheader>
                                    </Header.Content>
                                </Header>
                            </div>
                            <div>
                                <Button basic icon size='big'
                                    onClick={
                                        () => this.toggleMenu()
                                }>
                                    <Icon name='bars'/>
                                </Button>
                            </div>
                        </div>
                        {/* Header End */}

                        <div className="article-content">
                            <Grid centered>
                                <Grid.Row>
                                    <Grid.Column computer={10}
                                        mobile={16}
                                        tablet={14}>
                                        <Header size='huge'>Managing data with modern JavaScript: map, filter, reduce, find</Header>

                                        <div className="author-header">
                                            <Grid>
                                                <Grid.Row>
                                                <Grid.Column width={10}>
                                                <Header as='h1'>
                                                <Header.Content>
                                                    <Header.Subheader>Gerard Gueco</Header.Subheader>
                                                    <Header.Subheader>Jun 27, 2019 · 4 min read</Header.Subheader>
                                                </Header.Content>
                                            </Header>
                                                        </Grid.Column>
                                                        <Grid.Column width={6}>
                                                            <div className="soc-icon">
                                                            <Header as='h2'>
                                                            
                                                            <a href="https://twitter.com/xogerardd" target="_blank"><Icon name='twitter'/></a>
                                                            <a href="https://www.linkedin.com/in/gerard-brian-gueco-a86733161/" target="_blank"><Icon name='linkedin'/></a>
                                                            <a href="https://www.facebook.com/xogerard/" target="_blank"><Icon name='facebook'/></a>
                                                        </Header>
                                                            </div>
                                                       
                                                        </Grid.Column>
                                                </Grid.Row>
                                            </Grid>
                                        </div>


                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>
                            <Divider hidden/>

                            <div className="img-group">
                                <Image src='https://miro.medium.com/max/1920/1*PCTSrjA4HThSZKMTBtUkkw.png' centered size='massive'/>
                                {/* <p className="center">2016 vs 2019 Portfolio</p> */}
                            </div>


                            <Grid centered>
                                <Grid.Row>
                                    <Grid.Column computer={10}
                                        mobile={16}
                                        tablet={16}>
                                        <Container text fluid textAlign='left'>
                                            <div className="text-content">
                                                {/* <Header as='h1'>Hey, congratulations!</Header> */}
                                                <p>Knowledge about manipulating data in an array or object is very important if you’re working in a project that requires CRUD functions, either with or without a database. Looking back on the days when modern JavaScript was not yet put into practice, it was so difficult to manage a data. Now, it’s super easy by using the built-in functions of ES6+.</p>
                                                <p>Learning the modern JavaScript can be confusing if you don’t know what its history is and how its traditional syntax works. You might have seen the term “ECMAScript” somewhere else or heard about “Javascript ES6/7/8” and wondered what it actually means. I suggest if you’re a total beginner in JS and you’re curious about what these terms are for, you might consider reading What’s the difference between JavaScript and ECMAScript? You are also encourage to brush up on the basics of JavaScript from here and continue with this article when you’re all caught up.</p>
                                                <Header as='h1'>.map()</Header>
                                                <p>Map function translate each item from an array into another form of array. Let me give an example. Say you have an array of numbers and you want to multiply every value of each item by 2.</p>
                                                <Message>
                                                    <code> {
                                                        codeString.split('\n').map((item, i) => <p key={i}>
                                                            {item}</p>)
                                                    } </code>
                                                </Message>
                                                <p>Using the traditional way of writing a JavaScript code, you might create an empty array and use a loop to meet your goal.</p>
                                                <Message>
                                                    <code> {
                                                        codeString.split('\n').map((item, i) => <p key={i}>
                                                            {item}</p>)
                                                    } </code>
                                                </Message>
                                                <p>However, with map function, your code will simply look like this:</p>
                                                <Message>
                                                    <code> {
                                                        codeString.split('\n').map((item, i) => <p key={i}>
                                                            {item}</p>)
                                                    } </code>
                                                </Message>
                                                <p>Did you notice how I eliminated the for loop? That’s because I stored the .map() to numbers_m2 which takes a function as its argument and runs that function on each item in the numbers. The function argument itself takes one argument which is the current item in the numbers — in the code above current item is number.</p>
                                                <Message>
                                                    <code> {
                                                        codeString.split('\n').map((item, i) => <p key={i}>
                                                            {item}</p>)
                                                    } </code>
                                                </Message>
                                                <p>You can even make your code shorter by using an ES6 arrow function which looks like this:</p>
                                                <Message>
                                                    <code> {
                                                        codeString.split('\n').map((item, i) => <p key={i}>
                                                            {item}</p>)
                                                    } </code>
                                                </Message>
                                                <div className="img-group">
                                                    <Image src='https://miro.medium.com/max/662/1*P10HpjSWGqLOeu5gWR0qjQ.jpeg' centered size='massive'/>
                                                </div>

                                                <p>So how does .map() works? Map function returns a new array of equal length, containing transformed items. That is to say, the new array isn’t just a copy of the original array.</p>

                                                <Header as='h1'>.filter()</Header>
                                                <p>Using also the array of numbers example above, what if you only want to get the numbers that is less than or equal to 15? That’s what filter function is for! It is used to remove unwanted items in an array. It returns a new array, but with fewer items than found in the original array.</p>
                                                <Message>
                                                    <code> {
                                                        codeString.split('\n').map((item, i) => <p key={i}>
                                                            {item}</p>)
                                                    } </code>
                                                </Message>
                                                <p>Using ES6 arrow function:</p>
                                                <Message>
                                                <code> {
                                                    codeString.split('\n').map((item, i) => <p key={i}>
                                                        {item}</p>)
                                                } </code>
                                            </Message>
                                                <div className="img-group">
                                                    <Image src='https://miro.medium.com/max/662/1*fXIsi4BqUMPm0FqDqwULOg.jpeg' centered size='massive'/>
                                                    
                                                </div>
                                                <p>In in other words, .filter() is basically just like a loop with an if-statement inside: only items that meet the if-condition can make it to the new array.</p>
                                                
                                                <Header as='h1'>.reduce()</Header>
                                                <p>Reduce is quite difficult to understand but it’s simply just used to summarize an array into a single value, which can be of any datatype: number, string or even array. It’s like map and filter as it also takes a function as its argument and runs that function on each element, however, reduce needs at least two arguments in its call back function which is an accumulator and the current item in the array. An accumulator basically accumulates all of the callbacks’ returned values.</p>
                                                <p>I’m guessing you’re confused. Just keep in mind that with reduce function, you only get one value returned, and it doesn’t need to be an array — it is frequently a number, since .reduce() is good for adding stuff up.</p>
                                                <p>For example, you want to get the sum of our array of numbers above. If you’re coding with an old traditional way writing JS, you might write a code that is similar to this:</p>
                                                <Message>
                                                <code> {
                                                    codeString.split('\n').map((item, i) => <p key={i}>
                                                        {item}</p>)
                                                } </code>
                                            </Message>
                                                <p>With reduce function, your 6 six lines of code will only be 3. ;)</p>
                                                <Message>
                                                <code> {
                                                    codeString.split('\n').map((item, i) => <p key={i}>
                                                        {item}</p>)
                                                } </code>
                                            </Message>
                                                <p>The code above iterates numbers with .reduce(), getting the sum of its items by storing it in total. To make it easier to read, we’ll keep the function curly brackets and return the sum of accumulator and the value of current item.</p>
                                                <Message>
                                                <code> {
                                                    codeString.split('\n').map((item, i) => <p key={i}>
                                                        {item}</p>)
                                                } </code>
                                            </Message>
                                                <p>The acc parameter is the variable that holds the accumulating total while cur is the current array item.</p>
                                                <div className="img-group">
                                                    <Image src='https://miro.medium.com/max/864/1*lK9ZpdwyfpnsUnLPyaMgDA.jpeg' centered size='massive'/>
                                                    
                                                </div>

                                                <p>So how does .reduce() works? Reduce function basically combine several items from an array through some calculation which later will generate a single value.</p>
                                                
                                                <Header as='h1'>.find() and .findIndex()</Header>
                                                <p>Find function is very similar to .filter() and findIndex function is somehow like .reduce(), the difference is .find() returns only the item’s value while .findIndex() only returns the item’s index of the first element in the array that satisfies the provided condition, otherwise undefined or -1 is returned.</p>
                                                <p>Say you want to get both value and index of an item in the array of numbers above with a condition number 9 and number 11. The way how you can do that with ES6 is:</p>
                                                <Message>
                                                <code> {
                                                    codeString.split('\n').map((item, i) => <p key={i}>
                                                        {item}</p>)
                                                } </code>
                                            </Message>
                                                <div className="img-group">
                                                    <Image src='https://miro.medium.com/max/782/1*tKcsuf3hz5bcpib30cjHnQ.jpeg' centered size='massive'/>
                                                    
                                                </div>
                                                <p>Both of these functions can be useful in cases where you need modify your array by Creating, Updating, Deleting, and Moving some elements and you want to keep the order of your initial array.</p>
                                                
                                                <Header as='h1'>Summary</Header>
                                                <p>Modern JavaScript has introduced a bunch of syntax improvements.</p>
                                                

                                            <List bulleted>
                                                <List.Item>Map evokes a function on every item in an array and it can return anything. It can have something to do in the current item’s value either do a mathematical equation or concatenation.</List.Item>
                                                <List.Item>Filter has a condition and only the items on which the condition returns true will be pushed to a new set of array.</List.Item>
                                                <List.Item> Reduce has an accumulator and a current value and you can do something with these two parameters like add them together to combine all the values in the array which then results to a one big single value.</List.Item>
                                                <List.Item>Find and findIndex is both used to find the first element that matches a condition.</List.Item>
                                            </List>
                                            <p>Using these built-in functions of ES5/ES6+ can help you work with complex data structure easily and develop your programs effortlessly without having lots of codes.</p>

                                            </div>

                                            <div className="tags">
                                                <Label.Group size='large'>
                                                    <Label>JavaScript</Label>
                                                    <Label>ES6</Label>
                                                    <Label>Data Structure</Label>
                                                    <Label>Ecmascript</Label>
                                                </Label.Group>

                                            </div>
                                            <div className="claps">
                                                <Grid>
                                                    <Grid.Row>
                                                        <Grid.Column width={8}>
                                                            <div className="lft">
                                                                <div className="like">
                                                                    <Label basic size='medium'>
                                                                        <Icon size='big' name='thumbs up outline'/>
                                                                        23
                                                                    </Label>

                                                                </div>
                                                                <div className="respo">
                                                                    <Label basic size='medium'>
                                                                        <Icon size='big' name='comment outline'/>
                                                                        23
                                                                    </Label>

                                                                </div>
                                                            </div>
                                                        </Grid.Column>
                                                        <Grid.Column width={8}>
                                                            <div className="rght">
                                                               <a href="https://twitter.com/xogerardd" target="_blank"><Icon size='large' name='twitter'/></a>
                                                               <a href="https://www.linkedin.com/in/gerard-brian-gueco-a86733161/" target="_blank"><Icon size='large' name='linkedin'/></a>
                                                                <a href="https://www.facebook.com/xogerard/" target="_blank"><Icon size='large' name='facebook'/></a>
                                                            </div>
                                                        </Grid.Column>
                                                    </Grid.Row>
                                                </Grid>
                                            </div>
                                            <Divider section/>
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
                                            <Divider section/>
                                            <div className="comments">
                                                <Comment.Group>
                                                    <Header as='h3'>
                                                        Comments
                                                    </Header>

                                                    <Comment>
                                                        <Comment.Avatar src='/static/images/gerard_formal.jpg'/>
                                                        <Comment.Content>
                                                            <Comment.Author as='a'>Matt</Comment.Author>
                                                            <Comment.Metadata>
                                                                <div>Today at 5:42PM</div>
                                                            </Comment.Metadata>
                                                            <Comment.Text>How artistic!</Comment.Text>
                                                            <Comment.Actions>
                                                                <Comment.Action>Reply</Comment.Action>
                                                            </Comment.Actions>
                                                        </Comment.Content>
                                                    </Comment>

                                                    <Comment>
                                                        <Comment.Avatar src='/static/images/gerard_formal.jpg'/>
                                                        <Comment.Content>
                                                            <Comment.Author as='a'>Elliot Fu</Comment.Author>
                                                            <Comment.Metadata>
                                                                <div>Yesterday at 12:30AM</div>
                                                            </Comment.Metadata>
                                                            <Comment.Text>
                                                                <p>This has been very useful for my research. Thanks as well!</p>
                                                            </Comment.Text>
                                                            <Comment.Actions>
                                                                <Comment.Action>Reply</Comment.Action>
                                                            </Comment.Actions>
                                                        </Comment.Content>
                                                        <Comment.Group>
                                                            <Comment>
                                                                <Comment.Avatar src='/static/images/gerard_formal.jpg'/>
                                                                <Comment.Content>
                                                                    <Comment.Author as='a'>Jenny Hess</Comment.Author>
                                                                    <Comment.Metadata>
                                                                        <div>Just now</div>
                                                                    </Comment.Metadata>
                                                                    <Comment.Text>Elliot you are always so right :)</Comment.Text>
                                                                    <Comment.Actions>
                                                                        <Comment.Action>Reply</Comment.Action>
                                                                    </Comment.Actions>
                                                                </Comment.Content>
                                                            </Comment>
                                                        </Comment.Group>
                                                    </Comment>

                                                    <Comment>
                                                        <Comment.Avatar src='/static/images/gerard_formal.jpg'/>
                                                        <Comment.Content>
                                                            <Comment.Author as='a'>Joe Henderson</Comment.Author>
                                                            <Comment.Metadata>
                                                                <div>5 days ago</div>
                                                            </Comment.Metadata>
                                                            <Comment.Text>Dude, this is awesome. Thanks so much</Comment.Text>
                                                            <Comment.Actions>
                                                                <Comment.Action>Reply</Comment.Action>
                                                            </Comment.Actions>
                                                        </Comment.Content>
                                                    </Comment>

                                                    <Form reply>
                                                        <Form.TextArea/>
                                                        <Button content='Add Reply' labelPosition='left' icon='edit' primary/>
                                                    </Form>
                                                </Comment.Group>
                                                <div>
                                                    <Divider hidden section/>
                                                    <p className="credits">
                                                        Made with ♥️ from 🇵🇭
                                                    </p><Divider hidden section/>
                                                </div>
                                            </div>

                                        </Container>
                                    </Grid.Column>
                                </Grid.Row>
                            </Grid>

                        </div>

                    </Container>
                </main>
            </div>
        )
    }
}
