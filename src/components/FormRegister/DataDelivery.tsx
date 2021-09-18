import { TextField, Button } from '@material-ui/core';
import React from 'react';
import { FormRegisterProps } from './form-register-interface';

function DataDelivery({ onSubmit }: FormRegisterProps) {
  return (
    <form>
      <TextField
        variant='outlined'
        margin='normal'
        fullWidth
        id='cep'
        label='CEP'
        type='number'
      />
      <TextField
        variant='outlined'
        margin='normal'
        fullWidth
        id='address'
        label='Address'
        type='text'
      />
      <TextField
        variant='outlined'
        margin='normal'
        fullWidth
        id='number'
        label='Number'
        type='number'
      />
      <TextField
        variant='outlined'
        margin='normal'
        fullWidth
        id='state'
        label='State'
        type='text'
      />
      <TextField
        variant='outlined'
        margin='normal'
        fullWidth
        id='city'
        label='City'
        type='text'
      />
      <Button type='submit' variant='contained' color='primary' fullWidth>
        Finish Registration
      </Button>
    </form>
  );
}
export default DataDelivery;
