/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/***
 * Genera una tabella specificata nei parametri
 * @param {int} righe
 * @param {int} colonne
 * @param {string} id
 * @param {string} classe
 * @returns {String}
 */function generaTabHtml(righe, colonne, id, classe) {
    let ret = "<table ";
    
    if (id !== "") {
        ret += 'id="' + id + '" ';
    }
    if (classe !== "") {
        ret += 'class="' + classe + '" ';
    }
    ret += " >";
    for (let j = 0; j < righe; j++) {
        ret += "<tr>";
        for (let k = 0; k < colonne; k++) {
            ret += "<td></td>";
        }

    }

    ret += "</table>";
    return ret;
}

