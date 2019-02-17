import * as react from 'react'
import styled from '@emotion/styled'
import Container from '../components/Container'
import icon1 from '../assets/comunicacao-icon.png'
import icon2 from '../assets/criatividade.png'
import icon3 from '../assets/react-icon.png'
import Skills from '../components/SoftSkills'

const SoftContainer = styled(Container)`
margin-left: -3%;
margin-top: 6%;
margin-bottom: 6%;

@media(max-width: 425px){
    width: 100rem;
    margin-bottom: 21%;
}
`;

const Soft = () => (
    <SoftContainer>
        <Skills title="Comunicação Clara" image={icon1}/>
        <Skills title="Criatividade e Inovação" image={icon2}/>
        <Skills title="Tecnologias de Ponta" image={icon3}/>
    </SoftContainer>
)

export default Soft