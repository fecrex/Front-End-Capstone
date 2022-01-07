import React, {useState, forwardRef, useImperativeHandle, useCallback, useEffect} from 'react';
import {createPortal} from 'react-dom';
import FocusTrap from 'focus-trap-react';

const modalElement = document.getElementById('modal-root');

function Modal (props, ref) {
  const [isOpen, setIsOpen] = useState(false);
  const [orgFeat, setOrgFeat] = useState();
  const [relFeat, setRelFeat] = useState();
  let storing = [];
  let bool = false;

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false)
  }), [close])

  const handleEscape = useCallback(event => {
    if (event.keyCode === 27) {setIsOpen(false)}
  }, [])

  useEffect(() => {
    if (isOpen) {document.addEventListener('keydown', handleEscape, false)}
    return () => {
      document.removeEventListener('keydown', handleEscape, false)
    }
  }, [handleEscape, isOpen])



  return createPortal(
    isOpen ?
    <FocusTrap>
    <div className="modal">
      <table>
        <thead>
          <tr>
            <th>{props.original.name}</th>
            <th></th>
            <th>{props.related.name}</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>${props.original.default_price}</td>
            <td>Price</td>
            <td>${props.related.default_price}</td>
          </tr>
          {props.original.features.map(item => {
            bool = false;
            return (
              <>
              <tr>
              <td>{item.value ? item.value : 'True'}</td>
              <td>{item.feature}</td>
              {props.related.features.map(thingy => {
                if (thingy.feature === item.feature) {
                  storing.push(thingy.feature);
                  bool = true;
                  return <td> {thingy.value ? thingy.value : 'True'} </td>
                }
              })}
              {bool ? null : <td></td>}
              </tr>
              </>
            )
          })}

          {props.related.features.map(rdtwo => {
            if (!storing.includes(rdtwo.feature)) {
              return (
                <>
                  <tr>
                  <td></td>
                  <td>{rdtwo.feature}</td>
                  <td>{rdtwo.value ? rdtwo.value : 'True'}</td>
                  </tr>
                </>
              )
            }
          })}
        </tbody>
      </table>
      <button id="invis"></button>
    </div>
    </FocusTrap>: null,
    modalElement
  )
}

export default forwardRef(Modal);
