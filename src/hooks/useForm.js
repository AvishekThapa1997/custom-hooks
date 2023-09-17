import { useCallback, useState } from 'react';

function useForm(options) {
  const [formValues, setFormValues] = useState(options);
  const doValidations = useCallback((validations, value) => {
    const isValidationsAvailable = typeof validations !== 'undefined';
    if (!isValidationsAvailable) {
      return;
    }
    let error;
    if (typeof validations === 'object') {
      const _validations = Object.values(validations);
      for (const check of _validations) {
        const result = check(value);
        if (typeof result === 'string') {
          error = result;
          break;
        }
      }
      //   error = Object.values(validations).reduce((cumm, check) => {
      //     const result = check(value);
      //     if (typeof result === 'string') {
      //       cumm.push(result);
      //     }
      //     return cumm;
      //   }, []);
    }
    if (typeof validations === 'function') {
      const result = validations(value);
      if (typeof result === 'string') {
        error = result;
      }
    }
    return error;
  }, []);

  function handleSubmit(submitHandler) {
    return (event) => {
      event.preventDefault();
      const formEntries = Object.entries(formValues);
      const errors = formEntries.reduce((cumm, [key, data]) => {
        const error = doValidations(data.validation, data.value);
        cumm[key] = error;
        return cumm;
      }, {});
      const isAnyError = Object.keys(errors).every((key) => {
        return errors[key];
      });
      if (isAnyError) {
        const updatedFormData = formEntries.reduce((cumm, [key, data]) => {
          cumm[key] = {
            ...data,
            error: errors[key],
          };
          return cumm;
        }, {});
        setFormValues(updatedFormData);
        return;
      }
      const formData = formEntries.reduce((cumm, curr) => {
        const [key, data] = curr;
        cumm[key] = data.value;
        return cumm;
      }, {});
      submitHandler(formData);
    };
  }

  function handleInputChange(event) {
    const fieldName = event.target.name;
    const value = event.target.value;
    const validations = formValues[fieldName].validation;
    const error = doValidations(validations, value);
    setFormValues((prevFormState) => ({
      ...prevFormState,
      [fieldName]: {
        ...(prevFormState[fieldName] ?? {}),
        value,
        error:
          (Array.isArray(error) && error.length > 0) ||
          typeof error === 'string'
            ? error
            : undefined,
      },
    }));
  }
  return { formValues, handleSubmit, handleInputChange };
}

export default useForm;
