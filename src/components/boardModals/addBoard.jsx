import React, { useState } from 'react'
import { AddBoardButton } from './addBoardButton/addBoardButton'
import { BoardModalBase } from './ModalsBase/BoardModalBase'

export const AddBoard = () => {
    const [isModalOpen, setOpenModal] = useState(false)

    function CloseModal() {
        setOpenModal(false)
    }

    function OpenModal() {
        setOpenModal(true)
    }

    return (
        <>
            <AddBoardButton onClick={OpenModal} />
            <BoardModalBase isModalOpen={isModalOpen} title={''} onCloseModal={CloseModal} action={'add'}/>
        </>
    )
}