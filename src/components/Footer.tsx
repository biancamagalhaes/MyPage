import React from 'react';
import styled from '@emotion/styled';
import Container from './Container';


const FooterContainer = styled(Container)`
margin-top: 10%;
background-color: #8080801c;
display: table-footer-group;
justify-content: flex-end;

h4{
  margin-bottom: 0%;
  width: 100rem;
  text-align: center;
  margin-left:0;
  margin-left: -9%;
}

@media(max-width: 425px){
  h4{
    margin-left: 0%;
  }
}
`;


const Footer = () => (
  <FooterContainer>
        <h4>Copyright © 2019. Made by Bianca!</h4>
  </FooterContainer>
)

export default Footer
