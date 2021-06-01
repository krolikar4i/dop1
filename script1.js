document.querySelector('.b-5').addEventListener('click', ()=>{


//фио
 
    let inp = document.getElementsByClassName('im'),
    mas = [];
    for (let i = 0; i < inp.length; i++) {
      mas[i] = inp[i].value;
    }
    let fio = mas[0]+" "+mas[1]+" "+mas[2];
    console.log( mas[0]+" "+mas[1]+" "+mas[2]);
  
    /*let name1 = document.getElementById('name1').value;
    let name2 = document.getElementById('name2').value;
    let name3 = document.getElementById('name3').value;
    let fio = name1.value + ' ' + name2.value + ' ' + name3.value;
      console.log(name1 + ' ' + name2 + ' ' + name3);*/

//пол

  let radio = document.getElementsByName('r1');
    for (let i = 0; i < radio.length; i++) {
        if (radio[i].checked) { 
          var pol = radio[i].value;         
          //console.log(radio[i].value);          
        } 
      }
      let ratingPol 
      if (pol == "Мужской") {
        ratingPol = 1;
      }else if(pol =="Женский") {
        ratingPol = 0;
      }
      console.log(ratingPol);
      
  


//семейное положение
  let radio1 = document.getElementsByName('r2');  
      for (let i = 0; i < radio1.length; i++) {
          if (radio1[i].checked) {  
            var semya = radio1[i].value          
            //console.log(radio1[i].value);            
          } 
        } 
  let ratingSemya
  if (semya == "Женат(замужем)") {
    ratingSemya = 1;
  }else {
    ratingSemya = 2;
  }       
  console.log(ratingSemya);

//образование

let sel = document.getElementById('select').selectedIndex;;
let options = document.getElementById('select').options;
var obraz = options[sel].value;
let ratingObraz
  if (obraz == "Высшее") {
    ratingObraz = 2;
  } else {
    ratingObraz = 1;
  }
    
    console.log(ratingObraz);


//хобби

let options1 = document.getElementById('select1').selectedOptions;
let hobbi = ' ';
  for (let i = 0; i < options1.length; i++) {
    hobbi += options1[i].value + ' ';
    console.log(options1[i].value);
  //var hobbi = options1[i].value ;
  }
let ratingHobbi;
  if ( hobbi == "Компьютеры" ) {
  ratingHobbi = 3;
    }else {
  ratingHobbi = 0;
    }
console.log(ratingHobbi);





//комп
  let chbox = document.getElementById('ch1');
  let comp = chbox.value;
  let ratingComp
    if (chbox.checked) {
      ratingComp = 2;
      comp = 'Компьютер есть';
  }
    else {
      ratingComp = 0;
      comp = 'Нет';
  }
console.log(ratingComp);
//text

let text = document.getElementById("myTextarea").value;
   
   console.log(text);


// сумма

let total = ratingPol + ratingSemya + ratingObraz + ratingHobbi + ratingComp;

//таблица

let table = document.querySelector('#table');
let arr = [['ФИО', fio] , ['Пол', pol, ratingPol] , ['Семейное положение', semya, ratingSemya] , ['Образование' , obraz, ratingObraz] , ['Наличие компьютера', comp, ratingComp] , ['Хобби', hobbi, ratingHobbi  + '<br>' +  text + '<br>' + total]];

fillTable(table, arr);

function fillTable(table, arr) {
  for(let i = 0; i < arr.length; i++ ) {
    let tr = document.createElement('tr');


    for(let j = 0; j < arr[i].length; j++ ) {
      let td = document.createElement('td');
      td.innerHTML = arr[i][j];
        tr.appendChild(td);
    }
    table.appendChild(tr);

  } 
}


/*
row = 1;
let display = document.getElementById('display');
let newRow = display.insertRow(row);
let cell1 = newRow.incertCell(0);
let cell2 = newRow.incertCell(1);
let cell3 = newRow.incertCell(2);
*/

/*
let elem = document.querySelector('#tb');

  createTable(elem, 2, 3);

    function createTable(parent, cols, rows){

      let table = document.createElement('table');

      for(let i = 0; i < rows; i++){
        let tr = document.createElement('tr');

        for(let j = 0; i < cols; j++){
          let td = document.createElement('td');
          tr.appendChild(td);
        }
        table.appendChild(tr);
      }
      
    }
    */





      
})






