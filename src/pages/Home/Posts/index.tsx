import { fakePosts } from '../../../constants/posts'
import { PostCard } from './PostCard'
import {
  PostsContainer,
  FilterContainer,
  FilterHeader,
  PostsListContainer,
} from './styles'

export function Posts() {
  return (
    <PostsContainer>
      <FilterContainer>
        <FilterHeader>
          <h1>Publicações</h1>
          <span>6 publicações</span>
        </FilterHeader>

        <input type="text" placeholder="Buscar conteúdo" />
      </FilterContainer>

      <PostsListContainer>
        {fakePosts.map((post) => {
          return (
            <PostCard
              key={post.title}
              title={post.title}
              createdAt={post.createdAt}
              description={post.description}
            />
          )
        })}
      </PostsListContainer>
    </PostsContainer>
  )
}
