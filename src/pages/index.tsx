import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import Soft from '../containers/Soft'
import Skills from '../containers/Skills'
import Sociais from '../containers/Sociais'
import Footer from '../components/Footer'




const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <Soft />
        <Skills />
        <Sociais />
        <Footer />
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
