
import React, { FC, useContext } from 'react';
import { GitHubContext } from '../../Context/GitHubContext';
import * as Style from './styles'
import DataGrid from '../../Components/DataGrid';

function RepositoryDetails() {
    const { userDetail } = useContext(GitHubContext)
    if (userDetail != null) {
        return (
            <Style.Content>
                <Style.Container>
                    <Style.Avatar src={userDetail.avatar_url} />
                </Style.Container>
                <Style.Container>
                    Informações de {userDetail.name}
                </Style.Container>
                <Style.Container>
                    {userDetail.email == null ? 'Sem email' : userDetail.email} - 
                    {userDetail.bio == null ? 'Sem biografia' : userDetail.bio}
                </Style.Container>

                <Style.Container>
                    <Style.Count>
                        Seguidores: {userDetail.followers}
                    </Style.Count>
                    <Style.Count>
                        Seguindo: {userDetail.following}
                    </Style.Count>
                </Style.Container>
                <Style.Container>
                    <DataGrid />
                </Style.Container>
            </Style.Content>
        );
    } else {
        <Style.Content>
            <Style.Container>
                <h1>Usuário nao encontrato</h1>
            </Style.Container>
        </Style.Content>
    }

};
export default RepositoryDetails;