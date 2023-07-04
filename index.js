const input=document.getElementById("numberofwords");
const container=document.querySelector(".container");

const generateWord=(n)=>{
    let text="";
const letter="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

for(let i=0;i<n;i++){
    const random = (Math.random()*(letter.length-1)).toFixed(0);
    text=text+letter[random];
}

return text;
};



let numofWords;
const generatePara = ()=>{
   numofWords = Number(input.value);
   

   const para=document.createElement("p");

    let data = "";
    for(let i=0;i<numofWords;i++){
        data=data+ generateWord((Math.random()*15).toFixed(0));
        data = data+" "
    }


    para.innerText=data;

   para.setAttribute("class","paras");

   container.append(para);
};
