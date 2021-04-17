import React, {Component} from 'react';
import Card from './Card';
import axios from 'axios';
import './Deck.css';

const API_BASE_URL = "https://deckofcardsapi.com/api/deck/";

class Deck extends Component {

    constructor(props) {
        super(props);
        this.state = {
            deck : null,
            cards : []
        }
        this.getNewCard = this.getNewCard.bind(this);
    }

    async componentDidMount() {
        let response = await axios.get(`${API_BASE_URL}new/shuffle`);

        this.setState({deck : response.data});
    }

    async getNewCard() {

        try {
            let cardRes = await axios.get(`${API_BASE_URL}${this.state.deck.deck_id}/draw/`);

            if(!cardRes.data.success) {
                throw new Error("Deck is empty, no cards left!")
            }

            this.setState( st => ({
                cards : [...st.cards, {id : cardRes.data.cards[0].code, img : cardRes.data.cards[0].image}]
            }));

        } catch(err) {
            alert(err);
        }  
    }

    render() {
        return(
            <div className = 'Deck'>
                <h1 className = "Deck-title">Card Dealer</h1>
                <button className = "Deck-btn" onClick = {this.getNewCard}>Gimme a card!</button>
                <div className = "Deck-cardarea">
                    {this.state.cards && this.state.cards.map( c => 
                        <Card url = {c.img} alt = {c.id} key = {c.id} />
                    )}
                </div>
            </div>

        )
    }
}

export default Deck;