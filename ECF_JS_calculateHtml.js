/* 
 * Fichier Javascript de l'ECF : ECF_JS_CalculateHtml.js
 * 
 */
let codeTouches = ['C','','','+','7','8','9','-','4','5','6','x','1','2','3','/','0','','','='];
let op1 = '', op2 = '', oper = '';
let resultat = '';
let boutons = document.querySelectorAll('button'); 
/**
 * fonction appelée sur un click d'un des boutons de la calculate
 * @param {Event} event
 */
function btnClick(event) {
    let touche = event.target.textContent; // récupération du contenu de la balise button cliquée
    if (touche === 'C'){
       btnClear() ;
    }  
    else
    {
        boutons[0].disabled = false;
        if (touche === '=') {
        resultat = effectuerCalcul (op1, op2, oper);
        op1 = resultat;
        op2 = '';
        oper = '';
        boutons[boutons.length-1].disabled = true;
         }
        else {
            if((touche === '+') || (touche === '-') || (touche === 'x') || (touche === '/')) {
                if (op1 != ''){
                oper = '' + touche + '';
                }
            }
            else {
                if ((resultat === '') || (oper !='')){
                    if (oper === ''){
                        op1 = op1 + touche;
                    }
                    else
                    {
                        op2 = op2 + touche;
                        boutons[boutons.length-1].disabled = false;
                        document.querySelector('input').value;
                    }  
                }
            }
    
    
        }
    }
// envoi des 3 variables dans l'input text du resultat*/
document.querySelector('input').value = op1 + oper + op2;
}
/**
 * fonction de remise à zéro des 4 variables globales
 * et effacement de l-input résultat
 */
function btnClear() {

   document.querySelector('input').value = "";
   resultat = "";
   op1 = "";
   op2 = "";
   oper = "";
   boutons[0].disabled = true;
   boutons[boutons.length-1].disabled = true;

}


function effectuerCalcul(operande1, operande2, operateur) {
    let resultat = 0;
    /* le calcul avec le if ://
    if (operateur == '+')  {
        resultat = Number(operande1) + Number(operande2);
    }
    else
    {
       if (operateur == '-')  {
       resultat = Number(operande1) - Number(operande2);
       }
    }
        if (operateur == 'x')  {
        resultat = Number(operande1) * Number(operande2);
        }

        if (operateur == '/') {
        resultat = Number(operande1) / Number(operande2);
        }
   return resultat;*/

    switch (operateur){
         case '+':
            resultat = Number(operande1) + Number(operande2);
             break;
         case '-':
             resultat = Number(operande1) - Number(operande2);
             break;
         case 'x':
            resultat = Number(operande1) * Number(operande2);
            break;
         case '/':
            resultat = Number(operande1) / Number(operande2);
    }
return resultat;
}

function init() {
    // la balise input pour l'affichage du résultat est dans une div de classe "resultat"
    // chaque balise button est dans une div de classe "bouton"
    let codeTouches = ['C','.','%','+','7','8','9','-','4','5','6','x','1','2','3','/','0','','','='];
    let op1 = '', op2 = '', oper = '';
    let resultat = '';
    // déclaration d'un tableau des codes de touche
    // création du html pour l'affichage et les boutons
    let divs = '<div class="resultat"><input type="text" readonly="readonly" value=""/></div>';
    for (let codeTouche of codeTouches) {
        if (codeTouche === '') {    // pas de bouton
            divs += '<div class="bouton"></div>';
        } else {
            divs += '<div class="bouton"><button>'+codeTouche+'</button></div>';   
        }
        console.log(divs);
    }
    // envoi de ce code html dans la div
    document.querySelector('div[class="grid-calculate calculate"]').innerHTML = divs;

    // récupération de tout les boutons pour leur assigner le gestionnaire d'évènement click
    boutons = document.querySelectorAll('button'); 
    for(let bouton of boutons){
        bouton.onclick = btnClick;
    }
    document.querySelector('input').value;
    boutons[0].disabled = true;
    boutons[boutons.length-1].disabled = true;
}   

document.addEventListener('DOMContentLoaded', function(){
    init();
});
