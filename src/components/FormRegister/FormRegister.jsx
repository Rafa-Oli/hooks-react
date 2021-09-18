import React, { useState } from 'react';
import DadosPessoais from './DataPersonal';
import DadosUsuario from './DataUser';
import DadosEntrega from './DataDelivery';

function FormularioCadastro({ aoEnviar, validarCPF }) {
  return (
    <>
      <DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF} />
      <DadosUsuario />
    </>
  );
}
{/* <DadosEntrega/> */}

export default FormularioCadastro;
