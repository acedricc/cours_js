const article = document.querySelector("article");
console.log('article', article);

article.innerHTML = "<h2>Les Fonctions</h2>";

function maFonction(parametre1, parametre2, parametre3) {
    console.log("Execution du code interne de maFonction()...");
    console.log('parametre1: ', parametre1);
    console.log('parametre2: ', parametre2);
    console.log('parametre3: ', parametre3);

    article.innerHTML += "<p><ul>";
    article.innerHTML += "<li>" + parametre1 + "</li>";
    article.innerHTML += "<li>" + parametre2 + "</li>";
    article.innerHTML += "<li>" + parametre3 + "</li>";
}

// pour declancher l'execution de maFonction() il faut l'appeler
maFonction("Chien",null, 153);

// Ecrire une fonction qui affiche dans l'élément article 
// le carré d'un nombre fournit en paramètre
// l'affichage doit être écrit en concaténation moderne

const carre = (nombre) => {
    console.log(nombre);
    article.innerHTML += `<p>${nombre*nombre}</p>`;
}

carre(9);

var animal = "orang-outang";

const maFonction2 = function() {
    let animal = "Pingouin";
    let autreAnimal = "Escargot";
    console.log(animal);
    return autreAnimal;
}
let resultatMaFonction2 = maFonction2();
console.log(animal);
console.log(resultatMaFonction2);


// ecrire une fonction a laquelle on passera un texte (string)
// et qui se chargera d'afficher ce texte dans l'element article
//  dans une balise <p><i> ..... </i></p>
//  cette fonction doit retourner la longueur du texte fourni.
// appelez cette fonction : 'ecrire'

function ecrire(texte) {
    article.innerHTML += `<p><i>${texte}</i></p>`;
    return texte.length
}

let taillTexte = ecrire('Bonsoir!! Passez une super soirée!!');
ecrire('le texte fait ' + taillTexte + ' caractères...');

// écrire une fonction nommée 'ecrire2()' qui doit
// verifier que le texte passé en paramètre fait moins de 50 caractères.
// Si le texte fait moins de 50 caractère, le fonctionnement doit être 
// identique à la fonction ecrire().  Sinon, elle doit afficher un 
// avertissement et retourner la valeur 0.

function ecrire2(texte) {
    if(texte.length <= 50) {
        let taille = ecrire(texte);
        return taille;
    } else {
        article.innerHTML += `<p><i>Texte Trop Long (max 50 caractères)!</i></p>`;
        return 0;
    }
}

var tailleChaine  = ecrire2("Hello, je fait moins de 50!!");
console.log('tailleChaine :', tailleChaine);
 //function automatiques
//  (function autoFonction(e){
//     console.log(e)
//  })("parametre de autoFonction");

//  ((e) => {
//      console.log("parametre de fonction AUTO et fleche : ",e);
     
//  }
function salutation (name){
if(name){
    alert(' Bonjour '+name);
}

}
// salutation ('Cedric');

function processUsserInput(callback){
    let nom = prompt('Fonction  processUsserInput:  Entrez votre nom')
    typeof callback === 'function' && callback(nom)
    
}
processUsserInput(salutation);
//tres souvent les callbacks sont definis directement dans l'appel 
// de la fonction englobante:

processUsserInput((name)=>{
if(name){
    alert('Salut a toi ' + name +'!' )
}
});
function processUserInput2(callback){
let nom = prompt('Fonction processUserInput2 : Entrez votre nom.')
let index = 5;
typeof callback === 'function'&& callback(nom, index)
}

processUserInput2((n,i) => {
    console.log(n)
    console.log(i)
    alert('salut ' + n + 'l\index fourni est ' + i )
})
 function name ( ){

}