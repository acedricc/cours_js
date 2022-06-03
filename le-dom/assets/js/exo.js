

function ready(callback){ 
    // in case the document is already rendered 
    if (document.readyState!='loading') callback(); 
    // modern browsers 
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback); 
    // IE <= 8 
    else document.attachEvent('onreadystatechange', function(){ if (document.readyState=='complete') callback(); 
}); 
} ready(function(){ 
    // const link = document.querySelector('a');
    const link = document.querySelector('.ma-super-classe');
    console.log(link);
    link.textContent = "MDN Home Page";
    link.href = "https://developer.mozilla.org";

    const pElement = document.getElementById('monId');
    console.log(pElement);

    // on récupère tous les éléments <li> dans un nodeList
    const listeLi = document.querySelectorAll('li');
    console.log(listeLi); 

    // on cree un tableau vide
    const liSupA5 = [];

    // on boucle sur le nodeList et on 
    // converti chaque TextContent en Integer et on
    // le compare à 5. S'il est sup à 5 alors, on range
    // le li dans le tableau liSupA5
    for(let el of listeLi){
        if(parseInt(el.textContent) > 5) {
            liSupA5.push(el);
        }
    }
    console.log(liSupA5);

    // on récupère le dernier li de la liste:
    const lastLi = document.querySelector('li:last-of-type');
    console.log('lastLi', lastLi);

    // on cree une nouvelle section dans le document:
    // cette section contiendra un element P.
    // qui lui meme contiendra un textNode.
    const newSection = document.createElement('section');
    const newP = document.createElement('p');
    const txt = document.createTextNode('I love javascript!!');
    newP.appendChild(txt);
    newSection.appendChild(newP);
    // Avant d'inserer la nouvelle section dans le Body du document,
    // clonons la:
    const sectionClone = newSection.cloneNode(true);
    // true permet un clonage profond incluant tous les objet contenus dans la
    // section:
    console.log(sectionClone);
    // intégration au HTML des nouveaux éléments de notre DOM
    document.body.appendChild(newSection);
    document.body.appendChild(sectionClone);

    // vérifier la presence des deux sections dans la page,
    // puis supprimons le clone:
    sectionClone.remove();

    // ajout de html dans un élément:
    newSection.innerHTML += '<p>Such a great language!!</p>'

    // manipulation du style en ligne (En dernier recours uniquement)
    newSection.style.backgroundColor = '#ff0000';
    newSection.style.color = '#fff';
    newSection.style.padding = '15px';
    newSection.style.textAlign = 'center';
    newSection.style.fontSize = "28px";
    newSection.style.boxShadow = "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset";

    // utilisation de setAttribute()
    // supprimons le style en ligne:
    newSection.setAttribute('style', '');

    // affectation d'une classe avec setAttribute()
    newSection.setAttribute('class', 'red-banner');

    // affectation d'une classe avec classList.add() / classList.remove()
    // on cree une classe '.blue-border'
    newSection.classList.add('blue-border');

    // exercice:
    // creer deux div de 200px de coté, placées côte à côte.
    // lorsque la souris passe au dessus de l'une de ces div, elle
    // doit se mettre à clignoter de blanc à orange:

    // 1. creer les div avec des bordures oranges
    // 2. creer une classe orange-bkg colorant l'arriere plan en orange
    // 3. creer une classe white-bkg colorant l'arriere plan en blanc
    // 4. ecrire une fonction nommée changeBkg qui affecte la classe colorant l'arriere plan en orange
    // si l'arriere plan est blanc, et vice versa
    // creer un tableau global vide nommé timers destiné à recevoir les timers
    // 5. ecrire l'ecouteur d'evenement permettant de declencher le clignotement de la
    // div au moment ou la souris passe au dessus d'elle.
    // ecrirel'ecouteur d'evenement permettant de liberer le timer et resetter la div
    // avec l'arriere plan blanc lorsque la souris quitte la div.

    function changeBkg(el){
        console.log([...el.classList]);
        if([...el.classList].includes('orange-bkg')){
            el.classList.remove('orange-bkg')
        } else {
            el.classList.add('orange-bkg')
        }
    }

    var timers = [];

    const lights = document.querySelectorAll('.flashing-light');
    console.log(lights);
    console.log([...lights]);
    
    [...lights].forEach((el)=>{
      console.log(el)
        el.addEventListener('mouseenter', function(e){
            console.log(e);
            //console.log(this);
            let timer = window.setInterval(()=>{
                changeBkg(this);
            }, 100);
            timers.push(timer);
            //console.log(timers);
        });

        el.addEventListener('mouseleave', function(e){
            console.log(e);
            if([...this.classList].includes('orange-bkg')){
                this.classList.remove('orange-bkg');
            }
            timers.forEach((timer)=>{
                window.clearInterval(timer);
            })
            timers.pop();
        })
    })



    
});



