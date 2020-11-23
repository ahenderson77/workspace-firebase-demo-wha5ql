// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyCt4jTEOu17ddLU2KK_jJ9O7MeimnTpXJQ",
  authDomain: "grocerylist-6ef54.firebaseapp.com",
  databaseURL: "https://grocerylist-6ef54.firebaseio.com",
  projectId: "grocerylist-6ef54",
  storageBucket: "grocerylist-6ef54.appspot.com",
  messagingSenderId: "481774771372",
  appId: "1:481774771372:web:f13921b76d78d5fe091309"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

$('#signup-form').submit(function(e){
  e.preventDefault();
  console.log("click the submit");

  // use the provided sign in 
  var email = $('username');
  var psw = $('password');

  firebase.auth().createUserWithEmailAndPassword(email,psw).then(user =>{
       console.log("success");
  }).catch(error=>{
       console.log(error.code); 
       console.log(error.message);
  });



});