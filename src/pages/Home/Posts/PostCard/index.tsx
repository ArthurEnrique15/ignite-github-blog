import {
  PostCardContainer,
  PostCardHeader,
  PostCardDescription,
  StyledLink,
} from './styles'

interface PostCardProps {
  title: string
  createdAt: Date
  description: string
}

export function PostCard({ title, createdAt, description }: PostCardProps) {
  return (
    <StyledLink to="/issue">
      <PostCardContainer>
        <PostCardHeader>
          <h1>{title}</h1>
          <span>{createdAt.toISOString()}</span>
        </PostCardHeader>
        <PostCardDescription>
          <span>{description}</span>
        </PostCardDescription>
      </PostCardContainer>
    </StyledLink>
  )
}
