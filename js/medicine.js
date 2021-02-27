let medicine =[];
function Medicine(name , cost  , source  ){
    this.name = name;
    this.cost = cost;
    this.source = source;
    medicine.push(this);
}

//need it 
function Button(){
    let name = document.getElementById("NamId");
    let cost = document.getElementById("costId");
    let source =document.getElementById("imgId");
    new Medicine(name , cost ,source);
}


function savedData(){

    let data = JSON.stringify(medicine);
    localStorage.setItem('Medicine', data);
    
  }


