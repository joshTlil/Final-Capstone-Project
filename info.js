const userName = document.getElementById('name');
const weight = document.getElementById('weight');
const height = document.getElementById('height');
const myButton = document.getElementById('submit');
let total = 0;
let myName = "";

myButton.addEventListener('click', function(event){
    event.preventDefault();
    console.log("Is button working");
    const storedData = localStorage.getItem('userInfo');

if(storedData){
    const userData = JSON.parse(storedData);
        console.log("Hello this works");
        // document.getElementById('card1').textContent = "Hello";
    

     myName = userData.name;
     const weight = document.getElementById('weight').value;
     const height = document.getElementById('height').value;
     const location = document.querySelector('input[name="location"]:checked').value;

     if(!weight || !height || !location){
        alert('Please fill out all fields');
        return;
     }
     console.log("This is the username " + myName);
     const formData = {
        name: myName,
        weight: weight,
        height: height,
        location: location
      }; 

    localStorage.setItem('formData', JSON.stringify(formData));
    window.location.href = "option.html";

}
// total = parseFloat(weight.value / (height.value * height.value));
// if(total > 18.5 && total < 24.9){
//     console.log("Normal weight");
//     window.location.href = "option.html";
// }else if(total >= 25 && total > 29.9){
//     console.log("Obesity");
//     window.location.href = "option.html";

// }
})
