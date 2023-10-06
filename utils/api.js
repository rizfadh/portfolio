const endpoint = import.meta.env.VITE_API_ENDPOINT

const getDiaries = async () => {
    const response = await fetch(`${endpoint}/diary`)
    return response.json()
}

const getDiary = async ({ params }) => {
    const { id } = params
    const response = await fetch(`${endpoint}/diary/${id}`)
    return response.json()
}

export { getDiaries, getDiary }
