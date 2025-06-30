let input="";
let heading = document.querySelector("h1")
let para = document.querySelector("p")

for( let i =0; i<document.querySelectorAll(".key").length; i++){
   let keyno = document.querySelectorAll(".key")[i]
   keyno.addEventListener("click",function(){
        let keyvalue = keyno.textContent
        calculator(keyvalue);
   })
}

document.addEventListener("keydown",function(event){
    let reqkey = event.key
    if(reqkey=="Enter"){
        reqkey="="
    }else if(reqkey=="Backspace"){
        reqkey="X"
    }else if(reqkey==" "){
        reqkey="AC"
    }
    calculator(reqkey);
})

function calculator(key){
    if(key=="AC"){
        input="";  
        heading.textContent="0"
        para.textContent="0"
    }else if((key.charCodeAt(0)>47 && key.charCodeAt(0)<58)){
        input=input+key;
        heading.textContent = input
        var s = eval(input)
        para.textContent = s
    }else if(key.charCodeAt(0)==46){
        if(input.at(-1)=="."){
            input=input.slice(0,-1);
        }
        input=input+key;
        heading.textContent = input
    }else if(key=="X"){
        input=input.slice(0,-1);
        heading.textContent = input
        if(!(["/","*","-","+"].includes(input.at(-1)))){
            para.textContent = input
        }
    }else if(key=="/"||key=="*"||key=="-"||key=="+"){
        if(input.at(-1)=="/"||input.at(-1)=="*"||input.at(-1)=="-"||input.at(-1)=="+"){
            input=input.slice(0,-1);
        }
        input=input+key;
        heading.textContent = input
    }else{
        inputnew=eval(input);
        heading.textContent = inputnew
    }
    try{
        let result =eval(input)
    }catch(error){
        para.textContent = "Error Input"
    }
}
