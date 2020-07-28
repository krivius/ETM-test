import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Catalog from './Components/Catalog';
import ItemDetails from './Components/ItemDetails';

class App extends React.Component{
  constructor(){
    super();
    this.state ={};
  }

  render() {
    return (
        <main>
            <Switch>
                <Route path="/" component={Catalog} exact />
                <Route path="/catalog/:id" component={ItemDetails} />
            </Switch>
        </main>
    );
  }

}

export default App;
