 var name ="Isaque"
 //Declarar variable 
 var age;
 //inicialize a variable
 age = 25
//Arrays
 var skils = ["Cute", "Smart"];
 //Var object type 
 var person = {
     lastname: "Dos Santos",
     middlenam: "Bernardes"
 }
 //Scope Global
 var scopeglobal ="global";
//Scope local, only local can access global but global cant access local variables.
function local(){
    var fun="local"
    return scopeglobal+""+fun
}