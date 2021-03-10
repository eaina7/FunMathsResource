import React from "react";
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Homepage from "./pages/Homepage";
import ButtonZero from './components/ButtonZero';
import rootPage from './components/rootPage';
import { findRenderedComponentWithType } from "react-dom/test-utils";


function App() {
  return (
    <div className="App">
       <Homepage/> 
       <Switch>
                    <Route path="/yearsix" component={rootPage}  />
                    <Route path="/yearseven" component={rootPage} />
                    <Route path="/yeareight" component={rootPage} />
                    <Route path="/yearnine" component={rootPage} />
                    <Route path="/yearten" component={rootPage} />
                    <Route path="/yeareleven" component={rootPage} />
                    <Route path="/" component={Homepage} />
      </Switch>
                     
        
    
    </div>
    

  );
}

export default App;
