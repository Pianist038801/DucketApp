import firebase from 'firebase'
import RNFetchBlob from 'react-native-fetch-blob'
 
const Blob = RNFetchBlob.polyfill.Blob
const fs = RNFetchBlob.fs 

let uploadBlob = null
var config = {
    apiKey: "AIzaSyAtsuU3o8PAYJ6lhE-jFyZRIiJ_j-hpN0Q",
    authDomain: "ducketapp.firebaseapp.com",
    databaseURL: "https://ducketapp.firebaseio.com",
    projectId: "ducketapp",
    storageBucket: "ducketapp.appspot.com",
    messagingSenderId: "266785362056"
};
firebase.initializeApp(config);
const storage = firebase.storage();
let mime = 'image/jpg'
window.XMLHttpRequest = RNFetchBlob.polyfill.XMLHttpRequest
window.Blob = Blob

export default uploadImage = (imgname, uri, mime = 'application/octet-stream') => {
  return new Promise((resolve, reject) => {
     
    const sessionId = new Date().getTime()
    let uploadBlob = null
    const imageRef = storage.ref('avatar').child(`${imgname}.jpg`)

    fs.readFile(uri, 'base64')
      .then((data) => {
        return Blob.build(data, { type: `${mime};BASE64` })
      })
      .then((blob) => { 
        uploadBlob = blob
        return imageRef.put(blob)
      })
      .then(() => { 
        uploadBlob.close()
        return imageRef.getDownloadURL()
      })
      .then((url) => {
        resolve(url)
      })
      .catch((error) => {
        reject(error)
    })
  })
}