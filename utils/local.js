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

const getWords = (string) => {
    const html = /(<([^>]+)>)/gi
    const newLine = /[\r\n]+/gm
    return string.replace(html, '').replace(newLine, ' ').split(' ')
}

const getDescriptionString = (string, length) => {
    const words = getWords(string)
    return `${words.slice(0, length).join(' ')}...`
}

const getReadingTime = (string) => {
    const words = getWords(string).length
    const wpm = 230
    return Math.ceil(words / wpm)
}

const shareArticle = async ({ title, text, url }) => {
    await navigator.share({
        title,
        text,
        url,
    })
}

export {
    setAccessToken,
    getAccessToken,
    getDescriptionString,
    getReadingTime,
    shareArticle,
}
