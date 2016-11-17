import React from 'react';

import Header from './Header';
import Inventory from './Inventory';
import Order from './Order';
import Fish from './Fish';
import sampleFishes from '../sample-fishes';
import base from '../base';

class App extends React.Component{
	constructor(){
		super();
		this.addFish = this.addFish.bind(this);
		this.loadSamples = this.loadSamples.bind(this);
		this.addToOrder = this.addToOrder.bind(this);
		this.updateFish = this.updateFish.bind(this);
		this.removeFish = this.removeFish.bind(this);
		this.removeFromOrder = this.removeFromOrder.bind(this);

		this.state={
			fishes: {},
			order: {}
		}
	}

	componentWillMount(){
		this.ref = base.syncState(`${this.props.params.storeId}/fishes`,
			{
				context: this,
				state: 'fishes',
			});

		const localStorageRef = localStorage.getItem(`order-${this.props.params.storeId}`);
		if(localStorageRef){
			this.setState({
				order: JSON.parse(localStorageRef)
			});
		}
	}

	componentWillUnMount(){
		base.removeBinding(this.ref);
	}

	componentWillUpdate(nextProps, nextState){
		localStorage.setItem(`order-${this.props.params.storeId}`, JSON.stringify(nextState.order));
	}

	loadSamples(){
		this.setState({fishes: sampleFishes});
	}

	addFish(fish){
		//update state
		const fishes = {...this.state.fishes};
		const timestapm = Date.now();
		fishes[`fish-${timestapm}`] = fish;
		//set state
		this.setState({ fishes });
	}

	updateFish(key, updatedFish){
		const fishes = {...this.state.fishes};
		fishes[key] = updatedFish;
		this.setState({fishes});
	}

	removeFish(key){
		const fishes = {...this.state.fishes};
		fishes[key] = null;
		console.log(fishes);
		this.setState({ fishes });
	}

	addToOrder(key){
		const order = {...this.state.order};
		order[key] = order[key] + 1 || 1; 
		this.setState({order});
	}

	removeFromOrder(key){
		const order = {...this.state.order};
		delete order[key];
		this.setState({order});
	}

	render(){
		return (
			<div className="catch-of-the-day">
				<div className="menu">
					<Header tagline="Fresh Fish Friday"/>
					<ul className="list-of-fishes">
						{
							Object.keys(this.state.fishes).map(key => <Fish addToOrder={this.addToOrder} key={key} index={key} details={this.state.fishes[key]}/>)
						}
					</ul>
				</div>
				<Order 
					fishes={ this.state.fishes }
					order={ this.state.order } 
					removeFromOrder={ this.removeFromOrder }
					//params={ this.props.params }
				/>
				<Inventory
				addFish={this.addFish} 
				loadSamples={this.loadSamples} 
				fishes={this.state.fishes} 
				updateFish={this.updateFish}
				removeFish={this.removeFish}
				/>
			</div>
			)
	}
}

export default App;