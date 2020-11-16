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

// enter data in
$("input[type='button']").click(function(e) {
  //get the value of form
  var inputdata = $("form").serializeArray();
  var inputJson = {};
  for (var i = 0; i < inputdata.length; i++) {
    var name = inputdata[i]["name"];
    var value = inputdata[i]["value"];
    console.log(name + " " + value);
    inputJson[name] = value;
  }

  console.log(inputJson);
  //var night = parseInt(inputJson["num"]);
  // var cost = parseInt(inputJson["room"].slice(-3));
  // console.log("The cost for this reservation is " + night * cost);

  /* save the data to database 
  firebase
    .firestore()
    .collection("hotelreservation")
    .add(inputJson);
*/
firebase
.firestore()
.collection("hotel")
.add(inputJson)

  /* clear the entry */
  $("form")[0].reset();
});
