let calculator = {

    answer : function(){

       let num1 = document.querySelector(".num1");
       let num2 = document.querySelector(".num2");
       let operation = document.querySelector(".operation");
       let ansBox = document.querySelector(".ans-box");
       let ans = document.createElement('div');
      
      if(num1.value.length == 0 || num2.value.length == 0){
        alert('enter a number');
      }else{
       if(operation.value == '+'){
        this.add(num1,num2,operation,ansBox,ans);
       }

       if(operation.value == '*'){
          this.multiply(num1,num2,operation,ansBox);
       }

       if(operation.value == '/'){
        this.division(num1,num2,operation,ansBox);
       }

       if(operation.value == '%'){
        this.modulo(num1,num2,operation,ansBox);
       }

       if(operation.value == '-'){
        this.subtract(num1,num2,operation,ansBox);
       }
    }
      
    },

     add: function(n1,n2,operation,ansBox,ans){
      
       ans.innerText = parseInt(n1.value) + parseInt(n2.value);

       ansBox.appendChild(ans);
       

    },
    
     multiply: function(n1,n2,operation,ansBox,ans){
        ans.innerText = parseInt(n1.value) * parseInt(n2.value);

        ansBox.appendChild(ans);
        
     },
    
     division: function(n1,n2,operation,ansBox,ans){
        ans.innerText = parseInt(n1.value) / parseInt(n2.value);
 
        ansBox.appendChild(ans);
     },

     modulo: function(n1,n2,operation,ansBox,ans){
        ans.innerText = parseInt(n1.value) % parseInt(n2.value);

        ansBox.appendChild(ans);
     },

     subtract: function(n1,n2,operation,ansBox,ans){
        ans.innerText = parseInt(n1.value) - parseInt(n2.value);
       
        ansBox.appendChild(ans);
     },

     clearWindow: function(ans,ansBox){
       ansBox.removeChild();
     }

}

let button = document.querySelector(".btn");
let clear = document.querySelector(".clear");

button.addEventListener('click', function(){
    calculator.answer();
})

clear.addEventListener('click', function(){
    calculator.clearWindow();
})



    