//randomization of pick-up lines sayings
var pickupLines = ["Are you the Declaration of Independence because you are a national treasure.", "Can't spell WALUIGI without U and I.", "Are you my grades? Because I care about you way to much.", "I don't want to be Obamaself this Valentine's Day.", "Are you Dutch? Because amsterDAMN!", "Help! I've fallen for you and can't get up.","Vincent Van Gogh out with me.", "Is your name WiFi? Because I'm feeling a connection.", "Are you relgious? Because you are the answer to all my prayers", "You look so familiar...didn't we take a class together? I could've sworn we had chemistry.", "I'm Danny Devoted 2 u.", "I would never give you up.", "4 + 4 = 8, but You + Me = Fate", "There must be something wrong with my eyes. I can't take them off you.", "Do you have a name or can I call you mine?", "Hello, I'm a thief, and I'm here to steal your heart.", "I seem to have lost my phone number. Can I have yours?", "You're so hot you would make the Devil sweat."];
const randomLine = Math.floor(Math.random() * pickupLines.length);
console.log(randomLine, pickupLines[randomLine]);


var noButton = document.getElementById("noButton");
var pickUp = document.getElementById("narrator")


//eventListener -> waits for an event to occur (in this case a click)
noButton.addEventListener("click", change); //change the positioning of the button
function change(){
    var x = Math.floor(Math.random() * 500) + 1;
    var y = Math.floor(Math.random() * 500) + 1;
    noButton.style.left = x + "px";
    noButton.style.top = y + "px";
    
    const randomLine = Math.floor(Math.random() * pickupLines.length);
    console.log(randomLine, pickupLines[randomLine]);
    pickUp.innerHTML = pickupLines[randomLine];

}

//eventListener -> hover/mouse over
noButton.addEventListener("mouseover", change); //change the positioning of the button
function change(){
    var x = Math.floor(Math.random() * 500) + 1;
    var y = Math.floor(Math.random() * 500) + 1;
    noButton.style.left = x + "px";
    noButton.style.top = y + "px";

    const randomLine = Math.floor(Math.random() * pickupLines.length);
    console.log(randomLine, pickupLines[randomLine]);
    pickUp.innerHTML = pickupLines[randomLine];
}


