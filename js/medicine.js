let medicine =[];
let medicineInNeed=[];
let btnarr=[];
let container = document.getElementById('container');
let container2 = document.getElementById('container2');
let formOne = document.getElementById('form1');


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


        //create Button Element 
        let buttonEl=document.createElement('button');
        buttonEl.setAttribute('type','button');

        buttonEl.setAttribute('id', `${i}`);
        buttonEl.textContent=`i need it ${medicine[i].cost}`;
        console.log(buttonEl.id);
        buttonEl.addEventListener('click',addToNeed);
       
        btnarr.push(`${i}`);

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
  new Medicine("prexal 10" , "36.41 jd" ,"images/153122281_779031189366261_1816601248261593695_n.jpg" , " The scientific name : Olanzapine used in the treatment of:- Schizophrenia. - Bipolar disorder. - Treatment of mixed mania or acute manic states associated with bipolar or schizophrenia. - Treatment of intractable cases of depression. - Treating depression associated with bipolar disease");
  new Medicine("Aripal 15","77.63 jd","images/154165555_338485370823778_1229647415121863017_n.jpg","The scientific name:Aripiprazole used in the treatment of:  - epression with other drugs.  - Treat psychosis  - It improves focus and thinking positively - It helps in alleviating nervousness in the individual")
  new Medicine("lipitor 40mg","34.35 Jd", "images/154273009_273170960857738_8019544971280039140_n.jpg"," The scientific name : Atorvastatin used in the treatment of: - Hyperlipidemia.- Hereditary hypercholesterolemia - Reducing heart disease rates such as myocardial infarction.");
  new Medicine("Galvus Met 50mg/1000mg","35.31 Jd","images/154401050_1080904545756269_1254733988003094155_n.jpg"," - It helps control blood sugar level in patients with type 2 diabetes, who have an inadequate response after using the maximum dose of metformin  as a monotherapy for diabetes.");
  new Medicine("Ezura 20mg","25.52 Jd","images/154754742_362845631355511_3252725993284464484_n.jpg","The scientific name : escitalopram  used in the treatment of:  Major Depressive Disorder Generalized anxiety disorder");
  new Medicine("seretide diskus 250mg","34.85 Jd","images/154765932_276609747174382_2251363653987733843_n.jpg","The scientific name : Salmeterol, fluticasone propionate  used in the treatment of:  - Cases of asthma patients - Patients with chronic obstructive pulmonary disease and emphysema");
  new Medicine("Roacctane","20.85 Jd","images/154805916_175429554129795_8749588293451826991_n.jpg","The scientific name : Isotretinoin used in the treatment of: It is used to treat severe,stubborn nodular acne that does not respond to conventional treatment  A remedy for dandruff Reducing the high level of keratin,which makes the skin thick and tough");
  new Medicine(" nexium 10mg","37.46 Jd","images/154837288_269593111204408_5561089716416991358_n.jpg","The scientific name : Esomeprazole used in the treatment of:  For the treatment of many stomach problems such as heartburn and stomach ulcers");
  new Medicine(" seroquel XR 50mg","21.63 Jd","images/154953917_220936949736537_530386541434295913_n.jpg","The scientific name : Quetiapine  used in the treatment of: -Schizophrenia  -Two-way disorder -Mixed mania -Acute manic states associated with two-way disorder or schizophrenia -Depression -Depression associated with bipolar disease ")
  new Medicine("Muxava 400mg","17 Jd","images/154963458_1052453095243691_4527253554698180647_n.jpg","The scientific name : Moxifloxacin used in the treatment of: Acute bacterial sinusitis Chronic bronchitis Community Acquired Pneumonia Uncomplicated skin infections Complex intra-abdominal infections ");
  new Medicine("januvia 100mg","33.62 Jd","images/155056008_854316428744806_2516997780064909688_n.jpg","The scientific name : Sitagliptin phosphate monohydrate used in the treatment of: It is used with diet and exercise to  control blood sugar in type 2 diabetics.It is not used for type 1 diabetes patients and for treating hyperacidity of the blood with increased ketosis.");
  new Medicine(" Antagra 250mg","21.08 Jd","images/155061320_822452931668496_1962498670354612768_n.jpg","The scientific name : Levetiracetam It is used to prevent epileptic seizures or seizures in the brain by inhibiting certain processes that help in the formation of epileptic seizures, and helps to control them.");
  new Medicine("Zovirax 800mg","30.14 Jd","images/155076816_421620742395338_5530776960820513922_n.jpg"," Scientific name: Acyclovir It is used as a treatment for herpes infection. - The drug is given as an ointment, which helps relieve the severity of the outbreak of ulcers. - This medication is given to people  with compromised immune systems who have a herpes virus infection.");
  new Medicine("Onlefit 120mg","25.93 Jd","images/155089263_254504022958964_6405614336567169049_n.jpg","The scientific name : Orlistat used to -treat obesity, including weight loss and weight control, and is used in conjunction with a low-calorie,  low-fat diet. - It reduces the risk of regaining weight after losing it before.It is used for patients with obesity with an initial body mass index 30 kg / m2 or 27 kg / m2 in the presence of other risk factors (such as diabetes, hyperlipidemia, high blood pressure) .");
  new Medicine("sandimmun neoral 100mg","166 Jd","images/download (1).jpg","The scientific name : Cyclosporine used to -prevent rejection of transplanted organs in cases of liver, heart and kidney  transplantation. -Cyclosporine is classified as an immunosuppressant as it reduces the body's immunity to a transplanted organ, thus accepting the organ without .");
  new Medicine("Forxiga 10mg","34.48 Jd","images/155189718_272896877555583_204947457729308298_n.jpg","The scientific name : Dapagliflozin It is used to  -control blood sugar levels in patients with type 2 diabetes.-Pharmacological forms of Forsega . -Coated tablets 10 mg, 5 mg .");
  new Medicine("Intense chronic obstructive pulmonary oxygen","900 Jd","images/154362219_845885482626166_7675673876928082082_n.jpg","-A 5-liter household oxygen generating device . -Italian origin .");
  new Medicine("Medical chair for special needs","2000 Jd","images/154328692_791594548121080_2161618573554802077_n.jpg","Medical chair for special needs  Helping patients with disabilities or those with special needs (mobility impairment) to move and move easily and easily.");
  function addToNeed(event){
    event.preventDefault();
    let a = event.target.id;
    medicineInNeed.push(medicine[a]);
    

savedData();
PatientForm();

}
runder();

function PatientForm(){
let pName = document.createElement('label');
formOne.appendChild(pName);
pName.textContent= 'your name';
let patientName =document.createElement ('input');
patientName.setAttribute('type','text');
patientName.setAttribute('id','namepatient')
formOne.appendChild(patientName);
let pTime =document.createElement('label');
formOne.appendChild(pTime);
pTime.textContent='When do you want this medication ?';
let pTimeOne =document.createElement('input');
formOne.appendChild(pTimeOne);
pTimeOne.setAttribute('type','text');
pTimeOne.setAttribute('id','timepatient');
let pLocation = document.createElement('label')
formOne.appendChild(pLocation);
pLocation.textContent='Location';
let arrayLoaction= ["Amman" , "Irbid","Karak" ,"Mafraq", "Ma'an" , "Tafilah", "Madaba", "Jerash", "Ajloun" , "Aqaba" , "Zarqa", "Balqa" ];
let select = document.createElement("select");
formOne.appendChild(select);

for(let i=0;i<arrayLoaction.length;i++){
    let option = document.createElement("option");
    select.appendChild(option);
    option.value =arrayLoaction[i];
    option.textContent= `${arrayLoaction[i]}`;
    option.setAttribute('id','optionOne');
}

let img= document.createElement('label');
formOne.appendChild(img);
img.textContent='upload your leaflet';
let uploadImg = document.createElement('input');
formOne.appendChild(uploadImg);
uploadImg.setAttribute('type','file');
uploadImg.setAttribute('id','imageleaflet');

let label = document.createElement('label');
formOne.appendChild(label);
label.textContent='is this medicine for you?';
let radio = document.createElement('input');
formOne.appendChild(radio);

radio.setAttribute('type','radio');
radio.setAttribute('name','options');
radio.setAttribute('id','radioOne');
let yesOption =document.createElement('label');
formOne.appendChild(yesOption);
yesOption.textContent= 'Yes' ;
let noOption=document.createElement('input');
formOne.appendChild(noOption);
noOption.setAttribute('type','radio');
noOption.setAttribute('name','options');
noOption.setAttribute('id','radioTwo');
let labelTwo= document.createElement('label');
formOne.appendChild(labelTwo);
labelTwo.textContent='No';
let button =document.createElement('button');
formOne.appendChild(button);
button.textContent='Save Information';
button.setAttribute('id','submit')

button.addEventListener(' click',addToForm);



}


let arrayForm = [];
function Form(patientNam,time,medicineForYou ){
  this.patientNam = patientNam;
  this.time = time;
  this.location = location;
  this.medicineForYou = medicineForYou;
  this.arrayForm.push(this);
}

function addToForm(event){
   event.preventDefault();
   let idName = event.target.namepatient.value;
   let idTime = event.target.timepatient.value;
   let idLocation = event.target.optionOne.value;
   
  
   new Form (idName, idTime , idLocation  );
   savedForm();
}

function savedForm(){

    let data = JSON.stringify(arrayForm);
    localStorage.setItem('forminformation', data);
    
  }
  


