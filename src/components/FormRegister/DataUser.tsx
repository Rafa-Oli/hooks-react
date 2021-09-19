import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import useDataUser from '../../hook/useDataUser';
import useError from '../../hook/useError';
import { FormRegisterProps, Error } from './form-register-interface';

function DataUser({ onSubmit, validations }: FormRegisterProps) {
  const { email, password, setEmail, setPassword } = useDataUser();
  const { errors, setErrors } = useError();

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

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(email, password);
        if (isSubmit()) onSubmit({ email, password });
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        variant='outlined'
        margin='normal'
        fullWidth
        required
        id='email'
        label='Email'
        type='email'
      />
      <TextField
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        variant='outlined'
        margin='normal'
        error={!errors.password.valid}
        helperText={errors.password.text}
        fullWidth
        onBlur={validFields}
        name='password'
        required
        id='password'
        label='Password'
        type='password'
      />
      <Button type='submit' variant='contained' color='primary'>
        Next
      </Button>
    </form>
  );
}

export default DataUser;
