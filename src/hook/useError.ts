import { useState } from 'react';
import { Error } from '../components/FormRegister/form-register-interface';

export default function useError(validations: {
  [x: string]: (arg0: any) => { valid: boolean; text: string };
}) {
  const stateInitial = createStateInitial(validations);
  const [errors, setErrors] = useState<Error>(stateInitial);

  function validFields(event: any) {
    const { name, value } = event.target;
    const newState = { ...errors };
    newState[name] = validations[name](value);
    setErrors(newState);
  }

  function isSubmit() {
    for (let field in errors) {
      if (!errors[field].valid) return false;
    }
    return true;
  }

  return { errors, validFields, isSubmit };
}

function createStateInitial(validations: {
  [x: string]: (arg0: any) => { valid: boolean; text: string };
}) {
  const stateInitial: Error = {};
  for (let field in validations) {
    stateInitial[field] = { valid: true, text: '' };
  }
  return stateInitial;
}
