/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var coloriSfondo = ["red", "green", "yellow", "blue", "white"];

document.querySelectorAll(".CambiaColore").forEach(function(elm,k){
    elm.onclick = function(){
        let indice=parseInt(Math.random()*coloriSfondo.length+1);
        this.style.backgroundColor = coloriSfondo[indice % coloriSfondo.length];
    };
});



