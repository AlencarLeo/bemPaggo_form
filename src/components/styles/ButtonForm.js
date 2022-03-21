import styled from "styled-components";

export const ButtonForm = styled.button`
  background-color: var(--color6);
  color: var(--color4);
  text-transform: uppercase;
  font-weight: 400;
  width: 30px;
  height: 30px;
  border-radius: .5rem;
  cursor: pointer;
  font-size: 30px;
  transition: .3s ease-in-out;

  &:hover{
    transform: scale(1.05);
  }
`