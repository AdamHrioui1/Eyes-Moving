let eye = document.querySelectorAll("#eye");
let eye_container = document.querySelector("#eye_container");

document.addEventListener("mousemove", e => {
    eye.forEach(Element => {
    Element.style.top = (eye_container.clientHeight / innerHeight * e.clientY) * 0.8  + "px";
    Element.style.left = ((eye_container.clientWidth - 50) / innerWidth * e.clientX) * 0.8 + "px";
    }) 
});