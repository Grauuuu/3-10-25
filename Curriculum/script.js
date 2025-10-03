function bob() {
let nom = prompt ("Com vols dir-te?")
document.getElementById ("NomPrincipal").innerHTML = ""+nom;

}

function bob1() {

let foto = prompt("Que vols ser?");
document.getElementById("foto").src = foto 

}

function bob2(){

let body = document.getElementsByTagName("body")[0]
let foto = prompt("On vols viatjar?")
body.style = "background-image: url('"+foto+"'); background-size: cover;";

}

function bob3(){

    let body = document.getElementsByTagName("body")[0];
    body.style = "font-family: 'Noto Sans JP', sans-serif"
}

function bob4() {

document.getElementById("foto").stylee = "display: none"



}

