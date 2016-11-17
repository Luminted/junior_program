import React from 'react';
import { formatPrice } from '../helpers';

class Fish extends React.Component{
	render(){
		const {name, image, desc, price, status} = this.props.details;
		const isAvialable = status === 'available';
		const buttonText = isAvialable ? 'Add to Order' : 'Sold Out!';
		const index = this.props.index;

		return (
			<li className="menu-fish">
				<img src={image} alt={name}/>
				<h3 className="fish-name">
					{name}
					<span className="price">{formatPrice(price)}</span>
				</h3>
				<p>{desc}</p>
				<button disabled={!isAvialable} onClick={() => this.props.addToOrder(index)}>{buttonText}</button>
			</li>
		)
	}
}

export default Fish;