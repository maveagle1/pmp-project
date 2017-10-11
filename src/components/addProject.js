import React, { Component } from 'react';
class AddProject extends Component {

  render () {
    return (
      <div className="project">
        <div className="row">
          <form className="col s12">
            <h5 className="grey-text text-lighten-4 center">Editor</h5>
            <div className="row">
              <div className="input-field col s4 offset-s2">
                <input id="last_name" type="text" cerlassName="validate"/>
                <label for="last_name">Program Name</label>
              </div>
              <div className="input-field col s4">
                <input id="last_name" type="text" className="validate"/>
                <label for="last_name">Number of Project</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s4 offset-s2">
                <input id="last_name" type="text" className="validate"/>
                <label for="last_name">Program Manager</label>
              </div>
              <div className="input-field col s4">
                <input id="last_name" type="text" className="validate"/>
                <label for="last_name">Priority</label>
              </div>
            </div>
            <div className="row">
              <div className="input-field col s4 offset-s2">
                <input id="last_name" type="text" className="validate"/>
                <label for="last_name">Status</label>
              </div>
              <div className="input-field col s4">
                <input id="last_name" type="text" className="validate"/>
                <label for="last_name">Percent Complete</label>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
export default AddProject;
