/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var mostraPopup = function() {
    document.querySelector(".sfondo").style.display = "block";
};

var nascondiPopup = function (){
    document.querySelector(".sfondo").style.display = "none";
};

document.querySelector(".sfondo .pOk").onclick = nascondiPopup;


/*
 * querySelectorAll ha LENGHT
 * ha il metodo forEach (gli si deve passare una funzione anonima
 * che riceve due parametri (il singolo oggetto ed un contatore)
 * 
 * Quindi programma l'evento click di tutti gli oggetti di classe .Show
 * selezionati con querySelectorAll
 */
document.querySelectorAll(".pShow").forEach(function (elm, i) {
    elm.onclick = mostraPopup;
});

