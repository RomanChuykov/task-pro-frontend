import React, { useState } from "react";
import { AddColumnModal } from "../ColumnModal/AddColumnModal/AddColumnModal";
import { EditColumnModal } from "../ColumnModal/EditColumnModal/EditColumnModal";
import { Button } from 'components/Button/Button';


import "./AddColumnButton.css";

export const AddColumnButton = () => {
  const [modalAddColumnIsOpen, setModalAddColumnIsOpen] = useState(false);
  const [modalEditColumnIsOpen, setModalEditColumnIsOpen] = useState(false);
  
  const handlerTitleColumn = evt => {
    evt.preventDefault();}

  return (
    <main className="main">
      <section className="section">

        <button
          className="modal-show-button"
          onClick={() => setModalAddColumnIsOpen(true)}
        >
          Add Column
        </button>

        <button
          className="modal-show-button"
          onClick={() => setModalEditColumnIsOpen(true)}
        >
       Edit Column
        </button>


        <AddColumnModal
          isOpen={modalAddColumnIsOpen}
          onClose={() => setModalAddColumnIsOpen(false)}
          submitButton="Add"
        >

<div className="container">
      <p className="addColumn_title">Add column</p>
      <form onSubmit={handlerTitleColumn}>
        <input
          type="text"
          name="title"
          placeholder="Title"
          className="addColumn_input"
          autoFocus
        />
        <Button type="submit" className="addColumn_btn">
          <span className="iconWrap">
            {/* <Icon id={'icon-plus'} className={css.icon} /> */}
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
          <span className="iconWrap">
            {/* <Icon id={'icon-plus'} className={css.icon} /> */}
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