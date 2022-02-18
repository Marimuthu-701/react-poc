import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faCoffee } from '@fortawesome/free-solid-svg-icons';

const Button = ({type="button", name, className = 'btn-primary' , processing = false, ...props}) => {
    return (
            <button type={type} className={`btn ${className}`} {...props}>
                {processing && <FontAwesomeIcon icon={faCoffee} />}
                {name}
            </button>
    );
}

export default Button;