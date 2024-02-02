import React, { useState } from "react";
import { AddColumnModal } from "../ColumnModal/AddColumnModal/AddColumnModal";
import { EditColumnModal } from "../ColumnModal/EditColumnModal/EditColumnModal";

import "./AddColumnButton.css";

export const AddColumnButton = () => {
  const [modalAddColumnIsOpen, setModalAddColumnIsOpen] = useState(false);
  const [modalEditColumnIsOpen, setModalEditColumnIsOpen] = useState(false);
  

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
          submitButton="Спасибо"
        >
          <h2>Поздравляем!</h2>
          <p>Вы выиграли уникальный смартфон</p>
          
        </AddColumnModal>

        <EditColumnModal
          isOpen={modalEditColumnIsOpen}
          onClose={() => setModalEditColumnIsOpen(false)}
          submitButton="Ок"
        >
          <h2>Ваше сообщение отправлено</h2>
          <p>Мы свяжемся с вами в течение двух рабочих дней</p>
        </EditColumnModal> 

       
      </section>
    </main>
  );
};