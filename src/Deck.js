import React, {Component} from 'react';
import Card from './Card';
import axios from 'axios';

class Deck extends Component {

    constructor(props) {
        super(props);
        this.state = {
            deckID : ''
        }
    }

    async componentDidMount() {
        let response = await axios.get('https://deckofcardsapi.com/api/deck/new/shuffle');
        console.log(response.data);

        this.setState({deckID : response.data.deck_id});
    }

    render() {
        return(
            <div>
                <button>Gimme a card!</button>
                {this.state.deckID && <Card id = {this.state.deckID} />}
            </div>

        )
    }
}

export default Deck;