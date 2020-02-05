import React from 'react';
import './App.css';
import './foundation.min.css'
import HomeView from './views/home'
import CategoryView from './views/category'
import BookView from './views/book'
import CreateView from './views/create'
import EditView from './views/edit'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  // const auth = useSelector(state => state.auth)

  return (
    <Router>
      <Switch>
        <Route path="/edit" component={EditView} />
        <Route path="/create" component={CreateView} />
        <Route path="/book" component={BookView} />
        <Route path="/category" component={CategoryView} />
        <Route path="/" component={HomeView} />        
      </Switch>
    </Router>
  );
}

export default App;