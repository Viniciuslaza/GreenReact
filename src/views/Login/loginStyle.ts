import { Button, Col, Image, Input, Row } from 'antd'
import styled from 'styled-components'


export const PrincipalRow = styled(Row)`
      height: 100vh;
`

export const ImageLogin = styled(Image)`
    &&&{
      height: 100vh;
    }
`

export const ColMain = styled(Col)`
     justify-content: center;
     display: flex;
     align-items: center;
`

export const DivInside = styled.div`
     width: 45%;
`

export const ImageIcon = styled(Image)`
     &&&{
      height: 10vh;
    }
`

export const InputEmail = styled(Input)`
      margin-top: 1rem;
      border-color:#306808;
   &&&{
       &:hover {
            border-color: #B3CE4E;
            outline: 0;
            -webkit-box-shadow: 0 0 0 0.5px #B3CE4E;
            box-shadow: 0 0 0 0.5px #B3CE4E; 
       }
      }
`

export const InputPassword = styled(Input.Password)`
      margin-top: 0.8rem;
      &&&{
       &:hover {
            border-color: #B3CE4E;
            outline: 0;
            -webkit-box-shadow: 0 0 0 0.5px #B3CE4E;
            box-shadow: 0 0 0 0.5px #B3CE4E; 
       }
      }
`

export const ButtonLogin = styled(Button)`
      margin-top: 15px;
      width: 100%;
      margin-bottom: 10px;
      background: #306808;
      &&&{
      &:hover {
        background: #B3CE4E; 
      }
    }
     
`

export const ButtonSignUp = styled(Button)`
      margin-top: 75px;
      width: 100%;
      margin-bottom: 10px;
      &&&{
      &:hover {
            border-color: #B3CE4E;
            color: #B3CE4E;
      }
}
`