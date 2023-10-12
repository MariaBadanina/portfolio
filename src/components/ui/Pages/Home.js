import styled from 'styled-components'

const HeroTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`
const HeroText = styled.div`
  display: flex;
`
const RegularText = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
  font-size: 20px;
`
const AccentText = styled.div`
  position: relative;
  display: inline-block;
  font-family: GrafitaSpecialDEMO;
  font-size: 150px;
  line-height: 1;
  margin: 0 40px;
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    height: 10px;
    width: 100%;
    background-color: ${(p) => (p.theme === 'light' ? '#282828' : '#fff')};
    transition: all 0.7s ease;
    z-index: 2;
  }
`

const Home = ({ theme }) => {
  return (
    <HeroTextWrapper>
      <HeroText>
        <RegularText>Maria Badanina</RegularText>
        <AccentText theme={theme}>frontend</AccentText>
      </HeroText>
      <HeroText>
        <AccentText theme={theme}>developer</AccentText>
        <RegularText>based in Columbus GA</RegularText>
      </HeroText>
    </HeroTextWrapper>
  )
}

export default Home
