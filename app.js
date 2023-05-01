var content = document.getElementById("a")
var content1 = document.getElementById("b")
var content2 = document.getElementById("c")
var cross = document.querySelectorAll(".cross")
function foo (value){
    if(value == "a"){
       if(cross[0].innerHTML == "+"){
        cross[0].innerHTML = "-"
        cross[1].innerHTML = "+"
        cross[2].innerHTML = "+"
       }else{
        cross[0].innerHTML = "+"
       }
        content.classList.toggle("full")
        content1.classList.remove("full")
        content2.classList.remove("full")

    }else if(value == "b"){
        if(cross[1].innerHTML == "+"){
            cross[1].innerHTML = "-"
            cross[0].innerHTML = "+"
            cross[2].innerHTML = "+"
        }else{
            cross[1].innerHTML = "+"
        }
        content.classList.remove("full")
        content1.classList.toggle("full")
        content2.classList.remove("full")
    }else{
        if(cross[2].innerHTML == "+"){
            cross[2].innerHTML = "-"
            cross[1].innerHTML = "+"
            cross[0].innerHTML = "+"
        }else{
            cross[2].innerHTML = "+"
        }
        content.classList.remove("full")
        content1.classList.remove("full")
        content2.classList.toggle("full")
    }
}




