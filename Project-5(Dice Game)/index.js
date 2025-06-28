
let itbe = document.querySelector(".roll")
itbe.addEventListener("click",function(){
let Maths1 = Math.random();
let Maths2 = Math.random();
let random1 = Math.floor(Maths1*6) + 1
let random2 = Math.floor(Maths2*6) + 1

document.querySelector(".one").setAttribute("src",`dice${random1}.png`)
document.querySelector(".two").setAttribute("src",`dice${random2}.png`)

if(random1>random2){
    document.querySelector("h1").textContent="🚩 Player 1 Wins!"
}
else if(random1<random2){
    document.querySelector("h1").textContent="Player 2 Wins! 🚩"
}
else{
    document.querySelector("h1").textContent="It is a DRAW!"
}
})



