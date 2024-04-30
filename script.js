var plate = document.getElementById('plate');
var options = document.getElementsByClassName('color-option');

for (var i = 0; i < options.length; i++) {
    options[i].addEventListener('click', function() {
        var color = this.style.backgroundColor;
        document.body.style.backgroundColor = color;
        plate.style.backgroundColor = (color === 'black') ? 'white' : 'black';
    });
}