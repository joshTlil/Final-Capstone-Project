const logComplete = document.getElementById('loginComplete');
const form = document.getElementsByClassName('login-form')[0];
const passwordReq = document.getElementById('password-requirement');

logComplete.addEventListener('click', function(event){
    //When the user clicks the submit button gets overwritten to be able to go to the next page
    event.preventDefault();
    console.log("Is this working");
    const name = document.getElementById('name').value;
    const password = document.getElementById('password').value;

    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if(!passwordPattern.test(password)){
        // event.preventDefault();
        passwordReq.style.display = 'block';
        return;
    }
    
 
    // const userData = {
    //     name: name,
    //     password: password
    // };

    let users = JSON.parse(localStorage.getItem('userInfo'));
    if (!Array.isArray(users)) {
        users = [];
    }
    // users.push(userData);

    // localStorage.setItem('userInfo', JSON.stringify(users));
    const foundUser = users.find(user => user.name === name && user.password === password);
    if (foundUser) {
        console.log("User already exists"); // Log message that user already exists
        window.location.href = "todoCalendar.html";
    } else {
        // Add new user to the array
        const userData = {
            name: name,
            password: password
        };
        users.push(userData);

        // Update localStorage with the updated user list
        localStorage.setItem('userInfo', JSON.stringify(users));

        console.log("User added successfully"); // Log message that user is added

        window.location.href = "info.html";

        // Redirect to todoCalendar.html or another page as needed
        // window.location.href = "todoCalendar.html";
    }

    // window.location.href = "info.html"; // Redirect to info.html

    

    // let users = JSON.parse(localStorage.getItem('userInfo'));
    // localStorage.setItem('userInfo', JSON.stringify(users))
    
    // users.push(userData);
    // const foundUser = users.some(user => user.name === name && user.password === password);
    
    
    // localStorage.setItem('userInfo', JSON.stringify(users))
   
    // console.log("Need to direct input page");

    
    // if(foundUser){
    //     window.location.href ="todoCalendar.html";
    //     console.log("User already exist");
    // }else{
    //     const userData = {
    //         name: name,
    //         password: password
    //     }

    //     // if (!Array.isArray(users)) {
    //     //     users = [];
    //     // }

    //     users.push(userData);
    
    //     localStorage.setItem('userInfo', JSON.stringify(users))
    //     window.location.href = "info.html";
    //     console.log("Need to direct input page");
    // }
})