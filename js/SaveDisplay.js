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

// save the data
$(".sampleSurvey input[type='submit']").click(function(e) {
  e.preventDefault();
  //console.log("thing");

  var inData = $("form").serializeArray();
  var inJson = {};
  for (var i = 0; i < inData.length; i++) {
    var name = inData[i]["name"];
    var value = inData[i]["value"];
    console.log(name + " " + value);
    inJson[name] = value;
  }

  console.log(inJson);

  firebase
    .firestore()
    .collection("hotel")
    .add(inJson);

  $("form")[0].reset();
});
// update the result in table
firebase
  .firestore()
  .collection("hotel")
  .onSnapshot(function(snapShot) {
    
    //console.log(snapShot);
    console.log(snapShot.size);
    snapShot.forEach(doc =>{
      console.log(doc.data().choice)
      var thing = doc.data().choice;
      switch (thing)
      {
        case "A":
          var num = parseInt($('#ans1').text())+1;
          $('#ans1').text(num)
          break;
        case "B":
          var num = parseInt($('#ans2').text())+1;
          $('#ans2').text(num);
          break;
        case "C":
          var num = parseInt($('#ans3').text())+1;
          $('#ans3').text(num);
          break;
        case "D":
          var num = parseInt($('#ans4').text())+1;
          $('#ans4').text(num)
          break;
        case "E":
          var num = parseInt($('#ans5').text())+1;
          $('#ans5').text(num);
          break;
      }
    });
  });

