
import React, { FC, useContext, useEffect, useState } from 'react';
import { GitHubContext } from '../../Context/GitHubContext';
import { useRouter } from 'next/router';
import DataTable, { TableColumn } from 'react-data-table-component';
import { DataRow } from '../../@types/DataColumnType';
import { columnsStructure } from './columns';

const columns: TableColumn<DataRow>[] = columnsStructure;

function DataGrid() {
    const { userDetail, getGitHubUserRepositories, userRepositories } = useContext(GitHubContext)
    const [data, setData] = useState([]);
    useEffect(() => {
        getGitHubUserRepositories(userDetail.login)
    }, [])
    useEffect(() => {
        userRepositories != null ?  setData(userRepositories.data) : setData([])
    }, [userRepositories])
    const router = useRouter()
    return (
        <>
            {
                data.length > 0 ? (
                    <DataTable
                        columns={columns}
                        data={data}
                    />
                ) : null
            }
        </>
    );
};
export default DataGrid;