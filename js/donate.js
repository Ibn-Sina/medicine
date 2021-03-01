let medicineInNeed=[];
let container = document.getElementById('container');
let container2 = document.getElementById('container2');
//structure Div :-
//card
//imgBox {img }
//content{H2 , Button }
function runder(){
  for(let i =0 ; i<medicineInNeed.length; i++){

    // create div card
    let divCard=document.createElement('div');
    divCard.setAttribute('class', 'card');

    // create div ImgBox
    let divImgBox=document.createElement('div');
    divImgBox.setAttribute('class', 'imgBx');

    //creat img Element  & give it src
    let imgEl=document.createElement('img');
    imgEl.setAttribute('src' , medicineInNeed[i].source);

    // create div Contant
    let divContant =document.createElement('div');
    divContant.setAttribute('class','content');

    //create h2 Element & fell it with Name
    let h2Content = document.createElement('h2');
    h2Content.textContent = medicineInNeed[i].name;


    let pContent = document.createElement('p');
    pContent.textContent = medicineInNeed[i].info;

    let divbox =document.createElement('div');
    divbox.setAttribute('class','box');

    let aContent = document.createElement('a');
    aContent.setAttribute('href','#popup1');
    aContent.textContent='Donate Now';

    // <div class="box">
    // <a class="button" href="#popup1">Let me Pop up</a>
    // </div>
    divbox.appendChild(aContent);

    //creat Button Element
    let buttonEl=document.createElement('button');
    buttonEl.setAttribute('type','button');

    buttonEl.setAttribute('id', `${i}`);
    buttonEl.textContent='donate for it ';
    buttonEl.addEventListener('click',addToDonate);

    //fell imgBox Div with imgEl
    divImgBox.appendChild(imgEl);

    //fell content
    divContant.appendChild(h2Content);
    divContant.appendChild(pContent);


    //push div ImgBox & div Contant inside divCard
    divCard.appendChild(divImgBox);
    divCard.appendChild(divContant);
    divCard.appendChild(divbox);

    if(i%2===0){
      container.appendChild(divCard);
    }
    else{
      container2.appendChild(divCard);

    }
  }
}
function getData(){

  let gettingData = localStorage.getItem('Medicine');
  let list1 = JSON.parse(gettingData);



  if(list1){
    medicineInNeed = list1;
    runder();
  }

}
function addToDonate(event){
  let donateD = prompt('to donate by money enter 1  or 2 for medicine');
  donateD=parseInt(donateD);
  if (donateD ===1){
    let aumont =prompt('enter the amount of money');
    alert('thank you for your donate');
  }
  else if (donateD ===2 ) {
    let medicineND =prompt('enter the name of medicine ');
    alert('thank you for your donate');
  }else {
    alert('enter 1 or 2');
  }
  console.log('donated');
}

getData();
// runder();



