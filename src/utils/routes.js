import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from '../components/Home';
import Resume from '../components/Resume';
import Projets from '../components/Projects';
import Contact from '../components/Contact';

const Routes = () => (
    <Router>
        <Route exact path="/" component={ HomePage } />
        <Route  path="/resume" component={ Resume } />
        <Route  path="/projects" component={ Projets } />
        <Route  path="/contact" component={ Contact } />
    </Router>
);

export default Routes;