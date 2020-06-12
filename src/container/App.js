import React, { Component} from 'react';
import CardList from '../components/CardList';
import SearchField from '../components/SearchField';
import './App.css';
import Scroll from '../components/Scroll';
import {robots} from '../components/robots';

class App extends Component{
	constructor(){
		super()
		this.state={
			robots:[],
			SearchField:''
		};
	}

	componentDidMount(){
		fetch('https://jsonplaceholder.typicode.com/users')
		.then(response=>response.json())
		.then(users=>this.setState({robots:users}));
          


	}
        onSearchChange=(event)=>{
        	this.setState({SearchField:event.target.value});
    	
 
    }


	render(){
		const FilteredRobots=robots.filter(robots=>{
    		return robots.name.toLowerCase().includes(this.state.SearchField.toLowerCase());
    	})

    	if (this.state.robots.length===0){
    		return <h1 className='tc'>LOADING.....</h1>
    	}else{
		return(

        <div className='tc'>
		<h1 className='f1'>RoboFriends</h1>
		<div>
		<SearchField SearchChange={this.onSearchChange}/>
		<div>
		<Scroll>
        <CardList robots={FilteredRobots}/>
        </Scroll>
        </div>
        </div>
        </div>


		);
	}

	}

	
}

export default App;