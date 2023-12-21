export const columnsStructure = (router: any) => [
    {
        name: 'Repositorio',
        selector: (row: { name: any; }) => row.name,
        sortable: true,
    },
    {
        name: 'Linguagem',
        selector: (row: { language: any; }) => row.language,
    },
    {
        name: 'Forks',
        selector: (row: { forks_count: any; }) => row.forks_count,
    },
    {
        name: 'Stars',
        selector: (row: { stargazers_count: any; }) => row.stargazers_count,
        sortable: true,
    },
    {
        name: 'Detalhes',
        cell: (d:any) => (
           <a style={{textDecoration:'none', color: 'red'}} 
             onClick={() => router.push('/Details?repository=' + d.name)}>
            Detalhes
          </a>
        )
      },
]