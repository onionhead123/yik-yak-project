var firebaseRef = firebase.database().ref().child("messagesSent"); //create ref to location folder on firebase called messagesSent
firebaseRef.on("child_added", snap => {
  var userData = snap.val();
  $("#container").append("<p>" + userData + "</p>");

  //  console.log(post.append("<p>" + userData + "</p>"))
});
function showMessage(){
  var userInput = document.getElementById("msg").value;
  firebaseRef.push().set(userInput);
//  post.innerHTML = (`${message}`); //< post initital msg>
//^^ replace the container with message
//  var para = document.createElement("p");
//  var string = document.createTextNode(message);
//    para.appendChild(string);
//^^ also put the message into a variable(textnode) that will attach to post
  //  post.appendChild(para); <append the message/string to post
  //message.innerHTML = (`${post}`); <put the "post" into "message" variable
  //PUSH DATA to Firebase

//  var post = document.getElementById("container").value;
  document.getElementById("msg").reset();
  //push userInput to FIREBASE/messagesSent

}


  //PULL DATA FROM FIREBASE to WEBPAGE

    //  post.innerHTML = (`${userInput}`);
