let medicine =[];
let container = document.getElementById('container');

function Medicine(name , cost  , source ,info){
    this.name = name;
    this.cost = cost;
    this.source = source;
    this.info=info;
    medicine.push(this);
    savedData();
}


//need it 

//give id using for loop 
function Button(){
    let name = document.getElementById("NamId");//
    let cost = document.getElementById("costId");//
    let source =document.getElementById("imgId");
    new Medicine(name , cost ,source);
}

//structure Div :-
//card 
//imgBox {img }
//content{H2 , Button }
function runder(){
        // create div card
        let divCard=document.createElement('div');
        divCard.setAttribute('class', 'card');
        
        // create div ImgBox
        let divImgBox=document.createElement('div');
        divImgBox.setAttribute('class', 'imgBx');

        //creat img Element  & give it src 
        let imgEl=document.createElement('img');
        imgEl.setAttribute('src' , medicine[0].source)

        // create div Contant
        let divContant =document.createElement('div');
        divContant.setAttribute('class','content')

        //create h2 Element & fell it with Name 
        let h2Content = document.createElement('h2');
        h2Content.textContent = medicine[0].name;

        //creat Button Element 
        let buttonEl=document.createElement('button');
        buttonEl.setAttribute('type','button');
        buttonEl.textContent="i need it";

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

function savedData(){

    let data = JSON.stringify(medicine);
    localStorage.setItem('Medicine', data);
    
  }
new Medicine("hello" , "50" ,"images/154273009_273170960857738_8019544971280039140_n.jpg" , " 0000000000000000000");

runder();

