
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
        imgEl.setAttribute('src' , medicineInNeed[i].source)

        // create div Contant
        let divContant =document.createElement('div');
        divContant.setAttribute('class','content')

        //create h2 Element & fell it with Name 
        let h2Content = document.createElement('h2');
        h2Content.textContent = medicineInNeed[i].name;


        let pContent = document.createElement('p');
        pContent.textContent = medicineInNeed[i].info;

        //creat Button Element 
        let buttonEl=document.createElement('button');
        buttonEl.setAttribute('type','button');

        buttonEl.setAttribute('id', `${i}`);
        buttonEl.textContent="donate for it ";
        buttonEl.addEventListener('click',addToDonate);
       
        //fell imgBox Div with imgEl
        divImgBox.appendChild(imgEl);
        
        //fell content 
        divContant.appendChild(h2Content);
        divContant.appendChild(pContent);

        
        //push div ImgBox & div Contant inside divCard
        divCard.appendChild(divImgBox);
        divCard.appendChild(divContant);
        divCard.appendChild(buttonEl);

        if(i%2==0){
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
let donateD = prompt("to donate by money enter 1  or 2 for medicine");
     donateD=parseInt(donateD);
   if (donateD ===1){
       let aumont =prompt("enter the amount of money");
         alert('thank you for your donate');
   }
   else if (donateD ===2 ) {
    let medicineND =prompt("enter the name of medicine ");
        alert('thank you for your donate'); 
   }else {
       alert('enter 1 or 2');
   }
    console.log("donated");
}

getData();
// runder();


let myForm = document.getElementById('myForm')
let donarName ,medicineName , checkBox , imgSource , amount = 0;
let newArr = [];
// let medicineNames = [];
// let checkBoxs = [];
// let imgSources = [];
// let amounts = [];
function openForm() {
    document.getElementById("myForm").style.display = "block";
    let submitBtn = document.getElementById('submit')
    
    myForm.addEventListener('submit',function newLocal(event){
        event.preventDefault();
        console.log(event);
        donarName = event.target.userName.value;
        medicineName = event.target.medicineName.value;
        checkBox = event.target.hideName.checked;
        imgSource = event.target.source.value;
        amount = parseInt(event.target.amount.value);
        new NewDon (donarName, medicineName, checkBox, imgSource, amount)
        let newData = JSON.stringify(newArr);
        localStorage.setItem('new donation',newData)
        swal("Thank You!", "Maybe a human will survive cause of your donation", 'success');
        newRender()
        myForm.removeEventListener('submit',newLocal)
        closeForm()
    })
    
  }
  function setLocalFun (){

  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
}
// myForm.addEventListener('pointerleave', closeForm)
function newRender() {
   let cont1 = document.getElementById('donarDi');
   let gd = localStorage.getItem('new donation')
   let list2 = JSON.parse(gd);
   for(let i = 0; i < list2.length ; i++){
   let cont3 = document.createElement('div')
   cont1.appendChild(cont3)
   cont3.id = 'donarDiv'
   let myTitle = document.createElement('h3')
   cont3.appendChild(myTitle);
   if (list2[i].checkBox){
       list2[i].name = 'A person';
   }
   myTitle.textContent = `${list2[i].name} donated ${list2[i].amount} piece(s) of (${list2[i].medicine})`
   let imgNew = document.createElement('img')
   cont3.appendChild(imgNew)
   imgNew.id = 'donarImg'
   imgNew.src = list2[i].imgSource;
}

}
function NewDon (donarName, medicineName, checkBox, imgSource, amount){
    this.name = donarName;
    this.medicine = medicineName;
    this.checkBox = checkBox;
    this.imgSource = imgSource;
    this.amount = amount;
    newArr.push(this)
   }
   newRender()