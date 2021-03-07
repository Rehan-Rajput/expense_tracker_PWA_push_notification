
import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCTrYjdoFKE-2MtFbmg6ZLk_qSqrjvHg_o",
    authDomain: "expense-tracker-pwa-5a320.firebaseapp.com",
    projectId: "expense-tracker-pwa-5a320",
    storageBucket: "expense-tracker-pwa-5a320.appspot.com",
    messagingSenderId: "327989102292",
    appId: "1:327989102292:web:bdc7ce89ae913a9a79dd41"
  };


  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();


export const configNotification = () => {
    
    Notification.requestPermission().then((permission) => {
        console.log(permission)
        if (permission === 'granted') {
          messaging.getToken().then((currentToken) => {
            if (currentToken) {
                
                console.log(currentToken)
          
            } else {
              // Show permission request.
              console.log('No Instance ID token available. Request permission to generate one.');
              // Show permission UI.
          
            }
          }).catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
 
          });

        }

})

}