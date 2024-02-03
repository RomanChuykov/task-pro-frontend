import React from 'react';
import Modal from 'react-modal';
// import { ReactComponent as CloseIcon } from '../close-icon.svg';
import sprite from '../../../images/icons.svg';
// import styled from 'styled-components';
import '../ColumnModal.css';
import {StyledSvgClose} from '../ColumnModal.styled'

// Modal.setAppElement('#root');

export const AddColumnModal = ({ isOpen, onClose, submitButton, children }) => {
  return (
    <Modal
      isOpen={isOpen}
      overlayClassName={'modal-overlay'}
      className={'modal-content'}
      closeTimeoutMS={300}
      onRequestClose={() => onClose()}
      ariaHideApp={false}
    >
      <button className="modal-close-button" onClick={() => onClose()}>
        <StyledSvgClose>
          <use xlinkHref={`${sprite}#icon-x-close`}></use>
        </StyledSvgClose>
      </button>
      {children}
      {/* {submitButton && (
        <button className="modal-submit-button" onClick={() => onClose()}>
          {submitButton}
        </button>
      )} */}
    </Modal>
  );
};
