import React, { Component } from 'react';
import { addToProject } from '../actions/projects';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



class AddProject extends Component {

  state = {
    program_name: '',
    number_of_projects: '',
    program_manager: '',
    priority: '',
    status: '',
    complete: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addToProject(this.state);
    this.props.history.push("/");
  }
  render () {
    return (
      <div className="project">
        <div className="row">
          <form className="col s12">
            <h5 className="black-text text-lighten-4 center">Add Program</h5>
            <div className="row">
              <div className="input-field col s4 offset-s2">
                <input id="name"
                  value={this.state.program_name}
                  onChange={(e) => this.setState({program_name: e.target.value})}
                  name="project_name"
                  type="text"
                  className="validate"
                />
              <label htmlFor="program_name">Program Name</label>
              </div>
              <div className="input-field col s4">
                <input id="name"
                  value={this.state.number_of_projects}
                  onChange={(e) => this.setState({number_of_projects: e.target.value})}
                  type="text"
                  className="validate"
                />
              <label htmlFor="number_of_projects">Number of Project</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s4 offset-s2">
                <input id="name"
                  value={this.state.program_manager}
                  onChange={(e) => this.setState({program_manager: e.target.value})}
                  type="text"
                  className="validate"
                />
              <label htmlFor="program_manager">Program Manager</label>
              </div>
              <div className="input-field col s4">
                <input id="name"
                  value={this.state.priority}
                  onChange={(e) => this.setState({priority: e.target.value})}
                  type="text"
                  className="validate"/>
                <label htmlFor="priority">Priority</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s4 offset-s2">
                <input id="name"
                  value={this.state.status}
                  onChange={(e) => this.setState({status: e.target.value})}
                  type="text"
                  className="validate"/>
                <label htmlFor="status">Status</label>
              </div>
              <div className="input-field col s4">
                <input id="name"
                  value={this.state.complete}
                  onChange={(e) => this.setState({complete: e.target.value})}
                  type="text"
                  className="validate"/>
                <label htmlFor="name">Percent Complete</label>
              </div>
            </div>
            <button className="btn waves-effect waves-light black"
              onClick={this.onSubmit}
              type="submit"
              name="action">Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}

function matchDispatchToProps(dispatch){
  return {
    addToProject: bindActionCreators(addToProject, dispatch)
  }
}

export default connect(null, matchDispatchToProps)(AddProject);
