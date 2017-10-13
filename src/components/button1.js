import React, { Component } from 'react';
import { deleteRow } from '../actions/projects';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Button extends Component {


  onSubmit = (e) => {
    e.preventDefault();
    this.props.deleteRow(this.state);
    this.props.history.push("/");
  }

    onDelete = (id) => {
              this.props.deleteRow(this.props.id)
          }

    onChange = () => {
      if (value === 'delete') onDelete(id)
    }

  render () {
    return (
      <div>
        <div>
          <ul>
            <li class="waves-effect waves-light black
              onClick value = 'delete'
              onChange">
              <a href="http://localhost:3000/delete">
                <i class="material-icons">delete</i></a></li>
            <li class="waves-effect waves-light black">
              <a href="http://localhost:3000/update">
                <i class="material-icons">update</i></a></li>
          </ul>
        </div>
      </div>
    )
  }
}

function matchDispatchToProps(dispatch){
  return {
    addToProject: bindActionCreators(deleteRow, dispatch)
  }
}

export default connect(null, matchDispatchToProps)(Button);
