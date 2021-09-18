import React, { useState } from 'react';
import DataPersonal from './DataPersonal';
import DataUser from './DataUser';
import DataDelivery from './DataDelivery';
import { FormRegisterProps } from './form-register-interface';

function FormRegister({ onSubmit, validCPF }: FormRegisterProps) {
  const [stepActual, setStepActual] = useState(0);
  const forms = [
    <DataUser onSubmit={next} />,
    <DataPersonal onSubmit={next} validCPF={validCPF} />,
    <DataDelivery onSubmit={onSubmit} />,
  ];

  function next() {
    setStepActual(stepActual + 1);
  }

  return <>{forms[stepActual]}</>;
}

export default FormRegister;
