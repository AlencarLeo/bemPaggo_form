import React from "react";
import './App.css';
import Amount from "./components/Amount";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox";
import { TitleForm } from "./components/styles/TitleForm";
import TextArea from "./components/TextArea";
import bghero from "./bghero.png"

function App() {
  return (
    <div className="App">

      <div className="frontEnd-desafio">
        
        <img src={bghero} alt="background" className="bg-hero"/>
        
        <TitleForm>Formulário <br/> para compra de <br/><strong>Pacote de adesivos</strong></TitleForm>
        
        <form className="form">
          <Checkbox id='sticker' label='Quais adesivos:' />      
          <Amount id='amount' label='Quantos adesivos de cada?'/>
          <TextArea label='Observações:' placeholder='Alguma dúvida? Recado?' id='feedbackForm' />
          <Button label='enviar' id='submitBtn'/>
        </form>
      
      </div>

    </div>
  );
}

export default App;
