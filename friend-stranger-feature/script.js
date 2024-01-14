var isStatus = document.querySelector("h5");
var addFriend = document.querySelector("#add");

addFriend.addEventListener("click", function(){
    isStatus.innerHTML = isStatus.innerHTML == "Stranger" ? "Friends" : "Stranger";

    if(isStatus.innerHTML == "Stranger") 
        {isStatus.style.color = "red";}
    else 
        {isStatus.style.color = "green";}

    addFriend.innerHTML = addFriend.innerHTML == "Add Friend" ? "Remove Friend" : "Add Friend";
});
