import React, { Component } from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <h2>Welcome</h2>
        <p>to this humble abode</p>
        <Footer />
      </div>
    );
  }
}

export default App;
