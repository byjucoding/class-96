const firebaseConfig = {
    apiKey: "AIzaSyArv3ll234tTFtcnelpk60qIWasmcuoTtg",
    authDomain: "kwitter-app-pt2.firebaseapp.com",
    databaseURL: "https://kwitter-app-pt2-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-pt2",
    storageBucket: "kwitter-app-pt2.appspot.com",
    messagingSenderId: "585950700238",
    appId: "1:585950700238:web:2b938e3d29cb80f9b9669f",
    measurementId: "G-TLESGH941Y"
  };
  
  // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}
