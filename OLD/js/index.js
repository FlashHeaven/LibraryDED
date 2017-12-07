var rootRef = firebase.database().ref().child('Gebruikers');
var CreateUser = function(){
    
    var defaultSettings = {
        naam: 'Empty',
        rechten: 'Beheerder',
        status: 'Offline'     
    }
    
    function CreateID(){
      var text = "";
      var possible = "0123456789";

      for (var i = 0; i < 1; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text; 
    };
    
    function AddUser(){
    
    rootRef.push({
           "Rechten": defaultSettings.rechten,
           "Naam": defaultSettings.naam,
            "ConnectID": CreateID(),
            "Status": defaultSettings.status,
            "Groep": {
                "Naam": "none",
                "ID": "none"
            }
        });
    location.href = "main.html";
};

        var init = function (settings) {
        mergeObjects(defaultSettings, settings || {});
       
        var elements = document.querySelectorAll('input[value][type="button"])'),
            i;
        //Loop door elements
        for (i = 0; i < elements.length; i++) {
            elements[i].addEventListener("click", function () { 
            });
            elements[i].addEventListener("click", addUser);    
        };
    };

    
    
    
    
    
    
}






function GetLatestInfo(){

rootRef.orderByKey().limitToLast(1).on('child_added',function(snapshot) {
  console.log('new record', snapshot.val());
    var naam = snapshot.child("Naam").val();
    var connectid = snapshot.child("ConnectID").val();
    var rechten = snapshot.child("Rechten").val();
    var status = snapshot.child("Status").val();
});
};

console.log(GetLatestInfo().naam.val());

function LoadMain(limit){

rootRef.orderByKey().limitToLast(limit).on('child_added',function(snapshot) {
  console.log('new record', snapshot.val());
    var naam = snapshot.child("Naam").val();
    var connectid = snapshot.child("ConnectID").val();
    var rechten = snapshot.child("Rechten").val();
    var status = snapshot.child("Status").val();
    console.log(naam);
    
    $("#fireName").append("Hallo " + naam);
    $("#table_body").append("<tr><td>" + rechten + "</td><td>" + naam + "</td><td>" + connectid + "</td><td>" + status + "</td></tr>");
    
});
};




function getInfo(name){
    

    rootRef.on('value', gotData, errData);

    function gotData(data){
        console.log(data.val());
     }

    function errData(err){
        console.log('Error!');
        console.log(err);
    }

};


