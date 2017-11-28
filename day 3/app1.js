function showMessage(){

  var message = document.getElementById("msg").value;
    console.log(`${message}`);
  var post = document.getElementById("container");
  //post.innerHTML = (`${message}`); //< post initital msg>

  var para = document.createElement("p");
  var string = document.createTextNode(message);
    para.appendChild(string);
  //console.log the above function
    post.appendChild(para);
  message.innerHTML = (`${post}`);
  //PUSH DATA to Firebase
  var firebaseRef = firebase.database().ref().child("msg");
  firebaseRef.push().set(msg.value);
    //GET DATA TO THE FIREBASE
  var rootRef = firebase.database().ref().child("msg");
  rootRef.on("child_added", snap => {
    alert(snap.val());
      document.msg.reset();

    var rootMessage = snap.child();
  });


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

}
