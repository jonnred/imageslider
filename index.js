window.onload = ()=>{
    var a = 1;
    var b = b+1;
    const prevbtn = document.querySelector("#prevbutton");
    const nextbtn = document.querySelector("#nextbutton");
    prevbtn.addEventListener("click" , ()=>{
        var mynodelist = document.querySelectorAll(".picture");
        mynodelist[a].style.zIndex = b;
        a--;
        console.log(a);
        if(a == 0){
        mynodelist[a].style.zIndex = b;
            a++;
            return;
        }
    });
    nextbtn.addEventListener("click" , ()=>{
        var mynodelist = document.querySelectorAll(".picture");
        mynodelist[a].style.zIndex = "1";
        console.log(a);
        a++;  
        if(a == mynodelist.length){
            a--;
            return;
        }
    });

}