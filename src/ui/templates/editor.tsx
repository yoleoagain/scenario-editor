import Ract from 'react'
import styled from 'styled-components'

type Props = {
  asideContent: React.ReactElement | React.FC
  mainContent: React.ReactElement | React.FC
  headerContent: React.ReactElement | React.FC
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
`

export const EditorTemplate: React.FC<Props> = ({ asideContent }) => {
  return (
    <Wrapper>
      <Aside>{asideContent}</Aside>
      <Main>{asideContent}</Main>
    </Wrapper>
  )
}