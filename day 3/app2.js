//msg string length



console.log(firebase)
var firebaseRef = firebase.database().ref().child("messagesSent"); //create ref to location folder on firebase called messagesSent
firebaseRef.on("child_added", snap => {

  var userData = snap.val();
  $("#container").append("<p class=\"messageData\">" + userData + "</p>");

  //  console.log(post.append("<p>" + userData + "</p>"))
});
function showMessage(){
  var messageLen = document.getElementById("msg").length;
  if (messageLen === 0, messageLen < 5) {
    jQuery(document).ready(function($) {
        $("input:button[name='button1']").on("click",function() {
        var msgwords = $("input:textarea[name='user_message']").val().replace( /[^\w ]/g, "" ).split( /\s+/ ).length;
        var minwords = 10;
            if (msgwords < minwords) {
                alert("Your Comment is too short.");
            }
        });
    });
  }

  else {
    var userInput = document.getElementById("msg").value;
    firebaseRef.push().set(userInput);
    console.log(document.getElementById("msg").value)
  }
  //push userInput to FIREBASE/messagesSent

}


  //PULL DATA FROM FIREBASE to WEBPAGE

    //  post.innerHTML = (`${userInput}`);
