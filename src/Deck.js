import React, {Component} from 'react';
import Card from './Card';
import axios from 'axios';

class Deck extends Component {

    constructor(props) {
        super(props);
        this.state = {
            deckID : '',
            cardImg : '',
            cardAlt : ''
        }
        this.getNewCard = this.getNewCard.bind(this);
    }

    async componentDidMount() {
        let response = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle');
        console.log(response.data);

        this.setState({deckID : response.data.deck_id});
    }

    async getNewCard() {
        let res = await axios.get(`https://deckofcardsapi.com/api/deck/${this.state.deckID}/draw`);
        this.setState({ cardImg : res.data.cards[0].image, cardAlt : res.data.cards[0].code})
    }

    render() {
        return(
            <div>
                <button onClick = {this.getNewCard}>Gimme a card!</button>
                {this.state.cardImg && <Card url = {this.state.cardImg} alt = {this.state.cardAlt} />}
            </div>

        )
    }
}

export default Deck;