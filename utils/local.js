const setAccessToken = (key, accessToken) => {
    const date = new Date()
    const expiredDate = date.setDate(date.getDate() + 14)
    const data = {
        accessToken: accessToken,
        expired: expiredDate,
    }
    localStorage.setItem(key, JSON.stringify(data))
}

const getAccessToken = (key) => {
    const data = localStorage.getItem(key)
    if (!data) return
    const { accessToken, expired } = JSON.parse(data)
    const now = new Date()
    if (now > expired) {
        localStorage.removeItem(key)
        return
    }
    return accessToken
}

export { setAccessToken, getAccessToken }
