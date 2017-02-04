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
        axios.get('http://api.coindesk.com/v1/bpi/currentprice/usd.json').then(function(res) {
          window.hello = res;
            const rate = res.data.bpi.USD.rate
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
                    the current price of a bitcoin is ${price
                        ? price
                        : 'loading...'}
                </p>
            </div>
        );
    }
}

export default App;
