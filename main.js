//DOM Elements
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    quote = document.getElementById('quote'),
    moodDiv = document.getElementById('moodDiv'),
    moodMessage = document.getElementById('moodMessage');

const great=document.getElementById('great'),
    fine=document.getElementById('fine'),
    okay=document.getElementById('okay'),
    bad=document.getElementById('bad'),
    poor=document.getElementById('poor');


var qarr = ["The heights of great men reached and kept were not attained by sudden flight, but, they, while their companions slept, were toiling upwards through the night", 
            "They call us dreamers but we're the ones who don't sleep", "The difference between 'ordinary' and 'extraordinary' is that little 'extra'", "Success is a decision",
            "Be addicted to your passion instead of your distractions", "Passion + Consistency + Faith = Success", "The comeback is always bigger than the setback", 
            "God knows when to send you exactly what you need", "The struggle is real... but so is God"];

//Function to show current time
function showTime() {

    let day = new Date();
    let hour = day.getHours();
    let min = day.getMinutes();
    let sec = day.getSeconds();

    //adding zeros in front of minutes and seconds
    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }

    //AM or PM
    const ap = hour >= 12 ? "PM" : "AM";

    //12hr clock
    hour = hour % 12 || 12;

    //Display
    time.innerHTML = hour + "<span>:</span>" + min + "<span>:</span>" + sec + " " + ap;

    setTimeout(showTime, 1000);
}

//Function to change background and greeting
function change() {

    let day = new Date();
    let hour = day.getHours();

    if (hour < 12) {
        document.body.style.backgroundImage = "url('1.jpg')";
        document.body.style.color = "black";
        document.body.style.backgroundSize = "1500px 800px";
        greeting.textContent = "Good morning, ";
        quote.textContent = qarr[Math.floor(Math.random() * qarr.length)];
        quote.style.opacity = 1;
    }
    else if (hour < 18) {
        document.body.style.backgroundImage = "url('2.jpg')";
        document.body.style.color = "snow";
        document.body.style.backgroundSize = "1500px 800px";
        greeting.textContent = "Good afternoon, ";
        quote.textContent = qarr[Math.floor(Math.random() * qarr.length)];
        quote.style.opacity = 1;
    }
    else {
        document.body.style.backgroundImage = "url('3.jpg')";
        document.body.style.backgroundSize = "1500px 800px";
        greeting.textContent = "Good evening, ";
        quote.textContent = qarr[Math.floor(Math.random() * qarr.length)];
    }
}

//Functions to change and store name in local storage
function getName() {
    if (localStorage.getItem('name') === null) {
        name.textContent = "[Enter your name here]";
    }
    else {
        name.textContent = localStorage.getItem('name');
    }
}
function setName(e) {
    if (e.type === 'keypress'){
        //Ensure key pressed is "enter key"
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur(); 
        }
    }
    else {
        localStorage.setItem('name', e.target.innerText);
    }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

//Function to display moodMessage
function mood() {
    if (great.checked) {
        moodDiv.style.display = "none";
        moodMessage.textContent = "Awesome😊";
    }
    else if (fine.checked) {
        moodDiv.style.display = "none";
        moodMessage.textContent = "Splendid😌";
    }  
    else if (okay.checked) {
        moodDiv.style.display = "none";
        moodMessage.textContent = "Alrighty👍";
    }  
    else if (bad.checked) {
        moodDiv.style.display = "none";
        moodMessage.textContent = "Aw, hope you feel better soon🙃";
    }
    else if (poor.checked) {
        moodDiv.style.display = "none";
        moodMessage.textContent = "Oh no! Take some self-care time and try to cheer up🤗";
    }    
}

//Calling Functions
showTime();
change();
getName(); 