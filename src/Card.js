import React, {Component} from 'react';
import './Card.css';

class Card extends Component {

    render() {
        return (
            <img className = "Card" src = {this.props.url} alt = {this.props.alt} />
        )
    }
}

export default Card;