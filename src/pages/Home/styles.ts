import styled from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 3rem;

  width: 58rem;

  padding: 0 2rem;

  margin: auto;
  margin-bottom: 3rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`
