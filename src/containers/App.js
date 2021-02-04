import React, {Component} from 'react';
import CardList from '../components/CardList'; 
//import { robots } from './robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import '../App.css'
//import '../components/ErrorBoundry';
import ErrorBoundry from '../components/ErrorBoundry';
/*
const state = {
    robots: robots,
    searchfield: ''
}
*/
class App extends Component {
    constructor(){
        super();
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=> response.json())
        .then(users => this.setState({robots: users}))
    } 
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
        console.log(event.target.value);
    }
    render(){
        const {robots, searchfield} = this.state;
        //  Destructurar
        //Para hacer más limpio el código se crea el const (variable) anterior para no agregar "this.state" antes del "robots" y "searchField" dentro del render
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        });
        return !robots.length ?
        <h1 className='tc'>Loading</h1>:
        (
            <div className='tc'>
                <h1 className='f1'>RooboFriends</h1>
                <SearchBox searchChange={this.onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }
}

export default App;