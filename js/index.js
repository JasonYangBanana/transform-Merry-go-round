const picClick = document.getElementById("plate");
const plate = document.getElementById("plate"),
    style = window.getComputedStyle(plate),
    transform = style.getPropertyValue("transform");
var currentDegree = 0;    
    
picClick.addEventListener("click", rotatePlate, false);
function rotatePlate() {
    currentDegree = (currentDegree + 40);
    transform = 'rotate(' + currentDegree + 'deg)';
    style.setProperty(transform, value, priority);
}

/* plate.style.webkitTransform = "rotate(-200deg)" */