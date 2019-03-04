import React, {Component} from 'react';

class Modal extends {Component} {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    return (
        <div ClassName="modal" show={this.state.show} onHide={this.handleClose}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Property</h5>
                <button type="button" class="close" onClick={this.handleClose}>
                  <span>&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>Modal body text goes here.</p>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-primary">Save changes</button>
                <button type="button" className="btn btn-secondary" onClick={this.handleClose}>Close</button>
              </div>
            </div>
          </div>
        </div>
    );
  }
}

export default Modal;