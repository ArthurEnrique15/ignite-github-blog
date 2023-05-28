import React, { useContext, useState } from 'react'
import { IssuesContext } from '../../../contexts/IssuesContext'
import { PostCard } from './PostCard'
import {
  PostsContainer,
  FilterContainer,
  FilterHeader,
  PostsListContainer,
} from './styles'

export function Posts() {
  const [search, setSearch] = useState('')
  const { issues } = useContext(IssuesContext)

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSearch(event.target.value.toLowerCase())
  }

  return (
    <PostsContainer>
      <FilterContainer>
        <FilterHeader>
          <h1>Publicações</h1>
          <span>{issues.length} publicações</span>
        </FilterHeader>

        <input
          type="text"
          placeholder="Buscar conteúdo"
          value={search}
          onChange={handleInputChange}
        />
      </FilterContainer>

      <PostsListContainer>
        {issues.map((post) => {
          const postTitle = post.title.toLowerCase()
          const postBody = post.body.toLowerCase()

          if (
            search !== '' &&
            !(postTitle.includes(search) || postBody.includes(search))
          )
            return null

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
