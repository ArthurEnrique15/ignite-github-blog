import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`

export const PostCardContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;

  width: 26rem;
  height: 100%;

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

  @media (max-width: 768px) {
    width: 16rem;
    padding: 1.5rem;
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

    max-width: 15rem;

    font-weight: 700;
    font-size: 1.25rem;

    line-height: 130%;

    color: ${(props) => props.theme['base-title']};
  }

  time {
    font-size: 0.875rem;
    color: ${(props) => props.theme['base-span']};
  }

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;

    gap: 0.25rem;

    h1 {
      height: 1.5rem;
      -webkit-line-clamp: 1;
    }
  }
`

export const PostCardDescription = styled.div`
  height: 8rem;
  overflow: hidden;

  span {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 5;
  }

  color: ${(props) => props.theme['base-text']};

  @media (max-width: 768px) {
    -webkit-line-clamp: 4;
  }
`

export const StyledReactMarkdown = styled(ReactMarkdown)`
  font-size: 1rem;
  line-height: 160%;

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 1rem;
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
`
