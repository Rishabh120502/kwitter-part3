//YOUR FIREBASE LINKS
// Your web app's Firebase configuration
var firebaseConfig = {
      apiKey: "AIzaSyCvg-75budaGTHgaoX1hinkYpqUMhABtaM",
      authDomain: "class-test-89130.firebaseapp.com",
      databaseURL: "https://class-test-89130.firebaseio.com",
      projectId: "class-test-89130",
      storageBucket: "class-test-89130.appspot.com",
      messagingSenderId: "901832687647",
      appId: "1:901832687647:web:bfc53cdcd835400c5dd52a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");

function send(){
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
