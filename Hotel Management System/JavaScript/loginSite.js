const getInfo = document.querySelector('.login-layout'); 


    const firstName = document.getElementById("firstName"); 
    const secondName = document.getElementById("secondName").value; 

    const email = document.getElementById("Email").value; 
    const checkEmail = document.getElementById("confirmEmail").value;
    const phone = document.getElementById("phone").value;


    const address = document.getElementById("address").value; 
    const city = document.getElementById("city").value; 
    const postCode = document.getElementById("post-code").value; 
    const country = document.getElementById("country").value; 

    const survey = document.getElementById("survey").value; 




getInfo.addEventListener("submit", event =>{event.preventDefault();}); 
