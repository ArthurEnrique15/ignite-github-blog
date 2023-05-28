import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const IssueContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 0.5rem;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 0.5rem;

  padding: 2rem;

  width: 54rem;

  background-color: ${({ theme }) => theme['base-post']};
  color: white;

  border-radius: 10px;

  margin-top: -5.5rem;
`

export const TitleHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  width: 100%;

  color: ${({ theme }) => theme.blue};

  text-transform: uppercase;

  font-weight: 700;
  font-size: 0.75rem;
  line-height: 160%;

  border-bottom: 1px solid transparent;
`

export const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: ${({ theme }) => theme.blue};
  }
`

export const GoBackLink = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  border-bottom: 1px solid transparent;

  cursor: pointer;

  transition: 0.5s;

  &:hover {
    border-color: ${({ theme }) => theme.blue};
  }
`

export const GithubLink = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  border-bottom: 1px solid transparent;

  cursor: pointer;

  transition: 0.5s;

  &:hover {
    border-color: ${({ theme }) => theme.blue};
  }

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
    color: ${({ theme }) => theme.blue};
  }
`

export const TitleText = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  width: 100%;

  height: 2rem;

  margin-top: 0.75rem;

  span {
    font-weight: 700;
    font-size: 1.5rem;

    color: ${({ theme }) => theme['base-title']};
  }
`

export const TitleFooter = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  gap: 2rem;

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
    color: ${({ theme }) => theme['base-span']};
  }

  time {
    color: ${({ theme }) => theme['base-span']};
  }
`

export const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */

  width: 54rem;
  padding: 2rem;
`

export const StyledReactMarkdown = styled(ReactMarkdown)`
  color: ${({ theme }) => theme['base-text']};

  /* font-weight: 700; */
  line-height: 160%;

  h1 {
    margin-bottom: 1rem;
  }

  hr {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  li {
    margin-left: 1.5rem;
  }

  a {
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
      text-decoration: none;
      color: ${({ theme }) => theme.blue};
    }
  }

  ul {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }

  code {
    font-size: 0.75rem;
    padding: 0.25rem;

    border-radius: 6px;

    background-color: ${({ theme }) => theme['base-post']};
  }

  pre {
    border-radius: 6px;
    padding: 1rem;
    background-color: ${({ theme }) => theme['base-post']};

    margin-bottom: 1rem;
  }
`
