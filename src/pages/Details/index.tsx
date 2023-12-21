
import React, { FC, useContext, useEffect, useState } from 'react';
import { GitHubContext } from '../../Context/GitHubContext';
import * as Style from './styles'
import { useRouter } from 'next/router'


function Detail() {
    const router = useRouter()
    const { repository } = router.query
    const { repositoryDetail, getGitHubRepositoryDetail, userDetail } = useContext(GitHubContext)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        getGitHubRepositoryDetail(repository, userDetail.login)
    }, [])
    useEffect(() => {
        console.log('repositoryDetail', repositoryDetail)
        repositoryDetail != null ? setLoading(false) : setLoading(true)
    }, [repositoryDetail])
    return (
        <Style.Content>
            {
                repositoryDetail !== null ? (
                    <>
                        <Style.Container>
                            {repositoryDetail.full_name}  <Style.Button href={'https://github.com/' + repositoryDetail.full_name} target='_blank'>Visitar</Style.Button>               
                        </Style.Container>
                        <Style.Container>
                            Linguagem: {repositoryDetail.language}  
                        </Style.Container>
                        <Style.Container>
                            Estrelas: {repositoryDetail.stargazers_count}              
                        </Style.Container>
                        <Style.Container>
                            Descrição: {repositoryDetail.description === null? 'Sem descrição informada' : repositoryDetail.description}              
                        </Style.Container>

                    </>
                ) : ('Carregando...')
            }
        </Style.Content>
    );
}
export default Detail;