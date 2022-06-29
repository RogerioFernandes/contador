
let adicionar = document.getElementsByClassName("adicionar");
let subtrair = document.getElementsByClassName("subtrair");
let numeroAtual = document.getElementById("numeroAtual");

subtrair[0].onclick = function()
{
    numeroAtual.textContent--;
}

adicionar[0].onclick = function()
{
    numeroAtual.textContent++;
}