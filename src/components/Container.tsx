import * as React from 'react'
import styled from '@emotion/styled'



const StyledContainer = styled.div`
  position: relative;
  width: auto;
  margin-left: auto;
  margin-right: auto;
  margin-top: -5%;

`

interface ContainerProps {
  className?: string
}

const Container: React.SFC<ContainerProps> = ({ children, className }) => (
  <StyledContainer className={className}>{children}</StyledContainer>
)

export default Container
