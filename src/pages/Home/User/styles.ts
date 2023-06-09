import styled from 'styled-components'

export const UserContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  gap: 2rem;

  padding: 2rem;

  width: 100%;
  height: 13.25rem;

  background-color: ${({ theme }) => theme['base-post']};
  color: white;

  border-radius: 10px;

  margin-top: -5.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
    gap: 0.5rem;

    padding: 1.5rem;
  }
`

export const ProfilePictureContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  // TODO improve this
  height: 9.25rem;
  width: 9.25rem;

  img {
    height: 9.25rem;
    width: 9.25rem;
    border-radius: 8px;
  }

  @media (max-width: 768px) {
    height: 5rem;
    width: 5rem;

    img {
      height: 5rem;
      width: 5rem;
      border-radius: 100%;
    }
  }
`

export const UserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 100%;
  width: 100%;

  gap: 0.5rem;
`

export const UserHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;

  margin-top: 0.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;

    gap: 0.5rem;
  }
`

export const UsernameInHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 2rem;

  span {
    font-weight: 700;
    font-size: 1.5rem;

    color: ${({ theme }) => theme['base-title']};
  }

  @media (max-width: 768px) {
    height: auto;
  }
`

export const GithubLinkInUserHeader = styled.a`
  display: flex;
  align-items: flex-start;

  text-transform: uppercase;
  text-decoration: none;

  color: ${({ theme }) => theme.blue};

  cursor: pointer;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;

    font-size: 0.75rem;

    border-bottom: 1px solid transparent;

    span {
      font-weight: 700;
      line-height: 160%;
    }

    transition: 0.5s;

    &:hover {
      border-color: ${({ theme }) => theme.blue};
    }
  }
`
export const UserBio = styled.div`
  height: 100%;
  width: 100%;

  line-height: 160%;
  color: ${({ theme }) => theme['base-text']};
`

export const UserFooter = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  gap: 1.5rem;

  width: 100%;

  line-height: 160%;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    gap: 0.5rem;
  }

  svg {
    color: ${({ theme }) => theme['base-label']};
  }

  span {
    color: ${({ theme }) => theme['base-subtitle']};
  }

  @media (max-width: 768px) {
    gap: 0.25rem;
    flex-direction: column;

    div {
      align-items: flex-start;
    }
  }
`
