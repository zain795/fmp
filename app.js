const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    })
}
if(close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    })
}
var RemoveCartItemButtons = document.getElementsByClassName('butn');
console.log(RemoveCartItemButtons)
for(var j = 0; j < RemoveCartItemButtons.length; j++){
    var button = RemoveCartItemButtons[j]
    button.addEventListener('click',function(event){
        var buttonClicked = event.target.parentElement.remove()
        // buttonClicked
    })
}