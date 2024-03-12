let username = document.getElementById("username");
let password = document.getElementById("password");
let flag =1;
function validateForm(){
    if(username.value== "" ){
        // alert("empty");
        document.getElementById("usererror1").innerHTML = "User name is Empty";
        flag =0;
    }
    else if(username.value.length <3){
        document.getElementById("usererror1").innerHTML = "User name must be min 3 char";
        flag =0;
    }
    else{
        document.getElementById("usererror1").innerHTML = "";
        flag= 1;

    }

    if(password.value == ""){
        document.getElementById("usererror2").innerHTML = "Password is empty";
        flag =0;
    }
    else{
        document.getElementById("usererror2").innerHTML = "";
        flag = 1;

    }
     if(flag){
        return true;

     }
     else{
        return false;
    }

    
}
