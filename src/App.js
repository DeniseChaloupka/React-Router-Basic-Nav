import React from 'react';
import './App.css';
import { Home, About, Contact, Navigation } from './components';
import { BrowserRouter as Router, Route } from "react-router-dom";

const App = () => (
   <Router>
      <Navigation />

        <Route path="/" exact component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/contact/" component={Contact} />

    </Router>
);

export default App;
