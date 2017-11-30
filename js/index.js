var rootRef = firebase.database().ref().child('Gebruikers');





function AddUser(name){
    rootRef.set({
        Naam: name,
        ID: CreateID()
    });
    location.href = "main.html";
}

function CreateID(){
  var text = "";
  var possible = "0123456789";

  for (var i = 0; i < 1; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text; 
}
/*

function GetName(){
    rootRef.on('value', function(snapshot){
          snapshot.forEach(function(childSnapshot) {
        // key
        var naam = Naam.val();
        // value, could be object
        var id = ID.val();
    });
}


/*
$('#clear_button').click(function(){
        $('#info1').val('');
        $('#info2').val('');
    
});

$('#load_button').click(function(){
        rootRef.on('value', function(snapshot){
            $('#info1').val(snapshot.child('info1').val());
            $('#info2').val(snapshot.child('info2').val());
        });
    
});*/
