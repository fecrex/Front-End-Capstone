import React, { useState, useImperativeHandle, forwardRef, useEffect, useCallback } from 'react';
import { createPortal } from 'react-dom';
import FocusTrap from 'focus-trap-react';

const aModal = document.getElementById('question-modal');

const AnswerModal = function({ children, fade = false, defaultOpened = false }, ref) {
  const [isOpen, setIsOpen] = useState(defaultOpened);

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false)
  }), [close])

  const handleEscape = useCallback(event => {
    if (event.keyCode === 27) {
      setIsOpen(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEscape, false);
    }
    return () => {
      document.removeEventListener('keydown', handleEscape, false);
    }
  }, [handleEscape, isOpen])


  return createPortal(
  isOpen ? (
    <FocusTrap >
    <div className={`modal ${fade ? 'modal-fade' : ''}`}>
      <div className="modal-overlay" onClick={close} />
        <span role="button" className="modal-close" aria-label="close" onClick={() => close()}>
          x
        </span>
      <div className="modal-body">{children}</div>
    </div>
     </FocusTrap>
  )
    : null,
  aModal)

}

export default forwardRef(AnswerModal);