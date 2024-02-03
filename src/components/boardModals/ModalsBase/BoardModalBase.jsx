import React, { useState } from 'react'
import Modal from 'react-modal'
import sprite from 'images/icons.svg'
import './BoardModalBase.styled.css'

export const BoardModalBase = ({ isModalOpen, info, onCloseModal, action, SubmitForm }) => {
    const [title, setTitle] = useState(info.title)
    const [icon, setIcon] = useState(info.icon)
    const [background, setBackground] = useState(info.background)

    const Icons = [{value: 'icon-Project'}, {value: 'icon-star-04'}, {value: 'icon-loading-03'}, {value: 'icon-puzzle-piece-02'},
                   {value: 'icon-container'}, {value: 'icon-lightning-02'}, {value: 'icon-colors'}, {value: 'icon-hexagon-01'}]
    
    const Backgrounds = [{value: '0'}, {value: '1'}, {value: '2'}, {value: '3'},
                        {value: '4'}, {value: '5'}, {value: '6'}, {value: '7'},
                        {value: '8'}, {value: '9'}, {value: '10'}, {value: '11'},
                        {value: '12'}, {value: '13'}, {value: '14'}, {value: '15'}]

    function close() {
        onCloseModal()
        setTitle('')
    }

    function sub(event) {
        event.preventDefault()
        SubmitForm({title, icon, background})
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

            <form className="modal-form" onSubmit={event => sub(event)}>
                <input
                    id="title"
                    name='title'
                    placeholder='Title'
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                    className='title-input'
                    required
                />

                <p className="lists-header">Icons</p>
                <label className="icons-list">
                    {Icons.map((Icon, index) => (
                        <label key={index}>
                            <input 
                                type="radio" 
                                className='icon-radio' 
                                name='icon'
                                value={Icon.value}
                                onChange={() => setIcon(Icon.value)}>
                            </input>
                            <svg aria-hidden="true"><use xlinkHref={`${sprite}#${Icon.value}`}></use></svg>
                        </label>
                    ))}
                </label>

                <p className="lists-header">Background</p>
                <label className='backs-list'>
                    {Backgrounds.map((Background, index) => (
                        <label key={index}>
                            <input 
                                type="radio" 
                                className='background-radio' 
                                name='background'
                                value={Background.value}
                                onChange={() => setBackground(Background.value)}>
                            </input>
                            <span></span>
                        </label>
                    ))}
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