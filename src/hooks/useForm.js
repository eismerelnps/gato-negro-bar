import { editProduct } from "@/actions/product";
import { useState } from "react"
import { useDispatch } from "react-redux";
/*

handle input change receives as parameter a event
desectructured as 'target' and 
set a new value to the state 


returns a array of values
  1st: State value
  2nd: a function for changing the state
*/
export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);
  const dispatch = useDispatch()

  const reset = () => {
    setValues(initialState);
  };

  const handleInputChange = ({ target }) => {
    const value = target.type === "checkbox" ? target.checked : target.value;
    
    setValues({
      ...values,
      [target.name]: value,
     
    });
    dispatch( editProduct([target.name], value ))
  };

  return [values, handleInputChange, reset];
};
