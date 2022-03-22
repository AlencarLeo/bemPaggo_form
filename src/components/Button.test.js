import { render, screen } from '@testing-library/react'
import Button from './Button'

describe('Button Component', () =>{
  test('contém o botão de envio', ()=>{
    render(<Button />);
    
    const submitBtn = screen.getByRole('button')

    expect(submitBtn).toBeInTheDocument();
  })
})