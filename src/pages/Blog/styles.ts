import styled from 'styled-components'

export const BlogContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: ${({ theme }) => theme['base-input']};
`
