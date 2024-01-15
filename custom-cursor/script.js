var main = document.querySelector("#main");
var cursor = document.querySelector("#cursor");

main.addEventListener("mousemove", function(mouseEvent){
    //console.log(mouseEvent); //prints all details of mouse event

    cursor.style.left = mouseEvent.x + "px"; //simple move cursor with mouse event
    cursor.style.top = mouseEvent.y + "px"; //simple move cursor with mouse event
});