import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1920px;
  margin: 0 auto;
  position: relative;
  background-color: #181818;
`

export const Main = styled.main`
  flex: 1 1 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const MainCenterBlock = styled.div`
  width: auto;
  flex-grow: 3;
  padding: 20px 40px 20px 111px;
`
export const MainCenterBlockTitle = styled.h2`
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  margin-bottom: 45px;
`

export const MainCenterBlockContent = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`

export const Footer = styled.footer``
