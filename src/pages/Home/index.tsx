import { Header } from '../../components/Header'
import { User } from '../../components/User'
import { Posts } from './Posts'
import { HomeContainer } from './styles'

export function Home() {
  return (
    <>
      <Header />
      <HomeContainer>
        <User />
        <Posts />
      </HomeContainer>
    </>
  )
}
