import * as react from 'react'
import styled from '@emotion/styled'
import Container from './Container'
import icon1 from '../assets/web-design.svg'
import icon2 from '../assets/chat.svg'
import Experiencias from '../components/Experiencias'

const CurriculoContainer = styled.div`
margin-left: 17%;
    margin-top: 10%;`;

const CurriculoInner = styled.div`
`;

const CurriculoDeveloper = styled.div`
display:flex;
margin-bottom: 20%;
margin-left: -35%;

h1{
    display: flex;
    margin-top: -5%;
    margin-left: 3%;
    font-size: 36px;
}

img{
    width: 5em;
    margin-top: -22%;
}
`;

const DevSkills = styled.div`
display: flex;;
position: inline;
margin-left: 10%;
margin-bottom: 20%;
margin-top: -25%;

h3{
    font-weight: 300;
}
`;

const Text1 = styled.div`
margin-right: 26%;`;

const Text2 = styled.div``;

const CurriculoDesign = styled.div`
display:flex;
margin-bottom: 20%;
margin-left: -35%;

h1{
    display: flex;
    margin-top: -5%;
    margin-left: 3%;
    font-size: 36px;
}

img{
    width: 5em;
    margin-top:-73%;
}
`;

const DesSkills = styled.div`
display: flex;;
position: inline;
margin-left: 10%;
margin-bottom: 20%;
margin-top: -111%;

h3{
    font-weight: 300;
}
`;

const TextD1 = styled.div`
margin-right: 26%;`;

const TextD2 = styled.div``;

const Redes = styled.div``;

const Curriculo = () => (
    <CurriculoContainer>
      <CurriculoInner>
        <CurriculoDeveloper>
                <img src={icon1}/>
                <h1>Developer Skills</h1>
        </CurriculoDeveloper>
        <DevSkills>
            <Text1>
                <h3>Java</h3>
                <h3>PHP</h3>
                <h3>React</h3>
                <h3>Magento</h3>
                <h3>Gatsby</h3>
            </Text1>
            <Text2>
                <h3>Html</h3>
                <h3>Css</h3>
                <h3>Sass</h3>
                <h3>Jquery</h3>
                <h3>JavaScript</h3>
            </Text2>
        </DevSkills>
        
        <CurriculoDesign>
                <img src={icon2}/>
                <h1>Designer Skills</h1>
        </CurriculoDesign>
            <DesSkills>
            <TextD1>
                <h3>Photoshop</h3>
                <h3>Ilustrator</h3>
                <h3>Maya</h3>
            </TextD1>
            <TextD2>
                <h3>Audition</h3>
                <h3>Premiere</h3>
                <h3>After Effects</h3>
            </TextD2>
            </DesSkills>
       <Experiencias />
      <Redes>
        
      </Redes>
      </CurriculoInner>
    </CurriculoContainer>
  )

  export default Curriculo
