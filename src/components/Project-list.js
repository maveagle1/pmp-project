import React, { Component } from 'react';
import { connect } from 'react-redux';


class Projectlist extends Component {

  render () {

     const createListItems = () => {
       return this.props.projects.map((project, i) => {
         return (
               <tr key={i}>
                 <td>{project.id}</td>
                 <td>{project.program_name}</td>
                 <td>{project.number_of_projects}</td>
                 <td>{project.program_manager}</td>
                 <td>{project.priority}</td>
                 <td>{project.status}</td>
                 <td>{project.complete}</td>
               </tr>
         )
       })
     }

    return (
      <div className="project">
          <div className="row left bold">
            <h5 className="black-text text-lighten-4 bold">Program Details</h5>
          </div>
          <table className="highlight responsive-table centered">
            <thead>
              <tr>
                  <th className="black-text text-lighten-4">id</th>
                  <th className="black-text text-lighten-4">Program Name</th>
                  <th className="black-text text-lighten-4">Number of Projects</th>
                  <th className="black-text text-lighten-4">Program Manager</th>
                  <th className="black-text text-lighten-4">Priority</th>
                  <th className="black-text text-lighten-4">Status</th>
                  <th className="black-text text-lighten-4">Complete</th>
              </tr>
            </thead>
            <tbody>
              {createListItems()}
            </tbody>
          </table>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    projects: state.projects
  };
}

export default connect(mapStateToProps, null)(Projectlist);
