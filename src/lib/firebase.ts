import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

export function setupFirebase() {
  try {
    const firebaseApp = initializeApp({
      apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
      authDomain: import.meta.env.VITE_FIREBASE_AUTHDOMAIN,
      projectId: import.meta.env.VITE_FIREBASE_PROJECTID,
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGEBUCKET,
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGINGSENDERID,
      appId: import.meta.env.VITE_FIREBASE_APPID,
      measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENTID,
    })

    const analytics = getAnalytics(firebaseApp)

    console.log({ firebaseApp, analytics })
  } catch (error) {
    console.error({ error })
  }
}
