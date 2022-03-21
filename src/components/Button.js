import React from 'react';
import { ButtonSubmit } from './styles/ButtonSubmit';

const Button = ({label, id}) => {
  return (
    <ButtonSubmit id={id} name={id}>{label}</ButtonSubmit>
  )
}

export default Button