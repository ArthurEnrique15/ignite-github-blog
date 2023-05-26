import { User } from './User'
import { Posts } from './Posts'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <HomeContainer>
      <User />
      <Posts />
    </HomeContainer>
  )
}
