import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import {
  UserContainer,
  ProfilePictureContainer,
  UserInfo,
  UserHeader,
  GithubLinkInUserHeader,
  UsernameInHeader,
  UserBio,
  UserFooter,
} from './styles'
import { useContext } from 'react'
import { GithubUserContext } from '../../../contexts/GithubUserContext'

export function User() {
  const { user } = useContext(GithubUserContext)

  console.log(user)

  return (
    <UserContainer>
      <ProfilePictureContainer>
        <img src={user?.avatar_url} alt="" />
      </ProfilePictureContainer>
      <UserInfo>
        <UserHeader>
          <UsernameInHeader>
            <span>{user.name}</span>
          </UsernameInHeader>
          <GithubLinkInUserHeader
            href={`https://github.com/${user.login}`}
            target="_blank"
          >
            <div>
              <span>Github</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </div>
          </GithubLinkInUserHeader>
        </UserHeader>

        <UserBio>
          <span>{user.bio}</span>
        </UserBio>

        <UserFooter>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>{user?.login}</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <span>{user?.company}</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>{user?.followers} seguidores</span>
          </div>
        </UserFooter>
      </UserInfo>
    </UserContainer>
  )
}
