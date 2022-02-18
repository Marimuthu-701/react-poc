import React from "react";

const Input = ({type = 'text', name, className, placeholder, onChange, ...props}) => {
    return <input 
        className={`form-control ${className}`}
        type={type} 
        placeholder={placeholder}
        name={name}
        onChange={onChange}
        {...props}
    />
}

export default Input;