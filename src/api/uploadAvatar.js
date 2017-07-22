import firebase from 'firebase'
import RNFetchBlob from 'react-native-fetch-blob'

export default  uploadAvatar = function uploadAvatar(imgUri) {
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
    const imageRef = firebase.storage().ref('posts').child("test.jpg")
    let mime = 'image/jpg'
    return fs.readFile(imgUri, 'base64')
      .then((data) => {
        return data;
        //return Blob.build(data, { type: `${mime};BASE64` })
    })
    /*.then((blob) => {
        console.log(blob);
        uploadBlob = blob
        return imageRef.put(blob, { contentType: mime })
      })
      .then(() => {
        uploadBlob.close()
        return imageRef.getDownloadURL()
      }); */
};
