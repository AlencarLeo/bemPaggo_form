import styled from "styled-components";

export const ButtonSubmit = styled.button`
  background-color: var(--color6);
  color: var(--color4);
  text-transform: uppercase;
  font-weight: 700;
  width: 90px;
  height: 30px;
  border-radius: .5rem;
  font-size: var(--fsize3);
  letter-spacing: 2px;
  font-family: var(--font2);
  cursor: pointer;
  transition: .3s ease-in-out;

  &:hover{
    transform: scale(1.05);
    background-color: red;
  }
`