//src & name & cost 
//create div with the same structure in donating HTML set a property for all generated div set flag for check if the Medicine was donated or not or convert visibility property from hidden to visiblemedicineInNeed=[];

//structure Div :-
//card 
//imgBox {img }
//content{H2 , Button }

let container = document.getElementById('container');
let medicineInNeed=[];

function runder(){
    for (let i =0 ; i<medicineInNeed.length ;i++){
        // create div card
        let divCard=document.createElement('div');
        divCard.setAttribute('class', 'card');
        
        // create div ImgBox
        let divImgBox=document.createElement('div');
        divImgBox.setAttribute('class', 'imgBx');

        //creat img Element  & give it src 
        let imgEl=document.createElement('img');
        imgEl.setAttribute(src , medicineInNeed[i].source)

        // create div Contant
        let divContant =document.createElement('div');
        divContant.setAttribute('class','content')

        //create h2 Element & fell it with Name 
        let h2Content = document.createElement('h2');
        h2Content.textContent =medicineInNeed[i].name;

        //creat Button Element 
        let buttonEl=document.createElement('button');
        buttonEl.setAttribute('type','button');
        buttonEl.textContent="Donate Now";

        //fell imgBox Div with imgEl
        divImgBox.appendChild(imgEl);
        
        //fell content 
        divContant.appendChild(h2Content);
        divContant.appendChild(buttonEl);
        
        
        //push div ImgBox & div Contant inside divCard
        divCard.appendChild(divImgBox);
        divCard.appendChild(divContant);
        container.appendChild(divCard);
    }


} 

function getData(){

    let gettingData = localStorage.getItem('Medicine');
    let list1 = JSON.parse(gettingData);



    if(list1){
        medicineInNeed = list1;
    //   myFunction();

    }else{
        medicineInNeed = [];
        }
    }

