import React from 'react';
import { AmountForm } from './styles/AmountForm';
import { ButtonForm } from './styles/ButtonForm';
import { LabelForm } from './styles/LabelForm';

const Amount = ({label, id}) => {

  const [value, setValue] = React.useState(0);

  function increment(e){
    e.preventDefault();
    setValue(value + 1);
  }

  function decrement(e){
    e.preventDefault();
    
    function canDecrement(){
      if(value > 0){
        return value - 1;
      }else{
        return 0;
      }
    }
    setValue(canDecrement)
  }

  function handleChange({target}){

    function canDecrement(){
      if(value >= 0){
        return +target.value;
      }else{
        return 0;
      }
    }
    setValue(canDecrement)
  }

  return (
    <div className='form-input'>
      <LabelForm>{label}</LabelForm>
      <ButtonForm onClick={decrement}>-</ButtonForm>
      <AmountForm id={id} name={id} value={value} onChange={handleChange} />
      <ButtonForm onClick={increment}>+</ButtonForm>
    </div>
  )
}

export default Amount