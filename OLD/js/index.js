var rootRef = firebase.database().ref().child('Gebruikers');

function AddUser(name){
    rootRef.set({
        Naam: name,
        ID: CreateID()
    });
    location.href = "main.html";
};

function CreateID(){
  var text = "";
  var possible = "0123456789";

  for (var i = 0; i < 1; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text; 
};



function GetName(name){
    rootRef.on('value', function(datasnapshot){
       var ReturnName = name.innerText = datasnapshot.val();                  
    });
    
    return ReturnName;
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
