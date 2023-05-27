import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import {
  PostCardContainer,
  PostCardHeader,
  PostCardDescription,
  StyledLink,
  StyledReactMarkdown,
} from './styles'

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
  const createdAtFormatted = format(createdAt, "d 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBR,
  })

  const createdAtRelativeToNow = formatDistanceToNow(createdAt, {
    locale: ptBR,
    addSuffix: true,
  })

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
          <StyledReactMarkdown>{description}</StyledReactMarkdown>
        </PostCardDescription>
      </PostCardContainer>
    </StyledLink>
  )
}
