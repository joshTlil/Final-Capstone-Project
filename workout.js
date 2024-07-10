const storedData = localStorage.getItem('schedule');

const formData = JSON.parse(storedData);

const imgElement = document.createElement('img');

const description = document.createElement('p');

const breakfast = document.createElement('p');

const lunch = document.createElement('p');

const dinner = document.createElement('p');

const snacks = document.createElement('p');
let imgSrc = '';

const logout = document.getElementById('logout');
 logout.addEventListener("click", function(){
    window.location.href = "index.html";
})

if(formData.body === "Tone" && formData.location === "home"){
    console.log("Hello")
    const loseWeight = {
        workout1: "3 X 20 Push-UPS",
        workout2: "1 mile Jog",
        workout3: "3 X 10 Decline Press Up Jacks",
        workout4: "2X10 Burpees",
        workout5: "1 minute Jumping Jacks"
    }

    const dietTone = {
        breakfast: "Protein Smoothie",
        lunch: "Chicken and Quinoa Bowl",
        dinner: "Baked Chicken with Roasted Vegetables",
        snacks: "Hard Boil Eggs"
    }

    breakfast.textContent = "Breakfast: " + dietTone.breakfast;
    lunch.textContent = "Lunch: " + dietTone.lunch;
    dinner.textContent = "Dinner: " +dietTone.dinner;
    snacks.textContent = "Snacks: "+dietTone.snacks;
    document.getElementById('diet').appendChild(breakfast);
    document.getElementById('diet').appendChild(lunch);
    document.getElementById('diet').appendChild(dinner);
    document.getElementById('diet').appendChild(snacks);

    const loseKeys = Object.keys(loseWeight);

const loseIndex = Math.floor(Math.random() * loseKeys.length);

const loseRandKey = loseKeys[loseIndex];

const loseRandValue = loseWeight[loseRandKey];
console.log(loseRandValue)

if(loseRandValue === "3 X 20 Push-UPS"){
   imgSrc = './Images/pushUps.jpg';
   imgElement.src = imgSrc;
   description.textContent = "3 X 20 Push-UPS";
   document.getElementById('exerciseImageContainer').appendChild(imgElement);
   document.getElementById('descriptions').appendChild(description);
   console.log("Hello");
}else if(loseRandValue === "1 mile Jog"){
   imgSrc = './Images/jogging.jpg';
   imgElement.src = imgSrc;
   description.textContent = "1 mile Jog";
   document.getElementById('exerciseImageContainer').appendChild(imgElement);
   console.log("Hello2");
}else if(loseRandValue === "3 X 10 Decline Press Up Jacks"){
    imgSrc = './Images/declinePressUp.png';
    imgElement.src = imgSrc;
    description.textContent = "3 X 10 Decline Press Up Jacks";
    document.getElementById('exerciseImageContainer').appendChild(imgElement);
    console.log("Hello3");
}else if(loseRandValue === "2X10 Burpees"){
    imgSrc = './Images/burpees.jpg';
    imgElement.src = imgSrc;
    description.textContent = "2X10 Burpees";
    document.getElementById('exerciseImageContainer').appendChild(imgElement);
    console.log("Hello4");
}else if(loseRandValue === "1 minute Jumping Jacks"){
    imgSrc = './Images/jumpingJacks.jpg'; 
    imgElement.src = imgSrc;
    description.textContent = "1 minute Jumping Jacks";
    document.getElementById('exerciseImageContainer').appendChild(imgElement);
    console.log("Hello5"); 
}
}

if(formData.body === "Tone" && formData.location === "gym"){
    console.log("Hello")
    const loseWeight = {
        workout1: "1 Mile Stair Climbers",
        workout2: "1 Mile Treadmill",
        workout3: "10 Minute Row Machine",
        workout4: "2 X 10 Triceps",
        workout5: "3 X 10 Chest Press"
    }

    const dietTone = {
        breakfast: "Protein Smoothie",
        lunch: "Chicken and Quinoa Bowl",
        dinner: "Baked Chicken with Roasted Vegetables",
        snacks: "Hard Boil Eggs"
    }

    const loseKeys = Object.keys(loseWeight);

const loseIndex = Math.floor(Math.random() * loseKeys.length);

const loseRandKey = loseKeys[loseIndex];

const loseRandValue = loseWeight[loseRandKey];
console.log(loseRandValue)

if(loseRandValue === "1 Mile Treadmill"){
   imgSrc = './Images/treadMill.jpg';
   imgElement.src = imgSrc;
   description.textContent = "1 Mile Treadmill";
   document.getElementById('exerciseImageContainer').appendChild(imgElement);
   document.getElementById('descriptions').appendChild(description);
   console.log("Hello");
}else if(loseRandValue === "1 Mile Stair Climbers"){
   imgSrc = './Images/stairClimbers.jpg';
   imgElement.src = imgSrc;
   description.textContent = "1 Mile Stair Climbers";
   document.getElementById('exerciseImageContainer').appendChild(imgElement);
   console.log("Hello2");
}else if(loseRandValue === "10 Minute Row Machine"){
    imgSrc = './Images/rowMachine.png';
    imgElement.src = imgSrc;
    description.textContent = "10 Minute Row Machine";
    document.getElementById('exerciseImageContainer').appendChild(imgElement);
    console.log("Hello3");
}else if(loseRandValue === "2 X 10 Triceps"){
    imgSrc = './Images/tricepMachine.jpg';
    imgElement.src = imgSrc;
    description.textContent = "2 X 10 Triceps";
    document.getElementById('exerciseImageContainer').appendChild(imgElement);
    console.log("Hello4");
}else if(loseRandValue === "3 X 10 Chest Press"){
    imgSrc = './Images/chestPress.jpg'; 
    imgElement.src = imgSrc;
    description.textContent = "3 X 10 Chest Press";
    document.getElementById('exerciseImageContainer').appendChild(imgElement);
    console.log("Hello5"); 
}
}

if(formData.body === "Ripped"&& formData.location === "home"){
    console.log("Hello")
    const ripped = {
        workout1: "3 X 5 Diamond Push-Ups",
        workout2: "3 X 45 seconds Superman hold",
        workout3: "2 X 5 Lunges",
        workout4: "1 minute Wall Sit",
        workout5: "1 Mile Jog"
    }

    const dietRipped = {
        breakfast: "Protein Pancakes",
        lunch: "Turkey and Avocado Wrap",
        dinner: "Baked Chicken with Sweet Potatoes and Vegetables",
        snacks: "Apple Slices with Almond Butter"
    }

    console.log(dietRipped.breakfast);
    breakfast.textContent = "Breakfast: " + dietRipped.breakfast;
    lunch.textContent = "Lunch: " + dietRipped.lunch;
    dinner.textContent = "Dinner: " +dietRipped.dinner;
    snacks.textContent = "Snacks: "+dietRipped.snacks;
    document.getElementById('diet').appendChild(breakfast);
    document.getElementById('diet').appendChild(lunch);
    document.getElementById('diet').appendChild(dinner);
    document.getElementById('diet').appendChild(snacks);

    const loseKeys = Object.keys(ripped);

const loseIndex = Math.floor(Math.random() * loseKeys.length);

const loseRandKey = loseKeys[loseIndex];

const loseRandValue = ripped[loseRandKey];
console.log(loseRandValue)

if(loseRandValue === "3 X 5 Diamond Push-Ups"){
   imgSrc = './Images/dimondPushUp.jpg';
   imgElement.src = imgSrc;
   description.textContent = "3 X 5 Diamond Push-Ups";
   document.getElementById('exerciseImageContainer').appendChild(imgElement);
   document.getElementById('descriptions').appendChild(description);
   console.log("Hello");
}else if(loseRandValue === "3 X 45 seconds Superman hold"){
   imgSrc = './Images/supermanHold.jpg';
   imgElement.src = imgSrc;
   description.textContent = "3 X 45 seconds Superman hold";
   document.getElementById('exerciseImageContainer').appendChild(imgElement);
   document.getElementById('descriptions').appendChild(description);
   console.log("Hello2");
}else if(loseRandValue === "2 X 5 Lunges"){
    imgSrc = './Images/lunges.jpg';
    imgElement.src = imgSrc;
    description.textContent = "2 X 5 Lunges";
    document.getElementById('exerciseImageContainer').appendChild(imgElement);
    document.getElementById('descriptions').appendChild(description);
    console.log("Hello3");
}else if(loseRandValue === "1 minute Wall Sit"){
    imgSrc = './Images/wallSit.jpg';
    imgElement.src = imgSrc;
    description.textContent = "1 minute Wall Sit";
    document.getElementById('exerciseImageContainer').appendChild(imgElement);
    document.getElementById('descriptions').appendChild(description);
    console.log("Hello4");
}else if(loseRandValue === "1 Mile Jog"){
    imgSrc = './Images/jogging.jpg'; 
    imgElement.src = imgSrc;
    description.textContent = "1 Mile Jog";
    document.getElementById('exerciseImageContainer').appendChild(imgElement);
    document.getElementById('descriptions').appendChild(description);
    console.log("Hello5"); 
}
}

if(formData.body === "Ripped"&& formData.location === "gym"){
    console.log("Hello")
    const ripped = {
        workout1: "3 X 10 Shoulder Press",
        workout2: "3 X 10 Bicep Curls",
        workout3: "2 X 15 Chest Press",
        workout4: "3 X 20 Seated Leg Press",
        workout5: "1 Mile Treadmill"
    }

    const dietRipped = {
        breakfast: "Protein Pancakes",
        lunch: "Turkey and Avocado Wrap",
        dinner: "Baked Chicken with Sweet Potatoes and Vegetables",
        snacks: "Apple Slices with Almond Butter"
    }

    console.log(dietRipped.breakfast);
    breakfast.textContent = "Breakfast: " + dietRipped.breakfast;
    lunch.textContent = "Lunch: " + dietRipped.lunch;
    dinner.textContent = "Dinner: " +dietRipped.dinner;
    snacks.textContent = "Snacks: "+dietRipped.snacks;
    document.getElementById('diet').appendChild(breakfast);
    document.getElementById('diet').appendChild(lunch);
    document.getElementById('diet').appendChild(dinner);
    document.getElementById('diet').appendChild(snacks);

    const loseKeys = Object.keys(ripped);

const loseIndex = Math.floor(Math.random() * loseKeys.length);

const loseRandKey = loseKeys[loseIndex];

const loseRandValue = ripped[loseRandKey];
console.log(loseRandValue)

if(loseRandValue === "3 X 10 Shoulder Press"){
   imgSrc = './Images/ShoulderPress.jpg';
   imgElement.src = imgSrc;
   description.textContent = "3 X 10 Shoulder Press";
   document.getElementById('exerciseImageContainer').appendChild(imgElement);
   document.getElementById('descriptions').appendChild(description);
   console.log("Hello");
}else if(loseRandValue === "2 X 15 Chest Press"){
   imgSrc = './Images/chestPress.jpg';
   imgElement.src = imgSrc;
   description.textContent = "2 X 15 Chest Press";
   document.getElementById('exerciseImageContainer').appendChild(imgElement);
   document.getElementById('descriptions').appendChild(description);
   console.log("Hello2");
}else if(loseRandValue === "3 X 10 Bicep Curls"){
    imgSrc = './Images/bicepCurls.jpg';
    imgElement.src = imgSrc;
    description.textContent = "3 X 10 Bicep Curls";
    document.getElementById('exerciseImageContainer').appendChild(imgElement);
    document.getElementById('descriptions').appendChild(description);
    console.log("Hello3");
}else if(loseRandValue === "3 X 20 Seated Leg Press"){
    imgSrc = './Images/seatedLegPress.jpg';
    imgElement.src = imgSrc;
    description.textContent = "3 X 20 Seated Leg Press";
    document.getElementById('exerciseImageContainer').appendChild(imgElement);
    document.getElementById('descriptions').appendChild(description);
    console.log("Hello4");
}else if(loseRandValue === "1 Mile Treadmill"){
    imgSrc = './Images/treadMill.jpg'; 
    imgElement.src = imgSrc;
    description.textContent = "1 Mile Treadmill";
    document.getElementById('exerciseImageContainer').appendChild(imgElement);
    document.getElementById('descriptions').appendChild(description);
    console.log("Hello5"); 
}
}

if(formData.body === "Bulk"&& formData.location === "home"){
    console.log("Hello")
    const bulkUp = {
        workout1: "6 X 12 Push Ups",
        workout2: "6 per minute for 15 minutes Burpees",
        workout3: "3 X 5 Pull Ups",
        workout4: "2 X 12 Triceps Dips",
        workout5: "3 X 15 Step Up"
    }

    const dietBulk = {
        breakfast: "Oatmeal with Protein Powder and Fruit",
        lunch: "Chicken and Rice Bowl",
        dinner: "Beef and Potato Bowl",
        snacks: "Whole Grain Crackers with Cheese"
    }

    breakfast.textContent = "Breakfast: " + dietBulk.breakfast;
    lunch.textContent = "Lunch: " + dietBulk.lunch;
    dinner.textContent = "Dinner: " +dietBulk.dinner;
    snacks.textContent = "Snacks: "+dietBulk.snacks;
    document.getElementById('diet').appendChild(breakfast);
    document.getElementById('diet').appendChild(lunch);
    document.getElementById('diet').appendChild(dinner);
    document.getElementById('diet').appendChild(snacks);

const loseKeys = Object.keys(bulkUp);

const loseIndex = Math.floor(Math.random() * loseKeys.length);

const loseRandKey = loseKeys[loseIndex];

const loseRandValue = bulkUp[loseRandKey];
console.log(loseRandValue)

if(loseRandValue === "6 X 12 Push Ups"){
   imgSrc = './Images/pushUps.jpg';
   imgElement.src = imgSrc;
   description.textContent = "6 X 12 Push Ups";
   document.getElementById('exerciseImageContainer').appendChild(imgElement);
   console.log("Hello");
}else if(loseRandValue === "6 per minute for 15 minutes Burpees"){
   imgSrc = './Images/burpees.jpg';
   imgElement.src = imgSrc;
   description.textContent = "6 per minute for 15 minutes Burpees";
   document.getElementById('exerciseImageContainer').appendChild(imgElement);
   console.log("Hello2");
}else if(loseRandValue === "3 X 5 Pull Ups"){
    imgSrc = './Images/pullUps.jpg';
    imgElement.src = imgSrc;
    description.textContent = "3 X 5 Pull Ups";
    document.getElementById('exerciseImageContainer').appendChild(imgElement);
    console.log("Hello3");
}else if(loseRandValue === "2 X 12 Triceps Dips"){
    imgSrc = './Images/tricepDips.jpg';
    imgElement.src = imgSrc;
    description.textContent = "2 X 12 Triceps Dips";
    document.getElementById('exerciseImageContainer').appendChild(imgElement);
    console.log("Hello4");
}else if(loseRandValue === "3 X 15 Step Up"){
    imgSrc = './Images/stepUp.png'; 
    imgElement.src = imgSrc;
    description.textContent = "3 X 15 Step Up";
    document.getElementById('exerciseImageContainer').appendChild(imgElement);
    console.log("Hello5"); 
}
}

if(formData.body === "Bulk"&& formData.location === "gym"){
    console.log("Hello")
    const bulkUp = {
        workout1: "3 X 15 Lat Pull Down",
        workout2: "3 X 15 Seated Leg Press",
        workout3: "3 X 15 Chest Press",
        workout4: "2 X 12 Bicep Curls",
        workout5: "3 X 15 Shoulder Press"
    }

    const dietBulk = {
        breakfast: "Oatmeal with Protein Powder and Fruit",
        lunch: "Chicken and Rice Bowl",
        dinner: "Beef and Potato Bowl",
        snacks: "Whole Grain Crackers with Cheese"
    }

    breakfast.textContent = "Breakfast: " + dietBulk.breakfast;
    lunch.textContent = "Lunch: " + dietBulk.lunch;
    dinner.textContent = "Dinner: " +dietBulk.dinner;
    snacks.textContent = "Snacks: "+dietBulk.snacks;
    document.getElementById('diet').appendChild(breakfast);
    document.getElementById('diet').appendChild(lunch);
    document.getElementById('diet').appendChild(dinner);
    document.getElementById('diet').appendChild(snacks);

const loseKeys = Object.keys(bulkUp);

const loseIndex = Math.floor(Math.random() * loseKeys.length);

const loseRandKey = loseKeys[loseIndex];

const loseRandValue = bulkUp[loseRandKey];
console.log(loseRandValue)

if(loseRandValue === "3 X 15 Lat Pull Down"){
   imgSrc = './Images/latPullDown.jpg';
   imgElement.src = imgSrc;
   description.textContent = "3 X 15 Lat Pull Down";
   document.getElementById('exerciseImageContainer').appendChild(imgElement);
   console.log("Hello");
}else if(loseRandValue === "3 X 15 Seated Leg Press"){
   imgSrc = './Images/seatedLegPress.jpg';
   imgElement.src = imgSrc;
   description.textContent = "3 X 15 Seated Leg Press";
   document.getElementById('exerciseImageContainer').appendChild(imgElement);
   console.log("Hello2");
}else if(loseRandValue === "3 X 15 Chest Press"){
    imgSrc = './Images/chestPress.jpg';
    imgElement.src = imgSrc;
    description.textContent = "3 X 15 Chest Press";
    document.getElementById('exerciseImageContainer').appendChild(imgElement);
    console.log("Hello3");
}else if(loseRandValue === "2 X 12 Bicep Curls"){
    imgSrc = './Images/bicepCurls.jpg';
    imgElement.src = imgSrc;
    description.textContent = "2 X 12 Bicep Curls";
    document.getElementById('exerciseImageContainer').appendChild(imgElement);
    console.log("Hello4");
}else if(loseRandValue === "3 X 15 Shoulder Press"){
    imgSrc = './Images/ShoulderPress.jpg'; 
    imgElement.src = imgSrc;
    description.textContent = "3 X 15 Shoulder Press";
    document.getElementById('exerciseImageContainer').appendChild(imgElement);
    console.log("Hello5"); 
}
}