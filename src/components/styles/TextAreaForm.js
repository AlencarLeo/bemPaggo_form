import styled from "styled-components";

export const TextAreaForm = styled.textarea`
  box-sizing: border-box;
  background-color: var(--color3);
  border: 2px solid var(--color5);
  height: 100px;
  width: 340px;
  resize: none;
  border-radius: 5px;
  padding: 10px 15px;
  outline: none;
  display: block;

  &:focus{
    background-color: var(--color7);
    border: 2px solid var(--color8);
  }
`