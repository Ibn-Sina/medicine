let medicine =[];
let medicineInNeed=[];
let btnarr=[];
let container = document.getElementById('container');
let container2 = document.getElementById('container2');


function Medicine(name , cost  , source ,info){
    this.name = name;
    this.cost = cost;
    this.source = source;
    this.info=info;
    medicine.push(this);
    savedData();
}



//structure Div :-
//card 
//imgBox {img }
//content{H2 , Button }
function runder(){
    for(let i =0 ; i<medicine.length; i++){
        // create div card
        let divCard=document.createElement('div');
        divCard.setAttribute('class', 'card');
        
        // create div ImgBox
        let divImgBox=document.createElement('div');
        divImgBox.setAttribute('class', 'imgBx');

        //creat img Element  & give it src 
        let imgEl=document.createElement('img');
        imgEl.setAttribute('src' , medicine[i].source)

        // create div Contant
        let divContant =document.createElement('div');
        divContant.setAttribute('class','content')

        //create h2 Element & fell it with Name 
        let h2Content = document.createElement('h2');
        h2Content.textContent = medicine[i].name;

        let pContent = document.createElement('p');
        pContent.textContent = medicine[i].info;


        //creat Button Element 
        let buttonEl=document.createElement('button');
        buttonEl.setAttribute('type','button');

        buttonEl.setAttribute('id', `${i}`);
        buttonEl.textContent="i need it";
        console.log(buttonEl.id);
        buttonEl.addEventListener('click',addToNeed);
        // buttonEl.setAttribute("onClick","addToNeed( `ID${i}`)");
        btnarr.push(`ID${i}`);
        console.log(btnarr);
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
function savedData(){

    let data = JSON.stringify(medicineInNeed);
    localStorage.setItem('Medicine', data);
    
  }
  new Medicine("1" , "50" ,"images/154273009_273170960857738_8019544971280039140_n.jpg" , " 0000000000000000000");
  new Medicine("2" , "50" ,"images/154273009_273170960857738_8019544971280039140_n.jpg" , " 0000000000000000000");
  new Medicine("3" , "50" ,"images/154273009_273170960857738_8019544971280039140_n.jpg" , " 0000000000000000000");
  new Medicine("4" , "50" ,"images/154273009_273170960857738_8019544971280039140_n.jpg" , " 0000000000000000000");
  new Medicine("4" , "50" ,"images/154273009_273170960857738_8019544971280039140_n.jpg" , " 0000000000000000000");
  new Medicine("5" , "50" ,"images/154273009_273170960857738_8019544971280039140_n.jpg" , " 0000000000000000000");
  new Medicine("6" , "100" ,"images/154273009_273170960857738_8019544971280039140_n.jpg" , " 0000000000000000000");

  function addToNeed(event){
    event.preventDefault();
    // console.log(event.target.id);
    // console.log(medicineInNeed);
    // console.log(event.target.parentElement);
    let a = event.target.id;
    medicineInNeed.push(medicine[a]);
    


savedData();

}
runder();

