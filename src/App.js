import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Artist from './Components/Artist';
import Home from './Components/Home';
import ArtistForm from './Components/AtristForm';

const App = () => {
    return ( 
        <BrowserRouter>
           <Switch>
            <Route path="/artists/add" component={ArtistForm}/>
            <Route path="/artists/:id" component={Artist}/>
            <Route exact path="/" component={Home}/>
          </Switch>  
        </BrowserRouter>
     );
}
 
export default App;