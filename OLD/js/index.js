var rootRef = firebase.database().ref().child('Gebruikers');

function CreateID(){
  var text = "";
  var possible = "0123456789";

  for (var i = 0; i < 1; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text; 
};

function AddUser(name){
    rootRef.push({
           "Naam": name,
            "ConnectID": CreateID(),
            "Groep": {
                "Naam": "none",
                "ID": "none"
            }
        });
    location.href = "main.html";
};

rootRef.orderByKey().limitToLast(1).on('child_added',function(snapshot) {
  console.log('new record', snapshot.val); 
});


function getInfo(name){
    

    rootRef.on('value', gotData, errData);

    function gotData(data){
        console.log(data.val());
     }

    function errData(err){
        console.log('Error!');
        console.log(err);
    }

}


