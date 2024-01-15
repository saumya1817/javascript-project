var elem = document.querySelectorAll(".elem");
// var elem1Img = document.querySelector("#elem1 img");

elem.forEach(function(element){

    var elem1Img = element.childNodes[3];

    element.addEventListener("mousemove", function(mouseevent){
        elem1Img.style.left = mouseevent.x+"px";
        // elem1Img.style.top = mouseevent.y+"px";
    })
    
    element.addEventListener("mouseenter", function(mouseevent){
        elem1Img.style.opacity = 1;
    })
    
    element.addEventListener("mouseleave", function(mouseevent){
        elem1Img.style.opacity = 0;
    })

})


