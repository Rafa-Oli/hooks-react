import React, { useEffect, useState } from 'react';
import DataPersonal from './DataPersonal';
import DataUser from './DataUser';
import DataDelivery from './DataDelivery';
import { FormRegisterProps } from './form-register-interface';
import { Step, StepLabel, Stepper, Typography } from '@material-ui/core';

function FormRegister({ onSubmit, validations }: FormRegisterProps) {
  const [stepActual, setStepActual] = useState(0);
  const [dataCollected, setDataCollected] = useState({});
  const forms = [
    <DataUser onSubmit={collectData} validations={validations} />,
    <DataPersonal onSubmit={collectData} validations={validations} />,
    <DataDelivery onSubmit={collectData} validations={validations} />,
    <Typography variant={'h5'}>Thank you for registering!</Typography>,
  ];

  useEffect(() => {
    stepActual === forms.length - 1 ?? onSubmit(dataCollected);
  });

  function collectData(data: any) {
    setDataCollected({ ...dataCollected, ...data });
    console.log(dataCollected);
    next();
  }
  function next() {
    setStepActual(stepActual + 1);
  }

  return (
    <>
      <Stepper activeStep={stepActual}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Personal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Delivery</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalization</StepLabel>
        </Step>
      </Stepper>
      {forms[stepActual]}
    </>
  );
}

export default FormRegister;
