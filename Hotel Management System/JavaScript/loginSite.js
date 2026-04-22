const getInfo = document.querySelector('.login-layout'); 
const inputs = document.querySelectorAll("input"); 

let accountInfo = {
    firstName: "",
    secondName: "",
    email: "",
    checkEmail: "",
    phone: "",
    address: "",
    city: "",
    postCode: "",
    country: "",
    survey: ""
};

// Fixed: renamed 'inputs' parameter to 'input'
inputs.forEach(input => {
    input.addEventListener('input', function(event){
        accountInfo[event.target.id] = event.target.value; 
    }); 
});

getInfo.addEventListener("submit", event => {
    event.preventDefault();
    
    if(createAccount()) { 
        setTimeout(() => {
            const url = "../HTML/main.html";
            window.open(url, "_self");
        }, 3000); 
    }
});

function createAccount(){ 
    let {firstName, secondName, email, checkEmail, phone, address, city, postCode, country, survey} = accountInfo;

 
    if(firstName.trim() === "" || secondName.trim() === ""){
        alert("Fill the Form");
        return false;
    } else { 
        console.log(`First Name: ${firstName}`);
        console.log(`Second Name: ${secondName}`);
    }
    
    if(email.includes('@') && email.includes('.')){
        console.log(`Email: ${email}`);
    } else { 
        alert("Not a Valid Email");
        return false;
    }

  
    if(email === checkEmail){
        console.log(`Email Confirmed`);
    } else { 
        alert("Emails do not match");         
        return false;   
    }

    if(phone.trim() === "" || address.trim() === "" || city.trim() === "" || postCode.trim() === "" || country.trim() === ""){
        alert("Please Complete the Form"); 
        return false;
    } else { 
        console.log(`Phone No: ${phone}`); 
        console.log(`Address: ${address}`); 
        console.log(`City: ${city}`); 
        console.log(`Post Code: ${postCode}`); 
        console.log(`Country: ${country}`); 
    }   

    console.log("Account created successfully!");
    return true; 
}