import React, { useEffect, useState } from 'react';
import DataPersonal from './DataPersonal';
import DataUser from './DataUser';
import DataDelivery from './DataDelivery';
import { FormRegisterProps } from './form-register-interface';

function FormRegister({ onSubmit, validCPF }: FormRegisterProps) {
  const [stepActual, setStepActual] = useState(0);
  const [dataCollected, setDataCollected] = useState({});

  useEffect(() => {
    console.log(dataCollected);
  });

  const forms = [
    <DataUser onSubmit={collectData} />,
    <DataPersonal onSubmit={collectData} validCPF={validCPF} />,
    <DataDelivery onSubmit={collectData} />,
  ];

  function collectData(data: any) {
    setDataCollected({ ...dataCollected, ...data });
    next();
  }
  function next() {
    setStepActual(stepActual + 1);
  }

  return <>{forms[stepActual]}</>;
}

export default FormRegister;
