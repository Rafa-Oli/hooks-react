import { Button, TextField } from '@material-ui/core';
import React from 'react';
import { FormRegisterProps } from './form-register-interface';

function DataUser({ onSubmit }: FormRegisterProps) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <TextField
        variant='outlined'
        margin='normal'
        fullWidth
        required
        id='email'
        label='Email'
        type='email'
      />
      <TextField
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
