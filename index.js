function randomImg() {   

    let randomNumber1 = Math.floor(Math.random('randomNumber1')*6) +1
    let randomNumber2 = Math.floor(Math.random('randomNumber2')*6) +1 
//console.log(randomNumber1)


//document.querySelector('img').setAttribute('src', '')

let player1 = document.querySelector(".img1").setAttribute("src", "../dicee/images/dice" + randomNumber1 + ".png");

let player2 = document.querySelector(".img2").setAttribute("src", "../dicee/images/dice" + randomNumber2 + ".png");

let heading = document.querySelector("h1");

if (randomNumber1 > randomNumber2 ) {
    heading.innerHTML = "Player 1 wins!🥇"; 

} else if (randomNumber1 < randomNumber2){
    heading.innerHTML = "Player 2 wins!🥇";
} else {
    heading.innerHTML = "whaaat? It's a tie! 😅";
}

}



