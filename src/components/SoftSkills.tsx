import * as react from 'react'
import styled from '@emotion/styled'
import Container from './Container'

interface SkilsProps{
    title: string;
    image: any;
}

const SkillsStyled = styled.div`
display: inline-block;
height: 100%;
width: 20%;
padding: 2em;
margin-left: 11%;
margin-top: 6%;
`;

const SkillsInner = styled.div`
`;

const Image = styled.div``;

const Title = styled.div`
h2{
    text-align: center;
    width: 34vh;
}
`;


const SoftSkills: React.SFC<SkilsProps> = ({image, title } )=> (
    <SkillsStyled>
      <SkillsInner>
        <Image>
            <img src={image} />
        </Image>
      <Title>
          <h2>{title}</h2>
      </Title>
      </SkillsInner>
    </SkillsStyled>
  )

  export default SoftSkills