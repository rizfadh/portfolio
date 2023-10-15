import { initializeApp } from 'firebase/app'
import { getStorage, ref } from 'firebase/storage'

const firebaseConfig = {
    apiKey: 'AIzaSyBAtnvl3SxhXpbcAWdSczpNDznGgqomCck',
    authDomain: 'portfolio-storage-aa107.firebaseapp.com',
    projectId: 'portfolio-storage-aa107',
    storageBucket: 'portfolio-storage-aa107.appspot.com',
    messagingSenderId: '589552242169',
    appId: '1:589552242169:web:9c7adb546e8fc8b3640128',
    measurementId: 'G-H2CD46KW83',
}

const app = initializeApp(firebaseConfig)
const storage = getStorage(app)
const imagesRef = ref(storage, 'images')

export { app, storage, imagesRef }
