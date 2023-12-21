
import React, { FC, useContext, useEffect, useState } from 'react';
import { GitHubContext } from '../../Context/GitHubContext';
import InputText from '../../Components/InputText';
import Button from '../../Components/Buttom';
import { useRouter } from 'next/router';
import * as Style from './styles'
import { ToastContainer, toast } from 'react-toastify';

function Search() {
    const { getGitHubUserDetail, userDetail } = useContext(GitHubContext)
    const [form, setForm] = useState({userName:''})
    const router = useRouter();
    const notify = (message: string) => toast(message);

    const handleSearch = () => {
        if(form.userName === '') {
            notify('Digite o usuário do github')
        } else {
            getGitHubUserDetail(form.userName)
        }
    }
    useEffect(() => {
        userDetail != null ? router.push('/RepositoryDetails') : console.log('Usuário não encontrato')
    },[userDetail])

    function handleInput(field: string, value: string) {
        setForm((s) => ({... s, [field]: value}))
    }
    return (
        <>
            <Style.SearchContainer>
                <Style.FormItem>
                    <InputText value={form.userName} 
                    onInputChange={(value: string) => 
                    handleInput('userName', value)} 
                    label={'Digite o nome de usuario do GitHub'} 
                    error={false} />
                </Style.FormItem>
                <Style.FormItem>
                    <Button onClick={() => handleSearch()} fullWidth={true}>Buscar</Button>
                </Style.FormItem>
                <ToastContainer />
            </Style.SearchContainer>
        </>
    );
};
export default Search;