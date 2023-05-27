import { useContext } from 'react'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faChevronLeft,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  DescriptionContainer,
  GithubLink,
  GoBackLink,
  IssueContainer,
  StyledLink,
  StyledReactMarkdown,
  TitleContainer,
  TitleFooter,
  TitleHeader,
  TitleText,
} from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { GithubUserContext } from '../../contexts/GithubUserContext'
import { useParams } from 'react-router-dom'

export function Issue() {
  const { user } = useContext(GithubUserContext)

  const { number: IssueNumber } = useParams()

  console.log(IssueNumber)

  return (
    <IssueContainer>
      <TitleContainer>
        <TitleHeader>
          <StyledLink to="/">
            <GoBackLink>
              <FontAwesomeIcon icon={faChevronLeft} />
              <span>Voltar</span>
            </GoBackLink>
          </StyledLink>

          <GithubLink>
            <span>Ver no Github</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </GithubLink>
        </TitleHeader>

        <TitleText>
          <span>JavaScript data types and data structures</span>
        </TitleText>
        <TitleFooter>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{user.login}</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <span>{user.company}</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{user.followers} seguidores</span>
          </div>
        </TitleFooter>
      </TitleContainer>
      <DescriptionContainer>
        <StyledReactMarkdown>Hello, **world**!</StyledReactMarkdown>
      </DescriptionContainer>
    </IssueContainer>
  )
}
