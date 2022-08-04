//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyAJtJZwYrHT0kkC6wBLgXQ6cyM-DsxaYP8",
    authDomain: "kwitter-d20a8.firebaseapp.com",
    databaseURL: "https://kwitter-d20a8-default-rtdb.firebaseio.com",
    projectId: "kwitter-d20a8",
    storageBucket: "kwitter-d20a8.appspot.com",
    messagingSenderId: "221071083955",
    appId: "1:221071083955:web:53f04aa0917e35a21b23c6" 
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    })
}
function logOut(){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}