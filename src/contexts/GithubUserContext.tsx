import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

interface User {
  name: string
  login: string
  avatar_url: string
  bio: string
  followers: number
  company: string
}

interface GithubUserContextType {
  user: User
  fetchUser(username: string): Promise<void>
}

interface GithubUserProviderProps {
  children: ReactNode // qualquer elemento do react
}

export const GithubUserContext = createContext({} as GithubUserContextType)

export function GithubUserProvider({ children }: GithubUserProviderProps) {
  const [user, setUser] = useState<User>({} as User)

  const fetchUser = useCallback(async (username: string) => {
    const response = await api.get(`https://api.github.com/users/${username}`)

    if (response.status === 200) {
      const { name, login, avatar_url, bio, followers, company } = response.data
      setUser({ name, login, avatar_url, bio, followers, company })
    }
  }, [])

  useEffect(() => {
    fetchUser('ArthurEnrique15')
  }, [fetchUser])

  return (
    <GithubUserContext.Provider value={{ user, fetchUser }}>
      {children}
    </GithubUserContext.Provider>
  )
}
