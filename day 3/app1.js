function showMessage(){

  var message = document.getElementById("msg").value;
  var post = document.getElementById("container").value;
  post.appendChild(`${message}`);

  post.innerHTML = (`${message}`); //< switch "container" with "msg" value>

//  post.appendChild(para);

//  var string = document.createTextNode(message);
//  para.appendChild(string);


//  message.innerHTML = (`${post}`);


  //PUSH DATA to Firebase
  var firebaseRef = firebase.database().ref().child("msg");
  firebaseRef.push().set(message);
  console.log(firebaseRef.push().set(message));
}

//Retreive data from firebase
  //$(document).ready(function(){
//  var rootRef = firebase.database().ref().child("msg");
//  rootRef.on("child_added", snap => {
//    var name = snap.val();
//    $("#container").append("<p>" + name + "</p>");

//  });
//});


  // Read from the database
  //myRef.addValueEventListener(new ValueEventListener() {
    //  @Override
      //public void onDataChange(DataSnapshot dataSnapshot) {
          // This method is called once with the initial value and again
          // whenever data at this location is updated.
        //  String value = dataSnapshot.getValue(String.class);
          //Log.d(TAG, "Value is: " + value);
      //}

      //@Override
      //public void onCancelled(DatabaseError error) {
          // Failed to read value
          //Log.w(TAG, "Failed to read value.", error.toException());
      //}
  //});
