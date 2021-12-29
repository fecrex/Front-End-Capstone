import React, {forwardRef, useImperative} from 'react';
import {createPortal} from 'react-dom';

const modalElement = document.getElementById('modal-root');

function Modal (props, ref) {
  return createPortal(
    <div className="modal">
      hello
    </div>,
    modalElement
  )
}

export default forwardRef(Modal);
