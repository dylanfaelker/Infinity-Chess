import React from 'react'
import Button from './Button'

const Buttons = ({ buttons, onClick }) => {
    return (
        //TODO make class name
        <div className='buttons'> 
            {buttons.map((button) => (
                <Button
                    key={button.id} 
                    button={button}
                    onClick={onClick}
                />
            ))}
        </div>
    )
}

export default Buttons
