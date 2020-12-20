import React from "react";
import styled from 'styled-components'
import {colorMain} from "../constants";
const ButtonDefault = styled.button`
  width: 100%;
  background: ${colorMain};
  border-radius: 4px;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  outline-style: none;
  &:active{
    opacity: 0.8;
  }
`
const Button: React.FC = ({children}) => {
    return(
        <ButtonDefault>
            {children}
        </ButtonDefault>
    )
}
export default Button