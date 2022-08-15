

//step-1: add click event handler to the button;

document.getElementById('form-btn').addEventListener('click', function(){
    //step 2: get the email from the input 
    //Note:Always remember to use  .value to get the text from an input field;

    const emailField  = document.getElementById('email-id');//emailField catches the input field;

    const email = emailField.value;//and this line gets me the value inside that input field;

    //step-3: get the password;

    const passwordField = document.getElementById('pass-id');//this line gets the password input field;
    
    const pass = passwordField.value;//this line gets the password from the input field;

    //step-4: verify email and password;
    if(email === 'sontan@baap.com' && pass === 'secret'){
        console.log('valid user');
    }
    else{
        console.log('Not a Valid User;')
    }
})