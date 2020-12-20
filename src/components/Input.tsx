import React from 'react'
import styled from 'styled-components'

interface InputProps {
    placeholder: string
}
const DefaultInput = styled.input`
  width: 100%;
  height: 32px;
  border-radius: 2px;
  border: 1px solid #838383;
  padding-left: 10px;
  color: #838383;
  &::placeholder{
    color: #838383;
  }
`
const Input: React.FC<InputProps> = ({placeholder}) => {
    return(
        <DefaultInput type="text" placeholder={placeholder}/>
    )
}
export default Input