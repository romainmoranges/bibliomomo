function remise_a_zero() {
    document.getElementsByTagName('form')[0].extexta.value = "";
    document.getElementsByTagName('form')[0].extext.value = "";
}

function textalength() {
    //let longtexta = this.form.extexta.value.length;
    let longtexta = document.getElementsByTagName('form')[0].extexta.value.length;
    document.getElementsByTagName('form')[0].extext.value = longtexta;
}
/* Exercice 2 */
function verifier() {
    let i;
    let erreurs = [];
    let regMail = new RegExp("^(\\w|\\.|\\-)+@(\\w|\\.|\\-)+\\.[a-z]{2,4}$");

    if (regMail.test(document.getElementById("email").value) == false) {
        erreurs.push("il y a un problème dans la rédaction de l'email. \n")
    }
    for (i = 0; i < document.forms.exercice2.length; i++) {
        if (document.forms.exercice2[i].value == "") {
            erreurs.push("la ligne " + i + " est vide.\n");
        }
    }

    alert(erreurs);
}

/* Exercice 3 */
function convertirFranc(a) {
    let euro = (a * 1) / 6.56;
    document.getElementsByName("euro")[0].value = euro;
}

function convertirEuro(a) {
    let franc = (a * 1) * 6.56;
    document.getElementsByName("franc")[1].value = franc;
}

/* Exercice 4 */


/* Exercice 5 */

function reverseCh(a) {
    let tab = [],
        i;
    for (i = 0; i < a.length; i++) {
        let temp = a.substring(i, i + 1);
        tab.unshift(temp);
    }
    document.getElementsByName("reverse")[0].value = tab.join("");
}

/* Exercice 6 */

function verifierPalindrome() {
    let tab = [],
        i;
    let ch = document.getElementById("palindrome").value;
    let regSpace = new RegExp("\ ", "g");
    ch = ch.replace(regSpace, "");

    for (i = 0; i < ch.length; i++) {
        let temp = ch.substring(i, i + 1);
        tab.unshift(temp);
    }
    let reverseCh = tab.join("");

    if (ch == reverseCh) {
        alert("c'est un palindrome!");
    } else {
        alert("ce n'est pas un palindrome");
    }
}

/* Exercice 7 */

let R = ['001', '002', '003', '004', '005'],
    D = ['ordinateur', 'imprimante', 'clavier', 'souris', 'moniteur'],
    P = [1000, 80, 15, 20, 115],
    i;

let listeDeroulante = ``;

listeDeroulante+= `<select name= 'liste' onChange=exercice7(this.selectedIndex)> `;
    for (let j=0 ; j< R.length ; j++) {    
            listeDeroulante+=`<option value = '${R[j]}'> ${R[j]} </option>`;
    }
listeDeroulante +=`</select>`;

document.getElementById('exercice7').innerHTML= listeDeroulante;

function exercice7(index){
console.log(index);
let prix    = P[index],
    libelle = D[index];

    let popup;
    popup = window.open("","maPopup","width=400, height=200" );

    popup.document.getElementsByTagName('body')[0].innerHTML = "<p>" + libelle + "</p>";
    popup.document.getElementsByTagName('body')[0].innerHTML = "<p>" + prix + "€</p>";
}

/* Exercice 8 */

/* Exercice 9 */

function exercice9(valuePdt,valueMatiere){
    let lien = valuePdt.substring(0,1).toUpperCase() + "_" + valueMatiere.toUpperCase() + '.html';
    let maFenetre;
    maFenetre = window.open(lien ,"nouvelleFenetre","" );
}

/* Exercice 10 */



function exercice10(){
    function getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    let bingo = getRandomInt(100);
    console.log(bingo);

    for(let i = 0; i<10; i++){
        let nbJoueur = prompt("veuillez entrer un nombre de 0 a 100")*1;
        alert(10-i);
        if(nbJoueur == bingo){
            alert ('BINGO ! vous avez trouvé la bonne réponse en ' + i + ' coups');
            return true;
        }else{
            alert('Raté, ca sera la prochaine fois! il reste ' + (10-i) + ' coup(s)');
        }
    }
    alert("C'est terminé! vous avez épuisé toute vos chances"); 
}
