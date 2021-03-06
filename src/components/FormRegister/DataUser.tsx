import { Button, TextField } from '@material-ui/core';
import React, { useContext } from 'react';
import ValidationsRegister from '../../contexts/validations-register';
import useDataUser from '../../hook/useDataUser';
import useError from '../../hook/useError';
import { FormRegisterProps } from './form-register-interface';

function DataUser({ onSubmit }: FormRegisterProps) {
  const { email, password, setEmail, setPassword } = useDataUser();

  const validations = useContext(ValidationsRegister);

  const { errors, validFields, isSubmit } = useError(validations);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
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
