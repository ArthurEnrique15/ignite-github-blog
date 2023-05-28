import styled from 'styled-components'

export const PostsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  margin-top: 1.5rem;

  width: 54rem;
`

export const FilterContainer = styled.div`
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
