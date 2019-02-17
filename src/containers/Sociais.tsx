import * as react from 'react'
import styled from '@emotion/styled'
import Container from '../components/Container'
import icon1 from '../assets/git.png'
import icon2 from '../assets/linkedin.svg'
import icon3 from '../assets/behance.svg'
import Skills from '../components/SoftSkills'

const SociaisContainer = styled.div`
margin-bottom: 6%;

a: hover{
    opacity: 0.5;
}

@media(max-width: 425px){
    width: 100rem;
}
`;

const Sociais = () => (
    <SociaisContainer>
        <a href="https://github.com/biancamagalhaes"><Skills title="Codigo-fonte" image={icon1}/></a>
        <a href="https://www.linkedin.com/in/bianca-magalh%C3%A3es-6825a0172/"><Skills title="Linkedin" image={icon2}/></a>
        <a href="https://www.behance.net/biancamaga6331/"><Skills title="Behance" image={icon3}/></a>
    </SociaisContainer>
)

export default Sociais