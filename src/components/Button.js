import React from 'react'

const Button = ({ button, onClick }) => {
    return (
        //TODO make css for btn
        <button
            onClick={onClick}
            className='btn'
        >
            {button.name}
        </button>
    )
}

export default Button
