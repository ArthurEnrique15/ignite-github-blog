import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

interface Issue {
  title: string
  body: string
  created_at: string
}

interface IssuesContextType {
  issues: Issue[]
}

interface IssuesProviderProps {
  children: ReactNode // qualquer elemento do react
}

export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<Issue[]>([])

  const fetchIssues = useCallback(async () => {
    const response = await api.get('https://api.github.com/search/issues', {
      params: {
        q: 'is:issue repo:ArthurEnrique15/ignite-github-blog',
      },
    })

    setIssues(response.data.items)
  }, [])

  useEffect(() => {
    fetchIssues()
  }, [fetchIssues])

  return (
    <IssuesContext.Provider value={{ issues }}>
      {children}
    </IssuesContext.Provider>
  )
}
