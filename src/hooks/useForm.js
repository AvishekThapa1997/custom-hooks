import { useState } from "react";

function useForm(options) {
    const [formValues,setFormValues] = useState(options);
    function handleSubmit(submitHandler) {
        return (event) => {
            event.preventDefault();
            const formData = Object.entries(formValues).reduce((cumm,curr) =>{
                    const [key,data] = curr;
                    cumm[key] = data.value;
                    return cumm;
            },{});
            submitHandler(formData)
        }
    }

    function handleInputChange(event) {
        const fieldName = event.target.name;
        const value = event.target.value;
        setFormValues((prevFormState) => ({
            ...prevFormState,
            [fieldName]:{
                ...(prevFormState[fieldName] ?? {}),
                value
            }
        }))
    }
    return {formValues,handleSubmit,handleInputChange} 
}

export default useForm;