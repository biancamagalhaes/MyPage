import React from 'react'
import styled from '@emotion/styled'



const MapContainer = styled.div`
height: 735px;
margin-top: 9%;
max-width: 1201px;
border-bottom: #707070;
z-index: 2;
    border-bottom-style: solid;
    border-bottom-width: thin;

    @media(max-width: 375px){
      margin-top: 19%;
      height: 383px;
    }
`;



const MapDecoration = styled.div`
position: absolute;
    z-index: 1;
    height: 30%;
    background-color: #F5F5F5;
    width: 141%;
    margin-left: -20%;
    margin-top: 16%;

`;

const MapTitle = styled.div`
h1{
  text-align: center;
  font-size: 35px;
  color: #02603B;
  font-family: helvetica;
}
`;

const MapSubtitle = styled.div`
p{
  text-align: center;
  font-size: 24px;
  font-family: helvetica;
  font-weight: lighter;
  color: #4D4D4D;

  @media(max-width: 375px){
  font-size: 25px;
  }
}
`;

const MapInner = styled.div`
position: absolute;
margin-top: 3%;
margin-left: 20%;
height: 70%;
width: 59%;
z-index: 2;
box-shadow: 0px 3px 15px #000034;

@media(max-width: 375px){
    margin-left: 2%;
    height: 45%;
    width: 94%;
}
`;



const Map = () => (
  <MapContainer>
    <MapTitle>
      <h1>Localização</h1>
    </MapTitle>
    <MapSubtitle>
      <p>BR-324 - Lot. Recanto dos Eucaliptos, Simões Filho - BA, 43700-000</p>
    </MapSubtitle>
    <MapDecoration></MapDecoration>
    <MapInner>
    </MapInner>
  </MapContainer>
)

export default Map
