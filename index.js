
var btns= document.querySelectorAll("Button");
var sb="";
var sk="";
var signOff=false;
charD="";
var operation = 0;

// document.addEventListener('keyup', (event) => 
//       {

//       sk= event.key;
//       screenV= document.querySelector("input").value
//       if(isNaN(sk)&&(document.querySelector("input").focus))
//                 {
//                   screenV= document.querySelector("input").value;
//                   screenV=screenV.slice(0,-1);
//                 }
//       document.querySelector("input").value=screenV
//       })
      
       
    btns.forEach((item) =>
     {
    
       item.addEventListener("click",(target_Att)=>
            {
            
            screenV= document.querySelector("input").value  ;
            sb=target_Att.target.innerHTML ;
            charD=screenV.slice(-1);
              switch(sb)
                {
                  case "+"  : if(signOff==true||charD==""){sb="";}else{signOff=true;operation=2;};break;
                  case "-"  : if(signOff==true||charD==""){sb="";}else{signOff=true;operation=2;};break;
                  case "/"  : if(signOff==true||charD==""){sb="";}else{signOff=true;operation=2;};break;
                  case "*"  : if(signOff==true||charD==""){sb="";}else{signOff=true;operation=2;};break;
                  case "del": screenV="";sb="";signOff=false; operation=0;break;
                  case "="  : if(operation==3&&charD!="+"&&charD!="-"&&charD!="/"&&charD!="*")
                                {screenV=eval(screenV);signOff=false;operation=0}; sb="";break;
                  case "C"  : if(charD==="+"||charD==="-"||charD==="/"||charD==="*")
                                {signOff=false;operation=1;}; 
                              screenV=screenV.slice(0,-1);sb="";break;
                  default   : if(operation==0){screenV="";operation++};if(operation==2){operation++}
                }
              screenV=screenV+sb;
              document.querySelector("input").value=screenV
              sb="";
              
              
           })
              
     })
  
