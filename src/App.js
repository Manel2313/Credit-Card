import React, { Component } from 'react';
import puce from './components/images/puce.png'
import visa from './components/images/visa.png'
import master from './components/images/master-card.png'
import './App.css'
class App extends Component {
  state = {}
  render() {
    return (
      <div className="App">
        <h1 className="title">CREDIT CARD</h1>
        <img className="image-puce" src={puce} alt="puce" />
        <div className="card-info">
          <div className="numbers">
            <div className="n-card">
              <p>7253</p>
              <p>3256</p>
              <p>7895</p>
              <p>1245</p>
            </div>
            <div className="num-et-date">
              <p className="num-4-chiffre">5422</p>
              <div className="validite">
                <div className="thru">
                  <p className='val'>VALID <br/>THRU </p>
                  <i class="fas fa-caret-right"></i>
                </div>
                <div>
                  <p className='val val-margin'>MONTH/YEAR</p>
                  <p>11/50</p>
                </div>
              </div>
            </div>
            <p className="cardholder">CARDHOLDER</p>
          </div>
          <div className="cards">
            <div className="logo-cards">
              <img className="image-master" src={master} alt="masterCard" />
              <img className="image-visa" src={visa} alt="visaCard" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
