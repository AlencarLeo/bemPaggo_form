import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Checkbox from './Checkbox'

describe('Checkbox Component', () =>{
  test('Possui as checkbox no documento', ()=>{

    render(<Checkbox />);
    
    screen.getAllByRole('checkbox').forEach((checkbox)=>{
      expect(checkbox).toBeInTheDocument();
    })
    
  })

  test('Ao clique troca booleano', ()=>{
    render(<Checkbox />);
    
    const checkbox1 = screen.getByRole('checkbox', {
      name: 'react',
    });

    userEvent.click(checkbox1)
    expect(screen.getByDisplayValue('react', {
      checked: true
    })).toBeInTheDocument();

    const checkbox2 = screen.getByRole('checkbox', {
      name: 'vue',
    });

    userEvent.click(checkbox2)
    expect(screen.getByDisplayValue('vue', {
      checked: true
    })).toBeInTheDocument();

    const checkbox3 = screen.getByRole('checkbox', {
      name: 'angular',
    });

    userEvent.click(checkbox3)
    expect(screen.getByDisplayValue('angular', {
      checked: true
    })).toBeInTheDocument();
  })
})