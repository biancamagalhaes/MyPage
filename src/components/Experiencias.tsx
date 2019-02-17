import * as react from 'react'
import styled from '@emotion/styled'
import Container from './Container'
import foto from '../assets/MarcaDizzi.png'
import icon from '../assets/connection.svg'

const ExperienciasContainer = styled.div`
a: hover{
  opacity: 0.5;
}
`;

const ExperienciasTitle = styled.div`
display:flex;
margin-bottom: 2%;
margin-left: -35%;

h1{
    display: flex;
    margin-top: -5%;
    margin-left: 3%;
    font-size: 36px;
}

img{
  width: 5em;
  margin-top: -14%;
}
`;

const Empresa = styled.div`
text-align: center;
font-size: 30px;
margin-top: -20%;
margin-bottom: 25%;
display: -webkit-inline-box;
h1{
    margin-left: 16%;
    margin-top: 6%;
}
img{
    width: 2em;
}

`;

const Experiencias = () => (
    <ExperienciasContainer>
      <ExperienciasTitle>
                <img src={icon}/>
                <h1>Experiencias</h1>
        </ExperienciasTitle>
      <a href="https://dizzi.com.br"><Empresa>
      <img src={foto}/>
        <h1>Dizzi</h1>
      </Empresa></a> 
    </ExperienciasContainer>
  )

  export default Experiencias