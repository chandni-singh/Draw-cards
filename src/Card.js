import React, {Component} from 'react';
import axios from 'axios';

class Card extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cardImg : ''
        }
    }

    async componentDidMount() {
        let res = await axios.get(`https://deckofcardsapi.com/api/deck/${this.props.id}/draw`);
        this.setState({ cardImg : res.data.cards[0].image})

    }

    render() {
        
        return (
            <div>
                <img src = {this.state.cardImg} />
            </div>
        )
    }
}

export default Card;