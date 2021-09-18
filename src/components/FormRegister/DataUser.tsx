import { Button, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import { FormRegisterProps } from './form-register-interface';

function DataUser({ onSubmit }: FormRegisterProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({ email, password });
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
        fullWidth
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
