import React from "react";

const Label = ({name, className, htmlFor}) => {
    return   <label htmlFor={htmlFor} className={`form-label ${className}`}>{name}</label>
}

export default Label;