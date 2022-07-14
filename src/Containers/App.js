import React, { Component } from "react";
import CardList from "../Components/CardList";
import SearchBox from "../Components/SearchBox";
import Scroll from "../Components/Scroll";
import "./App.css"




class App extends Component {
	constructor() {
		super()
		this.state = {
			robots: [],
			searchfield: ""
		}
	}

	//fetch has the ability to make a requests 
	componentDidMount() {
		fetch("https://jsonplaceholder.typicode.com/users")
		.then(response => response.json())
		.then(users => this.setState({ robots: users}));	
	}

	onSearchChange = (event) => {
		this.setState({ searchfield: event.target.value })
	}

	render() {
		const { robots, searchfield } = this.state;
		const filteredRobots = robots.filter(robot => {
			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
		})
		if (!robots.length) {
			return <h1>Loading</h1>
		} else {
			return (
				<div>
					<h1 className="tc f1">Robofriends</h1>
					<SearchBox searchChange={this.onSearchChange}/>
					<Scroll>
						<CardList robots={filteredRobots}/>
					</Scroll>
				</div>
			);
		}	
	}
}

export default App;