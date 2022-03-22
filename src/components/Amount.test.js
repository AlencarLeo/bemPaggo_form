import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Amount from './Amount'

describe('Amount Component', () =>{
  test('Inicia número de adesivos com valor 0', ()=>{
    render(<Amount />);
    
    const amountSticker = screen.getByDisplayValue('0');

    expect(amountSticker).toBeInTheDocument();
    
  })

  test('contém o botão de incremento', ()=>{
    render(<Amount />);
    
    const incrementBtn = screen.getByRole('button', {
      name: '+',
    });

    expect(incrementBtn).toBeInTheDocument();
  })

  test('contém o botão de decremento', ()=>{
    render(<Amount />);
    
    const decrementBtn = screen.getByRole('button', {
      name: '-',
    });

    expect(decrementBtn).toBeInTheDocument();
  })

  test('incrementa 1 ao clique do botão "+" e logo em seguida decrementa 1 ao clique do botão "-" ', ()=>{
    render(<Amount />);
    
    const incrementBtn = screen.getByRole('button', {
      name: '+',
    });

    expect(screen.queryByDisplayValue('1')).toBeNull();
    userEvent.click(incrementBtn)
    expect(screen.getByDisplayValue('1')).toBeInTheDocument();

    const decrementBtn = screen.getByRole('button', {
      name: '-',
    });

    expect(screen.queryByDisplayValue('0')).toBeNull();
    userEvent.click(decrementBtn)
    expect(screen.getByDisplayValue('0')).toBeInTheDocument();
  })

  test('Ao clique do botão "-" o decremento de 0 será 0', ()=>{
    render(<Amount />);
    
    const decrementBtn = screen.getByRole('button', {
      name: '-',
    });

    expect(screen.queryByDisplayValue('0')).toBeTruthy();
    userEvent.click(decrementBtn)
    expect(screen.getByDisplayValue('0')).toBeInTheDocument();
  })

})