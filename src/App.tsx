import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './pages/Home';
import './index.css'

const App: React.FC = () => {
  return (
    <Router>
      <Route path='/' exact component={Home}/>
    </Router>
  );
}

export default App;
