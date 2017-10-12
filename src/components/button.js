import React, { Component } from 'react';


class Button extends Component {

  render () {
    return (
      <div>
        <div>
          <ul>
            <li class="waves-effect waves-light black"><a href="http://localhost:3000/delete"><i class="material-icons">delete</i></a></li>
            <li class="waves-effect waves-light black"><a href="http://localhost:3000/update"><i class="material-icons">update</i></a></li>
          </ul>
        </div>
      </div>
    )
  }
}
export default Button;
