let inputbox = document.querySelector(".inputbox");
let button = document.querySelector(".btn");
let container = document.querySelector(".container");
button.addEventListener("click",function(){
    
    if(inputbox.value == "")
    {
        alert("Enter the task first");
    }
    else{
    let newdiv = document.createElement("div");
   
     newdiv.style.width = "350px"
    //  newdiv.style.height = "40px";
     newdiv.style.border = "2px solid black";
     newdiv.style.marginBottom= "10px";
     newdiv.style.display = "flex";
     newdiv.style.alignItems = "center";
     newdiv.style.justifyContent= "center"
     newdiv.style.backgroundColor = "white";

    let newinputbox = document.createElement("div");
     newinputbox.innerHTML = inputbox.value;
     newinputbox.style.width = "270px"
     newinputbox.style.fontSize = "20px";
     newinputbox.style.color= "black";
     newinputbox.style.fontWeight= "bold";

    
    let newele = document.createElement("button");
    newele.style.float= "right";
    newele.innerHTML = "delete";
    newele.style.width = "80px";
    newele.style.height= "50px";
    newele.style.fontSize = "20px";
    newele.style.marginRight = "0px";
    newele.style.backgroundColor= "red";
    newele.style.color= "white"
    
    container.appendChild(newdiv);
    newdiv.appendChild(newinputbox);
    newdiv.appendChild(newele);

    newele.addEventListener("click",function(){
        container.removeChild(newdiv);
    })
    inputbox.value = "";
    }
})
