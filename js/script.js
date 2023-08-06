const table = document.querySelectorAll(".table__counter");

table.forEach((element) => {
    element.innerHTML = "0";

    const updCounter = () => {
        const target = +element.getAttribute("data-target");
        const upd = +element.innerText;

        if(upd < target ){
            element.innerText = upd + 1 ;
            setTimeout(updCounter,1)
        }else{
            element.innerText = target;
        }
    };
    updCounter()
}); 
