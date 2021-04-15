let colors = "purple";

switch (colors) {
    case "red":
        console.log("red, like fire.");
        break;
    case "blue":
        console.log("blue, like the ocean.");
        break;
    case "green":
        console.log("green, like the jungle.");
        break;
    case "yellow":
        console.log("yellow, like the sun.");
        break;
    default: 
        console.log("Let me know your color of choice!")   
        break;
}

// let year = new Date().getFullYear();
// console.log(year);

let schoolGrade = "A";

switch (schoolGrade) {
    case 1:
        console.log("Very good!");
        break;
    case 2:
        console.log("Good, keep on going!");
        break;
    case 3:
        console.log("Not bad, don't give up!");
        break;
    case 4:
        console.log("You can do better! I believe in you!");
        break;
    case 5:
        console.log("What is happening?");
        break;
    case 6:
        console.log("Come on!");
        break;
    default:
        console.log("The entered value is cannot be recognized or is not a German grade. Please enter a number from 1 - 6");
        break;
}

// 3. Fruits
let fruits = "apple";

switch (fruits) {
    case "banana":
        console.log("yellow and nice in pancakes");
        break;
    case "orange":
        console.log("We love them juice and from the Algarve");
        break;
    case "strawberry":
        console.log("Nice with whipped cream");
        break;
    case "mango":
        console.log("Mix it with banana and dragon fruit, and make a shake out of it!");
        break;
    default:
        console.log("We are sorry but the mentioned fruit is not in our data base yet ;( ");
        break;
}

// 4. Percentage Complete
let percentageComplete = 90;

switch (true) {
    case (percentageComplete < 30):
        console.log("Still a long way to go");
        break;
    case (percentageComplete >= 30) && (percentageComplete <= 50):
        console.log("Slowly getting there");
        break;
    case (percentageComplete >= 51) && (percentageComplete <= 80):
        console.log("You can do it!");
        break;
    case (percentageComplete >= 81) && (percentageComplete <= 99):
        console.log("This is the last push!");
        break;
    case (percentageComplete = 100):
        console.log("You're there. Well done!");
        break;
}

// 5. Differences
// 