import React  from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'

import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
const App =()=>{


  
    return (
      <div>
        <Router>
        
      
        
                    <Switch> 
                          <Route path = "/" exact component = {Home}></Route>
                          
                          <Route path = "/About" exact component = {About}></Route>
                          <Route path = "/Portfolio" exact component = {Portfolio}></Route>
                          <Route path = "/Contact" exact component = {Contact}></Route>
                    </Switch>
              
       
        </Router>
      </div>
    )
  }


export default App;