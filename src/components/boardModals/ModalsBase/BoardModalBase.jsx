import React, { useState } from 'react'
import Modal from 'react-modal'
import sprite from 'images/icons.svg'
import './BoardModalBase.css'

export const BoardModalBase = ({ isModalOpen, title, onCloseModal, action }) => {
    const [currentTitle, setCurrentTitle] = useState(title)

    function handleChange(event) {
        setCurrentTitle(event.target.value)
    }

    function close() {
        onCloseModal()
        setCurrentTitle('')
    }

    return (
        <Modal
            isOpen={isModalOpen}
            overlayClassName={'modal-overlay'}
            className={'modal-content'}
            onRequestClose={onCloseModal}
            ariaHideApp={false}
        >
            <button className="modal-close-button" onClick={close}>
                <svg><use xlinkHref={`${sprite}#icon-x-close`}></use></svg>
            </button>
            <p className="modal-header">{action==='add' ? 'New' : 'Edit'} board</p>
            <form className="modal-form">
                <input
                    id="title"
                    placeholder='Title'
                    value={currentTitle}
                    onChange={(event) => handleChange(event)}
                    className='title-input'
                    required
                />
                <p className="icons-header">Icons</p>
                <label className="icons-list">
                    <input type="radio" id="radio-1"></input>
                    <label htmlFor="radio-1">
                        <svg aria-hidden="true"><use xlinkHref={`${sprite}#icon-Project`}></use></svg>
                    </label>

                    <input type="radio" id="radio-2"></input>
                    <label htmlFor="radio-2">
                        <svg aria-hidden="true"><use xlinkHref={`${sprite}#icon-star-04`}></use></svg>
                    </label>

                    <input type="radio" id="radio-3"></input>
                    <label htmlFor="radio-3">
                        <svg aria-hidden="true"><use xlinkHref={`${sprite}#icon-loading-03`}></use></svg>
                    </label>

                    <input type="radio" id="radio-4"></input>
                    <label htmlFor="radio-4">
                        <svg aria-hidden="true"><use xlinkHref={`${sprite}#icon-puzzle-piece-02`}></use></svg>
                    </label>

                    <input type="radio" id="radio-5"></input>
                    <label htmlFor="radio-5">
                        <svg aria-hidden="true"><use xlinkHref={`${sprite}#icon-container`}></use></svg>
                    </label>

                    <input type="radio" id="radio-6"></input>
                    <label htmlFor="radio-6">
                        <svg aria-hidden="true"><use xlinkHref={`${sprite}#icon-lightning-02`}></use></svg>
                    </label>

                    <input type="radio" id="radio-7"></input>
                    <label htmlFor="radio-7">
                        <svg aria-hidden="true"><use xlinkHref={`${sprite}#icon-colors`}></use></svg>
                    </label>

                    <input type="radio" id="radio-8"></input>
                    <label htmlFor="radio-8">
                        <svg aria-hidden="true"><use xlinkHref={`${sprite}#icon-hexagon-01`}></use></svg>
                    </label>
                </label>

                <button className='submit-button' type="submit">{action==='add' ? 'Create' : 'Edit'}</button>
            </form>
        </Modal>
    )
  }