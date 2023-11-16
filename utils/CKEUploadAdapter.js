import { uploadImage } from './api'

export default class CKEUploadAdapter {
    constructor(loader) {
        this.loader = loader
    }

    upload() {
        return this.loader.file.then(
            (file) =>
                new Promise((resolve, reject) => {
                    uploadImage(file)
                        .then((response) =>
                            resolve({ default: response.downloadURL })
                        )
                        .catch((error) => reject(error.message))
                })
        )
    }
}
