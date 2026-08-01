import React from 'react'

const ActionButton = (props) => {
    const { text, classes, action, ...otherProps } = props
    return (
        <button
        className={classes}
        onClick={action}
        >
            {text}
        </button>
    )
}

export default ActionButton