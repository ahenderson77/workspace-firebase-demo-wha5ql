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

$("#Login").submit(function(e) {
  e.preventDefault();

  // get username and password from form
  var email = $('input[name="login"]').val();
  var password = $('input[name = "pwd"]').val();

  // sign in
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then(success => {
      console.log("login successful");
    })
    .catch(error => {
      console.log(error.message);

      let user = firebase.auth().currentUser;
      console.log(
        user.displayName + " " + user.email + " " + user.emailVerified
      );
    });
});
