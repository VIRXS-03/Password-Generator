const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1EL= document.getElementById ("password1-el")
let pass2EL= document.getElementById ("password2-el")
function generatepassword(){
    pass1EL.textContent = ""
    pass2EL.textContent = ""
    for(i=0;i<15;i++){
        pass1EL.textContent += characters[Math.floor(Math.random()*characters.length)]
    }
       for(v=0;v<15;v++){
        pass2EL.textContent += characters[Math.floor(Math.random()*characters.length)]
    }

}



