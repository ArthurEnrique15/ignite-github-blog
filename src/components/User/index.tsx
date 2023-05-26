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
import githubIcon from '../../assets/github.svg'

export function User() {
  return (
    <UserContainer>
      <ProfilePictureContainer>
        <img src="https://github.com/ArthurEnrique15.png" alt="" />
      </ProfilePictureContainer>
      <UserInfo>
        <UserHeader>
          <UsernameInHeader>
            <span>Cameron Williamson</span>
          </UsernameInHeader>
          <GithubLinkInUserHeader
            href="https://github.com/ArthurEnrique15"
            target="_blank"
          >
            <div>
              <span>Github</span>
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </div>
          </GithubLinkInUserHeader>
        </UserHeader>

        <UserBio>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </UserBio>

        <UserFooter>
          <div>
            <FontAwesomeIcon icon={faGithub} />
            <span>cameronwll</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faBuilding} />
            <span>Rocketseat</span>
          </div>

          <div>
            <FontAwesomeIcon icon={faUserGroup} />
            <span>20 seguidores</span>
          </div>
        </UserFooter>
      </UserInfo>
    </UserContainer>
  )
}
