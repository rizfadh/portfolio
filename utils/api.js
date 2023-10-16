import Swal from 'sweetalert2'
import CONSTANTS from '../src/global/constants'
import { getAccessToken, setAccessToken } from './local'
import { imagesRef } from './firebaseConfig'
import {
    deleteObject,
    getDownloadURL,
    ref,
    uploadBytesResumable,
} from 'firebase/storage'

const endpoint = import.meta.env.VITE_API_ENDPOINT

const errorObj = (error) => {
    return { error: true, title: error.name, message: error.message }
}

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
    try {
        const input = await request.formData()
        const email = input.get('email')
        const password = input.get('password')
        const response = await login(email, password)
        const result = await response.json()
        if (result.error) return result
        setAccessToken(CONSTANTS.ACCESS_TOKEN_KEY, result.data.accessToken)
        return result
    } catch (error) {
        return errorObj(error)
    }
}

const addDiary = async ({ imageName, imageURL, title, desc, accessToken }) => {
    const data = {
        imageName,
        imageURL,
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

const uploadImage = async (image) => {
    if (image.size > 300000) throw new Error('Image must less than 300kb!')
    const imageName = `${+new Date()}`
    const imageRef = ref(imagesRef, imageName)
    await uploadBytesResumable(imageRef, image)
    const downloadURL = await getDownloadURL(imageRef)
    return { imageName, downloadURL }
}

const addDiaryAction =
    (queryClient) =>
    async ({ params, request }) => {
        try {
            const accessToken = getAccessToken(CONSTANTS.ACCESS_TOKEN_KEY)
            const input = await request.formData()
            const image = input.get('image')
            const title = input.get('title')
            const desc = input.get('desc')
            const { imageName, downloadURL: imageURL } = await uploadImage(
                image
            )
            const response = await addDiary({
                imageName,
                imageURL,
                title,
                desc,
                accessToken,
            })
            const result = await response.json()
            if (result.error) return result
            queryClient.invalidateQueries({ queryKey: ['diaries'] })
            return result
        } catch (error) {
            return errorObj(error)
        }
    }

const editDiary = async ({
    id,
    imageName,
    imageURL,
    title,
    desc,
    accessToken,
}) => {
    const data = {
        imageName,
        imageURL,
        title: title.trim(),
        desc: desc.trim(),
    }
    const response = await fetch(`${endpoint}/diary/${id}`, {
        method: 'put',
        mode: 'cors',
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
    return response
}

const editDiaryAction =
    (queryClient) =>
    async ({ params, request }) => {
        try {
            const accessToken = getAccessToken(CONSTANTS.ACCESS_TOKEN_KEY)
            const input = await request.formData()
            const { id } = params
            const image = input.get('image')
            const title = input.get('title')
            const desc = input.get('desc')

            let imageName = input.get('imageName')
            let imageURL = input.get('imageURL')

            if (image.size !== 0) {
                const { imageName: refName, downloadURL } = await uploadImage(
                    image
                )
                await deleteImage(imageName)
                imageName = refName
                imageURL = downloadURL
            }

            const response = await editDiary({
                id,
                imageName,
                imageURL,
                title,
                desc,
                accessToken,
            })
            const result = await response.json()
            if (result.error) return result
            queryClient.invalidateQueries({ queryKey: ['diaries'] })
            return result
        } catch (error) {
            return errorObj(error)
        }
    }

const deleteDiary = async (id, accessToken) => {
    const response = await fetch(`${endpoint}/diary/${id}`, {
        method: 'delete',
        mode: 'cors',
        headers: {
            Authorization: `Bearer ${accessToken}`,
            'Content-Type': 'application/json',
        },
    })
    return await response.json()
}

const deleteImage = async (imageName) => {
    const imageRef = ref(imagesRef, imageName)
    await deleteObject(imageRef)
}

const deleteDiaryAction = async ({
    id,
    imageName,
    accessToken,
    queryClient,
}) => {
    try {
        const response = await deleteDiary(id, accessToken)
        await deleteImage(imageName)
        if (response.error) return response
        queryClient.invalidateQueries({ queryKey: ['diaries'] })
        return response
    } catch (error) {
        return errorObj(error)
    }
}

export {
    getDiariesQuery,
    diariesLoader,
    getDiaryQuery,
    diaryLoader,
    loginAction,
    addDiaryAction,
    editDiaryAction,
    deleteDiaryAction,
}
