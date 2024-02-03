import React from 'react';
import Modal from 'react-modal';
// import { ReactComponent as CloseIcon } from '../close-icon.svg';
import sprite from '../../../images/icons.svg';
import styled from 'styled-components';
import '../ColumnModal.css';

const StyledSvgClose = styled.svg`
  fill: ${props => props.theme.colors.darkTextColor};
  stroke: ${props => props.theme.colors.darkTextColor};
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 9px;
  height: 9px;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
  border: none;
  transition: background-color 0.3s ease;
`;

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
