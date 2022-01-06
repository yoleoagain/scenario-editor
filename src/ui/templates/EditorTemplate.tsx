import React, { ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  AsideContent: ReactNode
  MainContent: React.FC
  HeaderContent: ReactNode
}

const Wrapper = styled.section`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
`
const Main = styled.main`
  width: 100%;
  height: 100%;
`
const Aside = styled.aside`
  width: 300px;
  position: absolute;
  height: 100vh;
  left: -300px;
`

export const EditorTemplate: React.FC<Props> = ({ 
  AsideContent,
  MainContent,
}) => {
  return (
    <Wrapper>
      {/* <Aside>{AsideContent}</Aside> */}
      <Main>
        <MainContent />
      </Main>
    </Wrapper>
  )
}