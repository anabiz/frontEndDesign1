function myfun(){
    //alert("uuu")
    var x = document.querySelector(".mylinks");
    var y = document.querySelectorAll(".ac");
    ///alert(y.length)
    console.log(y);
    if (x.style.display == "none") {
        x.style.display = "block";
        for (i = 0; i < y.length; i++) {
            y[i].style.display =  "block";
          }
       
    } else {
        x.style.display = "none";
        //y.style.display = "none"
        for (i = 0; i < y.length; i++) {
            y[i].style.display =  "none";
          }
       
        
    }
      

}