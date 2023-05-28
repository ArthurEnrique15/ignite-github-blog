import styled from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 18.5rem;
  object-fit: cover;
  overflow: hidden;

  @media (min-width: 1440px) {
    img {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    object-fit: cover;

    img {
      width: auto;
    }
  }
`
