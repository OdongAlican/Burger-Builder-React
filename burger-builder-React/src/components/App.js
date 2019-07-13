import React, { Component } from 'react';
import './App.css';
import Layout from './Layout/layout';
import BurgerBuilder from '../container/BurgerBuilder'

class App extends Component {
  render() {
    return (
      <div className="App">
       <Layout>
         <BurgerBuilder/>
       </Layout>
      </div>
    );
  }
}

export default App;
