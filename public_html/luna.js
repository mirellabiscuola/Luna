/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function generaTabHtml(righe, colonne, id, classe) {
    let ret = "<table ";
    if (id !== "") {
        ret += ' id="' + id + '" ';
    }
    if (classe !== "") {
        ret += ' class="' + classe + '" ';
    }
    
    ret += " >";

    for (let j = 0; j < righe; j++) {
        ret += " <tr> ";
        for (let k = 0; k < colonne; k++) {
            ret += " <td> </td>";
        }
        ret += " </tr> ";
    }

    ret += "</table>";
    return ret;

}


/**
 * questa funzione riceve un selettore css e 2 parametri dx dy 
 * il selettore sarà spostato di dx e dy
 * @param {type} selCss
 * @param {type} dx
 * @param {type} dy
 * @returns {undefined}
 */
function muovi(selCss, dx, dy) {
    let ogg = document.querySelector(selCss);
    let x = parseFloat(ogg.style.left);
    let y = parseFloat(ogg.style.top);
    let nx = x + dx;
    let ny = y + dy;
    ogg.style.left = nx + "px";
    ogg.style.top = ny + "px";
    console.log("muovi ", selCss, dx, dy, nx, ny);
}


/**
 * 
 * @param {type} selCss
 * @param {type} dx
 * @param {type} dy
 * @returns {undefined}
 */
function ridimensiona(selCss, dx, dy) {
    let ogg = document.querySelector(selCss);
    let w = parseFloat(ogg.style.width);
    let h = parseFloat(ogg.style.height);
    let nw = w + dx;
    let nh = h + dy;
    ogg.style.width = nw + "px";
    ogg.style.height = nh + "px";
    console.log("ridimensiona ", selCss, dx, dy, nw, nh);
}


function ruota(selCss, angolo) {
    let ogg = document.querySelector(selCss);
    if (!ogg.rotazione) {
        ogg.rotazione = 0;
    } 
    
    let rotazione = ogg.rotazione;
    let nuovaRot = rotazione + angolo;
    ogg.rotazione = nuovaRot;
    ogg.style.transform = "rotate(" + nuovaRot +"deg)";
}


selCssOggetto = "#palla1";

function byteRandom() {
    return Math.round(Math.random()*256);
}


document.querySelectorAll(".palla").forEach(function(elm, k) {
    elm.style.left = (Math.random() *1000) + "px";
    elm.style.top = (Math.random() *1000) + "px";
    elm.style.width = "50px";
    elm.style.height = "50px";
    elm.style.backgroundColor = "rgb(" + byteRandom() + "," + byteRandom() + "," + byteRandom() +")";
    elm.rotazione = 0;
    
    elm.onclick = function() {
        
        document.querySelector(selCssOggetto).classList.remove("pallaSelezionata");
        
        selCssOggetto = "#" + this.id;
        
        document.querySelector(selCssOggetto).classList.add("pallaSelezionata");
        console.log("click su oggetto .palla", selCssOggetto);
    };
    
});

 

document.querySelector("body").onkeydown = function (e) {
    document.querySelector("div").innerHTML = e.which;
    switch (e.which) {
        case 38:
            if (e.shiftKey) {
                ridimensiona(selCssOggetto, 0, -5);
            } else {
                muovi(selCssOggetto, 0, -5);
            }
            break;
        case 40:
            if (e.shiftKey) {
                ridimensiona(selCssOggetto, 0, 5);
            } else {
                muovi(selCssOggetto, 0, 5);
            }
            break;

        case 37:
            if (e.shiftKey) {
                ridimensiona(selCssOggetto, -5, 0);
            } 
            if (e.ctrlKey) {
                ruota(selCssOggetto,-5);
            }
            
            if (!e.shiftKey && !e.ctrlKey){
                muovi(selCssOggetto, -5, 0);
            }
            break;
        case 39:
            if (e.shiftKey) {
                ridimensiona(selCssOggetto, 5, 0);
            } 
            if (e.ctrlKey) {
                ruota(selCssOggetto, 5);
            }
            
            if (!e.shiftKey && !e.ctrlKey){
                muovi(selCssOggetto, 5, 0);
            }
            break;


        default:

            break;
    }
    console.log(e);
};

