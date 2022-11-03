let pagina=document.querySelector('.container');
let btnLeft=document.querySelector('left');
let btnRight=document.querySelector('left');

// function createElement(text){
//     let card=document.createElement("div");
//     card.classList.add("card");
//     card.textContent=text;

//     btnLeft=document.createElement("button");
//     btnLeft.classList.add("left");
//     btnLeft.textContent="Left";
//     card.appendChild(btnLeft);

//     let btnRight=document.createElement("button");
//     btnRight.classList.add("right");
//     btnLeft.textContent="Right";
//     card.appendChild(btnRight);

//     return card;
// }

let cardList=document.querySelector('.container');

cardList.addEventListener("click",(e)=>{
    let ob=e.target;
    
    if(ob.classList.contains("left")){
        let card=ob.parentNode.parentNode; // primul prent este div.button si al doilea  parent cardului;
        let prev=card.previousElementSibling;

        if(card!==cardList.firstElementChild){
            cardList.insertBefore(card,prev); 
        }
    }else if(ob.classList.contains("right")){
        let card=ob.parentNode.parentNode;
        let urm =card.nextElementSibling;

        if(card!==cardList.lastElementChild){
            cardList.insertBefore(urm,card);
        }
    }


 
   
    //console.log(prev.value);

})