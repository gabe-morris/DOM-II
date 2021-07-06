const imgPop = document.querySelector('img')
const buttonHover = document.querySelector('button')
const conHome = document.querySelector('.container home')

buttonHover.mouseover = function(event){
    switch(event.target){
        case buttonHover:
            buttonHover.style.background = green;
            break;
    }
}
buttonHover.addEventListener('mouseover')