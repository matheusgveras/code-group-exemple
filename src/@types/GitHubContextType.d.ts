export type GitHubContextType = {
    getGitHubUserDetail?: (userName: string) => void;
    getGitHubUserRepositories?: (userName: string) => void;
    userDetail: any
  };