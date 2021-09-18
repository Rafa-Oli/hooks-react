import React, { useState } from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';
import { FormRegisterProps, Error } from './form-register-interface';

function DataPersonal({ onSubmit, validations }: FormRegisterProps) {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [cpf, setCpf] = useState('');
  const [promotions, setPromotions] = useState(true);
  const [news, setNews] = useState(false);
  const [errors, setErrors] = useState<Error>({
    cpf: { valid: true, text: '' },
  });

  function validFields(event: any) {
    const { name, value } = event.target;
    const newState = { ...errors };
    newState[name] = validations[name](value);
    setErrors(newState);
    console.log(newState);
  }

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit({ name, surname, cpf, news, promotions });
      }}
    >
      <TextField
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
        id='name'
        label='Name'
        variant='outlined'
        margin='normal'
        fullWidth
      />
      <TextField
        value={surname}
        onChange={(event) => {
          setSurname(event.target.value);
        }}
        id='surname'
        label='Surname'
        variant='outlined'
        margin='normal'
        fullWidth
      />
      <TextField
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        onBlur={validFields}
        error={!errors.cpf.valid}
        helperText={errors.cpf.text}
        id='CPF'
        name='cpf'
        label='CPF'
        variant='outlined'
        margin='normal'
        fullWidth
      />

      <FormControlLabel
        label='Promotions'
        control={
          <Switch
            checked={promotions}
            onChange={(event) => {
              setPromotions(event.target.checked);
            }}
            name='promotions'
            color='primary'
          />
        }
      />

      <FormControlLabel
        label='News'
        control={
          <Switch
            checked={news}
            onChange={(event) => {
              setNews(event.target.checked);
            }}
            name='news'
            color='primary'
          />
        }
      />

      <Button type='submit' variant='contained' color='primary'>
        Next
      </Button>
    </form>
  );
}

export default DataPersonal;
