var tl = gsap.timeline();

tl.
to("#fs",{
    height: 0,
    duration: 2,
    ease: Expo.easeInOut
})
.to("#elem",{
    height: "100%",
    duration: 2,
    delay: -2,
    ease: Expo.easeInOut
})
.to("#white",{
    height: "100%",
    duration: 2,
    delay: -1.4,
    ease: Expo.easeInOut
})

document.querySelectorAll(".reveal").forEach(function(elem){

    //Create two span elements
    let spanParent = document.createElement("span");
    let spanChild = document.createElement("span");

    //Add class to span elements
    spanParent.classList.add("parent");
    spanChild.classList.add("child");

    //Assign h1 text to span child
    spanChild.textContent = elem.textContent;

    //Establish parent child relation
    spanParent.appendChild(spanChild);
    elem.spanChild(spanParent);

    spanChild.style.display = "block";
    spanChild.style.overflow = "hidden";
    spanChild.style.top = "50%";
    spanChild.style.left = "50%";

    spanChild.style.backgroundColor = "red"

});