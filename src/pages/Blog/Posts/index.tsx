import {
  PostsContainer,
  FilterContainer,
  FilterHeader,
  PostsListContainer,
  PostCard,
  PostCardHeader,
  PostCardDescription,
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
        <PostCard>
          <PostCardHeader>
            <h1>JavaScript data types and data structures</h1>
            <span>Há 1 dia</span>
          </PostCardHeader>
          <PostCardDescription>
            <span>
              Programming languages all have built-in data structures, but these
              often differ from one language to another. This article attempts
              to list the built-in data structures available in JavaScript and
              what properties they have. These can be used to build other data
              structures. Wherever possible, comparisons with other languages
              are drawn. Dynamic typing JavaScript is a loosely typed and
              dynamic language. Variables in JavaScript are not directly
              associated with any particular value type, and any variable can be
              assigned (and re-assigned) values of all types: let foo = 42; //
              foo is now a number foo = 'bar'; // foo is now a string foo =
              true; // foo is now a boolean
            </span>
          </PostCardDescription>
        </PostCard>
        <PostCard>
          <PostCardHeader>
            <h1>
              JavaScript data types and structures that are very nice to code
              hahaha
            </h1>
            <span>Há 1 dia</span>
          </PostCardHeader>
          <PostCardDescription>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </span>
          </PostCardDescription>
        </PostCard>
      </PostsListContainer>
    </PostsContainer>
  )
}
