importScripts("https://www.gstatic.com/firebasejs/7.19.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/7.19.0/firebase-messaging.js");

const firebaseConfig = { 
    apiKey: "AIzaSyCTrYjdoFKE-2MtFbmg6ZLk_qSqrjvHg_o",
    authDomain: "expense-tracker-pwa-5a320.firebaseapp.com",
    projectId: "expense-tracker-pwa-5a320",
    storageBucket: "expense-tracker-pwa-5a320.appspot.com",
    messagingSenderId: "327989102292",
    appId: "1:327989102292:web:bdc7ce89ae913a9a79dd41"
}

firebase.initializeApp(firebaseConfig);
firebase.messaging();