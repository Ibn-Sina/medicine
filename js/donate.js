let medicineInNeed2=[];
let container = document.getElementById('container');
let container2 = document.getElementById('container2');
let i=0;
//structure Div :-
//card
//imgBox {img }
//content{H2 , Button }

function MedicineInNeed(name , cost , source ,info){
  this.name = name;
  this.cost = cost;
  this.source = source;
  this.info=info;
  medicineInNeed2.push(this);
  runder();
}




function runder(){

  // create div card
  let divCard=document.createElement('div');
  divCard.setAttribute('class', 'card');

  // create div ImgBox
  let divImgBox=document.createElement('div');
  divImgBox.setAttribute('class', 'imgBx');

  //creat img Element  & give it src
  let imgEl=document.createElement('img');
  imgEl.setAttribute('src' , medicineInNeed2[i].source);

  // create div Contant
  let divContant =document.createElement('div');
  divContant.setAttribute('class','content');

  //create h2 Element & fell it with Name
  let h2Content = document.createElement('h2');
  h2Content.textContent = medicineInNeed2[i].name;


  let pContent = document.createElement('p');
  pContent.textContent = medicineInNeed2[i].info;

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
  i++;
}

function getData(){

  let gettingData = localStorage.getItem('Medicine');
  let list1 = JSON.parse(gettingData);



  if(list1){
    medicineInNeed2 = list1;

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
for (let l=0; l<medicineInNeed2.length;l++){

  let n =medicineInNeed2[l].name;
  let c =medicineInNeed2[l].cost;
  let s =medicineInNeed2[l].source;
  let i =medicineInNeed2[l].info;
  MedicineInNeed(n, c, s, i);

}


let myForm = document.getElementById('myForm');
let medicineName  , imgSource , amount = 0;
// let medicineNames = [];
// let checkBoxs = [];
// let imgSources = [];
// let amounts = [];



function openForm() {
  document.getElementById('myForm').style.display = 'block';
  let submitBtn = document.getElementById('submit');

  myForm.addEventListener('submit',function newLocal(event){
    event.preventDefault();
    console.log(event);
    medicineName = event.target.medicineName.value;
    imgSource = event.target.source.value;
    amount = parseInt(event.target.amount.value);


    new MedicineInNeed ( medicineName,amount, imgSource, 'info');
    // let newData = JSON.stringify(newArr);
    // localStorage.setItem('new donation',newData);
    swal('Thank You!', 'Maybe a human will survive cause of your donation', 'success');

    myForm.removeEventListener('submit',newLocal);
    closeForm();
  });

}

function closeForm() {
  document.getElementById('myForm').style.display = 'none';
}


// function newRender() {
//   let cont1 = document.getElementById('donarDi');
//   let gd = localStorage.getItem('new donation');
//   let list2 = JSON.parse(gd);
//   for(let i = 0; i < list2.length ; i++){
//     let cont3 = document.createElement('div');
//     cont1.appendChild(cont3);
//     cont3.id = 'donarDiv';
//     let myTitle = document.createElement('h3');
//     cont3.appendChild(myTitle);
//     if (list2[i].checkBox){
//       list2[i].name = 'A person';
//     }
//     myTitle.textContent = `${list2[i].name} donated ${list2[i].amount} piece(s) of (${list2[i].medicine})`;
//     let imgNew = document.createElement('img');
//     cont3.appendChild(imgNew);
//     imgNew.id = 'donarImg';
//     imgNew.src = list2[i].imgSource;
//   }


// function NewDon (donarName, medicineName, checkBox, imgSource, amount){
//   this.name = donarName;
//   this.medicine = medicineName;
//   this.checkBox = checkBox;
//   this.imgSource = imgSource;
//   this.amount = amount;
//   newArr.push(this);
// }
// newRender();
