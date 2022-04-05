
    // function sume(p1, p2){
    //     var p1,p2;
    //     return p1 * p2;

    // }
    // document.getElementById("input-test").innerHTML = sume(4,5)

    // function getValues() {
    //     let number = document.getElementById('getNumber').value
    //     console.log(number)
    // }

    // function enterValues(){
    //     let onclick = document.getElementById('').value
    //     console.log(onclick)
    // }
//     var operator = '';
// function getValues(numb){
// document.getElementById('getNumber').value += numb;
// }

// function sum(){
//   var  getValues(numb) + clearScreen() + getValues(numb) = a
//   console.log(a)
// }



// function applyOperator(operation) {
//     let existing_value = document.getElementById('getNumber').value;
//     document.getElementById('getNumber').value = existing_value + operation;
//     // operator = operation
// }


// function reSult(){
//     // let result_Value = document.getElementById('getNumber')
//     document.getElementById('getnumber').value.existing_value + operation
// }



//    Complete Code

//  var num, op,a,b;
// function getValues(num){
//  document.getElementById('getNumber').value+=num;
// }
// function value_one(){
//     a= parseFloat(document.getElementById('getNumber').value) ;
    
//     document.getElementById('getNumber').value=" ";
// }

// function reSult(){
//     b=parseInt(document.getElementById('getNumber').value) ;
//     document.getElementById('getNumber').value = a/b;
// }
function clearScreen(){
    document.getElementById('getNumber').value="";
}


// var first_value,ssecond_value;

// function getValues(numb){
//     document.getElementById('getNumber').value += numb;
// }

// function applyOperator(){
//  first_value=parseInt(document.getElementById('getNumber').value);
//  document.getElementById('getNumber').value="";
// }

// function reSult(){
//    second_value =parseInt( document.getElementById('getNumber').value);
//     document.getElementById('getNumber').value= first_value + second_value;
// }


var first_value,second_value,operator;

function getValues(numb){
    document.getElementById('getNumber').value += numb;
}

function applyOperator(val){
    operator=val;
 first_value=parseFloat(document.getElementById('getNumber').value) ;
 document.getElementById('getNumber').value="";
}

function reSult(){
   second_value =parseFloat( document.getElementById('getNumber').value);

   if(operator == '-'){
    document.getElementById('getNumber').value= first_value - second_value;
   }
   else if(operator== '+'){
    document.getElementById('getNumber').value= first_value + second_value;

   }
   else if(operator== '*'){
    document.getElementById('getNumber').value= first_value * second_value;

   }
   else if(operator== '/'){
    document.getElementById('getNumber').value= first_value / second_value;

   }
   
}
