import { useCallback, useContext, useEffect, useState } from 'react'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  DescriptionContainer,
  IssueContainer,
  StyledLink,
  StyledReactMarkdown,
  TitleContainer,
  TitleFooter,
  TitleHeader,
  TitleHeaderLink,
  TitleText,
} from './styles'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { GithubUserContext } from '../../contexts/GithubUserContext'
import { useParams } from 'react-router-dom'
import { api } from '../../lib/axios'
import { formatDateRelativeToNow } from '../../util/format-date-relative-to-now'

interface IssueType {
  title: string
  body: string
  author: string
  comments: number
  url: string
  createdAtFormatted: string
  createdAtRelativeToNow: string
}

export function Issue() {
  const { user } = useContext(GithubUserContext)

  const { number: issueNumber } = useParams()

  const [issue, setIssue] = useState<IssueType>({} as IssueType)

  const fetchIssue = useCallback(async () => {
    const response = await api.get(
      `https://api.github.com/repos/${user.login}/ignite-github-blog/issues/${issueNumber}}`,
    )

    const issueInfo = response.data

    if (response.data) {
      const {
        formattedDate: createdAtFormatted,
        dateRelativeToNow: createdAtRelativeToNow,
      } = formatDateRelativeToNow(new Date(issueInfo.created_at))

      setIssue({
        title: issueInfo.title,
        body: issueInfo.body,
        author: issueInfo.user.login,
        comments: issueInfo.comments,
        url: issueInfo.html_url,
        createdAtFormatted,
        createdAtRelativeToNow,
      })
    }
  }, [user, issueNumber])

  useEffect(() => {
    fetchIssue()
  }, [fetchIssue])

  return (
    <IssueContainer>
      <TitleContainer>
        <TitleHeader>
          <StyledLink to="/">
            <TitleHeaderLink>
              <FontAwesomeIcon icon={faChevronLeft} />
              <span>Voltar</span>
            </TitleHeaderLink>
          </StyledLink>

          <a href={issue.url} target="_blank" rel="noreferrer">
            <TitleHeaderLink>
              <span>Ver no Github</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </TitleHeaderLink>
          </a>
        </TitleHeader>

        <TitleText>
          <span>{issue.title}</span>
        </TitleText>
        <TitleFooter>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{issue.author}</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faCalendarDay} />
            <time
              title={issue.createdAtFormatted}
              // dateTime={issue.createdAt.toISOString()}
            >
              {issue.createdAtRelativeToNow}
            </time>
          </div>

          <div>
            <FontAwesomeIcon icon={faComment} />
            <span>{issue.comments} comentários</span>
          </div>
        </TitleFooter>
      </TitleContainer>
      <DescriptionContainer>
        <StyledReactMarkdown>{issue.body}</StyledReactMarkdown>
      </DescriptionContainer>
    </IssueContainer>
  )
}
