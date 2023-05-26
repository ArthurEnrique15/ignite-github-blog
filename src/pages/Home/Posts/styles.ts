import styled from 'styled-components'

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  margin-top: 1.5rem;
`

export const FilterContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    border-radius: 5px;
    border: 1px solid;
    border-color: ${(props) => props.theme['base-border']};

    padding: 0.75rem 1rem;

    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }

    &:focus {
      border-color: ${(props) => props.theme.blue};
    }
  }
`

export const FilterHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  h1 {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.125rem;
  }

  span {
    color: ${(props) => props.theme['base-span']};
    font-size: 0.875rem;
  }
`

export const PostsListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  gap: 2rem;
`

export const PostCard = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;

  height: 16.25rem;
  width: 26rem;

  padding: 2rem;

  border: 2px solid transparent;
  border-radius: 10px;

  background-color: ${(props) => props.theme['base-post']};

  transition: 0.5s;

  span {
    color: ${(props) => props.theme['base-text']};
    line-height: 160%;
  }

  &:hover {
    border-color: ${(props) => props.theme['base-span']};
  }
`

export const PostCardHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  gap: 1rem;

  height: 3.25rem;

  h1 {
    display: -webkit-box;
    overflow: hidden;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;

    font-weight: 700;
    font-size: 1.25rem;

    line-height: 130%;

    color: ${(props) => props.theme['base-title']};

    max-width: 16rem;
  }

  span {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
  }
`

export const PostCardDescription = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5;
  overflow: hidden;

  color: ${(props) => props.theme['base-text']};
`
