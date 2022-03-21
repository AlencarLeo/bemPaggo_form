import React from 'react';
import { LabelCheck } from './styles/LabelCheck';
import { LabelForm } from './styles/LabelForm';
import { CheckboxForm } from './styles/CheckboxForm';

const adesivosArray = ['react', 'vue', 'angular']

const Checkbox = ({id, label}) => {

  const [adesivos, setAdesivos] = React.useState([]);

  function handleChange({target}){
    if(target.checked){
      setAdesivos([...adesivos, target.value])
    } else{
      setAdesivos(adesivos.filter((adesivo) => adesivo !== target.value ))
    }
  }

  return (
    <div className='form-input'>
    <LabelForm>{label}</LabelForm>
    {
      adesivosArray.map( (adesivo, index) => (

        <LabelCheck key={index} id={id} name={id} style={{textTransform: 'capitalize'}}>
          <CheckboxForm 
            type='checkbox'
            value={adesivo}
            checked={adesivos.includes(adesivo)}
            onChange={handleChange}
          >
          </CheckboxForm>
          {adesivo}
        </LabelCheck>

      ))
    }
    </div>
  )
}

export default Checkbox