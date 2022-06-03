
function ready(callback){ 
    // in case the document is already rendered 
    if (document.readyState!='loading') callback(); 
    // modern browsers 
    else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback); 
    // IE <= 8 
    else document.attachEvent('onreadystatechange', function(){ if (document.readyState=='complete') callback(); 
}); 
}
ready(function(){ 
    
    // do something 
    const link = document.querySelector('.ma-super-classe')
    console.log(link)
    link.textContent = "MDN Home Page"
    link.href = "https://developer.mozilla.org";
       const pElement = document.getElementById('monId')
       console.log(pElement)   

    const listeLi = document.querySelectorAll('li');
    console.log(listeLi);
    const liSupA5 = []
    //ON BOUCLE SUR LE NODELIST ET ON CONVERTIT CHAQUE TEXTCONTENT EN INTEGER ET ON LE COMPARE A 5 SIL EST SUP A 5 ALORS ON RANGE LE LI DANS LE TABLEAU LISUPA5
    for(let el of listeLi){
        if(parseInt(el.textContent) > 5){
            liSupA5.push(el);
        }

    }
    console.log("le contenu des li qui sont sup a 5",liSupA5);
    const lastLi = document.querySelector('li:last-of-type');
    console.log(lastLi);

    //on cree une nouvelle section dans le document:
    //cette section contiendra un element P.
    //qui lui meme contiendra un textNode
    const newSection = document.createElement('section');
    const newP = document.createElement('p');
    const txt = document.createTextNode('I love javascript !!');
    newP.appendChild(txt)   
    newSection.appendChild(newP)
    //clonage de la nouvelle section:
    const sectionClone = newSection.cloneNode(true)
    //intégration au Html des nouveau élements de notre DOM
    document.body.appendChild(newSection)
    document.body.appendChild(sectionClone)
    
    //supression d'un élement du DOM / SYNCHRO du HTML
    sectionClone.remove();
//ajout de html un element
    newSection.innertHTML += '<p>Such a great language!!</p>';

    // manipulation du style.
newSection.style.backgroundColor = '#ff0000'
newSection.style.color = '#fff';
newSection.style.padding = '15px';
newSection.style.textAlign = 'center';
newSection.style.boxShadow =' rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;' ;
newSection.style.fontSize = '28px';

// utilisation de setAttribute ()
newSection.setAttribute('style','')

//affection d'une class CSS avec setAtribute

newSection.setAttribute('class','red-banner  '); // blue-border


// affectation d'une class avec classList.add() / classList.remove()
newSection.classList.add('blue-border')
console.log(newSection.classList)
const  changeBkg = (el) => {
    if([...el.classList].includes('orange-bg')){
    el.classList.remove('orange-bg');
    }else{
      el.classList.add('orange-bg')
    }
    }
    const elmt = document.querySelector('.orange');
    changeBkg(elmt);


});
    


