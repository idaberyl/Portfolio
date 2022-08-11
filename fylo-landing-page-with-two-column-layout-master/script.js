function validateEmail(email){
    var returnValue = true;
    var rxEmail=/^\w(\.?[\w-])*@\w(\.?[\w-])*\.[a-z]{2,6}(\.[a-z]{2})?$/i ;
    var email = document.getElementById('txtEmail')
    var error = document.getElementById('error').innerHTML ;

    if (email.value.match(rxEmail)){
        document.getElementById('error').innerHTML = "Success!";
        document.getElementById('error').style.color = 'Green';
     return true;
    }else{
        returnValue = false;
        document.getElementById('error').innerHTML = "Please provide a valid e-mail "; 
        document.getElementById('error').style.color = 'Red';
    }
}