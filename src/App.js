import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import DetailPage from './components/DetailPage';
import Projectlist from './components/Project-list';
import Footer from './components/Footer';
import AddProject from './components/addProject';
import UpdateProject from './components/updateProject'
import DeleteProject from './components/deleteProject'

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getAllProjects} from './actions/projects';

export class App extends Component {

  componentDidMount() {
    this.props.getAllProjects();
  }

  render() {
    return (
      <div>
        <Router>
          <div>
            <nav className="space">
              <div className="nav-wrapper #4a148c purple darken-4">
                <a href="/" className="brand-logo center #4a148c purple darken-4">Program Dashboard</a>
                <ul id="nav-mobile" className="right #4a148c purple darken-4 hide-on-med-and-down">
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/add">Add Program</Link></li>
                  <li><Link to="/detail">Detail Editor</Link></li>
                </ul>
              </div>
            </nav>
            <Route exact path="/" component={Projectlist}/>
            <Route exact path="/add" component={AddProject}/>
            <Route exact path="/detail" component={DetailPage}/>
            <Route exact path="/update" component={UpdateProject}/>
            <Route exact path="/delete" component={DeleteProject}/>
            <Footer/>
          </div>
        </Router>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    getAllProjects: bindActionCreators(getAllProjects, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(App);
