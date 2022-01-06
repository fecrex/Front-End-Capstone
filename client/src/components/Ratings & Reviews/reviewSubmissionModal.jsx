import React from 'react';
import { PortalWithState } from 'react-portal';


class ReviewSubmitModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render () {
    return (
      <PortalWithState closeOnOutsideClick closeOnEsc>
        {({ openPortal, closePortal, isOpen, portal }) => (
          <React.Fragment>
            <button className="review-modal-open" onClick={openPortal}>
              Add Review
            </button>
            {portal(
              <div className="review-modal">
                <React.Fragment >
                {this.props.children}
                <button className="review-modal-close" onClick={closePortal}>Close</button>
                </React.Fragment>
              </div>
            )}
          </React.Fragment>
        )}
      </PortalWithState>
    )
  }

}

export default ReviewSubmitModal;