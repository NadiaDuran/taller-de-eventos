const miDiv = document.getElementById('miDiv');

miDiv.addEventListener('click', function(event) {
    alert("Hola! soy el div");
    event.stopPropagation();
});