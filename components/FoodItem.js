import React from 'react';
import './FoodItem.css';

class FoodItem extends React.Component {
    render(){
        return (
            <div className="foodItem">
                <div className="food-component">
                    <img className="food-img" src="http://content.sportslogos.net/logos/35/882/full/4013_ucla_bruins-alternate-2004.png" alt="profile pic"/>
                </div>
                <div className="food-component">
                    <p>
                        <a className="food-link" href={this.props.url}>{this.props.name}</a>
                    </p>
                    <p>Calculate your carbon footprint!</p>
                </div>
            </div>
        );
    }
}

export default FoodItem;