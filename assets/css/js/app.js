let t = ["element1", "element2", "element3", 3, false];

document.write(t);

let films = [
    "Harry Potter",
    "Le salaire de la peur", 
    "Brice de Nice",
    "le seigneur des anneaux", 
    "hannibal"
];
document.write("<br>" + films[1]);

document.write(`<br>longueur du tableau: ${films.length}`);



// OPERATIONS COURANTES SUR LES TABLEAUX

// Créer jun tableau
let fruits = ['Apple', 'Banana'];
let legumes = new Array('citrouille', 'courgette');

console.log(fruits);
console.log(legumes);

// boucler sur un tableau
fruits.forEach((element, index) => {
    console.log(index, element);
});

// ajouter un element à la fin du tableau
let nouvelleTailleDutableau = fruits.push('Orange');
console.log('nouvelleTailleDutableau', nouvelleTailleDutableau);

// supprimer le dernier element d'un tableau
let dernierElementSupprime = fruits.pop();
console.log('dernierElementSupprime', dernierElementSupprime);

//supprimer le premier élément du tableau
let PremierElementSupprime = fruits.shift(); // supprime Apple
console.log('PremierElementSupprime ', PremierElementSupprime);

// Rajouter au debut du tableau
let  newLength = fruits.unshift('Strawberry');
console.log('newLength :', newLength);

// trouver l'index d'un element dans le tableau
fruits.push('mango');
let pos = fruits.indexOf('Banana');
console.log('index de Banana  (pos): ', pos);

// trouver unevaleur dans le tableau
let found = fruits.find(el=> el = 'Banana');
console.log('found ', found);




// supprimer un element par son index:
console.log(fruits);
let remoivedItem = fruits.splice(pos);
console.log(fruits);

let vegetables = ['Cabbage', 'Turnip', 'Radish', 'Carrot'];
console.log(vegetables);
// ["Cabbage", "Turnip", "Radish", "Carrot"]
pos = 1, n = 2;
let removedItems = vegetables.splice(pos, n);

console.log('vegetables ', vegetables);
console.log('removedItems ', removedItems);

// recuperer un sous ensemble d'un tableau
let filmsPreferes = films.slice(1, 3);
console.log('filmsPreferes', filmsPreferes);

console.log('dernier Film de la liste: ', films[films.length-1]);
console.log(films["01"]);

fruits = ["banane", "pomme", "pêche"];

console.log(fruits.length);

fruits[5] = "mangue";

console.log(fruits);
console.log(fruits.length);

fruits.length = 1;
console.log(fruits);


// objetg litteral:

let  artiste = {
    nom: "Aretha Franklin",
    genre: "Musique",
    style: "Soul",
}

console.log (artiste.nom + " est un.e artiste de " + artiste.genre + " spécialisé.e dans le.la " + artiste.style);

let stevie = {nom : "Stevie Wonder",genre : "Musique",style : "Soul"};

let pablo = {nom : "Pablo Picasso",genre : "Peinture",style : "Contemporain"};

let john = {nom : "John Carpenter",genre : "Cinéma",style : "Horreur"};

let artistes = [];
artistes.push(stevie, pablo, john, artiste);
for(artiste of artistes){
    console.log (artiste.nom + " est un.e artiste de " + artiste.genre + " spécialisé.e dans le.la " + artiste.style);
}

// Tableaux associatif

var assocArray = {
    "un": 1,
    "tartampion": "Hola",
    "trois": true,
}

// accès aux valeurs de propriété uniquement en utilisant
// la notation par crochets
console.log(assocArray["un"]);


var o = new Object();
o["un"] = 1;
o["tartampion"] = "Hola";
o["trois"] = true;

console.log(o);
console.log(o.length)

Object.size = function(tableau)
{
    var size = 0;
    for (var key in tableau)
    {
        if (tableau.hasOwnProperty(key)) size++;
    }
    return size;

};

var arr = { "un" : 1, "deux" : 2, "trois": 3 };
var sizeOfArr = Object.size(arr);
console.log(sizeOfArr);

var autreMoyenDeTrouverLaTaille = Object.keys(arr).length;
console.log(autreMoyenDeTrouverLaTaille);

const arr_like = {0: 'I', 1: 'am', 2: 'array-like', length: 3};

function checkArgs1() {
    console.log('arguments ', arguments);
    console.log('arguments.length ', arguments.length);// logs 2.
    console.log([...arguments]);

    const args = Array.prototype.slice.call(arguments);

    console.log("args : ", args);

}
checkArgs1(1, 45);






// LES FONCTIONS
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

// fonctions automatiques:
(function autoFonction(e){
    console.log(e);
})("paramètre de autoFonction");

((e) => {
    console.log("paramètre de fonction AUTO et FLECHEE : ", e);
})("paramètre");

// Fonction de rappel:  Les CallBacks

// ecrivez une fonction nommée salutation qui prend un parametre
// 'name' et qui affiche une alert ('Bonjour [name]') SI name est non
// vide.

function salutation(name){
    if(name) {
        alert('Bonjour ' + name);
    }
}

// ecrivez une fonction nommée processUserInput
// qui permet de récuperer le nom d'un utilisateur
// et qui ensuite déclenche la fonction salutation.

function processUserInput(callback) {
    let nom = prompt('Fonction processUserInput: Entrez votre nom.');
    typeof callback === 'function' && callback(nom);
}

processUserInput(salutation);

// très souvent les callbacks sont définies directement dans  l'appel
// de la fonction englobante:

processUserInput((name) => {
   if(name){
       alert('Salut à toi ' + name + '!');
   } 
});
// les paramètres d'une callback sont EXCLUSIVEMENT definies par la
// fonction englobante.

function processUserInput2(idx,callback) {
    let nom = prompt('Fonction processUserInput2: Entrez votre nom.');
    let index = idx;
    typeof callback === 'function' && callback(nom, index);
}

processUserInput2((n,i) => {
    console.log(n);
    console.log(i);
    if(n){
        alert ('salut ' + n + ' l\'index fourni est ' + i);
    }
});

// const bouton = document.querySelector(".super-unique");
// // bouton.addEventListener('click', function(e){
//     e.preventDefault();
//     console.log(e);
// })


function executeTache1(callback) {
    window.setTimeout(()=>{
        console.log('fin de tache 1')
        let param =5;
        typeof callback === 'function' && callback(param);
    }, 4000);
}

function executeTache2(parametre) {
    console.log(parametre);
    console.log('fin Tache 2');
}

executeTache1((param)=>{
    executeTache2(param);
});


console.log(window.fullScreen);

window.onresize = () => {
    console.log('resizing...');
}
var docChildren = document.children;
console.log(docChildren);

var docNodes = document.childNodes;
console.log(docNodes)
var link = document.getElementsByName('link');
type = link[0] 




