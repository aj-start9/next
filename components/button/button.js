import React from 'react'
import classes from './button.module.css'


const Button = (props) => {

    return (
        <button onClick={props.onSubmit}
            style={{
                backgroundColor: props.fill ? props.main_color : '#fff',
                border: props.fill ? 'none' : `1px solid ${props.main_color}`,
                ...props.style
            }}
            className={classes.main_div}>
            {props.text}
        </button>
    )
}

export default Button
