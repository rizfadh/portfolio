const endpoint = import.meta.env.VITE_API_ENDPOINT

const getDiaries = async () => {
    const response = await fetch(`${endpoint}/diary`)
    return await response.json()
}

const getDiary = async (id) => {
    const response = await fetch(`${endpoint}/diary/${id}`)
    return await response.json()
}

const getDiariesQuery = () => ({
    queryKey: ['diaries'],
    queryFn: async () => getDiaries(),
})

const diariesLoader = (queryClient) => async () => {
    const query = getDiariesQuery()
    return (
        queryClient.getQueryData(query.queryKey) ??
        (await queryClient.fetchQuery(query))
    )
}

const getDiaryQuery = (id) => ({
    queryKey: ['diary', id],
    queryFn: async () => getDiary(id),
})

const diaryLoader =
    (queryClient) =>
    async ({ params }) => {
        const { id } = params
        const query = getDiaryQuery(id)
        return (
            queryClient.getQueryData(query.queryKey) ??
            (await queryClient.fetchQuery(query))
        )
    }

export { getDiariesQuery, diariesLoader, getDiaryQuery, diaryLoader }
