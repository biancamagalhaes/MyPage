import * as react from 'react'
import styled from '@emotion/styled'
import Container from './Container'
import foto from '../assets/bianca.png'

const DivulgacaoContainer = styled.div`
width: 29%;
margin-left: 9%;
margin-top: 10%;
margin-right: 5%;
`;

const Foto = styled.img`
width: 60em;
margin-bottom: 5%;
`;

const Contato = styled.div`
text-align: center;
font-size: 30px;
margin-top: -20%;
margin-bottom: 25%;
h4{
    font-weight: 100;
}
`;

const Redes = styled.div``;

const Divulgacao = () => (
    <DivulgacaoContainer>
      <Foto src={foto}/>
      <Contato>
        <h1>Bianca Magalhães</h1>
        <h4>bianca.magalhaes2610@gmail.com</h4> 
        <h4>+55 71 9 9959-4330</h4>
      </Contato> 
      <Redes>
      </Redes>
    </DivulgacaoContainer>
  )

  export default Divulgacao