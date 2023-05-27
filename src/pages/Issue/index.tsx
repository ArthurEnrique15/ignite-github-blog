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

export function Issue() {
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
            <span>cameronwll</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <span>Rocketseat</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>20 seguidores</span>
          </div>
        </TitleFooter>
      </TitleContainer>
      <DescriptionContainer>
        <StyledReactMarkdown>Hello, **world**!</StyledReactMarkdown>
      </DescriptionContainer>
    </IssueContainer>
  )
}
