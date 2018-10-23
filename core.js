(function (){
      let table = document.createElement('table'),
                  DATA = {},
                  Mathy ={};

    
    for(let i= 0;i< 30 ; i++){
        let row = table.insertRow(-1);
        for(let j= 0;j< 30 ; j++){
          let cell = row.insertCell(-1);
          let letter = String.fromCharCode("A".charCodeAt(0) + j -1);
          cell.innerHTML = i && j ? '<input type="text" id='+letter + i+'> ': i || letter;
        }
      
    }

    document.getElementsByTagName('body')[0].appendChild(table);

    const performOpertion= (id)=>{
      for(let item in Mathy){
            if(Mathy[item]){
              let formula = (Mathy[item]).toUpperCase();
              console.log(...DATA)
              with(DATA){
                  
                  document.getElementById(item).value = eval(formula);
               }
               DATA[item] =  Number(document.getElementById(item).value);
            }
      }
    }

    const addListeners=()=>{
       document.getElementsByTagName("table")[0].addEventListener('focusout' ,function(event){
            let target = event.target;
            DATA[target.id] = Number(target.value);
            if(target.value.substring(0,1) == "="){
              Mathy[target.id] =  target.value.substring(1);
            }
            performOpertion(target.id);
       });
    }
    addListeners();
 }());