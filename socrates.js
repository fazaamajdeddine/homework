// all men are mortal.
//socrates is a men
//therefore,socrates is mortal 
//im gonna use the if statements and comparaison operators and else and ifelse...


var Men= "mortal";
var socrates= Men;
var allMenAre="all men are mortal";
var Notmen="animal";

function myHomework(){

    if(socrates=== Men){
        console.log("therefore, socrates is " + Men );

    }else if(socrates===Notmen) {
        console.log("socrates is not " + Men );
    }else{
        console.log("i didn't realy what kind of things is socrates ");
    }
}

myHomework();


function myHomework2(){
    if(socrates!=Men){
        console.log("hey bro!!, socrates is not " + Men);
    }else{
        console.log("he's mortal :(");
    }
}
