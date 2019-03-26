/* Exercice1 */

function nombre(n){
    let reg   = new RegExp("^[+-]?(([0-9]+\\.?[0-9]*)|([0-9]*\\.?[0-9]+))$",""); //let maReg = new RegExp("^(\\+|-)?[0-9]+(\\.|,)?[0-9]*$","");
    return reg.test(n);
}

function entierPositif(n){
    let res = nombre(n);
    if(res)
        return (Math.round(n)==n && n>=0 ? true : false);
    else
        alert("veuillez entrer une valeur valide");
}

function pair(x){
        return (entierPositif(x) && x%2===0 ? true : false);
}

function arrondi(x,n){
x = x*1;
n = n*1;
x = x.toFixed(n);
return x;
}

function nbOccurences(c,ch){
    return ch.split(c).length -1;
}

function substitue(c1,c2,c){
}

/* Exercice2 */

function exercice2(){
    let nombre = prompt('veullez entrer une valeur');
    let res    = pair(nombre);
    if(res){
    let maFenetre = window.open("","MsgWindow", "width=400,height=200");
    maFenetre.document.write("<p>la valeur x = " + nombre + " est paire</p>");
    }else{
    let maFenetre = window.open("","MsgWindow", "width=400,height=200");
    maFenetre.document.write("<p>la valeur x = " + nombre + " n'est pas paire</p>");
    }
}

/* Exercice3 */

function exercice3(){
    let nb1 = prompt('veuillez entrer une valeur n°1','5');
    let nb2 = prompt('veuillez entrer une valeur n°2','5');
    let nb3 = prompt('veuillez entrer une valeur n°3','5');
    console.log((nb1*1)+(nb2*1)+(nb3*1));
    console.log(((nb1*1)+(nb2*1)+(nb3*1))/3);
    let tab = [];
    // regarder vieux exos d'algo
    tab.push(nb1*1,nb2*1,nb3*1);
    console.log(Math.max(...tab) + " " + Math.min(...tab));
    tab.sort;
    console.log(tab);
}

/* Exercice4 */

function exercice4(){
    let nb = prompt('veullez entrer une valeur', '5')*1;
    let fact=1;
    if(nombre(nb)){
	    for(i=1; i<=nb ;i++){
		    fact=fact*i;
	    }
        return(fact);
    }else{
        return('il y a une erreur');
    }
}

/* Exercice5 */

/* Exercice6 */

function exercice6(){
    let mdp = prompt('veuillez entrer le mot de passe');
    if(mdp === "motdepasse"){
        let maFenetre = window.open("","window","width=400,height=200");
        maFenetre.alert(exercice4());
    }else{
        window.location.reload();
    }
}

/* Exercice7 */

function exercice7(){
    let i;
    for(i=1; i<51; i++){
        console.log(i*i);
    }
}

/* Exercice8 */

function exercice8(){
    let i;
    let N1 = prompt('veuillez entrer un 1er nombre', '4')*1;
    let N2 = prompt('veuillez entrer un 2e nombre', '8')*1;

    if(N1>N2 || N1==N2){
        console.log('error');
    }else{
        document.write("<table><thead><th>Nombres pair</th></thead><tbody>")
        for(i=N1; i<N2+1; i++){
            if(i%2===0){
                document.write("<tr><td>" + i) + "</td></tr>";
                //console.log(i + 'est pair');
                
            }
        }
        document.write("</tbody></table>");
        document.close();
    }
    /* il vallait mieux tester si le nombre etait pair au début (en ajoutant 1 si besoin), 
    puis incrémenter de 2 */
}

function exercice9(){
    let n = prompt('',5);
    let ch = "";
    console.log(n.length);
    if (nombre(n) && n.length == 1 && n>1 && n<10){
        let i;
        ch+='<table style="margin:auto;"><th><td>la table de multiplication de ' + n + '</td></th>';
        for(i=0; i<11; i++){
            ch+="<tr><td>" + n + "*" + i + " = " + n*i + "</td></tr>";
        }
        ch+="</table>"
        document.getElementById("res").innerHTML=ch;
    }else{
        console.log('error');
    }
    document.close();
}

function exercice10(){
    
    if (arguments.length==0) {
        throw "veuillez ajouter un paramètre.";
      }else {
          let i;
          for(i=0;i<arguments.length;i++){
            if(isNaN(arguments[i])){
                throw "veuillez entrer des paramètres de type number";
            }
          }
      }
        console.log(Math.max(...arguments));
}

function exercice11(){
    let prenom       = prompt('veuillez entrer un prénom', 'romain');
    let nom          = prompt('veuillez entrer un nom', 'moranges');
    let anniversaire = prompt('veuillez entrer une date de naissance au format JJ/MM/AAAA', '02/04/1998');
    let newWindow = window.open("", "Mafenetre","width=400px,height=200px");
    newWindow.document.write("<p>" + prenom + "</p>" + "<p>" + nom + "</p>" + "<p>" + anniversaire + "</p>");
}