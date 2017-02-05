import React, {Component} from 'react';
import axios from 'axios';
import './App.css';

class App extends Component {
    constructor() {
        super();
        this.state = {
            price: null
        }
    }

    checkPrice() {
        axios.get('https://apiv2.bitcoinaverage.com/constants/exchangerates/global').then(function(res) {
            const rate = res.data.rates.PKR.rate
            console.log(rate)
            this.setState({price: rate});
        }.bind(this))
    }
    render() {
        const price = this.state.price
        if (price === null)
            this.checkPrice();
        return (
            <div className="App">
                <p>
                    The exchange rate is {price
                        ? price
                        : '...loading...'} Pakistani Rupees per US Dollar.
                </p>
            </div>
        );
    }
}

export default App;
