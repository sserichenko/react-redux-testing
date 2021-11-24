import React from 'react';
import PropTypes from 'prop-types';
import "./button.scss"

const Button = (props) => {
    const {buttonText, emitEvent} = props;

    const submitEvent = () => {
        if(emitEvent) {
            emitEvent()
        }
    }

    return (
        <button className="button" onClick={submitEvent} data-test="ButtonComponent">
            {buttonText}
        </button>
    );
};

Button.propTypes = {
    buttonText: PropTypes.string,
    emitEvent: PropTypes.func,
}

export default Button;