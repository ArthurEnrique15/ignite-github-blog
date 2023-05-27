import { useContext } from 'react'
import { IssuesContext } from '../../../contexts/IssuesContext'
import { PostCard } from './PostCard'
import {
  PostsContainer,
  FilterContainer,
  FilterHeader,
  PostsListContainer,
} from './styles'

export function Posts() {
  const { issues } = useContext(IssuesContext)

  console.log(issues)

  return (
    <PostsContainer>
      <FilterContainer>
        <FilterHeader>
          <h1>Publicações</h1>
          <span>{issues.length} publicações</span>
        </FilterHeader>

        <input type="text" placeholder="Buscar conteúdo" />
      </FilterContainer>

      <PostsListContainer>
        {issues.map((post) => {
          return (
            <PostCard
              key={post.number}
              number={post.number}
              title={post.title}
              createdAt={new Date(post.created_at)}
              description={post.body}
            />
          )
        })}
      </PostsListContainer>
    </PostsContainer>
  )
}
