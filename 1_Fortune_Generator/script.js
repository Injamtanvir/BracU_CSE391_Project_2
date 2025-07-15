// InjamTanvir

const fortunes = [
    "True wisdom comes not from knowledge, but from understanding.",
    "The journey of a thousand miles begins with a single step.",
    "Your creativity will lead you to success in unexpected ways.",
    "A smile is your passport into the hearts of others.",
    "Good things come to those who wait, but better things come to those who work for it.",
    "The greatest risk is not taking one.",
    "Happiness is not something ready-made. It comes from your own actions.",
    "Your kindness will be repaid tenfold in the future.",
    "The best way to predict the future is to create it.",
    "Success is the sum of small efforts, repeated day in and day out.",
    "You will discover unexpected opportunities today.",
    "Happiness is coming your way very soon.",
    "Trust your instincts—they are leading you to the right path.",
    "A pleasant surprise is waiting for you around the corner.",
    "You will find joy in the little things today.",
    "Hard work will soon pay off in a meaningful way.",
    "A new friendship will bring positive changes in your life.",
    "You are about to embark on a thrilling adventure.",
    "Your kindness will return to you multiplied.",
    "A fresh start will bring new energy and clarity.",
    "Your talents will soon be recognized by others.",
    "Good news will come to you from afar.",
    "You will overcome a challenge with grace and wisdom.",
    "Prosperity is in your near future.",
    "A long-awaited answer will finally come.",
    "Patience will reward you with a happy outcome.",
    "You will inspire someone with your actions.",
    "An old dream is about to become reality.",
    "Your creativity will open new doors.",
    "Someone secretly admires you.",
    "Peace and harmony will fill your home.",
    "A meaningful conversation will change your perspective.",
    "You will learn something valuable today.",
    "Your positive attitude attracts success.",
    "Expect financial gains from an unexpected source.",
    "Your compassion makes a bigger difference than you realize.",
    "A lucky break is just around the corner.",
    "Your efforts will create lasting results.",
    "You will find what you have been searching for.",
    "Joy is contagious—spread it freely."
];


const fortuneBox = document.getElementById("fortune-box");
const greenBtn = document.getElementById("green-btn");
const yellowBtn = document.getElementById("yellow-btn");
const blueBtn = document.getElementById("blue-btn");
const orangeBtn = document.getElementById("orange-btn");



const defaultStyle = {
    fontColor: "#000000",
    bgColor: "#ffffcc",
    borderColor: "#000000",
    fontFamily: "Arial, sans-serif",
    fontSize: "1.1rem"
};


window.onload =function(){
    displayRandomFortune();
    applySavedStyle();
    console.log("Fortune Generates Successfully");
};
function displayRandomFortune(){
    const randomIndex = Math.floor(Math.random() * fortunes.length);
    const randomFortune = fortunes[randomIndex];
    fortuneBox.textContent = randomFortune;
    console.log("Display fortune:", randomFortune);
}



function applySavedStyle(){
    const savedStyle = JSON.parse(localStorage.getItem("fortuneStyle")) || defaultStyle;
    fortuneBox.style.color = savedStyle.fontColor;
    fortuneBox.style.backgroundColor = savedStyle.bgColor;
    fortuneBox.style.borderColor = savedStyle.borderColor;
    fortuneBox.style.fontFamily = savedStyle.fontFamily;
    fortuneBox.style.fontSize = savedStyle.fontSize;
}


greenBtn.addEventListener("click", function(){
    changeFortuneStyle("#ffffff", "#4CAF50", "#FFEB3B");
});

yellowBtn.addEventListener("click", function() {
    changeFortuneStyle("#000000", "#FFEB3B", "#FF9800");
});

blueBtn.addEventListener("click", function(){
    changeFortuneStyle("#ffffff", "#2196F3", "#4CAF50");
});

orangeBtn.addEventListener("click", function(){
    changeFortuneStyle("#000000", "#FF9800", "#BF360C");
});






function changeFortuneStyle(fontColor, bgColor, borderColor){
    fortuneBox.style.color = fontColor;
    fortuneBox.style.backgroundColor = bgColor;
    fortuneBox.style.borderColor = borderColor;
    
    const families = ["Arial, sans-serif", "Georgia, serif", "Verdana, sans-serif"];
    const sizes = ["1.0rem", "1.1rem", "1.2rem"];
    
    const randomFamily = families[Math.floor(Math.random() * families.length)];
    const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
    
    fortuneBox.style.fontFamily = randomFamily;
    fortuneBox.style.fontSize = randomSize;
    

    //local
    const styleToSave = {
        fontColor: fontColor,
        bgColor: bgColor,
        borderColor: borderColor,
        fontFamily: randomFamily,
        fontSize: randomSize
    };
    localStorage.setItem("fortuneStyle", JSON.stringify(styleToSave));
    console.log("Changed & save box style");
}


function convert(){
    const inputValue = document.getElementById("hero-input").value;
    const result = document.getElementById("conversion-result");
    
    if(inputValue.trim() === ""){
        result.textContent = "Please enter a value";
        return;
    }

    // console.log("Converted value:", converted);
} 