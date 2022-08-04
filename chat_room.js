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
 
var user_name=localStorage.getItem("user_name");
document.getElementById("username").innerHTML="welcome "+user_name;

function addRoom(){
    room_name=document.getElementById("room_name").value;
    localStorage.setItem("room_name",room_name);

    firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
    })
    window.location="chat_page.html"
}
function getData() {
    firebase.database().ref("/").on('value', function(snapshot) {
          document.getElementById("output").innerHTML = "";
          snapshot.forEach(function(childSnapshot) {
                childKey  = childSnapshot.key;
     Room_names = childKey;
    //Start code
                console.log(Room_names)
                row="<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
                document.getElementById("output").innerHTML+=row;
    //End code
    });});}
getData();
 
function redirectToRoomName(name){
    localStorage.setItem("room_name",room_name);
    window.location="chat_page.html"
  
}
