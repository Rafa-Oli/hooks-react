import React, { useContext } from 'react';
import { TextField, Button, Switch, FormControlLabel } from '@material-ui/core';
import { FormRegisterProps, Error } from './form-register-interface';
import useDataPersonal from '../../hook/useDataPersonal';
import useError from '../../hook/useError';
import ValidationsRegister from '../../contexts/validations-register';

function DataPersonal({ onSubmit }: FormRegisterProps) {
  const {
    cpf,
    name,
    news,
    surname,
    promotions,
    setCpf,
    setName,
    setNews,
    setPromotions,
    setSurname,
  } = useDataPersonal();

  const validations = useContext(ValidationsRegister);
  const { errors, validFields, isSubmit } = useError(validations);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (isSubmit()) onSubmit({ name, surname, cpf, news, promotions });
      }}
    >
      <TextField
        value={name}
        onChange={(event) => {
          setName(event.target.value);
        }}
        onBlur={validFields}
        error={!errors.name.valid}
        helperText={errors.name.text}
        id='name'
        name='name'
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
