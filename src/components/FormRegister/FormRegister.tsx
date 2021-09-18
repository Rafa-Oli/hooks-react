import React, { useState } from 'react';
import DataPersonal from './DataPersonal';
import DataUser from './DataUser';
import DataDelivery from './DataDelivery';
import { Typography } from '@material-ui/core';
import { FormRegisterProps } from './form-register-interface';

function FormRegister({ onSubmit, validCPF }: FormRegisterProps) {
  const [stepActual, setStepActual] = useState(0);
  function formActual(step: number) {
    switch (step) {
      case 0:
        return <DataUser />;
      case 1:
        return <DataPersonal onSubmit={onSubmit} validCPF={validCPF} />;
      case 2:
        return <DataDelivery />;
      default:
        return <Typography>Erro </Typography>;
    }
  }

  return <>{formActual(stepActual)}</>;
}

export default FormRegister;
