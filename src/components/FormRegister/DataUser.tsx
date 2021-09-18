import { Button, TextField } from '@material-ui/core';
import React from 'react';

function DataUser() {
  return (
    <form>
      <TextField
        variant='outlined'
        margin='normal'
        fullWidth
        id='email'
        label='Email'
        type='email'
      />
      <TextField
        variant='outlined'
        margin='normal'
        fullWidth
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
