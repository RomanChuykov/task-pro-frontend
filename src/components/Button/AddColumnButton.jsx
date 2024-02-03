import React, { useState } from 'react';
import { AddColumnModal } from '../ColumnModal/AddColumnModal/AddColumnModal';
import { EditColumnModal } from '../ColumnModal/EditColumnModal/EditColumnModal';
import { Button } from 'components/Button/Button';
import sprite from '../../images/icons.svg';
import styled from 'styled-components';
import './AddColumnButton.css';

const StyledSvgWhitePlus = styled.svg`
  fill: ${props => props.theme.colors.white};
  stroke: ${props => props.theme.colors.white};
  display: flex;
  /* position: absolute; */
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  /* top: 50%;
  right: 50%;
  transform: translate(50%, -50%); */
  border: none;

  /* transition: background-color 0.3s ease; */
`;

const StyledSvgDarkPlus = styled.svg`
  fill: ${props => props.theme.colors.darkTextColor};
  stroke: ${props => props.theme.colors.darkTextColor};
  display: flex;
  /* position: absolute; */
  align-items: center;
  justify-content: center;
  width: 14px;
  height: 14px;
  /* top: 50%;
  right: 50%;
  transform: translate(50%, -50%); */
  border: none;

  /* transition: background-color 0.3s ease; */
`;

export const AddColumnButton = () => {
  const [modalAddColumnIsOpen, setModalAddColumnIsOpen] = useState(false);
  const [modalEditColumnIsOpen, setModalEditColumnIsOpen] = useState(false);

  const handlerTitleColumn = evt => {
    evt.preventDefault();
  };

  return (
    <main className="main">
      <section className="section">
        <button
          type="submit"
          className="modal-show-button"
          onClick={() => setModalAddColumnIsOpen(true)}
        >
          <span className="iconBlackWrap">
            <StyledSvgWhitePlus>
              <use xlinkHref={`${sprite}#icon-plus`}></use>
            </StyledSvgWhitePlus>
          </span>
          Add another column
        </button>

        <button
          className="modal-show-button"
          onClick={() => setModalEditColumnIsOpen(true)}
        >
          <span className="iconBlackWrap">
            <StyledSvgWhitePlus>
              <use xlinkHref={`${sprite}#icon-plus`}></use>
            </StyledSvgWhitePlus>
          </span>
          Edit Column
        </button>

        <AddColumnModal
          isOpen={modalAddColumnIsOpen}
          onClose={() => setModalAddColumnIsOpen(false)}
          submitButton="Add"
        >
          <div className="columnContainer">
            <p className="addColumn_title">Add column</p>
            <form onSubmit={handlerTitleColumn}>
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="addColumn_input"
                autoFocus
              />
              <Button
                type="submit"
                className="addColumn_btn"
                
              >
                <span className="iconWhiteWrap">
                  <StyledSvgDarkPlus>
                    <use xlinkHref={`${sprite}#icon-plus`}></use>
                  </StyledSvgDarkPlus>
                </span>
                Add
              </Button>
            </form>
          </div>

          {/* <h2>Поздравляем!</h2>
          <p>Вы выиграли уникальный смартфон</p> */}
        </AddColumnModal>

        <EditColumnModal
          isOpen={modalEditColumnIsOpen}
          onClose={() => setModalEditColumnIsOpen(false)}
          submitButton="Add"
        >
          <div className="container">
            <p className="addColumn_title">Edit column</p>
            <form onSubmit={handlerTitleColumn}>
              <input
                type="text"
                name="title"
                placeholder="To Do"
                className="addColumn_input"
                autoFocus
              />
              <Button type="submit" className="addColumn_btn">
                <span className="iconWhiteWrap">
                  <StyledSvgDarkPlus>
                    <use xlinkHref={`${sprite}#icon-plus`}></use>
                  </StyledSvgDarkPlus>
                </span>
                Add
              </Button>
            </form>
          </div>

          {/* <h2>Ваше сообщение отправлено</h2>
          <p>Мы свяжемся с вами в течение двух рабочих дней</p> */}
        </EditColumnModal>
      </section>
    </main>
  );
};
