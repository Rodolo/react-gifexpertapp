import { useState } from "react";
import PropTypes from "prop-types";

const AgregarCategoria = ({setCategories}) => {


    const [inputValue, setInputValue] = useState('');


    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddCategory = (e) => {
        e.preventDefault();

        if(inputValue.trim().length > 2){
            setCategories(cat => [inputValue, ...cat]);
            setInputValue('');
        }
   
    }


    return <form onSubmit={handleAddCategory}>
            <input id='agregarCategoriaText' 
            type="text"
            value={inputValue} 
            onChange={handleInputChange}/>
           </form>

};

AgregarCategoria.propTypes = {
    setCategories: PropTypes.func.isRequired
};



export default AgregarCategoria;

