import React, { useState } from 'react'
import Modal from 'react-modal'
import sprite from 'images/icons.svg'
import './BoardModalBase.styled.css'

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

                <p className="lists-header">Icons</p>
                <label className="icons-list">
                    <input type="radio" id="icon-1"></input>
                    <label htmlFor="icon-1">
                        <svg aria-hidden="true"><use xlinkHref={`${sprite}#icon-Project`}></use></svg>
                    </label>

                    <input type="radio" id="icon-2"></input>
                    <label htmlFor="icon-2">
                        <svg aria-hidden="true"><use xlinkHref={`${sprite}#icon-star-04`}></use></svg>
                    </label>

                    <input type="radio" id="icon-3"></input>
                    <label htmlFor="icon-3">
                        <svg aria-hidden="true"><use xlinkHref={`${sprite}#icon-loading-03`}></use></svg>
                    </label>

                    <input type="radio" id="icon-4"></input>
                    <label htmlFor="icon-4">
                        <svg aria-hidden="true"><use xlinkHref={`${sprite}#icon-puzzle-piece-02`}></use></svg>
                    </label>

                    <input type="radio" id="icon-5"></input>
                    <label htmlFor="icon-5">
                        <svg aria-hidden="true"><use xlinkHref={`${sprite}#icon-container`}></use></svg>
                    </label>

                    <input type="radio" id="icon-6"></input>
                    <label htmlFor="icon-6">
                        <svg aria-hidden="true"><use xlinkHref={`${sprite}#icon-lightning-02`}></use></svg>
                    </label>

                    <input type="radio" id="icon-7"></input>
                    <label htmlFor="icon-7">
                        <svg aria-hidden="true"><use xlinkHref={`${sprite}#icon-colors`}></use></svg>
                    </label>

                    <input type="radio" id="icon-8"></input>
                    <label htmlFor="icon-8">
                        <svg aria-hidden="true"><use xlinkHref={`${sprite}#icon-hexagon-01`}></use></svg>
                    </label>
                </label>

                <p className="lists-header">Background</p>
                <label className='backs-list'>
                    <input type='radio' id='bg-1'></input>
                    <label htmlFor="bg-1">
                        <span></span>
                    </label>

                    <input type='radio' id='bg-2'></input>
                    <label htmlFor="bg-2">
                        <span></span>
                    </label>

                    <input type='radio' id='bg-3'></input>
                    <label htmlFor="bg-3">
                        <span></span>
                    </label>

                    <input type='radio' id='bg-4'></input>
                    <label htmlFor="bg-4">
                        <span></span>
                    </label>

                    <input type='radio' id='bg-5'></input>
                    <label htmlFor="bg-5">
                        <span></span>
                    </label>

                    <input type='radio' id='bg-6'></input>
                    <label htmlFor="bg-6">
                        <span></span>
                    </label>

                    <input type='radio' id='bg-7'></input>
                    <label htmlFor="bg-7">
                        <span className='back'></span>
                    </label>

                    <input type='radio' id='bg-8'></input>
                    <label htmlFor="bg-8">
                        <span></span>
                    </label>

                    <input type='radio' id='bg-9'></input>
                    <label htmlFor="bg-9">
                        <span></span>
                    </label>

                    <input type='radio' id='bg-10'></input>
                    <label htmlFor="bg-10">
                        <span></span>
                    </label>

                    <input type='radio' id='bg-11'></input>
                    <label htmlFor="bg-11">
                        <span></span>
                    </label>

                    <input type='radio' id='bg-12'></input>
                    <label htmlFor="bg-12">
                        <span></span>
                    </label>

                    <input type='radio' id='bg-13'></input>
                    <label htmlFor="bg-13">
                        <span></span>
                    </label>

                    <input type='radio' id='bg-14'></input>
                    <label htmlFor="bg-14">
                        <span></span>
                    </label>

                    <input type='radio' id='bg-15'></input>
                    <label htmlFor="bg-15">
                        <span></span>
                    </label>

                    <input type='radio' id='bg-16'></input>
                    <label htmlFor="bg-16">
                        <span></span>
                    </label>
                </label>

                <button className='submit-button' type="submit">
                    <span className='submit-icon-back'>
                        <svg className='submit-icon'><use xlinkHref={`${sprite}#icon-plus`}></use></svg>
                    </span>
                    {action==='add' ? 'Create' : 'Edit'}
                </button>
            </form>
        </Modal>
    )
  }