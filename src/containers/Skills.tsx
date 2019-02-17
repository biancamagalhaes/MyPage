import * as react from 'react'
import styled from '@emotion/styled'
import Container from '../components/Container'
import Curriculo from '../components/Curriculo'
import Divulgacao from '../components/Divulgacao'


const SkillsContainer = styled(Container)`
margin-top: 6%;
margin-left: -4vh;
margin-right: -4vh;
margin-bottom:6%;
display: flex;
background-color: #eaaad03b;


@media(max-width: 425px){
    width: 100rem;
    margin-left: 0%;
}
`;

const Skills = () => (
    <SkillsContainer>
       <Divulgacao />
       <Curriculo />
    </SkillsContainer>
)

export default Skills