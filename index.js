
document.body.addEventListener("click",  function (e) {
    let x = e.clientX;
    let y = e.clientY;
    console.log(x, y);
    if (x%2===0 && y%2===0){
        document.body.style.backgroundColor = "red";
    }else if(x%2!==0 && y%2!==0){
        document.body.style.backgroundColor= "blue";
    }else if((x%2!==0  && y%2===0)||(x%2===0  && y%2!==0)){
        document.body.style.backgroundColor= "green";
    }else {
        console.log("Coś poszło nie tak")
    }

})


