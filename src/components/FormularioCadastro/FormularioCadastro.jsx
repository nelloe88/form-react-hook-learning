import React, { useState, useEffect } from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";
import DadosEntrega from "./DadosEntrega";
import { Typography, Stepper, Step, StepLabel } from "@material-ui/core";

function FormularioCadastro({aoEnviar, validacoes}) {

  const [etapaAtual, setetapaAtual] = useState(0);
  const [dadosColetados, setDados] = useState({});
  
  const formulario = [
    <DadosUsuario aoEnviar={coletarDados} />,
    <DadosPessoais aoEnviar={coletarDados} />,
    <DadosEntrega aoEnviar={coletarDados} />,
    <Typography variant="h5">Obrigado por se cadastrar </Typography> 
  ];

  useEffect(()=>{
    if(etapaAtual === formulario.length-1){
      aoEnviar(dadosColetados);
    }
    
  })

  function coletarDados(dados){
    setDados({...dadosColetados, ...dados});
    proximo();
  }
  
  function proximo(){
    setetapaAtual(etapaAtual + 1);
  }

/* function formularioAtual(etapa){
      switch(etapa){
      case 0:
        return <DadosUsuario aoEnviar={proximo} />;
      case 1:
        return <DadosPessoais aoEnviar={proximo} validarCPF={validarCPF}/>;
      case 2:
        return <DadosEntrega aoEnviar={aoEnviar} />;
      default:
        return <Typography> "Erro" </Typography>;
    }
  }*/

  return (
    <>
      <Stepper activeStep={etapaAtual}>
        <Step><StepLabel>Login</StepLabel></Step>
        <Step><StepLabel>Pessoal</StepLabel></Step>
        <Step><StepLabel>Entrega</StepLabel></Step>
        <Step><StepLabel>Finalização</StepLabel></Step>
      </Stepper>

      {formulario[etapaAtual]}
      
    </>
  );



}
//<DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF}/>
//<DadosUsuario/>
//<DadosEntrega/>
export default FormularioCadastro;
