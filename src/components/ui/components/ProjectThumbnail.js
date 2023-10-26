import styled from 'styled-components'

const Container = styled.a`
  margin-bottom: 30px;
  cursor: pointer;
  transition: all 0.2s ease;
`

const Img = styled.div`
  height: 520px;
  border-radius: 15px;
  background-image: url(${(p) => p.bg});
`

const Title = styled.div`
  font-size: 25px;
  font-family: GrafitaSpecialDEMO;
  margin: 20px 0;
`

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`
const Tag = styled.div`
  border: 1px solid;
  border-color: ${(p) => (p.theme === 'light' ? '#282828' : '#fff')};
  padding: 10px 20px;
  margin: 0 10px 10px 0;
  border-radius: 30px;
`

const ProjectThumbnail = ({ title, img, tags, theme }) => {
  return (
    <Container>
      <Img bg={img} />
      <Title>{title}</Title>
      <TagContainer>
        {tags?.map((item, idx) => {
          return (
            <Tag key={idx} theme={theme}>
              {item}
            </Tag>
          )
        })}
      </TagContainer>
    </Container>
  )
}

export default ProjectThumbnail
