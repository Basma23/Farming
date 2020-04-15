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
