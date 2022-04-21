import "./style.css";
import React, { Component } from "react";
import Amount from "./Components/amount";
import Currency from "./Components/currency";
import Convert from "./Components/convert";
import CurrencyConventer from "./Components/currencyConventer";
import Outcome from "./Components/outcome";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rates: {
        EUR: 0,
        USD: 0,
        CHF: 0,
      },
      amount: 0,
      currency: "EUR",
      exchangeAmount: 0,
    };
  }

  componentDidMount() {
    fetch("http://api.nbp.pl/api/exchangerates/tables/c/")
      .then((responce) => responce.json())
      .then((data) => {
        this.setState((state) => ({
          rates: {
            EUR: data[0].rates[3].ask,
            USD: data[0].rates[0].ask,
            CHF: data[0].rates[5].ask,
          },
        }));
      })
      .catch((err) => console.log(err));
  }

  getAmount = (amount) => {
    this.setState({ amount });
    console.log(amount);
  };

  getCurrency = (currency) => {
    this.setState({ currency });
    console.log(currency);
  };

  exchangeAmountFn = () => {
    this.setState({
      exchangeAmount: this.state.rates[this.state.currency] * this.state.amount,
    });
    console.log(
      this.state.exchangeAmount,
      this.state.amount,
      this.state.rates,
      this.state.currency
    );
  };

  render() {
    return (
      <>
        <CurrencyConventer> </CurrencyConventer>
        <div className="input" id="input">
          <Amount getAmount={this.getAmount}></Amount>
          <Currency getCurrency={this.getCurrency}></Currency>
          <Convert onBtnClick={this.exchangeAmountFn}></Convert>
        </div>
        <Outcome text={this.state.exchangeAmount.toFixed(2)}></Outcome>
      </>
    );
  }
}
export default App;
