function showMessage(){


//var post = document.getElementById("container").value;
//  post.innerHTML = (`${message}`); //< post initital msg>
//^^ replace the container with message
//  var para = document.createElement("p");
//  var string = document.createTextNode(message);
//    para.appendChild(string);
//^^ also put the message into a variable(textnode) that will attach to post
  //  post.appendChild(para); <append the message/string to post
  //message.innerHTML = (`${post}`);
  //PUSH DATA to Firebase
  var firebaseRef = firebase.database().ref().child("messagesSent"); //create ref to location folder on firebase called messagesSent
  var userInput = document.getElementById("msg").value;
  firebaseRef.push().set(userInput);


    //PULL DATA FROM FIREBASE to WEBPAGE


  var rootRef = firebase.database().ref().child("messagesSent");
    rootRef.on("child_added", snap => {
      var data = snap.val();
      $("#userInput").append("<p>"+data+"</p>");
 };
