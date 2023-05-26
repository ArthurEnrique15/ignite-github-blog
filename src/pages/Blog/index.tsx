import { Header } from '../../components/Header'
import { User } from '../../components/User'
import { BlogContainer } from './styles'

export function Blog() {
  return (
    <>
      <Header />
      <BlogContainer>
        <User />
        <h1>blog</h1>
      </BlogContainer>
    </>
  )
}
