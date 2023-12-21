export const columnsStructure = [
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
          <a style={{textDecoration:'none', color: 'red'}} href={'/Details/' + d.name}>
            Detalhes
          </a>
        )
      },
]