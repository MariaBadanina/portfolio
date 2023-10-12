import styled from 'styled-components'
import MaxWidth from '../MaxWidth'
import ProjectThumbnail from '../components/ProjectThumbnail'
import { Route, Routes, useLocation } from 'react-router-dom'

const OuterWrapper = styled.div`
  pointer-events: all;
  overflow-y: scroll;
  height: 100vh;
`

const Wrapper = styled.div`
  /* backdrop-filter: blur(30px);
  border-radius: 50px; */
  width: 100%;
  margin-top: 20vh;
  /* border: 1px solid rgba(255, 255, 255, 0.1); */
  padding: 100px;
  padding-bottom: 0;
`

const Title = styled.h1`
  font-family: GrafitaSpecialDEMO;
  font-size: 60px;
`
const ProjectsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  position: relative;
`

const projects = [
  {
    title: 'Progect Title',
    img: require('../../../static/img/1.png'),
    tags: ['Typescript', 'React.js', 'SASS', 'Next.js', '...', '...', '...'],
    pageInfo:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    url: 'project-1',
  },
  {
    title: 'Progect Title',
    img: require('../../../static/img/2.png'),
    tags: ['WebGL', 'Three.js', 'React-fiber', 'React-spring'],
    pageInfo:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    url: 'project-2',
  },
  {
    title: 'Progect Title',
    img: require('../../../static/img/1.png'),
    tags: ['WebGL', 'Three.js', 'React-fiber', 'React-spring'],
    pageInfo:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    url: 'project-3',
  },
  {
    title: 'Progect Title',
    img: require('../../../static/img/1.png'),
    tags: ['Typescript', 'React.js', 'SASS', 'Next.js', '...', '...', '...'],
    pageInfo:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    url: 'project-4',
  },
  {
    title: 'Progect Title',
    img: require('../../../static/img/2.png'),
    tags: ['Typescript', 'React.js', 'SASS', 'Next.js', '...', '...', '...'],
    pageInfo:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    url: 'project-5',
  },
  {
    title: 'Progect Title',
    img: require('../../../static/img/1.png'),
    tags: [
      'Storybook',
      'Typescript',
      'React.js',
      'SASS',
      'Next.js',
      '...',
      '...',
      '...',
    ],
    pageInfo:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    url: 'project-6',
  },
]

const Work = () => {
  return (
    <OuterWrapper>
      <MaxWidth flexDirection="column">
        <Wrapper>
          <Title>Work</Title>
        </Wrapper>
        <ProjectsContainer>
          {projects.map((item, idx) => {
            return (
              <ProjectThumbnail
                key={idx}
                title={item.title}
                img={item.img}
                tags={item.tags}
              />
            )
          })}
        </ProjectsContainer>
      </MaxWidth>
    </OuterWrapper>
  )
}

export default Work
