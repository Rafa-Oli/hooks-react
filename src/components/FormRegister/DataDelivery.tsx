import { TextField, Button } from '@material-ui/core';
import React from 'react';
import { FormRegisterProps } from './form-register-interface';
import useDataDelivery from '../../hook/useDataDelivery';

function DataDelivery({ onSubmit }: FormRegisterProps) {
  const {
    address,
    cep,
    number,
    city,
    state,
    setAddress,
    setCep,
    setCity,
    setNumber,
    setState,
  } = useDataDelivery();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({ cep, address, number, state, city });
      }}
    >
      <TextField
        value={cep}
        onChange={(event) => {
          setCep(event.target.value);
        }}
        variant='outlined'
        margin='normal'
        fullWidth
        id='cep'
        label='CEP'
        type='number'
      />
      <TextField
        value={address}
        onChange={(event) => {
          setAddress(event.target.value);
        }}
        variant='outlined'
        margin='normal'
        fullWidth
        id='address'
        label='Address'
        type='text'
      />
      <TextField
        value={number}
        onChange={(event) => {
          setNumber(event.target.value);
        }}
        variant='outlined'
        margin='normal'
        fullWidth
        id='number'
        label='Number'
        type='number'
      />
      <TextField
        value={state}
        onChange={(event) => {
          setState(event.target.value);
        }}
        variant='outlined'
        margin='normal'
        fullWidth
        id='state'
        label='State'
        type='text'
      />
      <TextField
        value={city}
        onChange={(event) => {
          setCity(event.target.value);
        }}
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
