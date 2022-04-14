const firebaseConfig = {
    apiKey: "AIzaSyBpRQ1xFb5QDvS-1_P0ZdLeckm3KeKA6Jw",
    authDomain: "let-s-chat-web-app-f20f6.firebaseapp.com",
    projectId: "let-s-chat-web-app-f20f6",
    storageBucket: "let-s-chat-web-app-f20f6.appspot.com",
    messagingSenderId: "18292162077",
    appId: "1:18292162077:web:1715064f8228b6f59ed0f4",
    measurementId: "G-817N4RZJ9X"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome" + user_name + "!";


function addRoom(){
    room_name=document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
          purpose:"adding room name"
    });
    localStorage.setItem("room_name",room_name);
    window.location="let's_chat_page.html";
}


    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
            Room_names = childKey;
            console.log("Room Name -"+Room_names);
            row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names+"</div><hr>";
            document.getElementById("output").innerHTML=row;
             });});
        
getData();
function redirectToRoomName(name){
    console.log(name);
    localStorage.setItem("room_name",name);
    window.location="lets_chat_page.html"
    }