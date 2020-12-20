import React, {useState} from 'react'
import styled from 'styled-components'
import Button from '../Button';
import Input from "../Input";

const Block = styled.div`
  cursor: auto;
  position: absolute;
  top: 30px;
  left: 30px;
  width: 300px;
  padding: 10px 20px;
  background-color: #fff;
  border-radius: 5px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  outline: none;
  max-height: 150px;
`
const Circles = styled.div`
  display: flex;
  margin-top: 15px;
  margin-bottom: 15px;
`
const Circle = styled.div`
    cursor: pointer;
    margin-right: 5px;
    display: block;
    width: 20px;
    height: 20px;
    background: ${props => props.color};
    border-radius: 100%;
    border: 2px solid transparent;
    &.active {
      border: 2px solid darkslategrey;
    }
`
const Close = styled.div`
  cursor: pointer;
  i {
    opacity: 1;
    padding: 2px;
    font-size: 20px;
    position: absolute;
    top: -10px;
    right: -25px;
    background-color: #838383;
    border-radius: 50%;
    color: #fff;
    &:active{
      color: red;
    }
  }
`
type C = {
    id: string,
    hex: string,
    name: string
}
interface IModal {
    toggleModal: () => void,
    colors: Array<C>
}
const Modal: React.FC<IModal> = ({toggleModal, colors}) => {
    const [activeColor, setActiveColor] = useState<number>(0)

    const onActiveColor = (index: number): void => {
        setActiveColor(index)
    }
    return(
        <Block>
            <Input placeholder="Название папки"/>
            <Circles>
                {colors.map((color, i) => (
                    <Circle
                        onClick={() => onActiveColor(i)}
                        color={color.hex} className={activeColor === i ? 'active' : ''}/>
                ))}
            </Circles>
            <Button>Добавить</Button>
            <Close onClick={toggleModal}>
                <i className="material-icons">close</i>
            </Close>
        </Block>
    )
}
export default Modal