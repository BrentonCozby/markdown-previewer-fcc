import React from 'react';
import Landing from './landing/landing.main';
import Footer from './footer/footer.main';
import './App.css';

const App = () =>
  <div className="App">
    <div className="App-header">
      <h2>Markdown Previewer</h2>
    </div>
    <Landing />
    <Footer />
  </div>;

export default App;
