import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProjectList from './components/Project-list';


  import { bindActionCreators } from 'redux';
  import { connect } from 'react-redux';
  import { getAllProjects } from './actions/projects';



export class App extends Component {


  componentDidMount() {
  this.props.getAllProjects();
  }


  render() {
    return (
      <div>
        <Header />
        <ProjectList />
        <Footer />
      </div>
    );
  }
}


  function mapDispatchToProps(dispatch) {
      return {
        getAllProjects: bindActionCreators(getAllProjects, dispatch)
      }
  }

export default connect(null, mapDispatchToProps) (App);
