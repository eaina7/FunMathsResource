import React from "react";
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Homepage from "./pages/Homepage";
import ButtonZero from './components/ButtonZero';
import rootPage from './components/rootPage';
import { findRenderedComponentWithType } from "react-dom/test-utils";
import Yearsix from './pages/Yearsix';
import yearEight from "./pages/yearEight";
import yearTen from "./pages/yearTen";
import yearNine from "./pages/yearNine";
import yearSeven from "./pages/yearSeven";
import yearEleven from "./pages/yearEleven";


function App() {
  return (
    <div className="App">
       
       
       <Switch>
                    <Route path="/yearsix" component={Yearsix}  />
                    <Route path="/yearSeven" component={yearSeven} />
                    <Route path="/yearEight" component={yearEight} />
                    <Route path="/yearNine" component={yearNine} />
                    <Route path="/yearTen" component={yearTen} />
                    <Route path="/yearEleven" component={yearEleven} />
                    <Route path="/" component={Homepage} />
      </Switch>
                     
        
    
    </div>
    

  );
}

export default App;
