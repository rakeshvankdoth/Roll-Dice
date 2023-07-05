var randomnumber1 = Math.floor(Math.random()*6) + 1;

var randomdice = "dice" + randomnumber1 + ".png";

var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomdice);

var randomnumber2 = Math.floor(Math.random()*6) + 1;

var randomdice = "dice" + randomnumber2 + ".png";

var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", randomdice);

if(randomnumber1 > randomnumber2){
    document.querySelector("h1").innerHTML = "🥳 Player 1 Wins !!!!!";
}else if(randomnumber1 < randomnumber2){
    document.querySelector("h1").innerHTML = "🥳 Player 2 Wins !!!!!";
}else{
    document.querySelector("h1").innerHTML = "DRAWWWWWWW!!!!!!!!";
}
const refreshButton = document.getElementById('refreshButton');

        // Add a click event listener to the button
        refreshButton.addEventListener('click', function() {
            // Reload the page when the button is clicked
            location.reload();
        });
