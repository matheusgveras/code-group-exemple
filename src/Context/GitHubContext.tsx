

import { createContext, ReactNode, useState } from 'react';
import { IGitHubProviderProps } from '../Interfaces/IGitHubProviderProps';
import { GitHubContextType } from '../@types/GitHubContextType';
import api from '../Infra/API';
import { IUser } from '../Interfaces/IUser';
import { Issue } from 'next/dist/build/swc';
import { IUserRepository } from '../Interfaces/IUserRepository';
import { IRepository } from '../Interfaces/IRepository';
export const GitHubContext = createContext<GitHubContextType | any>(null);
export const GitHubProvider = ({ children }: IGitHubProviderProps) => {

  const [userDetail, setUserDetail] = useState<IUser | any>(null)
  const [userRepositories, setUserRepositories] = useState<IUserRepository | any>(null)
  const [repositoryDetail, setRepositoryDetail] = useState<IUserRepository | any>(null)


  async function getGitHubUserDetail(userName: string) {
    const rest = await api.get<IUser>('users/' + userName);
    setUserDetail(rest.data)
  }

  async function getGitHubUserRepositories(userName: string) {
    const rest = await api.get<IUserRepository>('users/' + userName + '/repos/');
    setUserRepositories(rest.data)
  }

  async function getGitHubRepositoryDetail(repositoryName: string) {
    const rest = await api.get<IRepository>('repos/' + repositoryName);
    setRepositoryDetail(rest.data)
  }

  return (
    <GitHubContext.Provider
      value={{
        getGitHubUserDetail,
        getGitHubUserRepositories,
        getGitHubRepositoryDetail,
        userDetail,
        userRepositories,
        repositoryDetail
      }}>
      {children}
    </GitHubContext.Provider>
  )
}

