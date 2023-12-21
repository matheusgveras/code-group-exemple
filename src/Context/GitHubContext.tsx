

import { createContext, ReactNode, useState } from 'react';
import { IGitHubProviderProps } from '../Interfaces/IGitHubProviderProps';
import { GitHubContextType } from '../@types/GitHubContextType';
import api from '../Infra/API';
import { IUser } from '../Interfaces/IUser';
import { Issue } from 'next/dist/build/swc';
import { IUserRepository } from '../Interfaces/IUserRepository';
import { IRepository } from '../Interfaces/IRepository';
import { ToastContainer, toast } from 'react-toastify';


export const GitHubContext = createContext<GitHubContextType | any>(null);
export const GitHubProvider = ({ children }: IGitHubProviderProps) => {

  const [userDetail, setUserDetail] = useState<IUser | any>(null)
  const [userRepositories, setUserRepositories] = useState<IUserRepository | any>(null)
  const [repositoryDetail, setRepositoryDetail] = useState<IRepository | any>(null)
  const notify = (message: string) => toast(message);

  async function getGitHubUserDetail(userName: string) {
    await api.get<IUser>('users/' + userName).then(response => {
      console.log('response....', response)
      setUserDetail(response.data)
    }).catch(error => {
      setUserDetail(null)
      notify('Usuário não encontrado x');
    });;
    
  }

  async function getGitHubUserRepositories(userName: string) {
    await api.get<IUserRepository>('users/' + userName + '/repos').then(response => {
      setUserRepositories(response)
    }).catch(error => {
      setUserRepositories(null)
    });
  }

  async function getGitHubRepositoryDetail(repositoryName: string, userName: string) {
    await api.get<IRepository>(`repos/${userName}/` + repositoryName).then(response => {
      console.log('last...e', response.data)
      setRepositoryDetail(response.data)
    }).catch(error => {
      setRepositoryDetail(null)
    });
  }

  <ToastContainer />
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

