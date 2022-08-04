// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
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


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
  
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
   
}



