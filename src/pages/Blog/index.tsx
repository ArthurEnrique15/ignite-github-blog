import { Header } from '../../components/Header'
import { User } from '../../components/User'
import { Posts } from './Posts'
import { BlogContainer } from './styles'

export function Blog() {
  return (
    <>
      <Header />
      <BlogContainer>
        <User />
        <Posts />
      </BlogContainer>
    </>
  )
}
