import './App.css';
import Recommendations from './Recommendations';
import Sidebar from './Sidebar';
import Header from './header';
import {BrowserRouter as Router,Route,Switch  }from "react-router-dom";
import SearchPage from './searchPage';

function App() {
  return (
    // BEM class naming convention
     <div className="App">
     <Router>
  
     <Header/>
<Switch>
    
        
        <Route path='/search/:searchTerm'>
        <div className='App_page'>  
         <Sidebar/>
      <SearchPage/>
        </div> 
        </Route>

        <Route  path='/'>
         <div className='App_page'>   
         <Sidebar/>
          <Recommendations/>
        </div> 
        </Route>
</Switch>
     </Router>

    
  
    </div>
  );
}

export default App;
