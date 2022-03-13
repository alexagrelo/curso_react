import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setinputValue] = useState('');

    const handleInputChange = (e) => {
        setinputValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(inputValue !== undefined && inputValue.trim().length > 2 ) { 
            setCategories (cats => [inputValue.trim(), ...cats]);
            setinputValue('');            
        }

    }

    return (       
        <form onSubmit={ handleSubmit }>
            <input
            onChange={ handleInputChange }
            placeholder="Introduzca categoría"
            type="text"
            value={ inputValue }
            />
        </form>
    )

    
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}