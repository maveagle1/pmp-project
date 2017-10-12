import React, { Component } from 'react';
class AddProject extends Component {

  render () {
    return (
      <div className="project">
        <div className="row">
          <form className="col s12">
            <h5 className="black-text text-lighten-4 center">Add Program</h5>
            <div className="row">
              <div className="input-field col s4 offset-s2">
                <input id="name" type="text" cerlassName="validate"/>
                <label for="name">Program Name</label>
              </div>
              <div className="input-field col s4">
                <input id="name" type="text" className="validate"/>
                <label for="name">Number of Project</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s4 offset-s2">
                <input id="name" type="text" className="validate"/>
                <label for="name">Program Manager</label>
              </div>
              <div className="input-field col s4">
                <input id="name" type="text" className="validate"/>
                <label for="name">Priority</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s4 offset-s2">
                <input id="name" type="text" className="validate"/>
                <label for="name">Status</label>
              </div>
              <div className="input-field col s4">
                <input id="name" type="text" className="validate"/>
                <label for="name">Percent Complete</label>
              </div>
            </div>
            <button class="btn waves-effect waves-light black"
              type="submit" name="action">Add
            </button>
          </form>
        </div>
      </div>
    )
  }
}
export default AddProject;
