const logout = document.getElementById('logout');
 logout.addEventListener("click", function(){
    window.location.href = "index.html";
 })

document.addEventListener("DOMContentLoaded", function(){
    // const cards = document.querySelectorAll('.card');
    // cards.forEach(card => card.classList.add('show'));

const storedData = localStorage.getItem('formData');

if(storedData){
    const formData = JSON.parse(storedData);
    calcBmi(formData.weight, formData.height);
    // if(formData.weight = 123){
    //     console.log("Hello this works");
    //     document.getElementById('card1').textContent = "Hello";
    // }
}

const getProfile = localStorage.getItem('workProfile');
const profileData = JSON.parse(getProfile);
console.log(profileData)
if(profileData.bmi === "Underweight"){
    console.log("Hello");
    //In order to change the text content I will have to user get by ID
    document.getElementById('body-type1').textContent = "Tone";
    document.getElementById('button1').textContent = "Get Tone";
    document.getElementById('image1').src = "Images/tone.jpg";

    document.getElementById('body-type2').textContent = "Ripped";
    document.getElementById('button2').textContent = "Get Ripped";
    document.getElementById('image2').src = "Images/ripped.jpg"

    document.getElementById('body-type3').textContent = "Bulk";
    document.getElementById('button3').textContent = "Get Big";
    document.getElementById('image3').src = "Images/builder.jpg"
}else if (profileData.bmi === "Normal weight"){
    document.getElementById('body-type1').textContent = "Ripped";
    document.getElementById('button1').textContent = "Get Ripped";
    document.getElementById('image1').src = "Images/ripped.jpg"

    document.getElementById('body-type2').textContent = "Bulk";
    document.getElementById('button2').textContent = "Get Big";
    document.getElementById('image2').src = "Images/builder.jpg"

    document.getElementById('body-type3').textContent = "Tone";
    document.getElementById('button3').textContent = "Get Tone";
    document.getElementById('image3').src = "Images/tone.jpg"
}else if(profileData.bmi === "Overweight"){
    document.getElementById('body-type1').textContent = "Ripped";
    document.getElementById('button1').textContent = "Get Ripped";
    document.getElementById('image1').src = "Images/ripped.jpg"

    document.getElementById('body-type2').textContent = "Tone";
    document.getElementById('button2').textContent = "Get Tone";
    document.getElementById('image2').src = "Images/tone.jpg"

    document.getElementById('body-type3').textContent = "Bulk";
    document.getElementById('button3').textContent = "Get Big";
    document.getElementById('image3').src = "Images/builder.jpg"
}else{
    document.getElementById('body-type1').textContent = "Ripped";
    document.getElementById('button1').textContent = "Get Ripped";
    document.getElementById('image1').src = "Images/ripped.jpg"

    document.getElementById('body-type2').textContent = "Tone";
    document.getElementById('button2').textContent = "Get Tone";
    document.getElementById('image2').src = "Images/tone.jpg"

    document.getElementById('body-type3').textContent = "Bulk";
    document.getElementById('button3').textContent = "Get Big";
    document.getElementById('image3').src = "Images/builder.jpg"
}

if(document.getElementById('button1').textContent === "Get Tone"){
    console.log("Yes this works!");
}

});

document.getElementById('button1').addEventListener("click", function(){
    console.log("Hello");
    if(document.getElementById('button1').textContent === "Get Tone"){
        console.log("Yes this works!");
        const storedData = localStorage.getItem('formData');

        const formData = JSON.parse(storedData);

        const schedule = {
            body: "Tone",
            location: formData.location,
        }
        localStorage.setItem('schedule', JSON.stringify(schedule));
        window.location.href = "todoCalendar.html";
    } else if(document.getElementById('button1').textContent === "Get Ripped"){
        console.log("Yes this works!");
        const storedData = localStorage.getItem('formData');

        const formData = JSON.parse(storedData);

        const schedule = {
            body: "Ripped",
            location: formData.location,
        }
        localStorage.setItem('schedule', JSON.stringify(schedule));
        window.location.href = "todoCalendar.html";
    } else if(document.getElementById('button1').textContent === "Get Big"){
        console.log("Yes this works!");
        const storedData = localStorage.getItem('formData');

        const formData = JSON.parse(storedData);

        const schedule = {
            body: "Bulk",
            location: formData.location,
        }
        localStorage.setItem('schedule', JSON.stringify(schedule));
        window.location.href = "todoCalendar.html";
    }
})

document.getElementById('button2').addEventListener("click", function(){
    console.log("Hello button2");
    if(document.getElementById('button2').textContent === "Get Tone"){
        console.log("Yes this works!");
        const storedData = localStorage.getItem('formData');

        const formData = JSON.parse(storedData);

        const schedule = {
            body: "Tone",
            location: formData.location,
        }
        localStorage.setItem('schedule', JSON.stringify(schedule));
        window.location.href = "todoCalendar.html";
    } else if(document.getElementById('button2').textContent === "Get Ripped"){
        console.log("Yes this works!");
        const storedData = localStorage.getItem('formData');

        const formData = JSON.parse(storedData);

        const schedule = {
            body: "Ripped",
            location: formData.location,
        }
        localStorage.setItem('schedule', JSON.stringify(schedule));
        window.location.href = "todoCalendar.html";
    } else if(document.getElementById('button2').textContent === "Get Big"){
        console.log("Yes this works!");
        const storedData = localStorage.getItem('formData');

        const formData = JSON.parse(storedData);

        const schedule = {
            body: "Bulk",
            location: formData.location,
        }
        localStorage.setItem('schedule', JSON.stringify(schedule));
        window.location.href = "todoCalendar.html";
    }
})

document.getElementById('button3').addEventListener("click", function(){
    console.log("Hello button 3");
    if(document.getElementById('button3').textContent === "Get Tone"){
        console.log("Yes this works!");
        const storedData = localStorage.getItem('formData');

        const formData = JSON.parse(storedData);

        const schedule = {
            body: "Tone",
            location: formData.location,
        }
        localStorage.setItem('schedule', JSON.stringify(schedule));
        window.location.href = "todoCalendar.html";
    } else if(document.getElementById('button3').textContent === "Get Ripped"){
        console.log("Yes this works!");
        const storedData = localStorage.getItem('formData');

        const formData = JSON.parse(storedData);

        const schedule = {
            body: "Ripped",
            location: formData.location,
        }
        localStorage.setItem('schedule', JSON.stringify(schedule));
        window.location.href = "todoCalendar.html";
    } else if(document.getElementById('button3').textContent === "Get Big"){
        console.log("Yes this works!");
        const storedData = localStorage.getItem('formData');

        const formData = JSON.parse(storedData);

        const schedule = {
            body: "Bulk",
            location: formData.location,
        }
        localStorage.setItem('schedule', JSON.stringify(schedule));
        window.location.href = "todoCalendar.html";
    }
})




function calcBmi(weight, height){
    const bmi = (weight / (height * height)) * 703;
    let category = "";
    
    if(bmi < 18.5){
        category = "Underweight";
        const storedData = localStorage.getItem('formData');

        const formData = JSON.parse(storedData);
    
        const workoutProfile = {
            name: formData.name,
            bmi: category,
            location: formData.location
        }
        localStorage.setItem('workProfile', JSON.stringify(workoutProfile));
    }else if(bmi >= 18.5 && bmi < 24.9){
        category = "Normal weight";
        const storedData = localStorage.getItem('formData');

        const formData = JSON.parse(storedData);
    
        const workoutProfile = {
            name: formData.name,
            bmi: category,
            location: formData.location
        }
        localStorage.setItem('workProfile', JSON.stringify(workoutProfile));
    }else if (bmi >= 25 && bmi < 29.9){
        category = "Overweight";
        const storedData = localStorage.getItem('formData');

        const formData = JSON.parse(storedData);
    
        const workoutProfile = {
            name: formData.name,
            bmi: category,
            location: formData.location
        }
        localStorage.setItem('workProfile', JSON.stringify(workoutProfile));
    }else {
        category = "Obese";
        const storedData = localStorage.getItem('formData');

        const formData = JSON.parse(storedData);
    
        const workoutProfile = {
            name: formData.name,
            bmi: category,
            location: formData.location
        }
        localStorage.setItem('workProfile', JSON.stringify(workoutProfile));
    }
    
}

