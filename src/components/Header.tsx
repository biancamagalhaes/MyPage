import * as React from 'react'
import styled from '@emotion/styled'
import background from '../assets/officeEscurecida.jpg'
import icon from'../assets/iconFront.png'
import { Link } from 'gatsby'
import { widths } from '../styles/variables'
import { getEmSize } from '../styles/mixins'
import { heights, dimensions, colors } from '../styles/variables'
import Container from './Container'

const StyledHeader = styled.header`
  background-image: url(${background});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100rem;
  padding: 0 ${dimensions.containerPadding}rem;
  height: -webkit-fill-available;
  flex-direction: column;
  justify-content: flex-end;

 @media(max-width: 425px){
  height: 100rem;
 }

`

const HeaderInner = styled(Container)`
    width: 100%;
    margin-left: 23%;
    margin-top: 16%;
    justify-content: flex-end;
    max-width: ${getEmSize(widths.lg)}em;
    transition: transform 0.75s ease, opacity 0.75s ease;
    transition-delay: 3.5s;

    @media(max-width: 425px){
     margin-top: 36%;
  }
  @media(max-width: 1280){
    margin-left: 20%;
  }
`

const Title = styled.div`
margin-left: -12vh;
h1{
  font-size: 5em;
  color: white;
  font-weight: lighter;
}
@media(max-width:425px){
  margin-top: 0;
  text-align: center;
}
`



const Icon = styled.img`
width: 42%;
margin-left: 15%;
@media(max-width: 425px){
  width: 90%;
  margin-left: 0%;
}

`;


interface HeaderProps {
  title: string
}

const Header: React.SFC<HeaderProps> = () => (
  <StyledHeader>
    <HeaderInner>
      <Icon src={icon} />
      <Title>
        <h1>A <b>Front-End</b> developer!</h1>  
      </Title>
    </HeaderInner>
  </StyledHeader>
)

export default Header
