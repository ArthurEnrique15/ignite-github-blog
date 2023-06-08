import {
  PostCardContainer,
  PostCardHeader,
  PostCardDescription,
  StyledLink,
  StyledReactMarkdown,
} from './styles'
import { formatDateRelativeToNow } from '../../../../util/format-date-relative-to-now'

interface PostCardProps {
  number: number
  title: string
  createdAt: Date
  description: string
}

export function PostCard({
  number,
  title,
  createdAt,
  description,
}: PostCardProps) {
  const {
    formattedDate: createdAtFormatted,
    dateRelativeToNow: createdAtRelativeToNow,
  } = formatDateRelativeToNow(createdAt)

  return (
    <StyledLink to={`/issue/${number}`}>
      <PostCardContainer>
        <PostCardHeader>
          <h1>{title}</h1>
          <time title={createdAtFormatted} dateTime={createdAt.toISOString()}>
            {createdAtRelativeToNow}
          </time>
        </PostCardHeader>
        <PostCardDescription>
          <span>
            <StyledReactMarkdown>{description}</StyledReactMarkdown>
          </span>
        </PostCardDescription>
      </PostCardContainer>
    </StyledLink>
  )
}
