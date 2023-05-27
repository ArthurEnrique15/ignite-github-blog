import {
  ReactNode,
  createContext,
  useCallback,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

interface Issue {
  number: number
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

    const { items } = response.data

    const issues = items.map((item: any) => {
      return {
        number: item.number,
        title: item.title,
        body: item.body,
        created_at: item.created_at,
      }
    })

    setIssues(issues)
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
