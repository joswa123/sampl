const form = document.querySelector('#form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const cpassword = document.querySelector('#cpassword')


form.addEventListener('submit',(e)=>{
    
   if(!validateInputs()){
    e.preventDefault();
   };

})

 function validateInputs(){
    const usernameVal= username.value.trim();
    const emailVal= email.value.trim();
    const passwordVal= password.value.trim();
    const cpasswordVal= cpassword.value.trim();
    let success=true;

    if(usernameVal === '')
    { 
        success=false;
        setError(username, 'Username is required')
    }
    else{
        setSuccess(username)
    }
    
    if(emailVal ==='')
    {
        setError(email, 'email is required')
    }
    else if (!validateEmail(emailVal)){
        success=false;
        setError(email,'Please enter a valid enail')
        
    }
    else{
        setSuccess(email)
    }
    if(passwordVal === '')
    {
        setError(password,'password is required')
    }
    else if(passwordVal.lenght<8){
        success=false;
        setError(password,'passsword must be atleast 8 character')

    }
    else{
        setSuccess(password)
    }
    if(cpasswordVal === '')
    { 
        success=false;
        setError(cpassword,'confirm password is required')
    }
    else if (cpasswordval !== passwordVal)
    {
        success=false;
        setError(cpassword,'password does not match')
    }
    else{
        setSuccess(cpassword)
    }
    return success;

 }
 

 function setError(element,message)
 {
    const inputGroup =element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText = message;
    inputGroup.classList.add('error')
    inputGroup.classList.remove('success')

 }
 function setSuccess(element)
 {
    const inputGroup =element.parentElement;
    const errorElement = inputGroup.querySelector('.error');

    errorElement.innerText ='';
    inputGroup.classList.add('success')
    inputGroup.classList.remove('error')

 }

const validateEmail = (email) => {
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};