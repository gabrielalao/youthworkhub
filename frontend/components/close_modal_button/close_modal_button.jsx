import React from 'react';

import { connect } from 'react-redux';

import { closeThisModal } from '../../actions/modal_actions';
import { resetErrors } from '../../actions/session_actions';

class CloseModalButton extends React.Component {
  constructor(props) {
    super(props);

    this.closeModal = this.closeModal.bind(this);
  }
  closeModal(e) {
    this.props.resetErrors();
    this.props.closeModal(this.props.modalName);
  }
  render() {
    return (
      <div className='close-modal'>
        <button id='close-modal-button'
          onClick={this.closeModal}
        >X</button>
        <div className='clearfix'></div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  closeModal: (modalName) => dispatch(closeThisModal(modalName)),
  resetErrors: () => dispatch(resetErrors()),
})

export default connect(
  null,
  mapDispatchToProps
)(CloseModalButton);
