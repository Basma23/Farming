'use strict'
      var massage;
      var replay;
      var massage = prompt('Can you tell us pleas What time is it right now?');
       if(massage >= 18){
         replay = confirm('Good evening!');
         }
       else if(massage >= 12){
         replay = confirm('Good afternoon!');  
       }
       else if(massage >= 0){
         replay = confirm('Good morning!');
       }
       else{
         replay = confirm('Welcome to our website, have enjoy :)');
       } 
       var userName=prompt("what is your name");
         alert("Nice to see you "+userName);
      function requestOrder(){
         var order = prompt('What are you looking for? Are you looking for plants or seads');
         var item = '';
         while(order !==  'plants' && order !== 'seads'){
           order = prompt('Please choose plants or seeds');
         }
         var nuberOfOrder = prompt('How many would you like to order?');
         for(var i=1; i<=nuberOfOrder; i++){
           if(order === 'plants'){
           item = item+'<main> Here you are, nice to see you in our website <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSqbqGfBnJrr3c22w4Ih-H8fE-E_9nJbgwBjUcFzoHX8XyyQE3M&usqp=CAU"></main>';
         }
         else if(order === 'seads'){
           item = item+'<main>Nice to see you in our website, have enjoy <img src="https://img3.exportersindia.com/product_images/bc-full/dir_133/3961379/sunflower-seeds-2321436.jpeg"></main>';   
         }
         else{
           item = 'Sorry for that, your order is not found';
         } 
         }
        
         return item;
       }
       document.write("<h1>"+requestOrder()+"</h1>");
       
