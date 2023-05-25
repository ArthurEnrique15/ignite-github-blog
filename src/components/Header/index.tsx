import { HeaderContainer } from './styles'
import headerCover from '../../assets/Cover.png'

export function Header() {
  return (
    <HeaderContainer>
      <img src={headerCover} alt="" />
    </HeaderContainer>
  )
}
