var displayarea = document.getElementById('displayarea');
var button = document.querySelectorAll('.btn');
let i = 0;
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function () {
        displayarea.value += button[i].value;
    })
    button[i].addEventListener('keydown', function (event) {
        if (event.keyCode === 13) {
            event.preventDefault();
            displayarea.value = eval(displayarea.value);
        }
    })
}

var eraseBtn = document.getElementById('eraseBtn');
eraseBtn.addEventListener('click', function () {
    displayarea.value = '';
})
var evaluteBtn = document.getElementById('equal');
evaluteBtn.addEventListener('click', function Calculate() {
    displayarea.value = eval(displayarea.value);
})
displayarea.addEventListener('keydown',function(event){
    if(event.keyCode===13){
        event.preventDefault();
        displayarea.value=eval(displayarea.value);
    }
})
var eraseBtn = document.getElementById('eraseBtn');
eraseBtn.addEventListener('click', function () {
    displayarea.value = '';
})
var negateBtn = button[1];
negateBtn.addEventListener('click', function () {
    displayarea.value = parseInt(displayarea.value) * (-1);
})