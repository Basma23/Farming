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
         replay = confirm('Welcome to our websit, have enjoy :)');
       }
       var userName=prompt("what is your name");
         alert("Nice to see you "+userName);
      function requestOrder(){
         var order = prompt('What are you looking for? Are you looking for plants or seads');
         var item;
         if(order === 'plants'){
           item = 'Here you are, nice to see you in our website';
         }
         else if(order === 'seads'){
           item = 'Nice to see you in our website, have enjoy';   
         }
         else{
           item = 'Sorry for that, your order is not found';
         }
         return item;
       }
       document.write("<h1>"+requestOrder()+"</h1>");
