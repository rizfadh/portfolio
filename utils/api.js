import CONSTANTS from '../src/global/constants'
import { getAccessToken, setAccessToken } from './local'

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

const login = async (email, password) => {
    const data = {
        email: email.trim(),
        password: password.trim(),
    }
    const response = await fetch(`${endpoint}/user/login`, {
        method: 'post',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    return response
}

const loginAction = async ({ params, request }) => {
    const input = await request.formData()
    const email = input.get('email')
    const password = input.get('password')
    const response = await login(email, password)
    const result = await response.json()
    if (result.error) return result
    setAccessToken(CONSTANTS.ACCESS_TOKEN_KEY, result.data.accessToken)
    return result
}

const addDiary = async (title, desc, accessToken) => {
    const data = {
        title: title.trim(),
        desc: desc.trim(),
    }
    const response = await fetch(`${endpoint}/diary`, {
        method: 'post',
        mode: 'cors',
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    return response
}

const addDiaryAction =
    (queryClient) =>
    async ({ params, request }) => {
        const accessToken = getAccessToken(CONSTANTS.ACCESS_TOKEN_KEY)
        const input = await request.formData()
        const title = input.get('title')
        const desc = input.get('desc')
        const response = await addDiary(title, desc, accessToken)
        const result = await response.json()
        if (result.error) return result
        queryClient.invalidateQueries({ queryKey: ['diaries'] })
        return result
    }

export {
    getDiariesQuery,
    diariesLoader,
    getDiaryQuery,
    diaryLoader,
    loginAction,
    addDiaryAction,
}
