import { render, screen } from '@testing-library/react'
import TextArea from './TextArea'

describe('Button Component', () =>{
  test('contém o textarea', ()=>{
    render(<TextArea />);
    
    const textarea = screen.getByDisplayValue('')
    expect(textarea).toBeInTheDocument();
  })
})