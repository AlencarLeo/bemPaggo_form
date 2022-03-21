import React from 'react';
import { LabelForm } from './styles/LabelForm';
import { TextAreaForm } from './styles/TextAreaForm';

const TextArea = ({placeholder, id, label}) => {

  const [value, setValue] = React.useState('');

  function handleChange({target}){
    setValue(target.value)
  }

  return (
    <div className='form-input'>
      <LabelForm>
        {label}
      </LabelForm>
      
      <TextAreaForm
          id={id}
          name={id} 
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
      />
    </div>
  )
}

export default TextArea