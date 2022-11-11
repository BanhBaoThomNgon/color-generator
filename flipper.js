let color = ['CFF5E7', 'A0E4CB', '59C1BD', '0D4C92', 'F7A4A4', 'FEBE8C', 'FFFBC1', 'B6E2A1'];

function changeColor() {
    let randomNumber = Math.floor(Math.random() * color.length);
    let randomColor = color[randomNumber];
    document.querySelector('.flipper').style.backgroundColor = '#' + randomColor;
    document.querySelector('.color-name').innerHTML = 'Colour: #' + '<em>' + randomColor + '</em>';
    document.querySelector('em').style.color = '#' + randomColor;
}