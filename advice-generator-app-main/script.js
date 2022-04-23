//declaring the variables for the app
let num = document.querySelector(".adviceNum"); //shows the card number
let advice = document.querySelector(".advice"); //shows the advice
let change = document.querySelector(".change"); //shows the change advice button

//listening to the click of the button
change.addEventListener("click", getAdvice);



//getting the advice from the API
async function getAdvice() {
    let response = await fetch("https://api.adviceslip.com/advice");
    let data = await response.json(); 
    //showing the response from the API on the screen
    num.innerHTML = "ADVICE #"+data.slip.id;
    advice.innerHTML ='"'+data.slip.advice+'"';
}

