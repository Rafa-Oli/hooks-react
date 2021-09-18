import React, { useState } from 'react';
import DataPersonal from './DataPersonal';
import DataUser from './DataUser';
import DataDelivery from './DataDelivery';
import { Typography } from '@material-ui/core';
import { FormRegisterProps } from './form-register-interface';

function FormRegister({ onSubmit, validCPF }: FormRegisterProps) {
  const [stepActual, setStepActual] = useState(0);
  function next() {
    setStepActual(stepActual + 1);
  }

  function formActual(step: number) {
    switch (step) {
      case 0:
        return <DataUser onSubmit={next} />;
      case 1:
        return <DataPersonal onSubmit={next} validCPF={validCPF} />;
      case 2:
        return <DataDelivery onSubmit={onSubmit} />;
      default:
        return <Typography>Erro </Typography>;
    }
  }

  return <>{formActual(stepActual)}</>;
}

export default FormRegister;
