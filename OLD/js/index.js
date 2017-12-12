var rootRef = firebase.database().ref().child('Gebruikers');

var CreateAdmin = function(Name, Permission){
    
    var Settings = {
        naam: Name,
        rechten: Permission,
        status: 'Online',    
    };

    var init = function() {
            AddUser();
    };
    return {
        init: init
    };
    
    function CreateID(){
      var text = "";
      var possible = "0123456789";

      for (var i = 0; i < 1; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text; 
    };
    

    function AddUser(){

        rootRef.push({
               "Rechten": Settings.rechten,
               "Naam": Settings.naam,
                "ConnectID": CreateID(),
                "Status": Settings.status,
                "Groep": {
                    "Naam": "none",
                    "ID": "none"
                }
            });
        location.href = "main.html";
    }; 
}

var CreateExtra = function(Name, Permission){
    
    var Settings = {
        naam: Name,
        rechten: Permission,
        status: 'Online',    
    };

    var init = function() {
            AddUser();
    };
    return {
        init: init
    };
    
    function CreateID(){
      var text = "";
      var possible = "0123456789";

      for (var i = 0; i < 1; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

      return text; 
    };
    

    function AddUser(){

        rootRef.push({
               "Rechten": Settings.rechten,
               "Naam": Settings.naam,
                "ConnectID": CreateID(),
                "Status": Settings.status,
                "Groep": {
                    "Naam": "none",
                    "ID": "none"
                }
            });
        location.href = "main.html";
    }; 
}




