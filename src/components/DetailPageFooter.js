import React, { Component } from 'react';

class DetailPageFooter extends Component {

  render () {
    return (
      <div>
        <row>
          <footer class="page-footer white">
            <a class="grey-text text-lighten-4" ></a>
          </footer>
        </row>
        <div className="container">
          <div className="row">
              <div className="col s4">
                  <button className="btn btn-large black">Delete Program Element</button>
              </div>
              <div className="col s4">
                <button className="btn btn-large black">Update Program Element</button>
              </div>
              <div className="col s4">
                  <button className="btn btn-large black">Add Program Element</button>
              </div>
            </div>
          </div>
      </div>
    )
  }
}
export default DetailPageFooter;
