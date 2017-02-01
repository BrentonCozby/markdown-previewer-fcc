import React, { Component } from 'react';
import Landing from './landing/landing.main';
import Footer from './footer/footer.main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Markdown Previewer</h2>
        </div>
        <Landing />
        <Footer />
      </div>
    );
  }
}

export default App;
